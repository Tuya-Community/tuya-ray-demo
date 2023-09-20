/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { transform } from './transform';

export default class ControlFormatter {
  uuid: string;
  defaultValue: {
    hue: number;
    saturation: number;
    value: number;
    bright: number;
    temp: number;
  };

  constructor(uuid = 'control_data', defaultValue = null) {
    this.defaultValue = {
      hue: 360,
      saturation: 1000,
      value: 1000,
      bright: 0,
      temp: 0,
    };
    this.uuid = uuid;
    if (defaultValue) {
      this.defaultValue = defaultValue;
    }
  }

  equal(source, target) {
    return source === target;
  }

  parser(val = '') {
    // 自定义解析
    const { length } = val;
    if (!length) {
      console.log('数据有问题，无法解析');
      return this.defaultValue;
    }
    const generator = transform(val);
    generator.next();
    // 版本
    const mode = parseInt(`${generator.next(1).value}`, 16);
    const hue = parseInt(`${generator.next(4).value}`, 16);
    const saturation = parseInt(`${generator.next(4).value}`, 16);
    const value = parseInt(`${generator.next(4).value}`, 16);
    const temp = parseInt(`${generator.next(4).value}`, 16);
    const bright = parseInt(`${generator.next(4).value}`, 16);
    return {
      /**
       * 模式: 0跳变、1呼吸, 0x0-0x1
       */
      mode,
      /**
       * 色度: 0-360
       */
      hue,
      /**
       * 饱和: 0-1000
       */
      saturation,
      /**
       * 明度: 0-1000
       */
      value,
      /**
       * 白光亮度: 0-1000
       */
      temp,
      /**
       * 色温值: 0-1000
       */
      bright,
    };
  }

  to16(value, length) {
    let result = Number(value).toString(16);
    if (result.length < length) {
      result = result.padStart(length, '0');
    }
    return result;
  }

  formatter(data) {
    // 自定义格式转为16进制
    const { hue = 360, saturation = 1000, value = 1000, bright = 0, temp = 0 } = data;
    const hStr = this.to16(hue, 4);
    const sStr = this.to16(saturation, 4);
    const vStr = this.to16(value, 4);
    const bStr = this.to16(bright, 4);
    const tStr = this.to16(temp, 4);
    return `1${hStr}${sStr}${vStr}${bStr}${tStr}`;
  }
}
