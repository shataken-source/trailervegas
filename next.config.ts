import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  outputFileTracingRoot: path.join(__dirname),
  outputFileTracingIncludes: {
    "/api/waitlist": ["./docs/TRUST_COVENANT.md"],
    "/api/help": ["./docs/TRUST_COVENANT.md"],
    "/api/provide": ["./docs/TRUST_COVENANT.md"],
  },
};

export default nextConfig;
