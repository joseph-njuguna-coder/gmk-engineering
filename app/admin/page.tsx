import { redirect } from "next/navigation";
import { Images } from "lucide-react";

import { supabaseAdmin } from "@/lib/supabase";
import { ADMIN_LOGIN_PATH, isAuthed } from "@/lib/auth";
import type { GalleryItem } from "@/lib/gallery";
import GalleryUploadForm from "@/components/admin/GalleryUploadForm";
import DeletePhotoButton from "@/components/admin/DeletePhotoButton";

export const dynamic = "force-dynamic";

export default async function AdminDashboardPage() {
  if (!(await isAuthed())) {
    redirect(ADMIN_LOGIN_PATH);
  }

  const { data } = await supabaseAdmin
    .from("gallery")
    .select("*")
    .order("created_at", { ascending: false });

  const photos = (data ?? []) as GalleryItem[];

  return (
    <div className="flex flex-col gap-6">
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
          Photo Management
        </p>
        <h1 className="mt-2 font-heading text-2xl font-bold text-base-content sm:text-3xl">
          Project Gallery
        </h1>
        <p className="mt-1 text-sm text-base-content/70">
          {photos.length} photo{photos.length === 1 ? "" : "s"} in the gallery
        </p>
      </div>

      <GalleryUploadForm />

      <div className="overflow-hidden rounded-2xl border border-base-300 bg-base-100 shadow-sm">
        <div className="flex items-center gap-3 border-b border-base-300 px-5 py-4">
          <Images className="h-5 w-5 text-primary" />
          <h2 className="font-heading text-lg font-bold text-base-content">Uploaded photos</h2>
        </div>

        {photos.length === 0 ? (
          <div className="flex flex-col items-center gap-4 px-6 py-16 text-center">
            <p className="flex h-12 w-12 items-center justify-center rounded-2xl bg-base-200 text-primary">
              <Images className="h-6 w-6" />
            </p>
            <p className="font-heading text-lg font-bold text-base-content">No photos yet</p>
            <p className="max-w-sm text-sm text-base-content/70">
              Upload your first project photo above and it will appear in the gallery.
            </p>
          </div>
        ) : (
          <ul className="grid grid-cols-1 gap-4 p-5 sm:grid-cols-2 lg:grid-cols-3">
            {photos.map((photo) => (
              <li
                key={photo.id}
                className="flex flex-col overflow-hidden rounded-2xl border border-base-300 bg-base-100 transition-shadow hover:shadow-md"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-base-200">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={photo.image_url}
                    alt={photo.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex items-center justify-between gap-3 p-4">
                  <div className="min-w-0">
                    <p className="truncate text-sm font-bold text-base-content">{photo.title}</p>
                    <p className="mt-0.5 text-xs text-base-content/70">
                      {photo.category ?? "Projects"}
                    </p>
                  </div>
                  <DeletePhotoButton id={photo.id} title={photo.title} />
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}