// utils/file.ts
export const getFileUrl = (filename: string): string => {
  // Remove leading slash if present
  const cleanFilename = filename.startsWith('/') ? filename.slice(1) : filename;
  
  // Add the base path for all environments
  return `/houshi-portfolio/${cleanFilename}`;
}; 