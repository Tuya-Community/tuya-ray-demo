/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/ban-ts-comment */
// import { initDevInfo } from '@/api';
import { actions, store } from '@/redux';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { getSystemInfoSync } from '@ray-js/ray';
import { getCameraConfig } from '@/api/atop';
import './styles/index.less';
import { setOrientation, holdUp } from '@/utils/util';
import { getPanelApp, openPanelApp } from '@/utils/index';
import { devices } from '@/devices';

interface Props {
  devInfo: DevInfo;
  // eslint-disable-next-line react/require-default-props
  extraInfo?: Record<string, any>;
  // eslint-disable-next-line react/require-default-props
  preload?: boolean;
}

interface State {
  devInfo: DevInfo;
}

const composeLayout = (Comp: React.ComponentType<any>) => {
  const { dispatch } = store;
  return class PanelComponent extends Component<Props, State> {
    async onLaunch(object: any) {
      console.log('app onLaunch: ', object);
      const systemInfo = getSystemInfoSync();
      const { theme } = systemInfo;

      dispatch(actions.common.systemInfo(systemInfo));
      dispatch(actions.theme.toggleTheme({ type: theme }));

      ty.onAppEvent(e => {
        if (!holdUp()) {
          // 打开设置二级页
          if (e.key === 'system_setting') {
            openPanelApp();
          }
        }
      });

      setTimeout(() => {
        const devInfo = devices.ipc.getDevInfo();
        if (devInfo && devInfo.devId) {
          getCameraConfig(devInfo.devId);
          getPanelApp();
        }
      });

      ty.onNavigationBarBack(() => {
        setOrientation(1);
      });
    }

    render() {
      const { extraInfo } = this.props;

      return (
        <Provider store={store}>
          <Comp extraInfo={extraInfo} {...this.props} />
        </Provider>
      );
    }
  };
};

export default composeLayout;
