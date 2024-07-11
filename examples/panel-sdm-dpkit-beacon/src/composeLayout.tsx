/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { actions, store } from '@/redux';
import './styles/index.less';
import { devices, dpKit } from '@/devices';

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
  return class PanelComponent extends Component<Props, State> {
    async onLaunch() {
      devices.lamp.init();
      devices.lamp.onInitialized(res => {
        dpKit.init(devices.lamp);
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
