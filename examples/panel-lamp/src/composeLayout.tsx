/* eslint-disable no-console */
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { utils } from '@ray-js/panel-sdk';
import store from '@/redux';
import { devices, dpKit } from '@/devices';
import defaultConfig from '@/config/default';
// import { initCloudDataAsync } from './redux/modules/cloudStateSlice';
import { initCloud } from './redux/modules/cloudStateSlice';
import './styles/index.less';
import { CLOUD_DATA_KEYS_MAP } from './constant';

const { defaultColors, defaultWhite } = defaultConfig;

interface Props {
  devInfo: DevInfo;
  extraInfo?: Record<string, any>;
  preload?: boolean;
}

interface State {
  devInfo: DevInfo;
}

const composeLayout = (Comp: React.ComponentType<any>) => {
  return class PanelComponent extends Component<Props, State> {
    async onLaunch() {
      devices.lamp.init();
      devices.lamp.onInitialized(device => {
        dpKit.init(device);
        // store.dispatch(initCloudDataAsync()); // 初始化设备维度缓存的云端数据，并同步到 redux
        this.initCloudData();
      });
    }

    /**
     * 初始化设备维度缓存的云端数据，并同步到 redux
     */
    async initCloudData() {
      ty.showLoading({ title: '' });
      const storageKeys = [CLOUD_DATA_KEYS_MAP.collectColors, CLOUD_DATA_KEYS_MAP.collectWhites];
      return Promise.all(storageKeys.map(k => devices.lamp.model.abilities.storage.get(k)))
        .then(data => {
          // 在云端没有数据的情况下，使用默认值
          const cloudData = {
            [CLOUD_DATA_KEYS_MAP.collectColors]: [...defaultColors],
            [CLOUD_DATA_KEYS_MAP.collectWhites]: [...defaultWhite],
          } as Parameters<typeof initCloud>['0'];
          data.forEach((v, i) => {
            const storageKey = storageKeys[i];
            if (v) {
              const value = utils.parseJSON(v);
              // @ts-ignore TODO: fix typing
              cloudData[storageKey] = value?.data?.value;
            }
          });
          // TODO: move to async action
          store.dispatch(initCloud(cloudData));
          ty.hideLoading();
        })
        .catch(err => {
          console.log('storage.get failed', err);
          ty.hideLoading();
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
