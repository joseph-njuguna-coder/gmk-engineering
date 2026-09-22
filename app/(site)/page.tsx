import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import { fetchGalleryItems } from "@/lib/gallery";

export const dynamic = "force-dynamic";

export default async function Home() {
  const galleryItems = await fetchGalleryItems();

  return (
    <main className="min-h-screen bg-[var(--gmk-paper)] text-[var(--gmk-ink)] selection:bg-[var(--gmk-orange)] selection:text-white">
      {/* 1. Immersive, oversized structural introduction */}
      <Hero />

      {/* 2. Core engineering capabilities & technical metrics */}
      <Services />

      {/* 3. Featured precision project execution (Dynamic Supabase Gallery) */}
      <Gallery items={galleryItems} />

      {/* 4. Direct industrial engagement & contact portal */}
      <Contact />
    </main>
  );
}