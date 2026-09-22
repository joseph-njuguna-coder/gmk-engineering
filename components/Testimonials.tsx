import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "GMK Engineering delivered our wheat mill expansion on time and within budget. Their team handled everything from equipment sourcing to commissioning — exceptional professionalism throughout.",
    initials: "JM",
    name: "James Mwangi",
    role: "Operations Director, Unga Group Ltd",
  },
  {
    quote:
      "The maize mill installation was flawless. GMK's engineers understood our production requirements perfectly and delivered a system that exceeded our capacity targets.",
    initials: "SK",
    name: "Sarah Kamau",
    role: "Factory Manager, Eldoret Grain Processors",
  },
  {
    quote:
      "Outstanding steel fabrication work. The loading platform they built at our port facility has been operating flawlessly for two years. Quality welding and on-time delivery.",
    initials: "PO",
    name: "Peter Ochieng",
    role: "Technical Director, Mombasa Steel Works",
  },
  {
    quote:
      "The energy audit GMK conducted saved us KES 2.8M in the first year alone. Their recommendations were practical and the ROI was faster than projected.",
    initials: "GW",
    name: "Grace Wanjiku",
    role: "CEO, Nakuru Food Industries",
  },
  {
    quote:
      "Professional, knowledgeable, and reliable. GMK installed our complete rice processing line and provided excellent training for our operators. Highly recommended.",
    initials: "DM",
    name: "David Mutua",
    role: "Plant Engineer, Kisumu Rice Mills",
  },
  {
    quote:
      "GMK handled our 1.5MW generator installation with complete professionalism. The automatic transfer system works perfectly and their after-sales support is excellent.",
    initials: "AN",
    name: "Anne Njoroge",
    role: "Procurement Manager, Thika Pharmaceuticals",
  },
];

const trackRecord = [
  { value: "500+", label: "Projects Delivered" },
  { value: "15+", label: "Years Experience" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "30+", label: "Counties Served" },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="border-t border-[var(--gmk-line)] bg-[var(--gmk-paper)] py-24 text-[var(--gmk-ink)]">
      <div className="container-pad">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[var(--gmk-orange)]">
            Client Testimonials & Feedback
          </span>
          <h2 className="mb-4 mt-2 font-heading text-[2rem] font-bold uppercase tracking-tight text-[var(--gmk-ink)] sm:text-4xl lg:text-5xl">
            What Our Clients <span className="text-[var(--gmk-orange)]">Say</span>
          </h2>
          <div className="mx-auto mt-4 h-px w-16 bg-[var(--gmk-orange)]" />
          <p className="mx-auto mt-4 max-w-xl font-mono text-xs uppercase tracking-wider text-[var(--gmk-ink)]/70">
            Trusted by leading manufacturers, grain processors, and industrial operators across Kenya.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="group flex flex-col justify-between border border-[var(--gmk-line)] bg-[var(--gmk-paper)] p-8 shadow-xl transition-all duration-300 hover:border-[var(--gmk-orange)]"
            >
              <div>
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-[var(--gmk-orange)] text-[var(--gmk-orange)]" />
                  ))}
                </div>
                <blockquote className="font-mono text-xs leading-relaxed uppercase tracking-wider text-[var(--gmk-ink)]/80">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
              </div>

              <div className="mt-8 pt-6 border-t border-[var(--gmk-line)]">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-none border border-[var(--gmk-line)] bg-[var(--gmk-ink)] font-mono text-xs font-bold text-white">
                    {testimonial.initials}
                  </div>
                  <div>
                    <p className="font-heading text-sm font-bold uppercase tracking-tight text-[var(--gmk-ink)]">
                      {testimonial.name}
                    </p>
                    <p className="font-mono text-[10px] uppercase tracking-wider text-[var(--gmk-ink)]/60">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Track Record Stats Banner */}
        <div className="mt-16 grid grid-cols-2 gap-6 border border-[var(--gmk-line)] bg-[var(--gmk-paper)] p-8 shadow-2xl md:grid-cols-4">
          {trackRecord.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="mb-2 font-heading text-4xl font-bold uppercase tracking-tight text-[var(--gmk-orange)]">
                {stat.value}
              </p>
              <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--gmk-ink)]/70">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}