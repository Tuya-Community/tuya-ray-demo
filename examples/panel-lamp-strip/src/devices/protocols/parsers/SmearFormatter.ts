/* eslint-disable no-shadow */
import { utils } from '@ray-js/panel-sdk';
import { lampSchemaMap } from '@/devices/schema';
import { log } from '@/utils';

/** 调光器模式 */
export enum DimmerMode {
  white,
  colour,
  colourCard,
  combination,
}

export type DimmerTab = keyof typeof DimmerMode;

/** 涂抹类型 */
enum SmearMode {
  all,
  single,
  clear,
}

interface ColourData {
  hue: number;
  saturation: number;
  value: number;
}

/** 调光器的value类型 */
export interface DimmerValue {
  colour?: ColourData;
  colourCard?: ColourData;
  combination?: ColourData[];
}
/** 涂抹dp数据 */
export interface SmearDataType {
  /** 版本号 */
  version: number;
  /** 模式 (0: 白光, 1: 彩光, 2: 色卡, 3: 组合) */
  dimmerMode: DimmerMode;
  /** 涂抹效果 (0: 无, 1: 渐变) */
  effect?: number;
  /** 灯带UI段数 */
  ledNumber?: number;
  /** 涂抹动作 (0: 油漆桶, 1: 涂抹, 2: 橡皮擦) */
  smearMode?: SmearMode;
  /** 彩光色相 */
  hue?: number;
  /** 彩光饱和度 */
  saturation?: number;
  /** 彩光亮度 */
  value?: number;
  /** 白光亮度 */
  brightness?: number;
  /** 白光色温 */
  temperature?: number;
  /** 当前涂抹色是否是彩光 */
  isColour?: boolean;
  /** 点选类型(0: 连续，1: 单点) */
  singleType?: number;
  /** 当次操作的灯带数 */
  quantity?: number;
  /** 组合类型 */
  combineType?: number;
  /** 颜色组合 */
  combination?: ColourData[];
  /** 编号 */
  indexs?: Set<number>;
}

const { toFixed, generateDpStrStep, numToHexString } = utils;
const { paint_colour_data } = lampSchemaMap;

function nToHS(value = 0, num = 2) {
  return numToHexString(value || 0, num);
}
/** 转化为number */
function toN(n: any) {
  return +n || 0;
}
function avgSplit(str = '', num = 1) {
  const reg = new RegExp(`.{1,${num}}`, 'g');
  return str.match(reg) || [];
}

function sToN(str = '', base = 16) {
  return parseInt(str, base) || 0;
}

const _defaultValue = {
  version: 0,
  dimmerMode: DimmerMode.colour,
  effect: 0,
  smearMode: SmearMode.all,
  hue: 0,
  saturation: 1000,
  value: 1000,
  brightness: 1000,
  temperature: 1000,
  ledNumber: 20,
} as SmearDataType;

export default class SmearFormater {
  uuid: string;

  defaultValue: SmearDataType;

  constructor(uuid = paint_colour_data.code, defaultValue = _defaultValue) {
    this.uuid = uuid;
    this.defaultValue = defaultValue;
  }

  parser(val = ''): SmearDataType {
    const validVal = (val || '').slice(0, 1) === '0';
    if (!val || typeof val !== 'string' || !validVal) {
      console.warn(paint_colour_data.code, 'dp数据有问题，无法解析', val);
      return this.defaultValue;
    }
    const step = generateDpStrStep(val);

    const version = toN(step(2).value); // 版本号
    const dimmerMode = toN(step(2).value); // 调节模式
    const effect = toN(step(2).value); // 调节效果
    const ledNumber = toN(step(2).value); // 段数
    const result = {
      version,
      dimmerMode,
      effect,
      ledNumber,
    } as SmearDataType;

    if (dimmerMode === DimmerMode.white) {
      // 白光
      result.smearMode = toN(step(2).value); // 调节动作
      result.brightness = toN(step(4).value); // B亮度
      result.temperature = toN(step(4).value); // T色温
    } else if ([DimmerMode.colour, DimmerMode.colourCard].includes(dimmerMode)) {
      // 彩光/色卡
      const smearMode = toN(step(2).value); // 调节动作
      result.smearMode = smearMode;
      result.hue = toN(step(4).value); // H
      result.saturation = toN(step(4).value); // S
      result.value = toN(step(4).value); // V
      if ([SmearMode.clear, SmearMode.single].includes(smearMode)) {
        const singleDataStr = toFixed(toN(step(2).value).toString(2), 8); // 段选
        const singleType = sToN(singleDataStr.slice(0, 1), 2);
        result.singleType = singleType; // 段选 => 0：连续；1：不连续；
        result.quantity = sToN(singleDataStr.slice(1), 2); // 段选 => 连续时，无意义；不连续时，代表段的总数
        let indexItem = step(2);
        const indexs = new Set<number>();
        while (!indexItem.done) {
          indexs.add(toN(indexItem.value - 1));
          indexItem = step(2);
        }
        if (indexItem.done) {
          indexItem.value !== null && indexs.add(toN(indexItem.value - 1));
        }
        result.indexs = indexs;
      }
    } else if (dimmerMode === DimmerMode.combination) {
      result.smearMode = SmearMode.all;
      // 颜色组合
      result.combineType = toN(step(2).value);

      const getHSV = () => {
        const hue = toN(step(4).value);
        const saturation = toN(step(4).value);
        const lastItem = step(4);
        const value = toN(lastItem.value);
        return { hue, saturation, value, done: lastItem.done };
      };
      result.combination = [];
      let _done = false;
      while (!_done) {
        const { hue, saturation, value, done } = getHSV();
        const res = { hue, saturation, value };
        result.combination.push(res);
        _done = done;
      }
    }
    log(result, 'SmearDataType result');
    return result;
  }

  formatter(_data: SmearDataType): string {
    const data = {
      ...this.defaultValue,
      ..._data,
    };
    const {
      version = 0,
      dimmerMode = DimmerMode.colour,
      effect = 0,
      ledNumber = 20,
      smearMode = SmearMode.all,
      hue = 0,
      saturation = 0,
      value = 0,
      brightness = 0,
      temperature = 0,
      combineType = 0,
      combination = [],
    } = data;

    // 白光不支持渐变
    const _effect = nToHS(dimmerMode === DimmerMode.white ? 0 : effect);
    let result = `${nToHS(version)}${nToHS(dimmerMode)}${_effect}${nToHS(ledNumber)}`;

    if (dimmerMode === DimmerMode.white) {
      // 白光
      result += `${nToHS(smearMode)}${nToHS(brightness, 4)}${nToHS(temperature, 4)}`;
    } else if ([DimmerMode.colour, DimmerMode.colourCard].includes(dimmerMode)) {
      // 彩光/色卡
      const isClear = smearMode === SmearMode.clear;
      if (isClear) {
        // 橡皮擦关灯下发颜色全部为0
        const _hue = 0;
        const _saturation = 0;
        const _value = 0;
        result += `${nToHS(smearMode)}${nToHS(_hue, 4)}${nToHS(_saturation, 4)}${nToHS(_value, 4)}`;
      } else {
        result += `${nToHS(smearMode)}${nToHS(hue, 4)}${nToHS(saturation, 4)}${nToHS(value, 4)}`;
      }
      if ([SmearMode.single, SmearMode.clear].includes(smearMode)) {
        const { singleType = 1, indexs = new Set() } = data;
        const quantity = indexs.size;
        const singleDataStr = `${nToHS(
          parseInt(`${singleType}${toFixed(quantity.toString(2), 7)}`, 2)
        )}`;
        const indexsStr = `${[...indexs].reduce((acc, cur) => acc + nToHS(cur + 1), '')}`;
        result += `${singleDataStr}${indexsStr}`;
      }
    } else if (dimmerMode === DimmerMode.combination) {
      // 组合
      const colors = combination.map(
        item => `${nToHS(item.hue, 4)}${nToHS(item.saturation, 4)}${nToHS(item.value, 4)}`
      );
      result += `${nToHS(combineType)}${colors.join('')}`;
    }

    log(new SmearFormater().parser(result), 'SmearDataType formatter');
    return result;
  }
}
