"use client";

import { useLayoutEffect, useState, useSyncExternalStore } from "react";
import { Check, Sliders } from "lucide-react";

const THEMES = [
  { id: "light", label: "Editorial Paper" },
  { id: "dark", label: "Industrial Ink" },
];

function getAllowedTheme(value: string | null): string {
  return value && THEMES.some(t => t.id === value) ? value : "light";
}

function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme"],
  });
  return () => observer.disconnect();
}

function getSnapshot() {
  return getAllowedTheme(document.documentElement.getAttribute("data-theme"));
}

function getServerSnapshot() {
  return "light";
}

export default function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const [open, setOpen] = useState(false);

  useLayoutEffect(() => {
    try {
      const stored = getAllowedTheme(localStorage.getItem("gmk_theme"));
      document.documentElement.setAttribute("data-theme", stored);
    } catch {
      /* storage unavailable */
    }
  }, []);

  function selectTheme(name: string) {
    document.documentElement.setAttribute("data-theme", name);
    localStorage.setItem("gmk_theme", name);
    setOpen(false);
  }

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label="Toggle theme mode"
        aria-expanded={open}
        className="flex h-10 w-10 items-center justify-center border border-[var(--gmk-line)] bg-transparent text-[var(--gmk-ink)] transition-colors hover:border-[var(--gmk-orange)] hover:text-[var(--gmk-orange)]"
      >
        <Sliders className="h-4 w-4" />
      </button>

      {open && (
        <>
          <div
            className="fixed inset-0 z-40"
            aria-hidden="true"
            onClick={() => setOpen(false)}
          />
          <div className="absolute right-0 z-50 mt-2 w-48 border border-[var(--gmk-line)] bg-[var(--gmk-paper)] p-1 shadow-2xl">
            {THEMES.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => selectTheme(item.id)}
                className="flex w-full items-center justify-between gap-2 px-3 py-2 text-xs font-bold uppercase tracking-[0.1em] text-[var(--gmk-ink)] transition-colors hover:bg-[var(--gmk-ink)] hover:text-white"
              >
                <span>{item.label}</span>
                {theme === item.id && <Check className="h-3.5 w-3.5 text-[var(--gmk-orange)]" />}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}