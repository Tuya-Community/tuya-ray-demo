import React, { Component } from 'react';
import { Provider, useDispatch } from 'react-redux';
import { getSystemInfoSync } from '@ray-js/ray';
import { kit, DevInfo } from '@ray-js/panel-sdk';
import store, { actions } from '@/redux';
import { devices, dpKit } from './devices';
import { updateThemeType } from './redux/modules/themeSlice';
import { devInfoChange } from './redux/modules/devInfoSlice';
import { initializeSystemInfo } from './redux/modules/systemInfoSlice';

import './styles/index.less';

const { initDevInfo } = kit;

interface Props {
  devInfo: DevInfo;
  // eslint-disable-next-line react/require-default-props
  extraInfo?: Record<string, any>;
}

interface State {
  devInfo: DevInfo;
}

const composeLayout = (SubComp: React.ComponentType<any>) => {
  const { dispatch } = store;
  return class PanelComponent extends Component<Props, State> {
    async onLaunch(object: any) {
      devices.common.init();
      devices.common.onInitialized(device => dpKit.init(device));
      const systemInfo = getSystemInfoSync();
      const { theme } = systemInfo;

      dispatch(initializeSystemInfo(systemInfo));
      dispatch(updateThemeType(theme));

      ty.getAppInfo({
        success: infoSource => {
          const { regionCode } = infoSource;
          dispatch(actions.common.updateRegionCode({ regionCode }));
        },
      });

      const deviceInfo = await initDevInfo();
      dispatch(devInfoChange(deviceInfo));
    }

    render() {
      const { extraInfo } = this.props;

      return (
        <Provider store={store}>
          {/* @ts-ignore */}
          <SubComp extraInfo={extraInfo} {...this.props} />
        </Provider>
      );
    }
  };
};

export default composeLayout;
