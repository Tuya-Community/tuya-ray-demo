/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {
  openPanel,
  setNavigationBarTitle,
  subscribeDeviceRemoved,
  onDeviceRemoved,
  onDpDataChange,
  onDeviceOnlineStatusUpdate,
  onBLEConnectStatusChange,
  onNetworkStatusChange,
  onBluetoothAdapterStateChange,
  offBLEConnectStatusChange,
  disconnectBluetoothDevice,
  getBLEOnlineState,
  exitMiniProgram,
} from '@ray-js/ray';
import isEmpty from 'lodash/isEmpty';
import { initDevInfo } from '@/api/homeApi';
import { actions, store } from '@/redux';
import {
  setUserRegion,
  getLatestLogAsync,
  setUserInfo,
  getPanelInfo,
  getDeviceProp,
  getSyncLockDataAsync,
  saveDeviceProps
} from '@/redux/actions';
import { formatDpChange } from '@/utils';
import { Code, dpCodes } from '@/config';
import { Api } from '@/api';

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

const { openDoorDpCodes, logTypeAlarmCodes, closeDoorDpCodes } = Code;

const composeLayout = (Comp: React.ComponentType<any>) => {
  const { dispatch } = store;
  return class PanelComponent extends Component<Props, State> {
    constructor(props) {
      super(props);
      this.state = {
        devInfo: null,
      };
    }

    async onLaunch(object: any) {
      console.log('app onLaunch: ', object);
      const devInfo = await initDevInfo();
      this.setState({ devInfo });
      if (devInfo && devInfo.devId) {
        setNavigationBarTitle({ title: devInfo.name });
        dispatch(actions.common.devInfoChange(devInfo));
        Api.initApiList(devInfo);
        // 订阅设备移除事件
        subscribeDeviceRemoved({
          deviceId: devInfo.devId,
          success: () => {
            // 监听删除设备事件
            onDeviceRemoved(body => {
              // 退出小程序容器
              exitMiniProgram();
            });
          },
          fail: () => console.log('subscribeDeviceRemoved 调用失败'),
        });
        // 查询蓝牙在线状态
        getBLEOnlineState({
          deviceId: devInfo.devId,
          success: res => {
            console.log('getBLEOnlineState success', res);
            saveDeviceProps({ bleOnlineState: res.isOnline }); 
          },
          fail: res => {
            console.log('getBLEOnlineState fail', res);
          },
        });

        // const { extraInfo } = this.props;
        // const isHasExtraInfo = extraInfo && !isEmpty(extraInfo);

        // const isDoorBellCallInter = isHasExtraInfo && extraInfo.isDoorlockCall;
        // if (isDoorBellCallInter) {
        //   openPanel({
        //     deviceId: devInfo.devId,
        //     extraInfo: {
        //       productId: devInfo.productId,
        //       bizClientId: '000001czwh',
        //       productVersion: '1',
        //       i18nTime: new Date().toString(),
        //     },
        //     initialProps: {
        //       messageId: extraInfo.messageId,
        //       isDoorlockCall: extraInfo.isDoorlockCall,
        //       themeColor: '#239C8E',
        //     },
        //   });
        // }

        setUserInfo();
        setUserRegion();
        getSyncLockDataAsync(true);
        getLatestLogAsync();
        getDeviceProp('UNLOCK_PHONE_REMOTE');
        getPanelInfo(devInfo.productId);
      }

      // dp上报相关
      onDpDataChange(data => {
        const { getState } = store;
        const { devInfo: _devInfo } = getState();
        const dpState = formatDpChange(_devInfo.arrSchema, data.dps);
        dispatch(actions.common.responseUpdateDp(dpState as any));

        // 首页最新一条日志更新
        Object.keys(dpState).forEach(key => {
          if (openDoorDpCodes.includes(key) || (logTypeAlarmCodes.includes(key)) || closeDoorDpCodes.indexOf(key)) {
            setTimeout(() => {
              getLatestLogAsync();
            }, 500);
          }
        });
      });

      onBLEConnectStatusChange(res => {
        // 蓝牙连接状态变化
        console.log('onBLEConnectStatusChange res', res)
      });

      onNetworkStatusChange(res => {
        // 手机网络连接状态变化
        console.log('onNetworkStatusChange res', res)
      });

      onBluetoothAdapterStateChange(res => {
        // 蓝牙连接状态变化
        console.log('onBluetoothAdapterStateChange res', res)
      });

      // 设备在线状态更新
      onDeviceOnlineStatusUpdate(async () => {
        const _devInfo = await initDevInfo();
        if (_devInfo && _devInfo.devId) {
          dispatch(actions.common.devInfoChange(devInfo));
        }
      });
    }

    render() {
      const { extraInfo } = this.props;
      const { devInfo } = this.state;

      return (
        <Provider store={store}>
          {devInfo && <Comp devInfo={devInfo} extraInfo={extraInfo} {...this.props} />}
        </Provider>
      );
    }
  };
};

export default composeLayout;
