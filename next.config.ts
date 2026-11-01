import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
