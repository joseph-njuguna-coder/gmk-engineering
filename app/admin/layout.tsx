import Link from "next/link";
import { ExternalLink, LogOut, LayoutDashboard, Images } from "lucide-react";

import { logoutAction } from "@/app/admin/actions";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-svh bg-base-200">
      <header className="border-b border-base-300 bg-base-100">
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
          <Link href="/admin" className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary font-heading text-sm font-extrabold text-primary-content">
              G
            </span>
            <span className="font-heading text-lg font-bold text-base-content">
              GMK <span className="text-primary">Admin</span>
            </span>
          </Link>

          <nav className="flex h-full items-center gap-1">
            <Link
              href="/admin"
              className="flex h-full items-center gap-1.5 px-3 text-sm font-semibold text-base-content transition-colors hover:text-primary"
            >
              <LayoutDashboard className="h-4 w-4" />
              <span className="hidden sm:inline">Dashboard</span>
            </Link>
            <a
              href="/#gallery"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-full items-center gap-1.5 px-3 text-sm font-semibold text-base-content/70 transition-colors hover:text-primary"
            >
              <Images className="h-4 w-4" />
              <span className="hidden sm:inline">Gallery</span>
            </a>
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-full items-center gap-1.5 px-3 text-sm font-semibold text-base-content/70 transition-colors hover:text-primary"
            >
              <ExternalLink className="h-4 w-4" />
              <span className="hidden sm:inline">View site</span>
            </a>
            <form action={logoutAction}>
              <button
                type="submit"
                className="flex h-9 items-center gap-2 rounded-xl border border-base-300 px-3 text-sm font-semibold text-error transition-colors hover:border-error hover:bg-error/10"
              >
                <LogOut className="h-4 w-4" />
                <span className="hidden sm:inline">Sign out</span>
              </button>
            </form>
          </nav>
        </div>
      </header>
      <main className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6">{children}</main>
    </div>
  );
}