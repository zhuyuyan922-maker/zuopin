import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/zuopin",
  images: { unoptimized: true },
};

export default nextConfig;
