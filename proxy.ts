import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// The proxy runs on the Edge runtime, so it cannot import node:crypto.
// This constant must stay in sync with lib/auth.ts.
const ADMIN_COOKIE = "gmk_admin_session";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isLoginPage = pathname === "/admin/login";
  const hasSession = request.cookies.has(ADMIN_COOKIE);

  if (!isLoginPage && !hasSession) {
    const loginUrl = new URL("/admin/login", request.url);
    loginUrl.searchParams.set("from", pathname);
    return NextResponse.redirect(loginUrl);
  }

  if (isLoginPage && hasSession) {
    return NextResponse.redirect(new URL("/admin", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};