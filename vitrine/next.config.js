/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://service-proxy:8000/api/:path*'
      }
    ]
  }
}

module.exports = nextConfig
