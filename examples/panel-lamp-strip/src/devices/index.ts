import {
  SmartDeviceModel,
  SmartGroupModel,
  SmartStorageAbility,
  SmartSupportAbility,
} from '@ray-js/panel-sdk';
import { createDpKit } from '@ray-js/panel-sdk/lib/sdm/interceptors/dp-kit';
import { protocols } from '@/devices/protocols';
import { lampSchema } from '@/devices/schema';
import { getCachedLaunchOptions } from '@/api/getCachedLaunchOptions';

const { groupId } = getCachedLaunchOptions()?.query ?? {};
const isGroupDevice = !!groupId;

type SmartDeviceSchema = typeof lampSchema;

type SmartLampSupportAbility = SmartSupportAbility<SmartDeviceSchema>;

type Abilities = { support: SmartLampSupportAbility; storage: SmartStorageAbility };

export const dpKit = createDpKit<SmartDeviceSchema>({ protocols });

const options = {
  abilities: [new SmartSupportAbility(), new SmartStorageAbility()],
  interceptors: dpKit.interceptors,
};

export const devices = {
  lamp: isGroupDevice
    ? new SmartGroupModel<SmartDeviceSchema, Abilities>(options)
    : new SmartDeviceModel<SmartDeviceSchema, Abilities>(options),
};
