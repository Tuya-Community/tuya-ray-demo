/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/ban-ts-comment */
// import { initDevInfo } from '@/api';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { getSystemInfoSync } from '@ray-js/ray';
import { actions, store } from '@/redux';
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
      console.info('=== App onLaunch', object);
      devices.ipc.init();
      const systemInfo = getSystemInfoSync();
      const { theme } = systemInfo;

      dispatch(actions.common.systemInfo(systemInfo));
      dispatch(actions.theme.toggleTheme({ type: theme }));

      // app>=5.10监听右上角“点点点”设备详情跳转事件：基础库baseversion需要>=2.12.0，且需要使用开发者工具真机二维码调试，别用调试二维码！！！
      // app>=5.10 Listening to the top right corner "dot dot" device details jump event: basic library baseversion>=2.12.0, and need to use the developer tool real two-dimensional code debugging, do not debug two-dimensional code!!
      ty.onAppMore(e => {
        if (!holdUp()) {
          openPanelApp();
        }
      });

      // app<5.10监听右上角“点点点”跳转设备详情
      // app<5.10 Listen to the "Dot dot" device details skip event in the upper right corner
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
