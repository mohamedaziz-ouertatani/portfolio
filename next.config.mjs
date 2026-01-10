import bundleAnalyzer from '@next/bundle-analyzer'

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})

/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  // Enable React strict mode (recommended)
  reactStrictMode: true,

  // Static export for GitHub Pages (no Node server)
  output: 'export',

  // next/image is not compatible with GH Pages unless unoptimized
  images: {
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
  },

  // Required for GitHub Pages when repo name ≠ username.github.io
  basePath: isProd ? '/portfolio' : '',
  assetPrefix: isProd ? '/portfolio/' : '',

  // Fix routing issues on static hosts
  trailingSlash: true,
};

export default withBundleAnalyzer(nextConfig);
