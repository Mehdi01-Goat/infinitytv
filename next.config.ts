import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "image.tmdb.org" },
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "infinitytv.io" }],
        destination: "https://www.infinitytv.io/:path*",
        permanent: true,
      },
      { source: "/infinitytv-iptv", destination: "/", permanent: true },
      { source: "/iptv-reseller", destination: "/reseller", permanent: true },
    ];
  },
};

export default nextConfig;
