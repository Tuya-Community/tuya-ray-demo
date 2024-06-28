import { showLoading, hideLoading, showToast } from '@ray-js/ray';

import Strings from '@/i18n';
import { getCachedSystemInfo } from '@/api/getCachedSystemInfo';
import { getCachedLaunchOptions } from '@/api/getCachedLaunchOptions';

const devId = getCachedLaunchOptions()?.query?.deviceId;
const systemInfo = getCachedSystemInfo();

const connectBLEDevice = (timeout?: 10000) => {
    ty.device.bluetoothIsPowerOn({
        success: function(res) {
            console.log('bluetoothIsPowerOn success', res)
            if (!res) {
                if (systemInfo.platform === 'android') {
                    // 安卓才能打开蓝牙设置
                    ty.openSystemBluetoothSetting({
                        success: function(res) {
                            showLoading({ title: Strings.getLang('connectBLEDevice')});
                            console.log('openBluetoothAdapter success', res)
                            startConnectBLEDevice(timeout);
                        },
                        fail: function(res) {
                            console.log('openBluetoothAdapter fail', res)
                        }
                    })
                } else {
                    showToast({ title: Strings.getLang('openPhone'), icon: 'error'});
                }
            } else {
                showLoading({ title: Strings.getLang('connectBLEDevice')});
                startConnectBLEDevice(timeout);
            }
        },
        fail: function(res) {
            showToast({ title: Strings.getLang('connectFail'), icon: 'error'});
            hideLoading();
            console.log('bluetoothIsPowerOn fail', res)
        }
    })
}

const startConnectBLEDevice = (timeout?: 10000) => {
    console.log('主动链接蓝牙设备');
    ty.device.connectBluetoothDevice({
        devId: devId,
        timeoutMillis: timeout,
        souceType: 1,
        connectType: 1,
        success: function(res) {
            showToast({ title: Strings.getLang('openSuccess'), icon: 'success'});
            console.log('connectBLEDevice success', res)
        },
        fail: function(res) {
            showToast({ title: Strings.getLang('connectFail'), icon: 'error'});
            console.log('connectBLEDevice fail', res)
        }
    })
}

export { connectBLEDevice };