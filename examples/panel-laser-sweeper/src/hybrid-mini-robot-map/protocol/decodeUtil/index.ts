import Store from '@/redux';

interface ICmdData {
  protocolLengthVersion: string;
  header: string;
  version: string;
  length: number;
  cmd: string;
  dataValue: string;
  check: string;
}

export const subStrToInt = (value: string, start: number, length = 2) => {
  return parseInt(value.slice(start, start + length), 16) || 0;
};

/**
 * 获取扫地机协议`标准功能`， 通用字段
 */

export const getCommonField = (value?: string): ICmdData => {
  const protocolLengthVersion = '1';

  let commonValue = '';
  let header = '';
  let version = '';
  let length = 0;
  let cmd = '';
  let dataValue = '';
  let check = '';

  let res = {
    protocolLengthVersion,
    header,
    version,
    length,
    cmd,
    dataValue,
    check,
  };

  if (!value) {
    return res;
  }

  if (protocolLengthVersion === '1') {
    commonValue = value.substring(0, 14);
    if (!value || commonValue.length !== 14) return res;
    header = commonValue.slice(0, 2);
    version = commonValue.slice(2, 4);
    length = subStrToInt(commonValue, 4, 8);
    cmd = commonValue.slice(12, 14);
    dataValue = value.slice(14, (value.length - 1) * 2);
    check = commonValue.slice((value.length - 1) * 2, value.length * 2);
  } else {
    commonValue = value.substring(0, 8);
    if (!value || commonValue.length !== 8) return res;
    header = commonValue.slice(0, 2);
    version = commonValue.slice(2, 4);
    length = subStrToInt(commonValue, 4);
    cmd = commonValue.slice(6, 8);
    dataValue = value.slice(14, (value.length - 1) * 2);
    check = value.slice((value.length - 1) * 2, value.length * 2);
  }

  res = {
    protocolLengthVersion,
    header,
    version,
    length,
    cmd,
    dataValue,
    check,
  };

  return res;
};
