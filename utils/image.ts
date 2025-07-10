// utils/image.ts
export const getImagePath = (path: string): string => {
    // Remove leading slash if present
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    
    // Add the base path for all environments
    return `/houshi-portfolio/${cleanPath}`;
  };