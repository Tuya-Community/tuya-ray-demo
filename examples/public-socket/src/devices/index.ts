import { SmartDeviceModel } from '@ray-js/panel-sdk';

export const devices = {
  socket: new SmartDeviceModel<typeof import('./schema').defaultSchema>(),
};

Object.keys(devices).forEach((k: keyof typeof devices) => {
  devices[k].init();
});
