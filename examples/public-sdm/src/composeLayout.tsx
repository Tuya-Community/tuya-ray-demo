import { actions, store } from '@/redux';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { getSystemInfoSync } from '@ray-js/ray';
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
      console.log('app onLaunch: ', object);
      const systemInfo = getSystemInfoSync();
      const { theme } = systemInfo;

      dispatch(actions.common.systemInfo(systemInfo));
      dispatch(actions.theme.toggleTheme({ type: theme }));
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
