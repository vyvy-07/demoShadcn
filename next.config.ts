import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'api.nongthonviet.com.vn',
      'vinhlong.dcs.vn',
      // 'https://cms-api-vinhlong.ngn.vn',
      'cms-api-vinhlong.ngn.vn',
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'cms-api-vinhlong.ngn.vn',
        pathname: '/media/**',
      },
    ],
    dangerouslyAllowSVG: true,
  },
};

export default nextConfig;
