import { SmartDeviceModel } from '@tuya-miniapp/sdm';

export const devices = {} as SmartDevices;

SmartDeviceModel.init<SmartDeviceSchema>().then(device => {
  devices.socket = device;
});
