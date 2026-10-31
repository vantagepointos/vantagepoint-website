import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/vantagelead",
        destination: "/vantage-lead",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
