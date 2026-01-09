/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  // Generate a static site (no server) for GitHub Pages
  output: 'export',

  // Make next/image compatible with static export
  images: {
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
  },

  // Ensure links and assets work under /portfolio on GitHub Pages
  basePath: isProd ? '/portfolio' : '',
  assetPrefix: isProd ? '/portfolio/' : '',

  // Helps with GH Pages routing
  trailingSlash: true,
};

export default nextConfig;
