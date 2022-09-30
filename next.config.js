/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;

module.exports = {
  images: {
    domains: ["cdn6.f-cdn.com", "media-exp1.licdn.com", "images.pexels.com"],
  },
}