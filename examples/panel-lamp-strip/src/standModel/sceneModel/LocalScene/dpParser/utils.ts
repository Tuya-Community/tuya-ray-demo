export const toFixed = (str, count) => {
  return ''
    .concat('0'.repeat(count))
    .concat(str)
    .slice(-1 * count);
};

/**
 * 等同于原来的 decToHex
 * @example
 * numToHexString(111)
 * // '6f'
 * @example
 * numToHexString(15)
 * // '0f'
 * @param {Number} dec, a number
 * @returns {String} a string which converts from the `str`, which every char is a hex char
 */
export const numToHexString = (num, padding) => {
  const hex = Number(num).toString(16);
  return toFixed(hex, padding);
};

export function sToN(str = '', base = 16) {
  return parseInt(str, base) || 0;
}

export function nToHS(value = 0, num = 2) {
  return numToHexString(value || 0, num);
}

export function toN(n: any) {
  return +n || 0;
}
