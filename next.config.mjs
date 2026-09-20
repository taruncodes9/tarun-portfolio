/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,

  output: "export",

  basePath: "/tarun-portfolio",

  images: {
    unoptimized: true,
  },
};

export default nextConfig;