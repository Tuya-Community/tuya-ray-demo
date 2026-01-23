import React, { Component, useState } from 'react';
import { Provider } from 'react-redux';
import { getAppInfo, getSystemInfoSync } from '@ray-js/ray';
import { devices, dpKit } from './devices';
import { updateThemeType } from './redux/modules/themeSlice';
import { initializeSystemInfo } from './redux/modules/systemInfoSlice';
import store from './redux';
import './styles/index.less';
import ConfigProvider from '@ray-js/components-ty-config-provider';
import { initializeAppInfo } from './redux/modules/appInfoSlice';

interface Props {
  devInfo: DevInfo;
  // eslint-disable-next-line react/require-default-props
  extraInfo?: Record<string, any>;
}

interface State {
  devInfo: DevInfo;
}


function Panel(config: any) {
  const [primaryColor, setPrimaryColor] = useState('#3678e3');
  const [tabBarStyle, setTabBarStyle] = useState({
    textColor: 'var(--app-B5-N2)',
    selectedColor: 'var(--app-M4)',
    backgroundColor: 'var(--app-B5)',
  });

  return <ConfigProvider config={{ primaryColor, tabBar: tabBarStyle }}>{config.children}</ConfigProvider>
}


const composeLayout = (SubComp: React.ComponentType<any>) => {
  const { dispatch } = store;
  return class PanelComponent extends Component<Props, State> {
    async onLaunch(object: any) {
      console.log('=== App onLaunch', object);
      devices.common.onInitialized((device) => {
        dpKit.init(device)
      });
      devices.common.init();
      const systemInfo = getSystemInfoSync();
      const { theme } = systemInfo;
      getAppInfo({
        success: (data) => {
          dispatch(initializeAppInfo(data));
        },
        fail: (err) => {
          console.log('=== getAppInfoError', err);
        }
      });

      dispatch(initializeSystemInfo(systemInfo));
      dispatch(updateThemeType(theme));

    }

    render() {
      const { extraInfo } = this.props;

      return (
        <Provider store={store}>
          <Panel>
            {/* @ts-ignore */}
            <SubComp extraInfo={extraInfo} {...this.props} />
          </Panel>

        </Provider>
      );
    }
  };
};

export default composeLayout;
