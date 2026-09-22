import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const filters = [
  "All",
  "Mill Installation",
  "Metal Fabrication",
  "Electrical Panels",
  "Generator Works",
  "Energy Auditing",
  "Packing Machines",
];

const projects = [
  {
    title: "Unga Group Wheat Mill Expansion",
    category: "Mill Installation",
    location: "Nairobi Industrial Area · 2023",
    alt: "Large wheat milling plant with conveyor systems and processing equipment in Nairobi industrial area",
    image: "/imgs/rocket_gen_img_10138602f-1788168197793.png",
    description:
      "Complete expansion of a 50 TPD wheat milling plant to 120 TPD. Included new roller mill installation, pneumatic conveying system, and automated bagging line integration.",
    tags: ["120 TPD capacity", "Automated bagging", "PLC control system", "6-week delivery"],
    featured: true,
  },
  {
    title: "Eldoret Maize Mill Installation",
    category: "Mill Installation",
    location: "Eldoret, Rift Valley · 2023",
    alt: "Industrial maize milling facility with processing equipment and conveyor systems in Eldoret Kenya",
    image: "/imgs/rocket_gen_img_1848cd358-1788168197687.png",
    description:
      "Turnkey 80 TPD maize degermination and milling line. Full site preparation, equipment installation, electrical works, and commissioning.",
    tags: ["80 TPD capacity", "Degermination line", "Full electrical", "Commissioned on time"],
    featured: true,
  },
  {
    title: "Mombasa Port Steel Structure",
    category: "Metal Fabrication",
    location: "Mombasa Port, Coast · 2022",
    alt: "Large steel structure fabrication at Mombasa port with industrial welding and metal assembly",
    image: "/imgs/rocket_gen_img_1521f8222-1788168198104.png",
    description:
      "Design and fabrication of a 400-tonne steel loading platform and conveyor support structure for bulk cargo handling at Mombasa Port.",
    tags: ["400-tonne structure", "BS standard welding", "Corrosion-resistant", "3-month project"],
    featured: true,
  },
  {
    title: "Nakuru Factory MCC Panel",
    category: "Electrical Panels",
    location: "Nakuru Industrial Park",
    alt: "Custom electrical MCC panel installation in a modern Nakuru factory with industrial control systems",
    image: "/imgs/rocket_gen_img_1db8fbc33-1780491948927.png",
    tags: ["5MW capacity", "SCADA integration"],
    featured: false,
  },
  {
    title: "Kisumu Rice Mill Setup",
    category: "Mill Installation",
    location: "Kisumu, Nyanza",
    alt: "Rice milling facility in Kisumu with processing equipment and automated grading systems",
    image: "/imgs/rocket_gen_img_1e9e481c1-1788168199149.png",
    tags: ["30 TPD capacity", "Full processing line"],
    featured: false,
  },
  {
    title: "Thika Road Factory Generator",
    category: "Generator Works",
    location: "Thika Road, Nairobi",
    alt: "Large industrial generator installation with control panels and electrical systems in Nairobi factory",
    image: "/imgs/rocket_gen_img_1ca922b45-1788168198222.png",
    tags: ["1.5MW standby", "Auto transfer switch"],
    featured: false,
  },
  {
    title: "Athi River Energy Audit",
    category: "Energy Auditing",
    location: "Athi River, Machakos",
    alt: "Energy audit team conducting measurements and analysis in a large manufacturing facility in Athi River",
    image: "/imgs/rocket_gen_img_195293cda-1784724813869.png",
    tags: ["KES 3.2M savings", "Power factor fix"],
    featured: false,
  },
  {
    title: "Meru Packing Line Integration",
    category: "Packing Machines",
    location: "Meru Town, Eastern",
    alt: "Automatic packing machines integrated into flour production line in Meru Kenya factory",
    image: "/imgs/rocket_gen_img_1c0600c3a-1788168197863.png",
    tags: ["4x packing machines", "8 T/hr capacity"],
    featured: false,
  },
];

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  return (
    <div className="group relative overflow-hidden rounded-none border border-base-300 bg-base-100 shadow-sm transition-shadow hover:shadow-md">
      <div className="relative aspect-[4/3]">
        <Image
          src={project.image}
          alt={project.alt}
          fill
          sizes="(max-width: 1024px) 100vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="portfolio-overlay absolute inset-0" />
      <span className="absolute left-4 top-4 z-10 rounded-none bg-primary/90 px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary-content">
        {project.category}
      </span>
      <div
        className={`portfolio-content absolute bottom-0 left-0 right-0 z-10 ${
          project.featured ? "p-6" : "p-4"
        }`}
      >
        {project.featured && (
          <p className="mb-1 text-xs uppercase tracking-widest text-white/60">
            {project.location}
          </p>
        )}
        <h3
          className={`mb-2 font-heading font-bold text-white ${
            project.featured ? "text-xl" : "text-base"
          }`}
        >
          {project.title}
        </h3>
        {project.featured && project.description && (
          <p className="mb-3 text-sm leading-relaxed text-white/70">{project.description}</p>
        )}
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-none border border-white/20 bg-white/10 px-2 py-0.5 text-xs font-semibold text-white"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const compact = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="section-padding bg-base-200">
      <div className="container-pad">
        <div className="mb-14 text-center">
          <span className="pre-heading">Our Work</span>
          <h2 className="mb-4 font-heading text-[2rem] font-bold leading-tight text-base-content sm:text-4xl lg:text-5xl">
            Project Portfolio
          </h2>
          <div className="heading-divider mx-auto" />
          <p className="mx-auto mt-4 max-w-2xl text-base-content/70">
            A selection of completed industrial engineering projects across Kenya — from mill
            installations to electrical infrastructure and metal fabrication.
          </p>
        </div>

        <div className="mb-12 flex flex-wrap justify-center gap-2">
          {filters.map((filter, index) => (
            <span
              key={filter}
              className={`rounded-none border px-4 py-2 text-sm font-semibold transition-all duration-200 ${
                index === 0
                  ? "border-primary bg-primary text-primary-content"
                  : "border-base-300 bg-base-100 text-base-content/70"
              }`}
            >
              {filter}
            </span>
          ))}
        </div>

        <div className="mb-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {featured.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {compact.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/#contact" className="btn-primary">
            Discuss Your Project
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}