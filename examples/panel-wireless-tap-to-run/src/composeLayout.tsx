import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { hideLoading, showLoading } from '@ray-js/ray';
import { devices, dpKit } from './devices';
import store from './redux';
import { getCurrentHomeInfoAsync, setIsInitialized } from './redux/modules/uiStateSlice';
import { getBindTapToRunRules, getTapToRunRulesAsync } from './redux/modules/sceneSlice';
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
      devices.common.init();
      devices.common.onInitialized(device => {
        dpKit.init(device);
        // 在数据加载完毕之前，阻塞用户的操作行为
        showLoading({ title: '', mask: true });
        Promise.all([dispatch(getBindTapToRunRules())]).finally(() => {
          dispatch(setIsInitialized(true));
          hideLoading();
        });
        dispatch(getTapToRunRulesAsync());
        dispatch(getCurrentHomeInfoAsync());
      });
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
