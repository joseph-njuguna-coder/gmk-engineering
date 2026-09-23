"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Filter, X } from "lucide-react";

const categories = [
  "All",
  "Projects",
  "Mill Installation",
  "Metal Fabrication",
  "Electrical Systems",
  "Generators & Compressors",
  "Steel Structures",
];

export interface GalleryItem {
  id: string;
  title: string;
  category: string | null; // Updated to allow null from database/lib
  image_url: string;
  created_at?: string;
}

export default function Gallery({ items }: { items: GalleryItem[] }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const filteredItems =
    activeCategory === "All"
      ? items
      : items.filter((item) => item.category === activeCategory);

  return (
    <>
      <section id="gallery" className="border-t border-[var(--gmk-line)] bg-[var(--gmk-paper)] py-24 text-[var(--gmk-ink)]">
        <div className="container-pad">
          {/* Section Header */}
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[var(--gmk-orange)]">
                Project Portfolio Archive
              </span>
              <h2 className="mb-4 mt-2 font-heading text-[2rem] font-bold uppercase tracking-tight text-[var(--gmk-ink)] sm:text-4xl lg:text-5xl">
                Engineering <span className="text-[var(--gmk-orange)]">in Action</span>
              </h2>
              <div className="mt-4 h-px w-16 bg-[var(--gmk-orange)]" />
            </div>

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap items-center gap-2 border border-[var(--gmk-line)] bg-[var(--gmk-paper)] p-1.5">
              <span className="hidden items-center gap-1 px-2 font-mono text-[10px] uppercase tracking-wider text-[var(--gmk-ink)]/50 lg:inline-flex">
                <Filter className="h-3 w-3" /> Filter:
              </span>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 font-mono text-xs uppercase tracking-wider transition-all ${
                    activeCategory === cat
                      ? "bg-[var(--gmk-orange)] font-bold text-white shadow-sm"
                      : "text-[var(--gmk-ink)]/70 hover:bg-[var(--gmk-line)]/20 hover:text-[var(--gmk-ink)]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Gallery Grid */}
          {filteredItems.length === 0 ? (
            <div className="border border-[var(--gmk-line)] bg-[var(--gmk-paper)] p-12 text-center font-mono text-xs uppercase tracking-wider text-[var(--gmk-ink)]/60">
              No project records found in this category archive.
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredItems.map((item, index) => (
                <div
                  key={item.id}
                  onClick={() => setSelectedImage(item)}
                  className="group relative cursor-pointer border border-[var(--gmk-line)] bg-[var(--gmk-paper)] p-4 shadow-xl transition-all duration-300 hover:border-[var(--gmk-orange)]"
                >
                  {/* Image Frame */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden border border-[var(--gmk-line)] bg-[var(--gmk-ink)]/5">
                    <Image
                      src={item.image_url}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    
                    {/* Top Bar on Image */}
                    <div className="absolute left-0 right-0 top-0 z-10 flex items-center justify-between bg-gradient-to-b from-black/60 to-transparent p-3 text-white">
                      <span className="bg-[var(--gmk-orange)] px-2 py-0.5 font-mono text-[10px] font-bold tracking-[0.2em]">
                        SYS // 0{index + 1}
                      </span>
                      <span className="bg-black/40 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider backdrop-blur-sm">
                        {item.category ?? "Uncategorized"}
                      </span>
                    </div>
                  </div>

                  {/* Details Footer */}
                  <div className="mt-4 flex items-start justify-between">
                    <div>
                      <h3 className="font-heading text-base font-bold uppercase tracking-tight text-[var(--gmk-ink)] transition-colors group-hover:text-[var(--gmk-orange)]">
                        {item.title}
                      </h3>
                      <p className="mt-1 font-mono text-[11px] uppercase tracking-wider text-[var(--gmk-ink)]/60">
                        Kenya Industrial Sector
                      </p>
                    </div>
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center border border-[var(--gmk-line)] bg-[var(--gmk-paper)] text-[var(--gmk-orange)] transition-colors group-hover:bg-[var(--gmk-orange)] group-hover:text-white">
                      <ArrowUpRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm">
          <div className="relative w-full max-w-4xl border border-[var(--gmk-orange)] bg-[var(--gmk-paper)] p-6 text-[var(--gmk-ink)] shadow-2xl">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center border border-[var(--gmk-line)] bg-[var(--gmk-paper)] text-[var(--gmk-orange)] transition-colors hover:bg-[var(--gmk-orange)] hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="mb-4 flex items-center gap-3">
              <span className="font-mono text-xs font-bold tracking-[0.2em] text-[var(--gmk-orange)]">
                ARCHIVE RECORD
              </span>
              <span className="font-mono text-xs uppercase tracking-wider text-[var(--gmk-ink)]/50">
                [{selectedImage.category ?? "Uncategorized"}]
              </span>
            </div>

            <div className="relative mb-6 flex aspect-video w-full items-center justify-center overflow-hidden border border-[var(--gmk-line)] bg-[var(--gmk-ink)]/5">
              <Image
                src={selectedImage.image_url}
                alt={selectedImage.title}
                fill
                className="object-cover"
              />
            </div>

            <h3 className="font-heading text-xl font-bold uppercase tracking-tight text-[var(--gmk-ink)]">
              {selectedImage.title}
            </h3>
            <p className="mt-1 font-mono text-xs font-bold uppercase tracking-widest text-[var(--gmk-orange)]">
              Location: Kenya Industrial Network
            </p>
            <div className="my-4 h-px w-full bg-[var(--gmk-line)]" />
            <p className="font-mono text-xs leading-relaxed uppercase tracking-wider text-[var(--gmk-ink)]/80">
              Verified operational deployment recorded in the GMK Engineering technical archive database.
            </p>
          </div>
        </div>
      )}
    </>
  );
}