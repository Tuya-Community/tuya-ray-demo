import { stringToByte } from '../stringsUtil';

/**
 * 判断输入的名称长度是否符合数据下发的长度
 * @param text
 * @param byteLength
 * @returns
 */
export const checkAreaName = (text: string, byteLength: number) => {
  // 需要判定输入的长度
  const nameByteArr = stringToByte(text);
  if (nameByteArr.length > byteLength) {
    return false;
  }
  return true;
};

/**
 * 检测是否包含Emoji表情
 * @param substring
 * @returns
 */
export const isEmojiCharacter = (substring: string) => {
  for (let i = 0; i < substring.length; i++) {
    const hs = substring.charCodeAt(i);
    if (hs >= 0xd800 && hs <= 0xdbff) {
      if (substring.length > 1) {
        const ls = substring.charCodeAt(i + 1);
        const uc = (hs - 0xd800) * 0x400 + (ls - 0xdc00) + 0x10000;
        if (uc >= 0x1d000 && uc <= 0x1f77f) {
          return true;
        }
      }
    } else if (substring.length > 1) {
      const ls = substring.charCodeAt(i + 1);
      if (ls === 0x20e3) {
        return true;
      }
    }
    if (hs >= 0x2100 && hs <= 0x27ff) {
      return true;
    }
    if (hs >= 0x2b05 && hs <= 0x2b07) {
      return true;
    }
    if (hs >= 0x2934 && hs <= 0x2935) {
      return true;
    }
    if (hs >= 0x3297 && hs <= 0x3299) {
      return true;
    }
    if (
      hs === 0xa9 ||
      hs === 0xae ||
      hs === 0x303d ||
      hs === 0x3030 ||
      hs === 0x2b55 ||
      hs === 0x2b1c ||
      hs === 0x2b1b ||
      hs === 0x2b50
    ) {
      return true;
    }
  }
  return false;
};

export default {
  checkAreaName,
  isEmojiCharacter,
};
