import { lampSchemaMap } from '@/devices/schema';
import { transform } from './transform';

const { switch_gradient } = lampSchemaMap;

export default class SwitchGradientFormatter {
  uuid: string;
  defaultValue: {
    version: number;
    on: number;
    off: number;
  };

  constructor(uuid = switch_gradient.code, defaultValue = null) {
    this.defaultValue = {
      version: 0,
      on: 800,
      off: 800,
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
      // eslint-disable-next-line no-console
      console.log(`DP ${this.uuid} 出现异常数据 %s，无法解析`, val);
      return this.defaultValue;
    }
    const generator = transform(val);
    generator.next();
    const version = parseInt(`${generator.next(2).value}`, 16);
    const onStr = generator.next(6).value;
    const on = parseInt(`${onStr}`, 16);
    const offStr = generator.next(6).value;
    const off = parseInt(`${offStr}`, 16);
    return {
      /**
       * 版本号 0x00 初始版本
       */
      version,
      /**
       * 开灯渐变时长
       */
      on,
      /**
       * 关灯渐变时长
       */
      off,
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
    const { on = 0, off = 0 } = data;
    const version = 0;
    const versionStr = this.to16(version, 2);
    const onStr = this.to16(on, 6);
    const offStr = this.to16(off, 6);
    return `${versionStr}${onStr}${offStr}`;
  }
}
