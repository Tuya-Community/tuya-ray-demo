import { SmartDeviceModel } from '@ray-js/panel-sdk';
import { createDpKit } from '@ray-js/panel-sdk/lib/sdm/interceptors/dp-kit';
import { lampSchema } from '@/devices/schema';
import dpCodes from '@/config/dpCodes';

type SmartDeviceSchema = typeof lampSchema;

export const dpKit = createDpKit<SmartDeviceSchema>({
  sendDpOption: {
    immediate: true,
    ignoreDpDataResponse: {
      debug: true,
      whiteDpCodes: [dpCodes.batteryStateCode],
    },
    synchronizeDevProperty: {
      defaultState: {
        [dpCodes.brightCode]: 1000,
        [dpCodes.temperatureCode]: 1000,
      },
    },
  },
});

export const devices = {
  lamp: new SmartDeviceModel<SmartDeviceSchema>({
    interceptors: dpKit.interceptors,
  }),
};
