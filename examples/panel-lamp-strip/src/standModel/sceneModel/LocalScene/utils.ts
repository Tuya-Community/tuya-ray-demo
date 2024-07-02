import { ESceneDpCode } from './types';

let _sceneDpCode = null;
export const getSceneDpCode = () => {
  return _sceneDpCode;
};

export const setSceneDpCode = dpSchema => {
  if (!dpSchema) {
    return _sceneDpCode;
  }
  const code =
    dpSchema[ESceneDpCode.dreamlight_scene_mode]?.code ||
    dpSchema[ESceneDpCode.mix_light_scene]?.code ||
    dpSchema[ESceneDpCode.scene_data]?.code;
  _sceneDpCode = code;
  return code;
};

export const getIconPrefix = (deviceInfo: DeviceInfo) => {
  if (!deviceInfo) {
    return '';
  }
  const { iconUrl = '' } = deviceInfo;
  const match = iconUrl.match(/^https:\/\/images\.\S+\.com/);
  const iconPrefix = match ? match[0] : '';
  return iconPrefix;
};
