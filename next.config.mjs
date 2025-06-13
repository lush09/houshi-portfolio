/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/houshi-porfolio',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
