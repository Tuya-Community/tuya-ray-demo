import { getSystemInfoSync, platform } from "@ray-js/ray";
const systemInfo = getSystemInfoSync();


export const getStatusBarHeight = () => {
  return systemInfo.statusBarHeight;
};


export const JsonUtil = {
  parseJSON(str) {
    let rst;
    if (str && {}.toString.call(str) === '[object String]') {
      try {
        rst = JSON.parse(str);
      } catch (e) {
        try {
          // eslint-disable-next-line
          rst = eval(`(${str})`);
        } catch (e2) {
          rst = str;
        }
      }
    } else {
      rst = typeof str === 'undefined' ? {} : str;
    }

    return rst;
  },
};


export const rpx2pxNum = (maybeRpx: string | number) => {
  if (typeof maybeRpx === 'string') {
    if (maybeRpx.endsWith('rpx')) {
      const value = Number(maybeRpx.replace(/rpx/g, ''));
      if (platform.isMiniProgram) {
        return (value / 750) * systemInfo.windowWidth;
      }
      if (platform.isWeb) {
        return value / 2;
      }
    } else if (maybeRpx.endsWith('px')) {
      const value = Number(maybeRpx.replace(/px/g, ''));
      return Number(value);
    }
  } else {
    if (platform.isMiniProgram) {
      return (maybeRpx / 750) * systemInfo.windowWidth;
    }
    if (platform.isWeb) {
      return maybeRpx / 2;
    }
  }
  return Number(maybeRpx);
};

export const px2rpxNum = (maybeRpx: string | number) => {
  if (typeof maybeRpx === 'string') {
    if (maybeRpx.endsWith('rpx')) {
      const value = Number(maybeRpx.replace(/rpx/g, ''));
      return value;
    }
    if (maybeRpx.endsWith('px')) {
      const value = Number(maybeRpx.replace(/px/g, ''));
      if (platform.isMiniProgram) {
        return (value * 750) / systemInfo.windowWidth;
      }
      if (platform.isWeb) {
        return value * 2;
      }
    }
  }
  if (platform.isMiniProgram) {
    return (Number(maybeRpx) * 750) / systemInfo.windowWidth;
  }
  if (platform.isWeb) {
    return Number(maybeRpx) * 2;
  }
  return Number(maybeRpx);
};

export const promisify = (func: Function) => {
  return function (...args): Promise<any> {
    return new Promise((resolve, reject) => {
      func(Object.assign({}, ...args, { success: resolve, fail: reject }));
    })
  }
}

export const sleep = (time: number) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(time);
    }, time);
  });
}

export function c2fScale(c: number) {
  return Math.round(c * 1.8 * 100) / 100;
}

export function f2cScale(f: number) {
  return Math.round(f / 1.8 * 100) / 100;
}

export const reverseScaleNumber = (scale: number, value: number) => {
  while (scale > 0) {
    value *= 10;
    scale--;
  }
  return Number(value);
}

export const setGlobalStyleVariables = (uniqueKey: string | string[], value: number | number[], decimal: boolean) => {

  function getStyleFromValue(uniqueKey, singleValue: number) {
    if (isNaN(singleValue)) return console.error('value must be a number');

    // 获取value的整数位 和 小数位 最多两位
    const [intValue, decimalValue = "0"] = (Math.round(singleValue * 100) / 100).toString().split('.');
    const style = {};
    if (decimal) {
      style[`--${uniqueKey}-int`] = intValue;
      style[`--${uniqueKey}-decimal`] = decimalValue || "0";
    } else {
      style[`--${uniqueKey}`] = intValue;
    }
    return style;
  }

  if (Array.isArray(value)) {
    const [start, end] = value;
    if (uniqueKey.length > 1) {
      const style = {
        ...getStyleFromValue(`${uniqueKey[0]}`, start),
        ...getStyleFromValue(`${uniqueKey[1]}`, end),
      };
      // @ts-ignore
      ty.setPageStyle({ style: style })
    } else {
      throw new Error("uniqueKey must be an array when value is an array");
    }
  } else {
    const style = getStyleFromValue(uniqueKey, value);
    // @ts-ignore
    ty.setPageStyle({ style: style })
    return uniqueKey;
  }
}