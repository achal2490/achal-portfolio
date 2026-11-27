import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  assetPrefix: '/achal-portfolio',
  images: { unoptimized: true },
};

export default nextConfig;
