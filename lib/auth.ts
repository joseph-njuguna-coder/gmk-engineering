import { createHash, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const ADMIN_COOKIE = "gmk_admin_session";

export const ADMIN_LOGIN_PATH = "/admin/login";
export const ADMIN_HOME_PATH = "/admin";

export const ADMIN_SESSION_MAX_AGE = 60 * 60 * 24 * 7; // 7 days

function requireSecret(): string {
  const secret = process.env.ADMIN_SECRET_KEY;
  if (!secret) {
    throw new Error("ADMIN_SECRET_KEY is not configured in .env.local");
  }
  return secret.trim();
}

/**
 * Returns the SHA-256 hash of the secret key to store safely in HTTP-only cookies.
 */
export function adminToken(): string {
  return createHash("sha256").update(requireSecret()).digest("hex");
}

/**
 * Verifies raw passcodes (from login form) OR hashed tokens (from cookies).
 */
export function isAdminToken(candidate: string): boolean {
  if (!candidate) return false;

  const rawSecret = requireSecret();
  const hashedToken = adminToken();

  // 1. Direct match with raw passcode from form
  if (candidate.trim() === rawSecret) {
    return true;
  }

  // 2. Timing-safe match for hashed session token from cookies
  const expected = Buffer.from(hashedToken, "utf8");
  const actual = Buffer.from(candidate, "utf8");

  if (expected.length !== actual.length) return false;
  return timingSafeEqual(expected, actual);
}

export async function isAuthed(): Promise<boolean> {
  const store = await cookies();
  const token = store.get(ADMIN_COOKIE)?.value;
  return token ? isAdminToken(token) : false;
}

/**
 * Re-checks authentication inside every Server Action.
 */
export async function requireAdmin(): Promise<void> {
  const authed = await isAuthed();
  if (!authed) {
    redirect(ADMIN_LOGIN_PATH);
  }
}