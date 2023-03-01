/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['image.tmdb.org', 'themoviedb.org'],
    // To prevent vercel limitations
    unoptimized: true,
  }
}

module.exports = nextConfig
