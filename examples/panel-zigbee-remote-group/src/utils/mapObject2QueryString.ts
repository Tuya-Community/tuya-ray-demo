export const mapObject2QueryString = (path: string, obj: Record<string, string | number>) => {
  const queryString = Object.keys(obj)
    .map(key => `${key}=${obj[key]}`)
    .join('&');
  return `${path}?${queryString}`;
};
