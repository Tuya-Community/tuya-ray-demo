import { PromisifyTTT } from '@ray-js/panel-sdk';
import {
  getDeviceInfo as getDeviceInfoBase,
  getZigbeeLocalGroupDeviceList,
  home,
} from '@ray-js/ray';
import { devices } from '@/devices';
import { CATEGORY_CODES } from '@/constant';
// @ts-expect-error
// eslint-disable-next-line prefer-destructuring
const getCurrentHomeInfo: PromisifyTTT<typeof home.getCurrentHomeInfo> = home.getCurrentHomeInfo;
// @ts-expect-error
const getDeviceInfo: PromisifyTTT<typeof getDeviceInfoBase> = getDeviceInfoBase;

export interface GroupDevice {
  /**
   * 设备产品 id
   */
  productId: string;
  /**
   * 设备 id
   */
  devId: string;
  /**
   * 设备在线状态
   */
  devOnline: boolean;
  /**
   * 设备名称
   */
  devName: string;
  /**
   * 设备背景图片
   */
  iconUrl: string;
  /**
   * 是否选中
   */
  checked: boolean;
  /**
   * 如果是子设备，会返回子设备对应的nodeId，客户端有用到此字段';
   */
  nodeId: string;
  gwId: string;
  gwName: string;
  gwOnline: boolean;
  runtimeEnv: string;
}

export type GroupDeviceWithCategory = GroupDevice & { category: 'lamp' | 'curtain' };

export type ResGetGroupDevices = Array<GroupDevice>;

export type GroupDevices = Array<GroupDeviceWithCategory>;

export const getGroupDevices = async (categoryCode: string): Promise<GroupDevices> => {
  const data = await getCurrentHomeInfo({});
  const devInfo = devices.common.getDevInfo();
  const groupDevices = await getZigbeeLocalGroupDeviceList({
    devId: devInfo.devId,
    meshId: devInfo.parentId || '6cb73cc59a2a04b720rijt',
    categoryCode,
    homeId: data.homeId,
  });
  // @ts-ignore
  const firstBindDevice = groupDevices.find(d => d.checked && d.devId !== devInfo.devId);
  let category: 'lamp' | 'curtain';
  if (firstBindDevice) {
    const firstBindDeviceInfo = await getDeviceInfo({ deviceId: firstBindDevice.devId });
    if (CATEGORY_CODES.light.indexOf(firstBindDeviceInfo.category) !== -1) {
      category = 'lamp';
    } else if (CATEGORY_CODES.curtain.indexOf(firstBindDeviceInfo.category) !== -1) {
      category = 'curtain';
    }
  }
  return groupDevices.map(d => ({ ...d, category }));
};
