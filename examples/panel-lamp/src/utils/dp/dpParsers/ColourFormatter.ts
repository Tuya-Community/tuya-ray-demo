/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { transform } from './transform';

export default class ColorFormatter {
  uuid: string;
  defaultValue: {
    hue: number;
    saturation: number;
    value: number;
  };

  constructor(uuid = 'colour_data', defaultValue = { hue: 0, saturation: 1000, value: 1000 }) {
    this.defaultValue = {
      hue: 0,
      saturation: 1000,
      value: 1000,
    };
    this.uuid = uuid;
    if (defaultValue) {
      this.defaultValue = defaultValue;
    }
  }

  equal(source, target) {
    return source === target;
  }

  parser(value = '') {
    // 自定义解析
    if (value.length !== 12) {
      console.warn('数据有问题，无法解析');
      return this.defaultValue;
    }
    const generator = transform(value);
    generator.next();
    const step4 = () => {
      return generator.next(4);
    };
    const res = {
      hue: step4().value,
      saturation: step4().value,
      value: step4().value,
    };
    console.log('value', value, res);
    return res;
  }

  to16(value) {
    let result = Number(value).toString(16);
    if (result.length < 4) {
      result = result.padStart(4, '0');
    }
    return result;
  }

  formatter(data) {
    // 自定义格式转为16进制
    const { hue, saturation, value } = data;
    return `${this.to16(hue)}${this.to16(saturation)}${this.to16(value)}`;
  }
}
