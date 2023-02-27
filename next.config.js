/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  assetPrefix: isProd ? '/next-gpt-instructions/' : '',
  reactStrictMode: true,
};

module.exports = nextConfig;
