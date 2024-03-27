import React, { useEffect, useState } from 'react';
import 'ray';
import { hideMenuButton, getSystemInfoSync, getMenuButtonBoundingClientRect } from '@ray-js/ray';
import '@/i18n';
import { onDpDataChange, offDpDataChange } from '@ray-js/api';
import { kit, hooks } from '@ray-js/panel-sdk';
import { Provider } from 'react-redux';
import store from './redux';
import { devInfoChange } from './redux/modules/devInfoSlice';
import { formatDevSchema, formatDps } from './utils';
import { responseUpdateDp } from './redux/modules/dpStateSlice';

import '@/icon/iconfont.css';
import '@/global.less';
import { updateSystemInfo } from './redux/modules/systemInfoSlice';

if (process.env.NODE_ENV === 'production') {
  console.log = () => {};
}

const { initPanelEnvironment, initDevInfo } = kit;

initPanelEnvironment({ useDefaultOffline: true });

const App = ({ children }) => {
  const [initialized, setInitialized] = useState(false);
  hooks.usePanelConfig();

  const handleDpDataChange: DpDataChangeHandler = data => {
    const dpState = formatDps(data);

    if (Object.keys(dpState).length > 0) {
      console.log('上报dp', dpState);
      store.dispatch(responseUpdateDp(dpState));
    }
  };

  useEffect(() => {
    const initializeState = async () => {
      hideMenuButton();
      store.dispatch(updateSystemInfo(getSystemInfoSync()));
      getMenuButtonBoundingClientRect({
        success: menuBounding => {
          store.dispatch(
            updateSystemInfo({
              menuBounding,
            })
          );
        },
      });
      const devInfoInitial = await initDevInfo();
      if (devInfoInitial) {
        store.dispatch(devInfoChange(formatDevSchema(devInfoInitial)));
        setInitialized(true);
      }
    };

    initializeState();
  }, []);

  useEffect(() => {
    onDpDataChange(handleDpDataChange);

    return () => {
      offDpDataChange(handleDpDataChange);
    };
  }, []);

  return <Provider store={store}>{initialized ? children : null}</Provider>;
};

export default App;
