import { actions, store } from '@/redux';
import Global from '@/config/global';
import Storage from '@/api/storage';
import { exitMiniProgram } from '@ray-js/ray';
import { decode } from 'base64-browser';
import { devices } from '@/devices';
import {
  preloadPanel as rayPreloadPanel,
  getSystemInfoSync,
  getCurrentPages,
  navigateToMiniProgram,
} from '@ray-js/api';

export const JsonUtil = {
  parseJSON(str) {
    let rst;
    if (str && {}.toString.call(str) === '[object String]') {
      // 当JSON字符串解析
      try {
        rst = JSON.parse(str);
      } catch (e) {
        // 出错，用eval继续解析JSON字符串
        try {
          // eslint-disable-next-line
          rst = eval(`(${str})`);
        } catch (e2) {
          // 当成普通字符串
          rst = str;
        }
      }
    } else {
      rst = typeof str === 'undefined' ? {} : str;
    }

    return rst;
  },
};

// 预下载面板小程序
export const getPanelApp = () => {
  const devInfo = devices.ipc.getDevInfo();
  preloadPanel({
    devId: devInfo.devId,
    productId: devInfo.productId, // 产品id
    productVersion: devInfo.pv, // 产品版本
    i18nTime: devInfo.time, // 面板多语言时间戳
  });
};

// 打开面板小程序
export const openPanelApp = () => {
  const { mainDeviceCameraConfig } = store.getState().ipcCommon;

  const devInfo = devices.ipc.getDevInfo();

  openPanel(devInfo.devId, { mainDeviceCameraConfig }, data => {
    const { type } = data;
    const supportedAudioMode = data?.mainDeviceCameraConfig?.supportedAudioMode;
    switch (type) {
      case 'changeTalkType':
        Storage.setDevItem('talkType', supportedAudioMode).then(() => {
          store.dispatch(
            actions.common.mainDeviceCameraConfig({
              supportedAudioMode,
            })
          );
        });
        break;
      case 'exitMiniProgram':
        setTimeout(() => {
          exitMiniProgram();
        }, 50);
        break;
      default:
    }
  });
};

// 显示全屏按钮，5秒后隐藏
export const showFullButtonAnd5sHide = () => {
  openShowFullButton();

  closeShowFullButtonAfter5s();
};

// 开启全屏按钮显示
export const openShowFullButton = () => {
  const { isFull } = store.getState().ipcCommon;
  const { dispatch } = store;
  if (isFull) {
    if (Global.showFullButtonTimer) {
      clearTimeout(Global.showFullButtonTimer);
      Global.showFullButtonTimer = null;
    }
    dispatch(actions.common.showFullButton(true));
  }
};

// 立即关闭全屏按钮
export const closeShowFullButton = () => {
  const { isFull } = store.getState().ipcCommon;
  const { dispatch } = store;
  if (isFull) {
    if (Global.showFullButtonTimer) {
      clearTimeout(Global.showFullButtonTimer);
      Global.showFullButtonTimer = null;
    }

    dispatch(actions.common.showFullButton(false));
  }
};

// 5s后隐藏全屏按钮
export const closeShowFullButtonAfter5s = () => {
  const { isFull } = store.getState().ipcCommon;
  const { dispatch } = store;
  if (isFull) {
    if (Global.showFullButtonTimer) {
      clearTimeout(Global.showFullButtonTimer);
      Global.showFullButtonTimer = null;
    }

    Global.showFullButtonTimer = setTimeout(() => {
      dispatch(actions.common.showFullButton(false));
    }, 5000);
  }
};

// 混淆字符串（匿名化）
export const getAnonymityNameStr = () => {
  return decode('dHV5YQ==');
};

interface devInfoProp {
  devId: string;
  productId: string;
  productVersion: string;
  i18nTime: string;
}

/**
 * 预下载设置页
 * @param devInfo
 * @returns
 */
export const preloadPanel = (devInfo: devInfoProp) => {
  return new Promise((resolve, reject) => {
    rayPreloadPanel({
      deviceId: devInfo.devId,
      extraInfo: {
        productId: devInfo.productId, // 产品id
        productVersion: devInfo.productVersion, // 产品版本
        i18nTime: devInfo.i18nTime, // 面板多语言时间戳
        bizClientId: 'tycc0pbqpupbc2zkgz', // 容器ID 可能是uiid的值也可能是miniAppId的值
        uiType: 'SMART_MINIPG', //
        uiPhase: 'release',
      },
      success: () => {
        resolve(true);
      },
      fail: err => {
        reject(err);
      },
    });
  });
};

/**
 * 打开设置页
 * @param deviceId 设备id
 * @param extraData 携带传入的额外参数
 * @param fn 设置页传递消息监听事件
 * @returns
 */
export const openPanel = (deviceId: string, extraData?: Record<string, any>, fn?: any) => {
  return new Promise((resolve, reject) => {
    navigateToMiniProgram({
      appId: 'tycc0pbqpupbc2zkgz',
      path: `/pages/setting/index?deviceId=${deviceId}`,
      extraData: extraData || {},
      position: 'right',
      events: {
        acceptDataByChild: data => {
          if (fn) {
            fn(data);
          }
        },
      },
      success: () => {
        resolve(true);
      },
      fail: err => {
        reject(err);
      },
    });
  });
};

// 向主小程序发送消息
export const useEmitMessage = () => {
  const appChannel = getCurrentPages()[0].getOpenerAppChannel();

  return data => {
    appChannel.emit('acceptDataByChild', data);
  };
};

const { windowHeight, platform } = getSystemInfoSync();

export const isIos = platform === 'ios';
export const isIphoneX = isIos && windowHeight >= 812;
export const smallScreen = windowHeight < 667;

export const middleScreen = windowHeight >= 667 && windowHeight <= 736;
