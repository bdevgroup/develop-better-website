/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: process.env.NODE_ENV === "production" ? "export" : undefined,
  images:
    process.env.NODE_ENV === "production"
      ? {
          loader: "custom",
          loaderFile: "/myImageLoader.js",
        }
      : undefined,
};

export default nextConfig;
