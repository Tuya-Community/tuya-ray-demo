import React from 'react';
import 'ray';
import '@/i18n';
import './app.less';
import { kit, SdmProvider } from '@ray-js/panel-sdk';
import { devices } from '@/devices';
import { store, actions } from '@/redux';
import { Provider } from 'react-redux';
import DefaultVal from '@/config/default';
import { getDPCodeById } from './utils/dp/putDpData';
const { defaultColors, defaultWhite } = DefaultVal;
import { formatDevSchema } from './utils';
import LampApi from './api/LampApi';

const { dispatch } = store;
const { initPanelEnvironment } = kit;
interface Props {
  children: React.ReactNode;
}

initPanelEnvironment({ useDefaultOffline: true });
class App extends React.Component<Props> {
  componentDidMount() { }

  async onLaunch() {
    devices.lamp.onInitialized(res => {
      const devInfo = res.getDevInfo();
      const { devId, groupId } = devInfo;
      // 初始化dpState
      dispatch(
        actions.common.devInfoChange({
          state: formatDevSchema(devInfo).state,
        })
      );
      LampApi.fetchCloudConfig(devId, groupId).then(cloudData => {
        if (cloudData && Object.keys(cloudData).length) {
          this.handleCloudData(cloudData);
        }
      });
    });
    devices.lamp.onDpDataChange(res => {
      const { deviceId, dps } = res;
      const updateDp = {};
      if (deviceId === devices.lamp.getDevInfo().devId) {
        Object.keys(dps).forEach(dpItem => {
          const code = getDPCodeById(dpItem);
          updateDp[code] = dps[dpItem];
        });
      }
      dispatch(actions.common.responseUpdateDp(updateDp));
    });
  }

  handleCloudData(cloudData: any) {
    //获取云端数据，并放到redux里
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
      <Provider store={store}>
        <SdmProvider value={devices.lamp}>{this.props.children}</SdmProvider>
      </Provider>
    );
  }
}

export default App;
