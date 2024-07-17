import { GlobalConfig } from '@ray-js/types';

export const tuya = {
  themeLocation: 'theme.json',
  window: {
    backgroundColor: '#f2f4f6',
    navigationBarTitleText: '',
    navigationBarBackgroundColor: '#f2f4f6',
    navigationBarTextStyle: 'black',
  },
  webviewRoot: 'webview',
  skeletonRoot: 'skeleton',
};

const globalConfig: GlobalConfig = {
  basename: '',
};

export default globalConfig;
