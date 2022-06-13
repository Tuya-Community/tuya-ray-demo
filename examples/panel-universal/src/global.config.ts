import { GlobalConfig } from '@ray-js/types';

export const wechat = {
  window: {
    backgroundColor: '#f2f4f6',
    navigationBarTitleText: 'Ray 小程序示例',
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

export const tuya = {
  window: {
    backgroundColor: '#f2f4f6',
    navigationBarTitleText: '',
    navigationBarBackgroundColor: '#f2f4f6',
    navigationBarTextStyle: 'black',
  },
  pageWrapper: ['@ray-js/ray-panel-wrapper/lib/page'],
};

const globalConfig: GlobalConfig = {
  basename: '',
};

export default globalConfig;
