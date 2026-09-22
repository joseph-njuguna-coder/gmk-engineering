import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowRight } from "lucide-react";

const heroStats = [
  { value: "500+", label: "Projects" },
  { value: "15+", label: "Years" },
  { value: "30+", label: "Counties" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#10213f] pt-28 md:pt-36">
      <div className="container-pad grid min-h-[calc(100svh-7rem)] items-end gap-10 pb-10 pt-12 lg:grid-cols-[1.02fr_.98fr] lg:pb-16">
        <div className="relative z-10 flex flex-col justify-end pb-4 lg:pb-10">
          <span className="mb-7 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[.22em] text-[#e56b2f]">
            <span className="h-px w-10 bg-[#e56b2f]" />
            Industrial engineering · Kenya
          </span>

          <h1 className="max-w-5xl font-heading text-[3.7rem] font-extrabold leading-[.9] tracking-[-.06em] text-white sm:text-6xl md:text-7xl lg:text-[7.2rem]">
            Engineering
            <br />
            that moves
            <br />
            <span className="text-[#e56b2f]">industry.</span>
          </h1>

          <p className="mt-8 max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
            Turnkey milling, fabrication, electrical and industrial machinery
            solutions — from concept and sourcing to installation and commissioning.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="/#services" className="btn-primary">
              Explore capabilities <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/#projects" className="inline-flex items-center gap-2 border border-white/30 px-5 py-3 text-sm font-bold text-white transition-colors hover:border-white">
              View projects <ArrowDownRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-12 grid max-w-xl grid-cols-3 border-t border-white/15 pt-5">
            {heroStats.map((stat) => (
              <div key={stat.label} className="border-r border-white/10 last:border-0">
                <span className="font-heading text-3xl font-extrabold text-white md:text-4xl">{stat.value}</span>
                <span className="mt-1 block text-[10px] font-bold uppercase tracking-[.18em] text-white/45">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative min-h-[460px] overflow-hidden lg:min-h-[690px]">
          <Image
            src="/imgs/rocket_gen_img_122436fb1-1768350365028.png"
            alt="Industrial milling equipment installation"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#10213f]/60 via-transparent to-transparent" />
          <div className="absolute bottom-5 left-5 border border-white/25 bg-[#10213f]/80 px-4 py-3 backdrop-blur">
            <p className="text-[10px] font-bold uppercase tracking-[.18em] text-[#e56b2f]">Featured capability</p>
            <p className="mt-1 text-sm font-semibold text-white">Milling plant installation</p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 bg-white">
        <div className="container-pad grid md:grid-cols-3">
          {[
            ["01", "Milling", "Wheat, maize & rice processing plants."],
            ["02", "Industrial systems", "Electrical, generators & compressors."],
            ["03", "Fabrication", "Steel structures and custom machinery."],
          ].map(([number, title, description]) => (
            <Link key={number} href="/#services" className="group border-r border-[#10213f]/10 p-7 last:border-0 md:p-9">
              <span className="text-xs font-bold tracking-[.18em] text-[#e56b2f]">{number}</span>
              <h3 className="mt-5 font-heading text-2xl font-extrabold text-[#10213f]">{title}</h3>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-[#10213f]/60">{description}</p>
              <ArrowRight className="mt-6 h-4 w-4 text-[#e56b2f] transition-transform group-hover:translate-x-2" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
