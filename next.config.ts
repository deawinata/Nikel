import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
        port: ""
      },
      {
        protocol: "https",
        hostname: "cdn0.it4profit.com",
        port: ""
      },
      {
        protocol: "https",
        hostname: "i.imgur.com",
        port: ""
      },
      {
        protocol: "https",
        hostname: "obsessionoutlet.com",
        port: ""
      }
    ]
  }
};

export default nextConfig;
