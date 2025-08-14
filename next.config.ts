import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Avoid OneDrive sync/lock issues by using a local dist directory
  distDir: ".next-local",
  images: {
    remotePatterns: [{ protocol: "https", hostname: "i.pravatar.cc" }],
  },
};

export default nextConfig;
