import { GlobalConfig } from '@ray-js/types';

export const wechat = {
  window: {
    backgroundColor: '#000',
    navigationBarTitleText: 'Ray 小程序示例',
    navigationBarBackgroundColor: '#000',
    navigationBarTextStyle: 'white',
  },
};

export const web = {
  window: {
    backgroundColor: '#000',
    navigationBarTitleText: 'Ray Web App',
  },
};

export const native = {
  window: {
    backgroundTextStyle: '#000',
    navigationBarBackgroundColor: '#000',
    navigationBarTitleText: '',
    navigationBarTextStyle: 'white',
    backgroundColorTop: 'red',
    navigationStyle: 'custom',
  },

  dependencies: {
    BaseKit: '2.1.2',
    DeviceKit: '2.1.6',
    MiniKit: '2.3.0',
    TYKit: '2.0.7',
  },
};

export const tuya = {
  entryPagePath: 'pages/index/index',
  themeLocation: 'theme.json',
  window: {
    backgroundColor: '@bgColor',
    navigationBarTitleText: '双目摄像头',
    navigationBarBackgroundColor: '@navBgColor',
    // app<5.10配置右上角“点点点”设备详情跳转
    // app<5.10 Configuring "Dot Dot" in the upper right corner Skip device details
    systemMenus: [
      {
        key: 'system_setting',
        text: "@I18n.t('ipc_set_page_title')",
        isShow: true,
      },
    ],
  },
  // app>=5.10配置右上角“点点点”设备详情跳转
  // app>=5.10 Configuring the device in the upper right corner Skip details
  functionalPages: {
    settings: {
      // 这个小程序id写死不需要更改！！！
      // This small program id write dead do not need to change!!
      appid: 'tycryc71qaug8at6yt',
    },
  },
  routers: ['camera_playback_panel', 'ipc_album_panel'],
};

const globalConfig: GlobalConfig = {
  basename: '',
};

export default globalConfig;
