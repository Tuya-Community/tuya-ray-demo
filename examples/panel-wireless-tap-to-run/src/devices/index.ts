import { SmartDeviceModel, SmartTapToRunAbility } from '@ray-js/panel-sdk';
import { createDpKit } from '@ray-js/panel-sdk/lib/sdm/interceptors/dp-kit';
import { getCachedLaunchOptions } from '@/api/getCachedLaunchOptions';
import { SmartDeviceSchema } from 'typings/sdm';

const ctx = getCachedLaunchOptions()?.query;

type Abilities = { tapToRun: SmartTapToRunAbility };

export const dpKit = createDpKit<SmartDeviceSchema>();

const options = {
  abilities: [new SmartTapToRunAbility({ deviceId: ctx.deviceId })],
  interceptors: dpKit.interceptors,
};

/**
 * SmartDevices 定义来自于 typings/sdm.d.ts，非 TypeScript 开发者可忽略
 * The SmartDevices definition comes from typings/sdm.d.ts and can be ignored by non-TypeScript developers
 */
export const devices = {
  /**
   * 此处建议以智能设备的名称作为键名赋值
   * It is recommended to assign the name of the smart device as the key name.
   */
  common: new SmartDeviceModel<SmartDeviceSchema, Abilities>(options),
};
