"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { AlertTriangle, Loader2, Trash2, X } from "lucide-react";

import { deleteGalleryPhotoAction } from "@/app/admin/actions";

export default function DeletePhotoButton({
  id,
  title,
}: {
  id: string;
  title: string;
}) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [pending, startTransition] = useTransition();

  function confirmDelete() {
    startTransition(async () => {
      try {
        await deleteGalleryPhotoAction(id);
      } finally {
        setOpen(false);
        router.refresh();
      }
    });
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`Delete ${title}`}
        className="inline-flex h-9 items-center gap-1.5 border border-red-500/40 bg-red-500/5 px-3 font-mono text-xs uppercase tracking-wider text-red-600 transition-colors hover:border-red-600 hover:bg-red-600 hover:text-white"
      >
        <Trash2 className="h-4 w-4" />
        Delete
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="delete-modal-title"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => !pending && setOpen(false)}
        >
          <div
            className="w-full max-w-md border border-[var(--gmk-orange)] bg-[var(--gmk-paper)] p-6 text-[var(--gmk-ink)] shadow-2xl sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <span className="flex h-12 w-12 items-center justify-center border border-red-500/30 bg-red-500/10 text-red-600">
                <AlertTriangle className="h-6 w-6" />
              </span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                disabled={pending}
                aria-label="Close"
                className="border border-[var(--gmk-line)] p-2 text-[var(--gmk-ink)]/70 transition-colors hover:border-[var(--gmk-orange)] hover:text-[var(--gmk-ink)] disabled:opacity-50"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <h2
              id="delete-modal-title"
              className="mt-5 font-heading text-xl font-bold uppercase tracking-tight text-[var(--gmk-ink)]"
            >
              Delete this photo?
            </h2>
            <p className="mt-2 font-mono text-xs leading-relaxed uppercase tracking-wider text-[var(--gmk-ink)]/70">
              You are about to permanently delete{" "}
              <span className="font-bold text-[var(--gmk-orange)]">{title}</span> from the
              gallery archive. Both the database record and the file in Supabase Storage
              will be removed. This cannot be undone.
            </p>

            <div className="mt-7 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={() => setOpen(false)}
                disabled={pending}
                className="min-h-11 border border-[var(--gmk-line)] bg-[var(--gmk-paper)] px-5 py-2.5 font-mono text-xs font-bold uppercase tracking-widest text-[var(--gmk-ink)] transition-colors hover:border-[var(--gmk-orange)] disabled:opacity-50"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={confirmDelete}
                disabled={pending}
                className="inline-flex min-h-11 items-center justify-center gap-2 border border-red-600 bg-red-600 px-5 py-2.5 font-mono text-xs font-bold uppercase tracking-[0.2em] text-white transition-colors hover:bg-red-700 disabled:opacity-60"
              >
                {pending ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <Trash2 className="h-4 w-4" />
                )}
                {pending ? "Deleting..." : "Delete photo"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}