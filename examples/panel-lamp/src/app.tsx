import React from 'react';
// eslint-disable-next-line import/no-unresolved
import 'ray';
import '@/i18n';
import './app.less';
import { SdmProvider } from '@ray-js/panel-sdk';
import { initPanelEnvironment } from '@ray-js/ray';
import RayErrorCatch, { Utils } from '@ray-js/ray-error-catch';
import { Provider } from 'react-redux';
import { devices, dpKit } from '@/devices';
import { store, actions } from '@/redux';
import DefaultVal from '@/config/default';
import Api from './api/LampApi';

const { defaultColors, defaultWhite } = DefaultVal;

const { dispatch } = store;

const { Logger } = Utils;
interface Props {
  children: React.ReactNode;
}

initPanelEnvironment({ useDefaultOffline: true });
class App extends React.Component<Props> {
  async onLaunch() {
    devices.lamp.init();
    devices.lamp.onInitialized(res => {
      dpKit.init(devices.lamp);
      const devInfo = res.getDevInfo();
      const { devId, groupId } = devInfo;
      Api.fetchCloudConfig(devId, groupId).then(cloudData => {
        if (cloudData && Object.keys(cloudData).length) {
          this.handleCloudData(cloudData);
        }
      });
    });
    // 添加自定义的日志打印
    Logger.info('添加提示等级自定义日志打印');
    Logger.warn('添加警告等级自定义日志打印');
    Logger.error('添加错误等级自定义日志打印');
  }

  handleCloudData(cloudData: any) {
    // 获取云端数据，并放到redux里
    let collectColorList = [...defaultColors];
    let collectWhiteList = [...defaultWhite];
    Object.entries(cloudData).forEach(([code, value]: [string, any]) => {
      if (code === 'collectColors' && value && JSON.stringify(value) !== '[]') {
        collectColorList = value;
      }
      if (code === 'collectWhites' && value && JSON.stringify(value) !== '[]') {
        collectWhiteList = value;
      }
    });
    dispatch(
      actions.common.updateCloud({
        collectColors: collectColorList,
        collectWhites: collectWhiteList,
      })
    );
  }

  render() {
    return (
      <RayErrorCatch>
        <Provider store={store}>
          <SdmProvider value={devices.lamp}>{this.props.children}</SdmProvider>
        </Provider>
      </RayErrorCatch>
    );
  }
}

export default App;
