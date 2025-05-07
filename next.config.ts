import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['api.nongthonviet.com.vn', 'vinhlong.dcs.vn'],
  },
};

export default nextConfig;
