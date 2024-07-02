/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
import { generateDpStrStep } from '@ray-js/panel-sdk/lib/utils/dp/parser';

import { sToN, nToHS, toN, toFixed } from './utils';
import { ESceneDpCode } from '../types';

interface SceneValueType {
  /** 版本号(1byte) */
  version?: number;
  /** 场景号(自定义200+)(1byte) */
  id: number;
  /** 变化方式(1byte) */
  mode: number;
  /** 单元切换间隔(1byte) */
  // intervalTime: number;
  /** 单元变化时间(1byte) */
  // changeTime: number;
  speed?: number;
  /** 混合的场景号 */
  mixedIds?: number[];
  /**
   * Option_A(1byte)
   * 非混合情景模式下:
   *    segmented   7bit: 0-全段、1-分段
   *    loop        6bit: 0-不循环、1-循环
   *    excessive   5bit: 0-不过渡、1-过度
   *    direction   4bit: 0-顺时针方向、1-逆时针方向
   *    expand      3bit_2bit: 00-默认模式、01-拓展1、10-拓展2、11-拓展3
   *                           流星情景: 01-流星,10-流星雨,11-幻彩流星
   *                           开合情景: 01-同时,10-交错
   *    reserved_1  1bit: 无
   *    reserved_2  0bit: 无
   * 混合情景模式下: 场景号
   */
  // optionA?: number;
  segmented?: number;
  loop?: number;
  excessive?: number;
  direction?: number;
  expand?: number;
  reserved1?: number;
  reserved2?: number;
  /** Option_B(一期预留，二期混合模式用ABC表场景号)(1byte) */
  // optionB?: number;
  /** Option_C(一期预留，二期混合模式用ABC表场景号)(1byte) */
  // optionC?: number;
  /** 亮度(所有颜色公用一个亮度)(1byte) */
  brightness: number;
  /** 颜色单元(每个颜色3byte, hue: 2byte, saturation: 1byte) */
  colors: SceneColorType[];
}

interface SceneColorType {
  hue: number;
  saturation: number;
}
export default class SmearFormatter {
  uuid: string;

  defaultValue: any;

  constructor(uuid = ESceneDpCode.dreamlight_scene_mode, defaultValue = {}) {
    this.uuid = uuid;
    this.defaultValue = defaultValue;
  }

  parser(val = '') {
    if (!val || typeof val !== 'string') {
      console.warn(ESceneDpCode.dreamlight_scene_mode, 'dp数据有问题，无法解析', val);
      return this.defaultValue;
    }

    const step = generateDpStrStep(val);

    const version = step(2).value;
    const id = step(2).value;
    const mode = step(2).value;
    const intervalTime = step(2).value;
    const changeTime = step(2).value;
    const speed = intervalTime;

    const result = {
      version,
      id,
      mode,
      speed,
    } as SceneValueType;

    if (mode === 20) {
      // 混合模式
      const optionA = step(2).value;
      const optionB = step(2).value;
      const optionC = step(2).value;
      result.mixedIds = [optionA, optionB, optionC];
    } else {
      // 非混合模式
      const optionA = step(2).value;
      const optionAStr = toFixed(optionA.toString(2), 8);

      const st = generateDpStrStep(optionAStr);
      result.segmented = sToN(st(1).value, 2);
      result.loop = sToN(st(1).value, 2);
      result.excessive = sToN(st(1).value, 2);
      result.direction = sToN(st(1).value, 2);
      result.expand = sToN(st(1).value, 2);
      result.reserved1 = sToN(st(1).value, 2);
      result.reserved2 = sToN(st(1).value, 2);
      // 暂时用不到的数据
      const optionB = step(2).value;
      const optionC = step(2).value;
    }
    result.brightness = step(2).value * 10;
    const getHS = () => {
      const hue = toN(step(4).value);
      const lastItem = step(2);
      const saturation = toN(lastItem.value) * 10;
      return { hue, saturation, done: lastItem.done };
    };

    result.colors = [];
    let _done = false;
    while (!_done) {
      const { hue, saturation, done } = getHS();
      const res = { hue, saturation };
      result.colors.push(res);
      _done = done;
    }
    // console.log('SmearFormatter parser', result);
    return result;
  }

  formatter(data: SceneValueType): string {
    const {
      version = 1,
      id,
      mode = 0,
      speed = 50,
      mixedIds = [],
      segmented = 0,
      loop = 0,
      excessive = 0,
      direction = 0,
      expand = 0,
      reserved1 = 0,
      reserved2 = 0,
      brightness = 0,
      colors = [{ hue: 0, saturation: 0 }],
    } = data;
    const intervalTime = speed;
    const changeTime = speed;

    let result = `${nToHS(version)}${nToHS(id)}${nToHS(mode)}${nToHS(intervalTime)}${nToHS(
      changeTime
    )}`;

    if (mode === 20) {
      // 混合模式
      result += mixedIds.map(v => `${nToHS(v)}`).join('');
    } else {
      // 非混合模式
      const optionA = nToHS(
        parseInt(
          `${segmented}${loop}${excessive}${direction}${toFixed(
            expand.toString(2),
            2
          )}${reserved1}${reserved2}`,
          2
        )
      );
      const optionB = nToHS(0);
      const optionC = nToHS(0);
      result += `${optionA}${optionB}${optionC}`;
    }
    if (colors.length !== 0) {
      if (colors[0].hue === undefined || colors[0].saturation === undefined) {
        throw new Error('颜色数据有误，无法生成');
      }
    }
    const colorsString = colors
      .map(d => `${nToHS(d.hue, 4)}${nToHS(Math.round(d.saturation / 10))}`)
      .join('');
    result += `${nToHS(Math.round(brightness / 10))}${colorsString}`;

    // console.log('SmearFormatter formatter', result);
    return result;
  }
}
