import { GlobalConfig } from '@ray-js/types';

export const tuya = {
  window: {
    backgroundColor: '#f2f4f6',
    navigationBarTitleText: '',
    navigationBarBackgroundColor: '#f2f4f6',
    navigationBarTextStyle: 'black',
  },
  functionalPages: {
    // 定时倒计时功能页
    rayScheduleFunctional: {
      // tyjks565yccrej3xvo 为功能页的id
      appid: 'tyjks565yccrej3xvo',
    },
    rayStripClipFunctional: {
      // tyonnsnmyhlon0ocmx 为功能页的id
      appid: 'tyonnsnmyhlon0ocmx',
    },
  },
};

const globalConfig: GlobalConfig = {
  basename: '',
};

export default globalConfig;
