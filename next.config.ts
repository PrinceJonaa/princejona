import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            // Control DNS prefetching to improve performance/privacy
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            // Enforce HTTPS for 2 years, include subdomains, and allow preloading
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            // Prevent the site from being embedded in an iframe (clickjacking protection)
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            // Prevent MIME type sniffing
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            // Control how much referrer information is sent to other sites
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
          {
            // Restrict access to browser features for privacy and security
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
