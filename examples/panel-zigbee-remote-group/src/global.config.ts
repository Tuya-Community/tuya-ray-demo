import { GlobalConfig } from '@ray-js/types';

export const tuya = {
  darkmode: false,
  themeLocation: 'theme.json',
  window: {
    backgroundColor: '#f2f4f6',
    navigationBarTitleText: '',
    navigationBarBackgroundColor: '#f2f4f6',
    navigationBarTextStyle: 'black',
  },
  // routers: ['tuyaSmart://zigbee_pair'],
};

const globalConfig: GlobalConfig = {
  basename: '',
};

export default globalConfig;
