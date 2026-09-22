import Link from "next/link";
import {
  ArrowRight,
  Boxes,
  Download,
  Filter,
  LayoutGrid,
  Package,
  RefreshCw,
  Settings,
  Wind,
  Zap,
} from "lucide-react";

const catalogue = [
  {
    category: "Mill Equipment",
    badgetext: "Best Seller",
    badgeColor: "bg-accent text-accent-content",
    title: "Roller Mill Systems",
    description:
      "High-efficiency double-roller and quad-roller milling systems for wheat, maize, and rice processing. Available in 5–200 TPD configurations.",
    icon: Settings,
    tags: ["5–200 TPD capacity", "Double/quad roller", "Stainless steel", "CE certified"],
  },
  {
    category: "Mill Equipment",
    badgetext: null,
    badgeColor: "",
    title: "Plansifter & Purifiers",
    description:
      "Multi-compartment plansifters and semolina purifiers for precise flour grading and separation in wheat milling operations.",
    icon: Filter,
    tags: ["8–32 compartments", "Automatic balancing", "Dust-tight seals", "Low maintenance"],
  },
  {
    category: "Electrical",
    badgetext: "In-House Made",
    badgeColor: "bg-accent text-accent-content",
    title: "MCC & Distribution Panels",
    description:
      "Custom Motor Control Centres, distribution boards, and PLC panels fabricated in-house to IEC standards with full test documentation.",
    icon: LayoutGrid,
    tags: ["Up to 6.6kV", "IEC 61439 compliant", "SCADA ready", "Full documentation"],
  },
  {
    category: "Power",
    badgetext: null,
    badgeColor: "",
    title: "Standby Generators",
    description:
      "Diesel and gas standby generators from 20kVA to 3000kVA. Includes ATS panels, load bank testing, and annual service contracts.",
    icon: Zap,
    tags: ["20–3000 kVA", "Auto transfer switch", "Load bank tested", "Service contracts"],
  },
  {
    category: "Compressed Air",
    badgetext: null,
    badgeColor: "",
    title: "Industrial Compressors",
    description:
      "Screw and piston air compressors with integrated dryers, filters, and distribution pipework for manufacturing and processing plants.",
    icon: RefreshCw,
    tags: ["5–500 kW", "Integrated dryers", "ISO 8573 air quality", "Remote monitoring"],
  },
  {
    category: "Packing",
    badgetext: "Popular",
    badgeColor: "bg-accent text-accent-content",
    title: "Automatic Packing Machines",
    description:
      "Form-fill-seal and pre-made pouch packing machines for flour, grain, and powder products. Speeds from 200 to 2000 packs/hour.",
    icon: Package,
    tags: ["200–2000 packs/hr", "Multi-head weigher", "PLC controlled", "Easy changeover"],
  },
  {
    category: "Conveying",
    badgetext: null,
    badgeColor: "",
    title: "Pneumatic Conveying Systems",
    description:
      "Dilute and dense phase pneumatic conveying for grain, flour, and powder. Custom-designed for your plant layout and capacity requirements.",
    icon: Wind,
    tags: ["1–100 T/hr", "Dilute & dense phase", "Stainless steel", "Low breakage"],
  },
  {
    category: "Steel Structures",
    badgetext: null,
    badgeColor: "",
    title: "Custom Steel Fabrication",
    description:
      "Structural steel platforms, mezzanines, staircases, and equipment support frames. Designed, fabricated, and installed to BS 5950 standards.",
    icon: Boxes,
    tags: ["BS 5950 standard", "Hot-dip galvanised", "CAD designed", "Site installation"],
  },
];

export default function Catalogue() {
  return (
    <section id="catalogue" className="section-padding bg-base-200">
      <div className="container-pad">
        <div className="mb-14 text-center">
          <span className="pre-heading">Product &amp; Service Catalogue</span>
          <h2 className="mb-4 font-heading text-[2rem] font-bold leading-tight text-base-content sm:text-4xl lg:text-5xl">
            Equipment &amp; Solutions <span className="text-primary">Catalogue</span>
          </h2>
          <div className="heading-divider mx-auto" />
          <p className="mx-auto mt-4 max-w-2xl text-base-content/70">
            Browse our comprehensive range of industrial equipment and engineering solutions. All
            items are available for supply, installation, and ongoing maintenance.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {catalogue.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="catalog-card flex flex-col gap-4">
                {item.badgetext && (
                  <div className="absolute right-4 top-4">
                    <span
                      className={`rounded-none px-2 py-0.5 text-xs font-bold uppercase tracking-widest ${item.badgeColor}`}
                    >
                      {item.badgetext}
                    </span>
                  </div>
                )}
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-primary">
                    {item.category}
                  </span>
                </div>
                <div className="flex h-14 w-14 items-center justify-center rounded-none bg-primary/10 text-primary">
                  <Icon className="h-8 w-8" strokeWidth={1.5} />
                </div>
                <h3 className="font-heading text-lg font-bold leading-tight text-base-content">
                  {item.title}
                </h3>
                <div className="h-px w-full bg-base-300" />
                <p className="text-sm leading-relaxed text-base-content/70">{item.description}</p>
                <div className="mt-auto flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-none border border-base-300 bg-base-200 px-2 py-0.5 text-xs font-semibold text-base-content/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  href="/#contact"
                  className="mt-2 flex items-center gap-2 text-sm font-semibold text-primary transition-colors duration-200 hover:text-primary/80"
                >
                  Request Quote
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            );
          })}
        </div>

        <div className="mt-14 rounded-none bg-primary p-10 text-center text-primary-content shadow-md">
          <h3 className="mb-3 font-heading text-2xl font-bold">
            Need a Full Product Catalogue?
          </h3>
          <p className="mx-auto mb-6 max-w-xl text-primary-content/80">
            Download our complete equipment and services catalogue or contact our team for a
            customised solution proposal.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/#contact"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-none bg-primary-content px-8 py-3 font-bold text-primary transition-colors hover:bg-accent hover:text-accent-content"
            >
              <Download className="h-4 w-4" />
              Download Catalogue
            </Link>
            <Link
              href="/#contact"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-none border border-primary-content/40 px-8 py-3 font-bold text-primary-content transition-colors hover:bg-primary-content/10"
            >
              Contact Our Team
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}