import { showToast } from '@ray-js/ray';
import dayjs from 'dayjs';

export * from './sendDp';
export * from './log';
export * from './temp';
export * from './family';
export * from './ble';

export type DpStateKey = keyof Record<string, string>;

enum UserType {
  Owner = 50,
  Admin = 10,
}

export const errToast = err => {
  const e = typeof err === 'string' ? JSON.parse(err) : err;
  showToast({ title: e.innerError.errorMsg || e.errorMsg || e, duration: 3000, icon: 'error' });
};

export const getScenePermission = (cloudFun: any, userRegion: string) => {
  // 没有场景联动云能力 直接返回
  if (!cloudFun.tyabihqarm) return false;
  // 是其他区账号（非中国区）返回true
  const isOtherCountryUserRegion = userRegion && userRegion !== 'AY';
  if (isOtherCountryUserRegion) return true;
  // 国内账号 必须包含家人回家或者告警才展示场景联动
  const sceneList = cloudFun.tyabihqarm;
  if (sceneList.includes('supportBackHome' || 'supportAlarm')) {
    return true;
  }
  return false;
};

export const getCameraAngleByCloud = (cloud: { tyabin5vwd: string }) => {
  if (!cloud || !cloud.tyabin5vwd) return null;
  const cameraAngle: string = cloud.tyabin5vwd[0];
  const CAMERAANGLEDATA: {
    [key: string]: number | string;
  } = {
    rotate_degree_0: 0,
    rotate_degree_90: 90,
    rotate_degree_180: 180,
    rotate_degree_270: 270,
    rotate_degree_custom: 'customize',
  };
  return CAMERAANGLEDATA[`${cameraAngle}`];
};

export const momentFormat = (format, date = 0) => {
  return date > 0 ? dayjs(date).format(format) : dayjs().format(format);
};

const getTimeApi = ({ hour, min }: { hour: string; min: string }) => {
  return `${hour}:${min}`;
};

const getTimeHourAndMin = (time: string) => {
  const currentHour = parseInt(`${time.slice(0, 2)}`, 16);
  const currentMin = parseInt(`${time.slice(2, 4)}`, 16);
  const hour = currentHour.toString().padStart(2, '0');
  const min = currentMin.toString().padStart(2, '0');

  return { hour, min };
};

export const getTimeString = (t: string): string => {
  const begin = t.slice(0, 4).padStart(4, '0');
  const end = t.slice(4).padStart(4, '0');
  return `${getTimeApi(getTimeHourAndMin(begin))} - ${getTimeApi(getTimeHourAndMin(end))}`;
};

export const authorityByUser = (user: any, condition: boolean) => {
  if (!condition) return true;
  if (user.userType === UserType.Owner && condition) return true;
  return false;
};

export const formatDevSchema = devInfo => {
  const { dps, schema } = devInfo;
  const result_schema = {};
  const result_state = {};
  const arrSchema = [];

  for (let i = 0; i < schema.length; i++) {
    const { code, id, property, type } = schema[i];
    const define = {
      dptype: type,
      id: `${id}`,
      ...property,
    };

    result_state[code] = dps[id];
    result_schema[code] = define;
    arrSchema.push({ ...define, code });

    delete define.property;
  }
  return { state: result_state, schema: result_schema, arrSchema };
};

export const formatDpChange = (arrSchema = [], dps = {}) => {
  const dpIds = Object.keys(dps);
  if (!dpIds.length || !arrSchema.length) return {};
  const dpState = {};
  dpIds.forEach(id => {
    const dp = arrSchema.find(item => {
      return item.id === id;
    });
    dpState[dp.code] = dps[id];
  });
  return dpState;
};