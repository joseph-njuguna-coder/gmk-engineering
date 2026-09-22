"use client";

import { useActionState } from "react";
import Link from "next/link";
import { ArrowLeft, KeyRound, ShieldCheck } from "lucide-react";

import { loginAction, type ActionState } from "@/app/admin/actions";
import Logo from "@/components/Logo";

export default function AdminLoginPage() {
  const [state, formAction, pending] = useActionState<ActionState, FormData>(
    loginAction,
    null,
  );

  return (
    <main className="flex min-h-svh items-center justify-center bg-base-200 px-6 py-16">
      <div className="w-full max-w-md">
        <Link
          href="/"
          className="mb-6 inline-flex min-h-11 items-center justify-center gap-2 text-sm font-bold text-base-content"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to website
        </Link>

        <div className="rounded-xl border border-base-300 bg-base-100 p-8 shadow-lg sm:p-10">
          <div className="mb-8 flex flex-col items-center text-center">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <Logo />
            </span>
            <h1 className="mt-5 font-heading text-2xl font-bold text-base-content">
              GMK Admin Portal
            </h1>
            <p className="mt-2 text-sm text-base-content/70">
              Enter the admin access key to manage the project gallery.
            </p>
          </div>

          <form action={formAction} className="flex flex-col gap-5">
            <label htmlFor="accessKey" className="block">
              <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-base-content/70">
                Admin Access Key
              </span>
              <input
                id="accessKey"
                name="accessKey"
                type="password"
                required
                autoComplete="current-password"
                placeholder="••••••••••••"
                className="w-full rounded-xl border border-base-300 bg-base-100 px-4 py-3 text-sm text-base-content placeholder:text-base-content/70 outline-none transition-colors focus:border-primary"
              />
            </label>

            {state?.error && (
              <p
                role="alert"
                className="rounded-xl border border-error/30 bg-error/10 px-4 py-3 text-sm font-medium text-error"
              >
                {state.error}
              </p>
            )}

            <button
              type="submit"
              disabled={pending}
              className="flex min-h-11 items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-bold uppercase tracking-widest text-primary-content transition-colors hover:bg-primary/90 disabled:opacity-60"
            >
              <KeyRound className="h-4 w-4" />
              {pending ? "Verifying..." : "Sign in"}
            </button>
          </form>

          <p className="mt-6 flex items-center justify-center gap-1.5 text-center text-xs text-base-content/70">
            <ShieldCheck className="h-3.5 w-3.5 text-green-500" />
            Session protected by a secure HTTP-only cookie
          </p>
        </div>
      </div>
    </main>
  );
}