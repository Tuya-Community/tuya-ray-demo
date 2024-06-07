import { GlobalConfig } from '@ray-js/types';

export const wechat = {
  window: {
    backgroundColor: '#e3eef6',
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

export const native = {
  window: {
    backgroundTextStyle: 'dark',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: '',
    navigationBarTextStyle: 'black',
    backgroundColorTop: 'red',
    navigationStyle: 'custom',
  },
};

export const tuya = {
  window: {
    backgroundColor: '#e3eef6',
    navigationBarTitleText: '',
    navigationBarBackgroundColor: '#f2f4f6',
    navigationBarTextStyle: 'black',
    navigationStyle: 'custom',
    custom: true,
  },
  usingPlugins: ['rjs://three', 'rjs://three/examples/jsm/loaders/GLTFLoader'],
};

const globalConfig: GlobalConfig = {
  basename: '',
};

export default globalConfig;
