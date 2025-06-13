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

export const getImagePath = (path: string): string => {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // In production (GitHub Pages), add the base path
  if (process.env.NODE_ENV === 'production') {
    return `/houshi-porfolio/${cleanPath}`;
  }
  
  // In development, use the path as-is
  return `/${cleanPath}`;
};

export default nextConfig
