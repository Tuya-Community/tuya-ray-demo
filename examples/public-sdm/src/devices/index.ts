import { SmartDeviceModel } from '@ray-js/panel-sdk';
import { SmartDeviceSchema } from 'typings/sdm';

export const devices = {
  socket: new SmartDeviceModel<SmartDeviceSchema>(),
};

Object.keys(devices).forEach((k: keyof typeof devices) => {
  devices[k].init();
});
