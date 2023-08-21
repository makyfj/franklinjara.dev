/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["i.scdn.co", "avatars.githubusercontent.com"],
  },
}

module.exports = nextConfig
