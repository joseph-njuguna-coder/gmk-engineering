import Link from "next/link";
import Logo from "@/components/Logo";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--gmk-line)] bg-[var(--gmk-paper)] py-16 text-[var(--gmk-ink)]">
      <div className="container-pad flex flex-col gap-12">
        {/* Top Editorial Row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 pb-12 border-b border-[var(--gmk-line)]">
          <div className="flex items-center gap-3">
            <Logo />
            <div className="flex flex-col leading-none">
              <span className="font-heading text-lg font-extrabold uppercase tracking-widest text-[var(--gmk-ink)]">
                GMK <span className="text-[var(--gmk-orange)]">Engineering</span>
              </span>
              <span className="mt-1 text-[9px] uppercase tracking-[0.2em] text-[var(--gmk-ink)]/60">
                Precision Industrial Solutions
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-8 text-xs font-bold uppercase tracking-[0.15em]">
            <Link href="/#gallery" className="hover:text-[var(--gmk-orange)] transition-colors">Works</Link>
            <Link href="/#catalogue" className="hover:text-[var(--gmk-orange)] transition-colors">Catalogue</Link>
            <Link href="/#contact" className="hover:text-[var(--gmk-orange)] transition-colors">Inquire</Link>
            <Link href="/admin" className="hover:text-[var(--gmk-orange)] transition-colors">Portal</Link>
          </div>
        </div>

        {/* Bottom Metadata Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[var(--gmk-ink)]/60">
          <div>
            © 2026 GMK Engineering Ltd. All rights reserved. // Nairobi, Kenya
          </div>
          <div>
            Editorial Industrial Aesthetic
          </div>
        </div>
      </div>
    </footer>
  );
}