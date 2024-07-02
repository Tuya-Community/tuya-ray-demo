import { Dispatch } from 'redux';
import { actions } from '../modules/common';
import {
  getUserRegion,
  getUserInfo,
  getUiConfig,
  getSyncLockData,
  putPassWordOfflineTime,
} from '@/api/homeApi';
import { getLatestLog } from '@/api/logsApi';
import { getDeviceProps } from '@/api/settingApi';
import { utils } from '@ray-js/panel-sdk';

import { putDpData } from '@/utils/sendDp';
import Codes from '@/config/dpCodes';

let dispatch: Dispatch;
export const setCommonDispatch = (d: Dispatch) => {
  dispatch = d;
};

export const setUserRegion = () => {
  getUserRegion().then((data: any) => dispatch(actions.userRegionChange(data?.region)));
};

export const getLatestLogAsync = async () => {
  const data = await getLatestLog();
  dispatch(actions.getLastLog(data));
};

export const getDeviceProp = async (props: string) => {
  const data = await getDeviceProps(props);
  dispatch(actions.setDeviceProp({ remoteSwitch: data.UNLOCK_PHONE_REMOTE === 'true' }));
};

export const saveDeviceProps = async (props: Record<string, boolean | string>) => {
  dispatch(actions.setDeviceProp(props));
};

export const getSyncLockDataAsync = async (init: boolean) => {
  const data = await getSyncLockData();
  if (init) {
    const time = await putPassWordOfflineTime();
    putDpData(Codes.passwordOfflineTime, time.toString());
    const { lockRecord, removedUser, lockRandom } = data;
    const { distributed, wakeUpIns } = (lockRandom as unknown) as {
      distributed: boolean;
      wakeUpIns: string;
    };

    // 门锁初始化随机数
    if (distributed) {
      putDpData(Codes.checkCodeSet, wakeUpIns);
    }
    // 同步APP上已删除带开锁方式的用户
    if (removedUser.length > 0) {
      setTimeout(() => {
        removedUser.map(item => {
          const { admin, lockUserId } = (item as unknown) as { admin: boolean; lockUserId: number };
          const userId = utils.numToHexString(lockUserId);
          const isAdmin = admin ? '01' : '00';
          putDpData(Codes.unlockMethodDelete, `0000${isAdmin}${userId}ff00`);
        });
      }, 1000);
    }
    if (lockRecord) {
      putDpData(Codes.record, lockRecord);
    }
    dispatch(actions.setLockData({...data, t0Time: time}));
    console.log('getSyncLockDataAsync data', data);
  } else {
    dispatch(actions.setLockData(data));
  }
};

export const setUserInfo = async () => {
  const data = await getUserInfo();
  dispatch(actions.getUser(data));
};

export const getPanelInfo = async productId => {
  try {
    const data: any = await getUiConfig(productId);
    let powerCode = {};
    if (data?.powerCode) {
      powerCode = Object.keys(data?.powerCode).reduce((pre, curr) => {
        return { ...pre, [curr]: JSON.parse(data?.powerCode[curr]) };
      }, {});
    }
    dispatch(actions.getPanelInfo({ ...data, powerCode, originalPowerCode: data?.powerCode }));
  } catch (e) {
    dispatch(actions.getPanelInfo({}));
  }
};
