export const getArray = <T>(array: T[]) => (Array.isArray(array) ? array : []);

export const toArray = <T>(array: T | T[]): T[] =>
  Array.isArray(array) ? [].concat(array) : array ? [array] : [];

/**
 * 对象数组去重
 */
export const dedup = <T>(array: T[], compare: (a: T, b: T) => boolean) =>
  array.reduce((acc, item) => (acc.find(i => compare(i, item)) ? acc : acc.concat(item)), []);

export const buildMap = <T>(arr: T[], key: keyof T): Record<string, T> =>
  arr.reduce((acc, item) => (item[key] ? { ...acc, [item[key] as any]: item } : acc), {});
