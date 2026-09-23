"use server";

import { randomUUID } from "node:crypto";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

import { supabaseAdmin } from "@/lib/supabase";
import {
  ADMIN_COOKIE,
  ADMIN_HOME_PATH,
  ADMIN_LOGIN_PATH,
  ADMIN_SESSION_MAX_AGE,
  adminToken,
  isAdminToken,
  requireAdmin,
} from "@/lib/auth";

export type ActionState = { error?: string; success?: string } | null;

const BUCKET = "gallery-images";
const MAX_IMAGE_BYTES = 10 * 1024 * 1024; // 10 MB

function publicImageUrl(path: string): string {
  const base = process.env.NEXT_PUBLIC_SUPABASE_URL;
  if (!base) throw new Error("NEXT_PUBLIC_SUPABASE_URL is not configured.");
  return `${base}/storage/v1/object/public/${BUCKET}/${path}`;
}

function imagePathFromUrl(imageUrl: string): string | null {
  const marker = `/storage/v1/object/public/${BUCKET}/`;
  const index = imageUrl.indexOf(marker);
  if (index === -1) return null;
  return imageUrl.slice(index + marker.length) || null;
}

function sanitizeFilename(name: string): string {
  const cleaned = name.replace(/[^a-zA-Z0-9._-]/g, "-").toLowerCase();
  return cleaned || "photo.jpg";
}

export async function loginAction(
  _prev: ActionState,
  formData: FormData,
): Promise<ActionState> {
  try {
    const key = String(formData.get("accessKey") ?? "").trim();
    if (!key || !isAdminToken(key)) {
      return { error: "Invalid admin access key. Please try again." };
    }

    const store = await cookies();
    store.set(ADMIN_COOKIE, adminToken(), {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: ADMIN_SESSION_MAX_AGE,
    });
  } catch (err: any) {
    // Captures unexpected execution errors and prints them to Netlify function logs
    console.error("Login action critical error:", err.message);
    return { error: `Server error during login: ${err.message}` };
  }

  // Moved outside try/catch so the cookie commits before redirecting
  redirect(ADMIN_HOME_PATH);
}

export async function logoutAction(): Promise<void> {
  const store = await cookies();
  store.set(ADMIN_COOKIE, "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 0,
  });
  redirect(ADMIN_LOGIN_PATH);
}

export async function createGalleryPhotoAction(
  _prev: ActionState,
  formData: FormData,
): Promise<ActionState> {
  await requireAdmin();

  const title = String(formData.get("title") ?? "").trim();
  const rawCategory = String(formData.get("category") ?? "").trim();
  const category = rawCategory || "Projects";
  const image = formData.get("image");

  if (!title) {
    return { error: "Title is required." };
  }
  if (!(image instanceof File) || image.size === 0) {
    return { error: "Please choose an image to upload." };
  }
  if (image.size > MAX_IMAGE_BYTES) {
    return { error: "Image must be 10 MB or smaller." };
  }

  const path = `${randomUUID()}-${sanitizeFilename(image.name)}`;
  const bytes = Buffer.from(await image.arrayBuffer());

  const { error: uploadError } = await supabaseAdmin.storage
    .from(BUCKET)
    .upload(path, bytes, {
      contentType: image.type || "image/jpeg",
      upsert: false,
    });

  if (uploadError) {
    return { error: `Upload failed: ${uploadError.message}` };
  }

  const { error: insertError } = await supabaseAdmin.from("gallery").insert({
    title,
    category,
    image_url: publicImageUrl(path),
  });

  if (insertError) {
    // Don't leave orphaned files behind.
    await supabaseAdmin.storage.from(BUCKET).remove([path]).catch(() => undefined);
    return { error: `Could not save the photo: ${insertError.message}` };
  }

  revalidatePath("/admin");
  revalidatePath("/");
  return { success: `"${title}" uploaded successfully.` };
}

export async function deleteGalleryPhotoAction(id: string): Promise<void> {
  await requireAdmin();

  const { data: row } = await supabaseAdmin
    .from("gallery")
    .select("image_url")
    .eq("id", id)
    .maybeSingle();

  if (row?.image_url) {
    const path = imagePathFromUrl(row.image_url);
    if (path) {
      await supabaseAdmin.storage.from(BUCKET).remove([path]);
    }
  }

  const { error } = await supabaseAdmin.from("gallery").delete().eq("id", id);
  if (error) {
    throw new Error(`Failed to delete photo: ${error.message}`);
  }

  revalidatePath("/admin");
  revalidatePath("/");
}