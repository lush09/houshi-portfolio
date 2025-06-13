// utils/image.ts
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