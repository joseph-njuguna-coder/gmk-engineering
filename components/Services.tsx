import Link from "next/link";
import {
  Activity,
  ArrowRight,
  Boxes,
  Cpu,
  Database,
  Droplets,
  Factory,
  Globe,
  LayoutGrid,
  Lightbulb,
  Package,
  RefreshCw,
  Settings,
  SlidersHorizontal,
  Zap,
} from "lucide-react";

const services = [
  {
    number: "01",
    title: "Wheat Mill Installation",
    description:
      "Complete turnkey wheat milling plant setup — from site assessment and equipment sourcing to commissioning. We install roller mills, sifters, and pneumatic conveyors for high-output flour production.",
    icon: Settings,
  },
  {
    number: "02",
    title: "Maize Mill Installation",
    description:
      "Full maize degermination and milling line installation. Capacity from 10 TPD to 200 TPD with automated grading and bagging systems.",
    icon: Factory,
  },
  {
    number: "03",
    title: "Rice Mill Installation",
    description:
      "Paddy rice processing lines including husking, whitening, grading, and polishing equipment — installed and commissioned to spec.",
    icon: Database,
  },
  {
    number: "04",
    title: "Repair & Maintenance",
    description:
      "Scheduled and emergency maintenance for all industrial machinery. Rapid-response teams across Nairobi and upcountry.",
    icon: SlidersHorizontal,
  },
  {
    number: "05",
    title: "Metal Structure Fabrication",
    description:
      "Custom steel and metal fabrication for industrial structures, platforms, mezzanines, and support frames. Certified welding to BS standards.",
    icon: Boxes,
  },
  {
    number: "06",
    title: "Generator Works",
    description:
      "Generator installation, load testing, synchronisation panels, and scheduled servicing for standby and prime power applications.",
    icon: Zap,
  },
  {
    number: "07",
    title: "Compressor Works",
    description:
      "Air compressor installation, pipework design, dryer integration, and maintenance contracts for manufacturing and processing plants.",
    icon: RefreshCw,
  },
  {
    number: "08",
    title: "Electrical Panel Fabrication",
    description:
      "Custom MCC, PLC, and distribution panels fabricated in-house. IEC-compliant, tested, and delivered with full documentation.",
    icon: LayoutGrid,
  },
  {
    number: "09",
    title: "Electrical Installation",
    description:
      "Industrial wiring, cable management, earthing systems, and power factor correction for factories and commercial buildings.",
    icon: Lightbulb,
  },
  {
    number: "10",
    title: "Packing Machines",
    description:
      "Automatic and semi-automatic packing machine supply, installation, and integration with existing production lines.",
    icon: Package,
  },
  {
    number: "11",
    title: "Energy Auditing",
    description:
      "Detailed energy audits identifying waste and recommending improvements — helping Kenyan factories cut electricity bills by 15–35%.",
    icon: Activity,
  },
  {
    number: "12",
    title: "Machine Importation",
    description:
      "End-to-end importation of industrial machinery — sourcing, freight, clearing, and delivery to your site anywhere in Kenya.",
    icon: Globe,
  },
];

const industries = [
  {
    title: "Food & Beverage",
    description: "Milling, processing, and packaging lines for grain, flour, and food production facilities.",
    icon: Factory,
  },
  {
    title: "Manufacturing",
    description: "Automated production lines, conveyor systems, and factory-wide electrical infrastructure.",
    icon: Cpu,
  },
  {
    title: "Energy & Power",
    description: "Generator installations, power factor correction, and energy auditing for industrial facilities.",
    icon: Zap,
  },
  {
    title: "Agro-Processing",
    description: "Rice, maize, and wheat processing equipment for large-scale agricultural operations.",
    icon: Globe,
  },
  {
    title: "Construction",
    description: "Structural steel fabrication, site electrical works, and heavy equipment installation.",
    icon: Boxes,
  },
  {
    title: "Water & Utilities",
    description: "Pump installations, water treatment plant electrical systems, and utility infrastructure.",
    icon: Droplets,
  },
];

function ServiceCard({
  service,
}: {
  service: (typeof services)[number];
}) {
  const Icon = service.icon;
  return (
    <div className="group flex h-full flex-col justify-between border border-[var(--gmk-line)] bg-[var(--gmk-paper)] p-8 shadow-xl transition-all duration-300 hover:border-[var(--gmk-orange)]">
      <div>
        <div className="flex items-center justify-between">
          <div className="flex h-12 w-12 items-center justify-center border border-[var(--gmk-line)] bg-[var(--gmk-paper)] text-[var(--gmk-orange)]">
            <Icon className="h-6 w-6" strokeWidth={1.5} />
          </div>
          <span className="font-mono text-xs font-bold tracking-[0.2em] text-[var(--gmk-orange)]">
            SYS // {service.number}
          </span>
        </div>
        <h3 className="mt-6 font-heading text-lg font-bold uppercase tracking-tight text-[var(--gmk-ink)]">
          {service.title}
        </h3>
        <div className="my-4 h-px w-full bg-[var(--gmk-line)]" />
        <p className="font-mono text-xs leading-relaxed uppercase tracking-wider text-[var(--gmk-ink)]/70">
          {service.description}
        </p>
      </div>
      <Link
        href="/#contact"
        className="mt-8 inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-[var(--gmk-orange)] transition-colors hover:text-[var(--gmk-ink)]"
      >
        <span>Learn More</span>
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </div>
  );
}

export default function Services() {
  return (
    <>
      <section id="services" className="border-t border-[var(--gmk-line)] bg-[var(--gmk-paper)] py-24 text-[var(--gmk-ink)]">
        <div className="container-pad mb-16">
          <div className="mx-auto max-w-3xl text-center">
            <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[var(--gmk-orange)]">
              What We Do
            </span>
            <h2 className="mb-4 mt-2 font-heading text-[2rem] font-bold uppercase tracking-tight text-[var(--gmk-ink)] sm:text-4xl lg:text-5xl">
              12 Core Services. <span className="text-[var(--gmk-orange)]">One Trusted Partner.</span>
            </h2>
            <div className="mx-auto mt-4 h-px w-16 bg-[var(--gmk-orange)]" />
            <p className="mt-4 font-mono text-xs uppercase tracking-wider text-[var(--gmk-ink)]/70">
              From grain milling to electrical infrastructure — GMK Engineering handles every
              phase of your industrial project in Kenya.
            </p>
          </div>
        </div>

        <div className="container-pad grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.number} service={service} />
          ))}
        </div>
      </section>

      <section id="industries" className="border-t border-[var(--gmk-line)] bg-[var(--gmk-paper)] py-24 text-[var(--gmk-ink)]">
        <div className="container-pad">
          <div className="mb-14 text-center">
            <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[var(--gmk-orange)]">
              Industries We Serve
            </span>
            <h2 className="mb-4 mt-2 font-heading text-[2rem] font-bold uppercase tracking-tight text-[var(--gmk-ink)] sm:text-4xl lg:text-5xl">
              Engineered Sector Solutions
            </h2>
            <div className="mx-auto mt-4 h-px w-16 bg-[var(--gmk-orange)]" />
            <p className="mx-auto mt-4 max-w-2xl font-mono text-xs uppercase tracking-wider text-[var(--gmk-ink)]/70">
              We provide comprehensive industrial engineering solutions tailored to individual sector requirements across Kenya.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => {
              const Icon = industry.icon;
              return (
                <div
                  key={industry.title}
                  className="group flex gap-5 border border-[var(--gmk-line)] bg-[var(--gmk-paper)] p-6 transition-all duration-300 hover:border-[var(--gmk-orange)]"
                >
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center border border-[var(--gmk-line)] bg-[var(--gmk-paper)] text-[var(--gmk-orange)]">
                    <Icon className="h-6 w-6" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="mb-2 font-heading text-lg font-bold uppercase tracking-tight text-[var(--gmk-ink)]">
                      {industry.title}
                    </h3>
                    <p className="font-mono text-xs leading-relaxed uppercase tracking-wider text-[var(--gmk-ink)]/70">
                      {industry.description}
                    </p>
                    <Link
                      href="/#services"
                      className="mt-4 inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-[var(--gmk-orange)] transition-colors hover:text-[var(--gmk-ink)]"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/#services" 
              className="inline-flex items-center justify-center border border-[var(--gmk-line)] bg-transparent px-8 py-4 font-mono text-xs font-bold uppercase tracking-[0.15em] text-[var(--gmk-ink)] transition-all hover:bg-[var(--gmk-orange)] hover:border-[var(--gmk-orange)] hover:text-white"
            >
              View All Services Index
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}