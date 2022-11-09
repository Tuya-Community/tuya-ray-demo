import { SmartDeviceModel } from '@tuya-miniapp/sdm';
import { ProductName } from '@/constants';

export const devices = {
  [ProductName]: new SmartDeviceModel<SmartDeviceSchema>(),
};

Object.keys(devices).forEach((k: keyof typeof devices) => {
  devices[k].init();
});
