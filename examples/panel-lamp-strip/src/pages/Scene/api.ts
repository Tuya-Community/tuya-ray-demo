import {
  getLightLibrariesData,
  checkLightLibrariesVersionsUpgradable,
  upgradeToLatestLightLibrariesVersions,
  request,
} from '@ray-js/ray';

import { devices } from '@/devices';
import { sceneData } from './mockScene';
import { log } from '@/utils';

// 写死的数据
const isMock = true;

// 获取设备或群组所绑定的照明（情景/音乐等）库中的数据
type TSceneData = {
  items: {
    sceneId: number; // 情景 ID
    sceneName: string; // 情景名称
    sort: number; // 排序值
    icon: string; // DP code
    dpCode: string; // 情景图标
    sceneData: string; // 情景参数
    sceneDesc: string; // 情景描述
  };
  iconDisplayType: number; // 数据的图标展示类型 1：A 类 2：B 类 3：C 类 4：D 类
  iconDisplaySize: string; // 数据的图标展示大小 (例如 "343*100")
};

type TSceneDataPlate = {
  data: TSceneData[];
  plateId: number; // 分组图片
  plateName: string; // 分组名称
  plateIconDisplayType: number; // 1：A 类 2：B 类 3：C 类 4：D 类
  plateIconDisPlaySize: string; // 分组图标展示大小 (例如 "343*100")
  plateIcon: string; // 分组图片
};
export const getLightSceneLibrariesData = (): Promise<TSceneDataPlate> => {
  if (isMock) {
    return new Promise(resolve => {
      resolve((sceneData as unknown) as TSceneDataPlate);
    });
  }
  return new Promise((resolve, reject) => {
    const { devId, deviceId, groupId } = devices.lamp.getDevInfo();
    getLightLibrariesData({
      bizId: groupId || devId || deviceId,
      bizType: groupId ? 1 : 0,
      libType: 'SCENE_LIB',
      libDataType: 0,
    })
      .then(response => {
        resolve((response as unknown) as TSceneDataPlate);
      })
      .catch(err => {
        reject(err);
      });
  });
};

/**
 * 校验所绑定的库是否存在可更新的版本
 */
export const checkLightSceneLibrariesVersionsUpgradable = (): Promise<boolean> => {
  if (isMock) {
    return new Promise(_resolve => {
      // mock 模拟是否存在可更新的版本
      const isUpdate = false;
      _resolve(isUpdate);
    });
  }
  return new Promise((resolve, reject) => {
    const { devId, groupId } = devices.lamp.getDevInfo();
    checkLightLibrariesVersionsUpgradable({
      bizId: devId || groupId,
      bizType: groupId ? 1 : 0,
      libType: 'SCENE_LIB',
      libDataType: 0,
    })
      .then(response => {
        log('checkLightSceneLibrariesVersionsUpgradable', response);
        resolve(response);
      })
      .catch(err => {
        log('checkLightSceneLibrariesVersionsUpgradable', err);
        reject(err);
      });
  });
};

/**
 * 升级设备或群组使用的库版本到最新
 */
export const upgradeToLatestLightSceneLibrariesVersions = () => {
  if (isMock) {
    return new Promise(_resolve => {
      _resolve(true);
    });
  }
  return new Promise((resolve, reject) => {
    const { devId, groupId } = devices.lamp.getDevInfo();
    upgradeToLatestLightLibrariesVersions({
      bizId: devId || groupId,
      bizType: groupId ? 1 : 0,
      libType: 'SCENE_LIB',
      libDataType: 0,
    })
      .then(response => {
        log('upgradeToLatestLightSceneLibrariesVersions', response);
        resolve(response);
      })
      .catch(err => {
        log('upgradeToLatestLightSceneLibrariesVersions', err);
        reject(err);
      });
  });
};

const _LottieJsonCache = {};
// JSON文件
export const getLottieJSON = (url: string) => {
  return new Promise(resolve => {
    if (_LottieJsonCache[url]) {
      resolve(_LottieJsonCache[url]);
      return;
    }
    request({
      url,
      header: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      success: response => {
        resolve(JSON.parse(response.data));
        _LottieJsonCache[url] = JSON.parse(response.data);
      },
      failure: () => {
        resolve(null);
      },
    });
  });
};
