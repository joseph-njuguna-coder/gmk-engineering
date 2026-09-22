import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const stats = [
  { value: "500+", label: "Projects Completed", filled: 8 },
  { value: "15+", label: "Years in Kenya", filled: 7 },
  { value: "99%", label: "Service Uptime", filled: 8 },
  { value: "30+", label: "Counties Served", filled: 6 },
];

const highlights = [
  {
    title: "Nairobi-Based, Kenya-Wide",
    description:
      "Headquartered at 49 Thika Road, Nairobi — our teams mobilise to any county within 24 hours for urgent site work.",
  },
  {
    title: "End-to-End Capability",
    description:
      "Design, supply, install, commission, maintain — no subcontracting. One accountable team from day one to handover.",
  },
  {
    title: "Certified Electrical Engineers",
    description:
      "EBK-registered engineers for all electrical works. Panel fabrication meets IEC standards with full test documentation.",
  },
  {
    title: "Global Sourcing Network",
    description:
      "We import machinery from China, Germany, and India — clearing, freight, and last-mile delivery included.",
  },
  {
    title: "Energy Cost Reduction",
    description:
      "Our audits have saved Kenyan factories an average of KES 2.4M/year in electricity costs. Results-backed recommendations.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative border-t border-[var(--gmk-line)] bg-[var(--gmk-paper)] py-24 text-[var(--gmk-ink)] overflow-hidden">
      <div className="container-pad relative z-10">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          
          {/* Left Column: Video Media Frame & Statistics */}
          <div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-none border border-[var(--gmk-line)] bg-[var(--gmk-ink)] shadow-2xl">
              {/* Sefar-style background silent video layer */}
              <div className="absolute inset-0 z-0 opacity-40">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="h-full w-full object-cover scale-105"
                >
                  <source src="https://assets.mixkit.co/videos/preview/mixkit-close-up-of-a-metal-worker-welding-40910-large.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--gmk-ink)] via-[var(--gmk-ink)]/40 to-transparent" />
              </div>

              {/* Foreground Image Overlay or Fallback */}
              <div className="absolute inset-0 mix-blend-overlay opacity-30">
                <Image
                  src="/imgs/rocket_gen_img_102f3336c-1788168197806.png"
                  alt="GMK Engineering team working on industrial equipment installation inside a large Kenyan factory"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              <div className="absolute bottom-0 right-0 z-10 border-t border-l border-[var(--gmk-line)] bg-[var(--gmk-ink)] p-6 text-white">
                <p className="font-heading text-4xl font-bold leading-none">15+</p>
                <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--gmk-orange)]">
                  Years Experience
                </p>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="border border-[var(--gmk-line)] bg-[var(--gmk-paper)] p-5 shadow-sm">
                  <p className="font-heading text-3xl font-bold leading-none text-[var(--gmk-orange)]">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-xs font-bold uppercase tracking-[0.15em] text-[var(--gmk-ink)]/70">
                    {stat.label}
                  </p>
                  <div className="mt-4 flex h-1 gap-0.5">
                    {Array.from({ length: 8 }).map((_, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-none"
                        style={{
                          background: i < stat.filled ? "var(--gmk-orange)" : "var(--gmk-line)",
                        }}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Narrative Content & Corporate Highlights */}
          <div>
            <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[var(--gmk-orange)]">
              About GMK Engineering
            </span>
            <h2 className="mb-4 mt-2 font-heading text-[2rem] font-bold uppercase tracking-tight text-[var(--gmk-ink)] sm:text-4xl">
              Engineered for <span className="text-[var(--gmk-orange)]">Kenyan</span> Industry.
            </h2>
            <div className="mb-6 h-px w-16 bg-[var(--gmk-orange)]" />
            <p className="mb-6 leading-relaxed text-[var(--gmk-ink)]/80">
              GMK Engineering is a full-spectrum industrial engineering firm headquartered in
              Nairobi, Kenya. We specialize in mill installation, metal fabrication, electrical
              systems, and machinery importation — delivering end-to-end solutions that power
              Kenya&apos;s industrial growth.
            </p>
            <p className="mb-8 leading-relaxed text-[var(--gmk-ink)]/80">
              Our multi-disciplinary team of engineers and technicians brings together expertise
              in mechanical, electrical, and structural engineering to deliver projects on time,
              within budget, and to the highest standards.
            </p>

            <div className="flex flex-col gap-6">
              {highlights.map((item) => (
                <div key={item.title} className="group flex gap-4 border-l-2 border-[var(--gmk-line)] pl-4 transition-colors hover:border-[var(--gmk-orange)]">
                  <div>
                    <h4 className="mb-1 font-heading font-bold uppercase tracking-tight text-[var(--gmk-ink)]">{item.title}</h4>
                    <p className="text-xs leading-relaxed text-[var(--gmk-ink)]/70">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Link 
                href="/#contact" 
                className="inline-flex items-center justify-center gap-3 border border-[var(--gmk-ink)] bg-[var(--gmk-ink)] px-8 py-4 text-xs font-bold uppercase tracking-[0.15em] text-white transition-all hover:bg-[var(--gmk-orange)] hover:border-[var(--gmk-orange)]"
              >
                Get a Free Consultation
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}