"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Logo from "@/components/Logo";

const navLinks = [
  { label: "Works", href: "/#gallery" },
  { label: "Catalogue", href: "/#catalogue" },
  { label: "Contact", href: "/#contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-[var(--gmk-line)] bg-[var(--gmk-paper)]/90 backdrop-blur-md">
      <div className="container-pad flex h-20 items-center justify-between">
        {/* Brand Logo & Title */}
        <Link href="/" aria-label="GMK Engineering — Home" className="flex items-center gap-3">
          <Logo />
          <div className="flex flex-col leading-none">
            <span className="font-heading text-lg font-extrabold uppercase tracking-widest text-[var(--gmk-ink)]">
              GMK <span className="text-[var(--gmk-orange)]">Engineering</span>
            </span>
            <span className="mt-1 text-[9px] uppercase tracking-[0.2em] text-[var(--gmk-ink)]/60">
              Industrial Solutions
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs font-bold uppercase tracking-[0.15em] text-[var(--gmk-ink)] transition-colors hover:text-[var(--gmk-orange)]"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/admin"
            className="border border-[var(--gmk-ink)] px-5 py-2.5 text-xs font-bold uppercase tracking-[0.15em] text-[var(--gmk-ink)] transition-all hover:bg-[var(--gmk-ink)] hover:text-white"
          >
            Portal
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="p-2 text-[var(--gmk-ink)]"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="border-t border-[var(--gmk-line)] bg-[var(--gmk-paper)] md:hidden">
          <nav className="container-pad flex flex-col gap-2 py-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-2 text-sm font-bold uppercase tracking-[0.15em] text-[var(--gmk-ink)] hover:text-[var(--gmk-orange)]"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/admin"
              onClick={() => setOpen(false)}
              className="mt-4 inline-block text-center border border-[var(--gmk-ink)] py-3 text-xs font-bold uppercase tracking-[0.15em] text-[var(--gmk-ink)]"
            >
              Admin Portal
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}