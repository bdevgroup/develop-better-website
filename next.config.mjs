/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  distDir: "out",
  output: process.env.NODE_ENV === "production" ? "export" : undefined,
  // basePath: process.env.NODE_ENV === "production" ? "/develop-better-website" : "",
  basePath: "/develop-better-website",
};

export default nextConfig;
