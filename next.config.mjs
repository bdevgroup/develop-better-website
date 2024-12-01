/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: process.env.NODE_ENV === "production" ? "export" : undefined,
};

export default nextConfig;
