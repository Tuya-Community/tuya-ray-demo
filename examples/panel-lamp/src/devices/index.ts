import { SmartDeviceModel } from '@ray-js/panel-sdk';
import { SmartDeviceSchema } from '../../typings/sdm';

export const devices = {
  lamp: new SmartDeviceModel<SmartDeviceSchema>(),
};
