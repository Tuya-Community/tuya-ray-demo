import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { hideLoading, showLoading } from '@ray-js/ray';
import { devices, dpKit } from './devices';
import store from './redux';
import {
  getOssUrlAsync,
  getCurrentHomeInfoAsync,
  setIsInitialized,
} from './redux/modules/uiStateSlice';
import { getGroupIconsAsync, getZigbeeLocalIdAsync } from './redux/modules/groupSlice';
import './styles/index.less';

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
      console.log('=== App onLaunch', object);
      devices.common.init();
      devices.common.onInitialized(device => dpKit.init(device));
      // 在强依赖的数据加载完毕之前，阻塞用户的操作行为
      showLoading({ title: '', mask: true });
      Promise.all([dispatch(getOssUrlAsync()), dispatch(getZigbeeLocalIdAsync())]).finally(() => {
        dispatch(setIsInitialized(true));
        hideLoading();
      });
      dispatch(getGroupIconsAsync());
      dispatch(getCurrentHomeInfoAsync());
    }

    render() {
      const { extraInfo } = this.props;

      return (
        <Provider store={store}>
          <SubComp extraInfo={extraInfo} {...this.props} />
        </Provider>
      );
    }
  };
};

export default composeLayout;
