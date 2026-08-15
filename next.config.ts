import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/portfolio-web",
  assetPrefix: "/portfolio-web/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
