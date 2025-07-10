// utils/image.ts
export const getImagePath = (path: string): string => {
    // Remove leading slash if present
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    
    // In production (GitHub Pages), add the base path
    if (process.env.NODE_ENV === 'production') {
      return `/houshi-portfolio/${cleanPath}`;
    }
    
    // In development, use the path as-is (images are served from public directory)
    return `/${cleanPath}`;
  };