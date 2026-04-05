import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ik.imagekit.io",
      },
      {
        protocol: "https",
        hostname: "terra-azul-s3.s3.us-east-1.amazonaws.com",
      },
    ],
  },
};

export default nextConfig;
