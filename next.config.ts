import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/email/signature/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/vantagelead",
        destination: "/platform#lead",
        permanent: true,
      },
      {
        source: "/vantage-lead",
        destination: "/platform#lead",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
