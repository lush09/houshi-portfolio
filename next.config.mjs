/** @type {import('next').NextConfig} */
const nextConfig = {
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

// Only add static export config in production
if (process.env.NODE_ENV === 'production') {
  nextConfig.output = 'export';
  nextConfig.basePath = '/houshi-portfolio';
  nextConfig.assetPrefix = '/houshi-portfolio/';
}

export default nextConfig
