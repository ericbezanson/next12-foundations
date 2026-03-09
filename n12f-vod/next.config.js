/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['placecage.lucidinternets.com'],
  },
}

module.exports = nextConfig
