export const prefix = process.env.NODE_ENV === 'production' ? '/portfolio' : '';

export const withBasePath = (path: string) => {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${prefix}${normalized}`;
};
