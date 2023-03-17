import { GlobalConfig } from '@ray-js/types';

export const wechat = {
  window: {
    backgroundColor: '#f2f4f6',
    navigationBarTitleText: '微信小程序示例',
    navigationBarBackgroundColor: '#f2f4f6',
    navigationBarTextStyle: 'black',
  },
};

export const tuya = {
  window: {
    backgroundColor: '#f2f4f6',
    navigationBarTitleText: '涂鸦小程序示例',
    navigationBarBackgroundColor: '#f2f4f6',
    navigationBarTextStyle: 'black',
  },
};

export const web = {
  window: {
    backgroundColor: '#f2f4f6',
    navigationBarTitleText: 'Ray Web App',
  },
};

export const native = {
  pages: ['/pages/home/index', '/pages/detail/index'],
  isWatch: true,
  enableMultipleClassName: true,
  enableMergeStyle: true,
  window: {
    backgroundTextStyle: 'dark',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
    backgroundColor: '#f8f8f8',
    backgroundColorTop: 'red',
  },
};

const globalConfig: GlobalConfig = { basename: '' };

export default globalConfig;
