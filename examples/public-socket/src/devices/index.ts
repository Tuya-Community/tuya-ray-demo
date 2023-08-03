import { SmartDeviceModel, SmartGroupModel } from '@ray-js/panel-sdk';
import { getLaunchOptionsSync } from '@ray-js/ray';

const isGroupDevice = !!getLaunchOptionsSync()?.query?.groupId;

export const devices = {
  socket: isGroupDevice
    ? new SmartGroupModel<typeof import('./schema').defaultSchema>()
    : new SmartDeviceModel<typeof import('./schema').defaultSchema>(),
};
