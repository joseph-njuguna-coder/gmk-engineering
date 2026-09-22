import { supabase } from "@/lib/supabase";

export type GalleryItem = {
  id: string;
  title: string;
  category: string | null;
  image_url: string;
  created_at: string;
};

export async function fetchGalleryItems(): Promise<GalleryItem[]> {
  const { data, error } = await supabase
    .from("gallery")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Failed to fetch gallery items:", error.message);
    return [];
  }

  return (data ?? []) as GalleryItem[];
}