import { SmartDeviceSchema } from '@/typings/sdm';
import { SmartDeviceModel } from '@ray-js/panel-sdk';

// SmartDevices 定义来自于 typings/sdm.d.ts，非 TypeScript 开发者可忽略
export const devices = {
  /**
   * 此处建议以智能设备的名称作为键名赋值
   */
  ipc: new SmartDeviceModel<SmartDeviceSchema>(),
};
