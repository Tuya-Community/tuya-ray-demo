import { SmartDeviceModel } from '@tuya-miniapp/sdm';
import { store, actions } from '@/redux';
import { kit } from '@ray-js/panel-sdk';
import { PublishDpsInterceptor } from '@tuya-miniapp/sdm';
import { logger } from '@tuya-miniapp/sdm/lib/interceptors';

const { dispatch } = store;
export const devices = {
  socket: new SmartDeviceModel<SmartDeviceSchema>(),
};

type PublishDpsParams = Parameters<typeof kit.publishDps>;

type ExtendPublishDpsParams = [PublishDpsParams[0], PublishDpsParams[1] & { a: number }];

const options = {
  interceptors: {
    request: {
      publishDps: [logger],
    },
    response: {
      onDpDataChange: [logger],
    },
  },
};

const formatDevSchema = devInfo => {
  const { dps, schema } = devInfo;
  const result_schema = {};
  const result_state = {};
  for (let i = 0; i < schema.length; i++) {
    const { code, id, property, type } = schema[i];
    const define = {
      dptype: type,
      id: `${id}`,
      ...property,
    };

    result_state[code] = dps[id];
    result_schema[code] = define;
    delete define.property;
  }
  return { state: result_state, schema: result_schema };
};

Object.keys(devices).forEach((k: keyof typeof devices) => {
  devices[k].init();
});
devices.socket.onInitialized(async () => {
  // console.log('=== 当前智能设备信息: ', device.getDevInfo());
  // const dev = device.getDevInfo();
  const dpState = devices.socket.getDpState();
  const dev = devices.socket.getDevInfo();
  // dispatch(actions.common.devInfoChange(dev));
  // dispatch(actions.common.initDp(dpState));
  // dispatch(actions.common.devInfoChange({ ...dev, state: formatDevSchema(dev).state }));
});
// devices.socket.onDpDataChange(data => {
//   console.log('dpChange===', data);
// });
// // devices.socket.
