import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      new URL("https://uxmagic.blob.core.windows.net/public/agent-images/**"),
      new URL("https://randomuser.me/api/portraits/**"),
      new URL("https://img.rocket.new/generatedImages/**"),
      new URL("https://gzryntyvemkfiwslzdew.supabase.co/storage/v1/object/public/**"),
    ],
  },
};

export default nextConfig;