/* eslint-disable no-console */
import { getLaunchOptionsSync } from '@ray-js/api';
import { SmartDeviceModel } from '@tuya-miniapp/sdm';
import { store, actions as ReduxActions } from '@/redux';
import { formatDevSchema } from '@/utils';

type DevInfoRes = Promise<DevInfo | null>;

// 本地化缓存 deviceInfo 方便随时调用
const __deviceInfo = null;
export const initDevInfo = async () => {
  const schema = [
    {
      attr: 0,
      canTrigger: true,
      code: 'power',
      defaultRecommend: false,
      editPermission: false,
      executable: true,
      extContent: '',
      iconname: 'icon-dp_power2',
      id: 1,
      mode: 'rw',
      name: '开关',
      property: {
        type: 'bool',
      },
      type: 'obj',
    },
  ] as const; // 注意此处的 as const 非常重要，必须强制断言成常量
  type Schema = typeof schema;

  type LampAbilities = {
    toggleMusic: (a: string) => void;
  };
  const device = await SmartDeviceModel.init<Schema, LampAbilities>();

  console.log('=== 当前智能设备信息: ', device.getDevInfo());
  const { deviceId: devId, groupId } = getLaunchOptionsSync().query;
  // if (groupId) {
  //   return new Promise(resolve => {
  //     ty.device.getGroupInfo({
  //       groupId: `${groupId}`,
  //       success: deviceInfo => {
  //         console.log('======initGroupDev', deviceInfo);
  //         __deviceInfo = deviceInfo;
  //         resolve(__deviceInfo);
  //       },
  //       fail: res => {
  //         console.log('======getGroupInfo_error', res);
  //       },
  //     });
  //   });
  // }
  // return new Promise(resolve => {
  //   ty.device.getDeviceInfo({
  //     deviceId: devId,
  //     success: deviceInfo => {
  //       console.log('======initDev', deviceInfo);
  //       __deviceInfo = deviceInfo;
  //       store.dispatch(
  //         ReduxActions.common.devInfoChange({
  //           ...__deviceInfo,
  //           state: formatDevSchema(__deviceInfo).state,
  //         })
  //       );
  //       resolve(__deviceInfo);
  //     },
  //     fail: res => {
  //       console.log('======error', res);
  //     },
  //   });
  // });
};

export const getDevInfo = (): DevInfoRes => {
  console.log('getDevInfo', __deviceInfo);
  return __deviceInfo;
};
