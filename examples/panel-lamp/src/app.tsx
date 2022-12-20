import React from 'react';
import 'ray';
import '@/i18n';
import './app.less';
import { kit } from '@ray-js/panel-sdk';
import { SdmProvider } from '@ray-js/sdm-react';
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
    devices.socket.onInitialized(res => {
      const devInfo = res.getDevInfo();
      // console.log('devInfo===', devInfo);
      dispatch(
        actions.common.devInfoChange({
          ...devInfo,
          state: formatDevSchema(devInfo).state,
        })
      );
      // dispatch(actions.common.initDp(res.getDpState()));
    });
    devices.socket.onDpDataChange(res => {
      const { deviceId, dps } = res;
      const updateDp = {};
      if (deviceId === devices.socket.getDevInfo().devId) {
        Object.keys(dps).forEach(dpItem => {
          const code = getDPCodeById(dpItem);
          updateDp[code] = dps[dpItem];
        });
      }
      dispatch(actions.common.responseUpdateDp(updateDp));
    });
    this.initCloud();
  }
  async initCloud() {
    // 加载云端配置
    LampApi.fetchCloudConfig().then(cloudData => {
      if (cloudData && Object.keys(cloudData).length) {
        this.handleCloudData(cloudData);
      }
    });
  }

  handleCloudData(cloudData: any) {
    // let isFirstLoadin = true;
    console.log('cloudData', cloudData);
    let collectColorList = [...defaultColors];
    let collectWhiteList = [...defaultWhite];
    Object.entries(cloudData).forEach(([code, value]: [string, any]) => {
      // 获取照明情景，这里可以先插入默认情景数据
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
        <SdmProvider value={devices.socket}>{this.props.children}</SdmProvider>
      </Provider>
    );
  }
}

export default App;
