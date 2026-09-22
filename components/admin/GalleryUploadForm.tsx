"use client";

import { useActionState, useEffect, useRef } from "react";
import { Check, ImagePlus, Loader2, UploadCloud } from "lucide-react";

import { createGalleryPhotoAction, type ActionState } from "@/app/admin/actions";

const inputClass =
  "w-full border border-[var(--gmk-line)] bg-[var(--gmk-paper)] px-4 py-3 font-mono text-xs uppercase tracking-wider text-[var(--gmk-ink)] placeholder:text-[var(--gmk-ink)]/40 outline-none transition-colors focus:border-[var(--gmk-orange)]";
const labelClass =
  "mb-2 block font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--gmk-ink)]/60";

const categories = [
  "Projects",
  "Mill Installation",
  "Metal Fabrication",
  "Electrical Systems",
  "Generators & Compressors",
  "Steel Structures",
];

export default function GalleryUploadForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const previewRef = useRef<HTMLImageElement>(null);
  const [state, formAction, pending] = useActionState<ActionState, FormData>(
    createGalleryPhotoAction,
    null,
  );

  useEffect(() => {
    if (state?.success) {
      formRef.current?.reset();
      if (previewRef.current) {
        previewRef.current.hidden = true;
        previewRef.current.src = "";
      }
    }
  }, [state]);

  return (
    <div className="border border-[var(--gmk-line)] bg-[var(--gmk-paper)] p-6 shadow-xl sm:p-8 text-[var(--gmk-ink)]">
      <div className="mb-6 flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center border border-[var(--gmk-line)] bg-[var(--gmk-orange)]/10 text-[var(--gmk-orange)]">
          <ImagePlus className="h-5 w-5" />
        </span>
        <div>
          <h2 className="font-heading text-lg font-bold uppercase tracking-tight text-[var(--gmk-ink)]">
            Upload a new photo
          </h2>
          <p className="font-mono text-xs uppercase tracking-wider text-[var(--gmk-ink)]/60">
            Files route directly to the <code>gallery-images</code> storage bucket.
          </p>
        </div>
      </div>

      {state?.error && (
        <p
          role="alert"
          className="mb-5 border border-red-500/30 bg-red-500/10 px-4 py-3 font-mono text-xs uppercase tracking-wider text-red-600"
        >
          {state.error}
        </p>
      )}
      {state?.success && (
        <p className="mb-5 flex items-center gap-2 border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 font-mono text-xs uppercase tracking-wider text-emerald-700">
          <Check className="h-4 w-4" />
          {state.success}
        </p>
      )}

      <form ref={formRef} action={formAction} className="flex flex-col gap-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="title" className={labelClass}>
              Title
            </label>
            <input
              id="title"
              name="title"
              type="text"
              required
              placeholder="60 TPD Maize Mill, Nakuru"
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="category" className={labelClass}>
              Category
            </label>
            <select
              id="category"
              name="category"
              className={`${inputClass} appearance-none cursor-pointer`}
              defaultValue="Projects"
            >
              {categories.map((category) => (
                <option key={category} value={category} className="bg-[var(--gmk-paper)] text-[var(--gmk-ink)]">
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="image" className={labelClass}>
            Image File
          </label>
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <label
              htmlFor="image"
              className="flex min-h-28 w-full max-w-sm cursor-pointer flex-col items-center justify-center gap-2 border border-dashed border-[var(--gmk-line)] bg-[var(--gmk-ink)]/5 px-4 py-6 text-center transition-colors hover:border-[var(--gmk-orange)]"
            >
              <UploadCloud className="h-6 w-6 text-[var(--gmk-orange)]" />
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--gmk-ink)]">
                Choose an image
              </span>
              <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--gmk-ink)]/50">
                JPG, PNG or WebP · up to 10 MB
              </span>
              <input
                id="image"
                name="image"
                type="file"
                accept="image/*"
                required
                className="sr-only"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file && previewRef.current) {
                    previewRef.current.src = URL.createObjectURL(file);
                    previewRef.current.hidden = false;
                  }
                }}
              />
            </label>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              ref={previewRef}
              alt="Preview"
              hidden
              className="h-28 w-28 border border-[var(--gmk-line)] object-cover bg-[var(--gmk-ink)]/5"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={pending}
          className="inline-flex min-h-11 w-fit items-center justify-center gap-2 border border-[var(--gmk-orange)] bg-[var(--gmk-orange)] px-8 py-2.5 font-mono text-xs font-bold uppercase tracking-[0.2em] text-white transition-colors hover:bg-[var(--gmk-orange)]/90 disabled:opacity-60"
        >
          {pending ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <UploadCloud className="h-4 w-4" />
          )}
          {pending ? "Uploading..." : "Upload photo"}
        </button>
      </form>
    </div>
  );
}