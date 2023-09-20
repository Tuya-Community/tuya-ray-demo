/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { LampApi } from '@/api';
import DefaultVal from '@/config/default';
import { actions, store } from '@/redux';
import './styles/index.less';
import { devices, dpKit } from '@/devices';

const { defaultColors, defaultWhite } = DefaultVal;

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
        dpKit.init(devices.lamp);
        const devInfo = res.getDevInfo();
        const { devId, groupId } = devInfo;
        this.initCloud(devInfo);
        LampApi.fetchCloudConfig(devId, groupId).then(cloudData => {
          if (cloudData && Object.keys(cloudData).length) {
            this.handleCloudData(cloudData);
          }
        });
        ty.hideLoading();
      });
    }

    async initCloud(devInfo) {
      // 获取本地数据
      // 加载云端配置

      const { devId, groupId } = devInfo;
      ty.showLoading({ title: '' });
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
