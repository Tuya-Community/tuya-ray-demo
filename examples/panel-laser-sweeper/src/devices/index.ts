import { SmartDeviceSchema } from '@/typings/sdm';
import {
  SmartDeviceModel,
  SmartGroupModel,
  PublishDpsInterceptor,
  OnDpDataChangeInterceptor,
} from '@ray-js/panel-sdk';
import { createDpKit } from '@ray-js/panel-sdk/lib/sdm/interceptors/dp-kit';
import { getLaunchOptionsSync } from '@ray-js/ray';
import { protocols } from '@/devices/protocols';
import { dpCodes } from '@/config';
const isGroupDevice = !!getLaunchOptionsSync()?.query?.groupId;

export const dpKit = createDpKit<SmartDeviceSchema>({ protocols });

const Dps2DpState: OnDpDataChangeInterceptor<SmartDeviceSchema, DpState> = ctx => next => data => {
  ctx.log.info('=== DpsMap to DpStateMap');
  const devInfo = ctx.instance.getDevInfo();
  const dpState = {} as DpState;
  if (data.dps[dpCodes])
    data.dps.Object.keys(data.dps).forEach(dpId => {
      dpState[devInfo.idCodes[dpId]] = data.dps[dpId] as DpValue;
    });
  return next(dpState);
};

const options = {
  interceptors: dpKit.interceptors,
  OnDpDataChangeInterceptor: Dps2DpState,
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
  // common: new SmartDeviceModel<SmartDeviceSchema>(options),
  common: isGroupDevice
    ? new SmartGroupModel<SmartDeviceSchema>()
    : new SmartDeviceModel<SmartDeviceSchema>(options),
};
