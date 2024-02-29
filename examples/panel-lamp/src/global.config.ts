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
      appid: 'tyjks565yccrej3xvo',
    },
    // 生物节律功能页
    rayRhythmFunctional: {
      appid: 'ty53odnmk2cxnzcxm6',
    },
    // 酷玩吧功能页，包含情景库、律动库和影像库
    rayPlayCoolFunctional: {
      appid: 'tyg0szxsm3vog8nf6n',
    },
  },
};

const globalConfig: GlobalConfig = {
  basename: '',
};

export default globalConfig;
