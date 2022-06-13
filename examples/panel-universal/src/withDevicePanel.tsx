import React from 'react';
import { useSetAtom, useAtomValue } from 'jotai';
import {
  showToast,
  bluetoothIsPowerOn,
  getDeviceInfo,
  onDeviceInfoUpdated,
  onDpDataChange,
  onDeviceOnlineStatusUpdate,
  onNetworkStatusChange,
  onBluetoothAdapterStateChange,
  offDeviceInfoUpdated,
  offDpDataChange,
  offDeviceOnlineStatusUpdate,
  offNetworkStatusChange,
  offBluetoothAdapterStateChange,
} from '@ray-js/api';
import { initDevInfo, getDevInfo } from '@/api';
import { getDpStateMapByDevInfo, mapDpsMapToDpStateMap } from '@/utils';
import {
  devInfoAtom,
  deviceOnlineAtom,
  dpStateAtom,
  networkAtom,
  bluetoothAtom,
  selectDevInfoAtom,
  selectDpStateAtom,
  DpState,
} from '@/atoms';
import Strings from './i18n';

const withDevicePanel = (WrappedComponent: any) => {
  const PanelComponent: React.FC = props => {
    const setDevInfo = useSetAtom(devInfoAtom);
    const setDeviceOnline = useSetAtom(deviceOnlineAtom);
    const setDpState = useSetAtom(dpStateAtom);
    const setNetwork = useSetAtom(networkAtom);
    const setBluetooth = useSetAtom(bluetoothAtom);
    const devInfo = useAtomValue(selectDevInfoAtom);
    const dpState = useAtomValue(selectDpStateAtom);
    /**
     * 监听设备 DP 名字和设备名字变更事件
     */
    const handleDeviceInfoUpdated: DeviceInfoUpdatedHandler = data => {
      console.log('=== onDeviceInfoUpdated', data);
      getDeviceInfo({
        deviceId: data.deviceId,
        success: info => {
          console.log(`=== getDeviceInfo ${data.deviceId} success`, info);
          setDevInfo(info as DevInfo);
        },
        fail: error => console.warn(`=== getDeviceInfo ${data.deviceId} fail`, error),
      });
    };
    /**
     * 监听设备上下线状态变更
     */
    const handleDpDataChange: DpDataChangeHandler = data => {
      console.log('=== onDpDataChange', data);
      const initalDevInfo = getDevInfo();
      const newDpState = mapDpsMapToDpStateMap(data.dps, initalDevInfo) as DpState;
      setDpState(newDpState);
    };
    /**
     * 监听设备上下线状态变更
     */
    const handleDeviceOnlineStatusUpdate: DeviceOnlineStatusUpdateHandler = data => {
      // TODO: 真机测试验证下
      console.log('=== onDeviceOnlineStatusUpdate', data);
      setDeviceOnline(data);
    };
    /**
     *
     * 监听设备上下线状态变更
     */
    const handleNetworkStatusChange: NetworkStatusChangeHandler = data => {
      console.log('=== onNetworkStatusChange', data);
      setNetwork(data);
    };
    /**
     * 监听蓝牙适配器状态变化事件
     */
    const handleBluetoothAdapterStateChange: BluetoothAdapterStateChangeHandler = data => {
      console.log('=== onBluetoothAdapterStateChange', data);
      setBluetooth(data);
    };

    React.useEffect(() => {
      initDevInfo().then(initalDevInfo => {
        const initialDpState = getDpStateMapByDevInfo(initalDevInfo) as DpState;
        setDevInfo(initalDevInfo);
        setDpState(initialDpState);
        bluetoothIsPowerOn({
          success: available => {
            console.log('=== bluetoothIsPowerOn success', available);
            setBluetooth({ available });
          },
          fail: error => console.warn('=== bluetoothIsPowerOn fail', error),
        });
        onDeviceInfoUpdated(handleDeviceInfoUpdated);
        onDpDataChange(handleDpDataChange);
        onDeviceOnlineStatusUpdate(handleDeviceOnlineStatusUpdate);
        onNetworkStatusChange(handleNetworkStatusChange);
        onBluetoothAdapterStateChange(handleBluetoothAdapterStateChange);
      });
      return () => {
        offDeviceInfoUpdated(handleDeviceInfoUpdated);
        offDpDataChange(handleDpDataChange);
        offDeviceOnlineStatusUpdate(handleDeviceOnlineStatusUpdate);
        offNetworkStatusChange(handleNetworkStatusChange);
        offBluetoothAdapterStateChange(handleBluetoothAdapterStateChange);
      };
    }, []);

    const isInitialized = devInfo !== null && dpState !== null;
    const isDeviceSchemaEmpty = isInitialized && !devInfo?.schema?.length;

    if (!isInitialized) {
      return null;
    }

    /**
     * 设备 schema 为空的话给个提示
     */
    if (isDeviceSchemaEmpty) {
      showToast({ title: Strings.getLang('deviceSchemaEmptyTip') });
    }

    /**
     * 保证 devInfo 已存在时再去渲染组件，可以让组件内部消费 devInfo 更加稳定
     */
    return <WrappedComponent {...props} />;
  };

  return PanelComponent;
};

export default withDevicePanel;
