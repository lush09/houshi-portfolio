// utils/file.ts
export const getFileUrl = (filename: string): string => {
  // Remove leading slash if present
  const cleanFilename = filename.startsWith('/') ? filename.slice(1) : filename;
  
  // In production (GitHub Pages), add the base path
  if (process.env.NODE_ENV === 'production') {
    return `/houshi-portfolio/${cleanFilename}`;
  }
  
  // In development, use the path as-is (files are served from public directory)
  return `/${cleanFilename}`;
}; 