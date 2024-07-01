/* eslint-disable no-shadow */
import DreamlightSceneMode from './localScene__dreamlight_scene_mode';
import { ESceneDpCode } from '../types';

export class SceneParser {
  private dpCode: string;
  private ins: DreamlightSceneMode;

  constructor(lampSchemaMap) {
    const isStr = typeof lampSchemaMap === 'string';
    this.dpCode = lampSchemaMap;
    if (!isStr) {
      // TODO: 如果设备中定义的情景 dp code 不存在，添加其他 dp code
      const dpCode = lampSchemaMap[ESceneDpCode.dreamlight_scene_mode]?.code;
      this.dpCode = dpCode;
    }
    if (!this.dpCode) {
      throw new Error('dpCode is empty, please set dpCode');
    }
    switch (this.dpCode) {
      case ESceneDpCode.dreamlight_scene_mode:
        this.ins = new DreamlightSceneMode() as DreamlightSceneMode;
        break;
      // TODO: 如果设备中定义的情景 dp code 不存在，添加情景解析函数
      default:
        throw new Error(`${JSON.stringify(this.dpCode)}, dpCode is not supported`);
    }
  }

  parser(dpStr) {
    return this.ins.parser(dpStr);
  }

  formatter(dpData) {
    return this.ins.formatter(dpData);
  }
}

export default SceneParser;
