/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['placecage.lucidinternets.com', 'image.tmdb.org'],
  },
}

module.exports = nextConfig
