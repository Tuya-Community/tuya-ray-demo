import { SmartDeviceModel } from '@tuya-miniapp/sdm';

export const devices = {
  socket: new SmartDeviceModel<SmartDeviceSchema>(),
};

Object.keys(devices).forEach((k: keyof typeof devices) => {
  devices[k].init();
});
