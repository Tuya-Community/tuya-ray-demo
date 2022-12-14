import React from 'react';
import 'ray';
import '@/i18n';
import './app.less';
import { kit } from '@ray-js/panel-sdk';
import { SdmProvider } from '@ray-js/sdm-react';
import { devices } from '@/devices';
import { store, actions } from '@/redux';
import { Provider } from 'react-redux';
import { getDPCodeById } from './utils/dp/putDpData';
import { formatDevSchema } from './utils';

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
