import { SmartDeviceModel } from '@ray-js/panel-sdk';
import { createDpKit } from '@ray-js/panel-sdk/lib/sdm/interceptors/dp-kit';
import { protocols } from '@/devices/protocols';
import { lampSchema } from '@/devices/schema';

type SmartDeviceSchema = typeof lampSchema;

export const dpKit = createDpKit<SmartDeviceSchema>({ protocols });

const options = {
  interceptors: dpKit.interceptors,
  // logConfig: {
  //   level: 'VERBOSE' as const,
  // },
};

export const devices = {
  lamp: new SmartDeviceModel<SmartDeviceSchema>(options),
};
