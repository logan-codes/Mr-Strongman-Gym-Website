import type { NextConfig } from "next";
import path from "node:path";


const isProd = process.env.NODE_ENV === 'production';
const repoName = '/Mr-Strongman-Gym-Website'; // Change this to your actual repo name

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? repoName : '',
  assetPrefix: isProd ? repoName : '',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
  },
  outputFileTracingRoot: path.resolve(__dirname, '../../'),
};

export default nextConfig;
