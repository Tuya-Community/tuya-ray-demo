export const isUndefined = (val: any): val is undefined => typeof val === 'undefined';

export const isNull = (val: any): val is null => val === null;

/**
 * 值不存在
 */
export const isNullOrUndefined = (val: any) => isNull(val) || isUndefined(val);

/**
 * 值存在
 */
export const isNotNullOrUndefined = (val: any) => !isNullOrUndefined(val);

export const isJSON = (str: string) => {
  if (typeof str === 'string') {
    try {
      const obj = JSON.parse(str);
      if (typeof obj === 'object' && obj) {
        return true;
      } else {
        return false;
      }
    } catch (e) {
      return false;
    }
  } else {
    return false;
  }
};

/**
 * 将数组等分割
 */
export const splitArray = <T>(list: T[], interval = 4) => {
  const array = getArray(list);
  const result: T[][] = [];
  let temp: T[] = [];
  for (const item of array) {
    temp.push(item);
    if (temp.length === interval) {
      result.push(temp);
      temp = [];
    }
  }
  if (temp.length) {
    result.push(temp);
  }

  return result;
};

export const getArray = <T>(array: T[]) => (Array.isArray(array) ? array : []);

export const toArray = <T>(array: T | T[]): T[] =>
  Array.isArray(array) ? [].concat(array) : array ? [array] : [];

/**
 * 对象数组去重
 */
export const dedup = <T>(array: T[], compare: (a: T, b: T) => boolean) =>
  getArray(array).reduce(
    (acc, item) => (acc.find(i => compare(i, item)) ? acc : acc.concat(item)),
    []
  );

export const buildMap = <T>(arr: T[], key: keyof T): Record<string, T> =>
  getArray(arr).reduce(
    (acc, item) => (isNotNullOrUndefined(item[key]) ? { ...acc, [item[key] as any]: item } : acc),
    {}
  );

export const merge = <T>(...objs: Array<Partial<T>>): Partial<T> => {
  let result: Partial<T> = {};
  for (const obj of objs) {
    result = { ...result, ...(obj || {}) };
  }
  return result;
};
