import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  async redirects() {
    return [
      {
        source: "/downloads",
        destination: "/",
        permanent: true,
      },
      {
        source: "/portal",
        destination: "/",
        permanent: true,
      },
      {
        source: "/mission-log",
        destination: "/story",
        permanent: true,
      },
      {
        source: "/fractal-vision",
        destination: "/truths",
        permanent: true,
      },
      {
        source: "/tech-beliefs",
        destination: "/truths",
        permanent: true,
      },
      {
        source: "/identity/prince-jona",
        destination: "/story",
        permanent: true,
      },
      {
        source: "/identity/the-interpreter",
        destination: "/truths",
        permanent: true,
      },
      {
        source: "/identity/the-flame",
        destination: "/truths",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
