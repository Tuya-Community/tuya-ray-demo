/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { hideLoading } from '@ray-js/ray';
import { store, updateLightColorData } from '@/redux';
import { devices, dpKit } from '@/devices';
import { LIGHT_COLOR_DATA } from '@/constant';
import { log } from '@/utils';

import './styles/index.less';

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
    async onLaunch() {
      devices.lamp.init();
      devices.lamp.onInitialized(res => {
        log('======== __groupInfo__', res.__groupInfo__, ' ========');
        log('======== devInfo', res.__devInfo__, ' ========');
        dpKit.init(devices.lamp);
        this.fetchColorCloudData();
      });
    }

    fetchColorCloudData() {
      devices.lamp.model.abilities.storage
        .get(LIGHT_COLOR_DATA, checkedMapColor => {
          if (!checkedMapColor) {
            return;
          }
          this.updateMapColor(checkedMapColor);
        })
        .then(checkedMapColor => {
          if (!checkedMapColor) {
            return;
          }
          const { data, __isEqual__ } = checkedMapColor;
          if (!data || __isEqual__) {
            return;
          }
          this.updateMapColor(checkedMapColor);
        });
    }

    updateMapColor(checkedMapColor) {
      const { data } = checkedMapColor || {};
      hideLoading();
      if (!data) {
        return;
      }
      const { value } = data;
      dispatch(updateLightColorData(value));
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
