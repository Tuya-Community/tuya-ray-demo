import { atom } from 'jotai';
import { selectAtom } from 'jotai/utils';
import deepEqual from 'fast-deep-equal';
import { getDevInfo } from '@/api';

type DevInfoPayload = Partial<DevInfo>;

const initialDevInfo = null;

export const devInfoAtom = atom<DevInfo, DevInfoPayload>(initialDevInfo, (get, set, payload) => {
  set(devInfoAtom, { ...(get(devInfoAtom) || {}), ...payload });
});

export const selectDevInfoAtom = selectAtom<DevInfo, DevInfo>(devInfoAtom, data => data, deepEqual);

interface DeviceOnline extends ty.device.Online {
  /**
   * 多设备的离线状态映射表
   */
  data: Record<string, ty.device.Online>;
}

type DeviceOnlineAtomPayload = ty.device.Online;

const initialDeviceOnline = {
  online: true,
  deviceId: '',
  onlineType: 1,
  data: {},
};

export const deviceOnlineAtom = atom<DeviceOnline, DeviceOnlineAtomPayload>(
  initialDeviceOnline,
  (get, set, payload) => {
    const devInfo = getDevInfo();
    const newDeviceOnline = get(deviceOnlineAtom);
    newDeviceOnline.data[payload.deviceId] = payload;
    if (payload.deviceId === devInfo.devId) {
      set(devInfoAtom, { isOnline: payload.online });
      newDeviceOnline.online = payload.online;
      newDeviceOnline.onlineType = payload.onlineType;
    }
    set(deviceOnlineAtom, newDeviceOnline);
  }
);

export const selectDeviceOnlineAtom = selectAtom<DeviceOnline, DeviceOnline>(
  deviceOnlineAtom,
  data => data,
  deepEqual
);
