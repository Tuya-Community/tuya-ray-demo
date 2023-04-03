import { store } from '@/redux';
import { goToPlayback, goToAlbum } from '@/utils/util';
import { devices } from '@/devices';

/**
 * 1. 初始化默认展示扬声器、对讲、截图、录像、回放、相册
 * 2. 拉取主设备摄像头配置，如无扬声器、对讲，删除对应图标，对讲方式切换
 * 3. 主设备信息，判断当前选中设备是否支持云台与变焦，若支持，删除回放、相册，增加展开tab按钮
 */
export const tabTopConfig = [
  {
    // 扬声器 开启 关闭 缓存判断状态
    icon: 'icon-jingyin',
    key: 'mute',
    isMainDev: 'isSupportedSound',
    icon1: 'icon-yinliang', // 开启
    icon2: 'icon-jingyin', // 关闭
    isFull: true,
    notFull: true,
    disable: true,
    storeParam: 'isMute',
  },
  {
    // 对讲 双向对讲 单向对象 对讲中
    icon: 'icon-yuyin',
    key: 'oneTalk',
    isMainDev: 'isSupportedTalk',
    icon1: 'icon-yuyin', // 单向对讲
    icon2: 'icon-dianhua', // 双向对讲
    supportedAudioMode: true, // 对讲方式
    isFull: true,
    notFull: true,
    key1: 'oneTalk',
    key2: 'twoTalk',
    disable: true,
  },
  {
    // 截图
    icon: 'icon-jieping1',
    key: 'screenshot',
    isFull: true,
    notFull: true,
    disable: true,
  },
  {
    // 录屏 录屏 录屏中
    icon: 'icon-luping',
    key: 'record',
    icon1: 'icon-luping', // 录屏
    icon2: 'icon-luxiangzhong', // 录屏中
    isFull: true,
    notFull: true,
    disable: true,
    storeParam: 'isRecording',
  },
  {
    // 回放
    icon: 'icon-huifang',
    key: 'playback',
    isDpShow: true,
    subDevDpShow: false,
    pageId: 'camera_playback_panel',
    routerFun: goToPlayback,
  },
  {
    // 相册
    icon: 'icon-xiangce-1',
    key: 'album',
    isDpShow: true,
    subDevDpShow: false,
    pageId: 'ipc_album_panel',
    routerFun: goToAlbum,
  },
  {
    // 展开 上拉 下拉
    icon: 'icon-shangla',
    key: 'more',
    isDpShow: true,
    subDevDpShow: true,
    icon1: 'icon-shangla', // 上拉
    icon2: 'icon-xiala', // 下拉
    showMore: true, // 通过传入参数判断
    notFull: true,
    propParam: 'showMore',
  },
  {
    // 缩小
    icon: 'icon-suoxiao',
    key: 'shrink',
    isFull: true,
  },
];

interface tabTopProps {
  showMore?: boolean;
  switchType?: string;
}
export const getTabTopConfig = (prop: tabTopProps) => {
  const { ipcCommon } = store.getState();
  const { isFull, mainDeviceCameraConfig } = ipcCommon;
  const { switchType } = prop;

  const devInfo = devices.ipc.getDevInfo();

  const arr = tabTopConfig
    .filter(item => {
      const { isMainDev, isDpShow, subDevDpShow } = item;
      if (isFull) {
        return item.isFull;
      }
      if (mainDeviceCameraConfig && isMainDev && `${isMainDev}` in mainDeviceCameraConfig) {
        return mainDeviceCameraConfig[isMainDev];
      }

      if (devInfo && isDpShow) {
        if (hasZoom(devInfo.dpCodes) || hasPtz(devInfo.dpCodes)) {
          return subDevDpShow;
        }
        return !subDevDpShow;
      }

      return item.notFull;
    })
    .map(item => {
      const obj = { icon: item.icon, key: item.key, disable: item.disable, pageId: item.pageId };
      const { supportedAudioMode } = item;
      if (item.propParam) {
        obj.icon = prop[item.propParam] ? item.icon2 : item.icon1;
      } else if (item.storeParam) {
        obj.icon = ipcCommon[item.storeParam] ? item.icon2 : item.icon1;
      } else if (switchType === item.key) {
        // 图标切换
        item.icon = item.icon === item.icon1 ? item.icon2 : item.icon1;
        obj.icon = item.icon;
      } else if (
        supportedAudioMode &&
        mainDeviceCameraConfig &&
        mainDeviceCameraConfig.supportedAudioMode
      ) {
        // 对讲方式判断
        item.icon = item[`icon${mainDeviceCameraConfig.supportedAudioMode}`];
        obj.key = item[`key${mainDeviceCameraConfig.supportedAudioMode}`];
      }
      return obj;
    });

  return arr;
};

export const hasPtz = dp => {
  return dp && 'ptz_control' in dp;
};

export const hasZoom = dp => {
  return dp && 'zoom_control' in dp;
};

type tabConfig = {
  icon: string;
  text: string;
  key: string;
  pageId?: string;
  routerFun?: any;
};

export const tabBottomConfig: Array<tabConfig> = [
  {
    icon: 'icon-huifang-1',
    // text: '回放',
    text: 'ipc_tab_playback_title',
    key: 'playback',
    pageId: 'camera_playback_panel',
    routerFun: goToPlayback,
  },
  {
    icon: 'icon-caokong',
    // text: '遥感',
    text: 'ipc_tab_direction_title',
    key: 'direction',
  },
  {
    icon: 'icon-xiangce',
    // text: '相册',
    text: 'ipc_tab_album_title',
    key: 'album',
    pageId: 'ipc_album_panel',
    routerFun: goToAlbum,
  },
];

export const definitionConfig = {
  1: 'SS', // 省流
  2: 'standard', // 标清
  4: 'high', //  高清
  8: 'high', // 超清
  16: 'high', // 超超清
};

export const videoClarityObj = { 2: 'normal', 4: 'hd' };

export const videoClarityList = [
  { type: 2, text: 'normal' },
  { type: 4, text: 'hd' },
];
