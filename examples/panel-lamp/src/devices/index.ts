import { SmartDeviceModel } from '@tuya-miniapp/sdm';
import { store, actions } from '@/redux'; 

const { dispatch } = store;
export const devices = {
  lamp: new SmartDeviceModel<SmartDeviceSchema>(),
};
 

Object.keys(devices).forEach((k: keyof typeof devices) => {
  devices[k].init();
});
 