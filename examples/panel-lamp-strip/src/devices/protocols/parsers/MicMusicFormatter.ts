import { utils } from '@ray-js/panel-sdk';
import { lampSchemaMap } from '@/devices/schema';
import { log } from '@/utils';
const { dreamlightmic_music_data } = lampSchemaMap;

const { generateDpStrStep } = utils;

type TMusic = {
  v: number; // 版本
  power: boolean;
  id: number;
  isLight: number;
  mode: number;
  speed: number;
  sensitivity: number; // 灵敏度
  a: number;
  b: number;
  c: number;
  brightness: number;
  colors: { hue: number; saturation: number }[];
};

export default class MicMusicFormater {
  uuid: string;

  defaultValue: TMusic = {
    v: 1,
    power: true,
    id: 0,
    isLight: 0, // 0 无声时灯灭、 1无声时灯维持10%亮度
    mode: 3, // 0跳变 1渐变 2 呼吸 3 闪烁
    speed: 100,
    sensitivity: 50,
    a: 0,
    b: 0,
    c: 0,
    brightness: 100,
    colors: [
      { hue: 0, saturation: 100 },
      { hue: 120, saturation: 100 },
      { hue: 240, saturation: 100 },
      { hue: 60, saturation: 100 },
      { hue: 80, saturation: 100 },
      { hue: 280, saturation: 100 },
    ],
  };

  constructor(uuid = dreamlightmic_music_data.code, defaultValue = {} as TMusic) {
    this.uuid = uuid;
    this.defaultValue = defaultValue;
  }

  /**
   * 解析场景各个单元
   * @param generator generator 函数
   */
  parseUnits(step) {
    const result = [];
    for (; true; ) {
      let hue = step(4).value;
      // eslint-disable-next-line prefer-const
      let { value: saturation, done } = step();
      hue = parseInt(hue, 16);
      saturation = parseInt(saturation, 16);
      result.push({
        hue,
        saturation,
      });
      if (done) {
        break;
      }
    }
    return result;
  }

  parser(value: string) {
    const { length } = value;
    if (!length || value.includes('=')) {
      console.warn(dreamlightmic_music_data.code, 'dp数据有问题，无法解析', value);
      return this.defaultValue;
    }
    const step = generateDpStrStep(value);
    const v = step(2).value;
    const power = step(2).value;
    let id = step(2).value;
    const opt = Array.from(
      step(2)
        .value.toString(2)
        .padStart(8, '0')
    ).map(i => Number(i));
    const isLight = parseInt(
      opt
        .slice(0, 4)
        .join('')
        .padStart(8, '0'),
      2
    );
    const mode = parseInt(
      opt
        .slice(4)
        .join('')
        .padStart(8, '0'),
      2
    );
    // 摇滚、爵士、古典 特殊处理
    if (id === 0) {
      if (isLight === 0 && mode === 3) id = 0;
      if (isLight === 0 && mode === 2) id = 1;
      if (isLight === 1 && mode === 2) id = 2;
    } else if (id === 1) id = 3;
    else if (id === 2) id = 4;
    else if (id === 3) id = 5;

    const speed = step(2).value;
    const sensitivity = step(2).value;
    const a = step(2).value;
    const b = step(2).value;
    const c = step(2).value;
    const brightness = step(2).value;
    const colors = this.parseUnits(step);
    return {
      v,
      power: Boolean(power),
      id,
      isLight,
      mode,
      sensitivity,
      speed,
      a,
      b,
      c,
      brightness,
      colors,
    };
  }

  to16(value: number, length: number): string {
    let result = Number(value).toString(16);
    if (result.length < length) {
      result = result.padStart(length, '0');
    }
    return result;
  }

  formatter(data: TMusic): string {
    const { v, power, isLight, mode, sensitivity, speed, a, b, c, brightness, colors } = data;
    const fixedIds = [0, 0, 0, 1, 2, 3];
    const id = fixedIds[data.id];
    const lightByte = parseInt(String(isLight), 10)
      .toString(2)
      .padStart(4, '0');
    const modeByte = parseInt(String(mode), 10)
      .toString(2)
      .padStart(4, '0');
    const optNum = parseInt(lightByte + modeByte, 2);

    const vHex = this.to16(v, 2);
    const powerHex = this.to16(Number(power), 2);
    const idHex = this.to16(id, 2);
    const optNumHex = this.to16(optNum, 2);
    const speedHex = this.to16(speed, 2);
    const sensitivityHex = this.to16(sensitivity, 2);
    const aHex = this.to16(a, 2);
    const bHex = this.to16(b, 2);
    const cHex = this.to16(c, 2);
    const brightnessHex = this.to16(brightness, 2);

    if (colors && colors.length) {
      const units = colors
        .map(({ hue, saturation }) => `${this.to16(hue, 4)}${this.to16(saturation, 2)}`)
        .join('');
      const res = `${vHex}${powerHex}${idHex}${optNumHex}${speedHex}${sensitivityHex}${aHex}${bHex}${cHex}${brightnessHex}${units}`;
      log(dreamlightmic_music_data.code, 'formatter', data);
      return res;
    }
    const res = `${vHex}${powerHex}${idHex}${optNumHex}${speedHex}${sensitivityHex}${aHex}${bHex}${cHex}`;
    log(dreamlightmic_music_data.code, 'formatter1', data);
    return res;
  }
}
