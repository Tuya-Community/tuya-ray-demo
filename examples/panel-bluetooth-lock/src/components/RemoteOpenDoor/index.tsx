import React, { useMemo, useState, useRef, useEffect } from 'react';
import {
  Text,
  View,
  Image,
  router,
  showToast,
  hideToast,
  onDpDataChange,
  offDpDataChange,
  showModal,
} from '@ray-js/ray';
import { utils } from '@ray-js/panel-sdk';
import { useStore } from 'react-redux';
import { RotateImage } from '@/components';

import Res from '@/res';
import Strings from '@/i18n';
import { formatDpChange } from '@/utils';
import { putDpData } from '@/utils/sendDp';
import { connectBLEDevice } from '@/utils/ble';
import { dpCodes, globalConfig } from '@/config';

import { remoteOpen as remoteOpenApi } from '@/api/homeApi';
import { usePanelStore, useDeviceOnline, useDevInfo, useDpPermission } from '@/hooks';

import styles from './index.module.less';

const { remoteNoDpKey, remoteUnlockCheck, manualLock } = dpCodes;

enum DoorStatus {
  open = 'open',
  close = 'close',
  offline = 'offline',
}

/**
 * 开启状态：#F67352
 * 关闭状态：#5EAAFF
 * 离线状态：#A2A2A2
 */
const statusInfo = {
  open: {
    bg: Res.showOpenImage,
    iconBg: Res.openImage,
    text: Strings.getLang('close'),
    color: '#F67352',
  },
  close: {
    bg: Res.showImage,
    iconBg: Res.lockImage,
    text: Strings.getLang('clickOpen'),
    color: '#5EAAFF',
  },
  offline: {
    bg: Res.outLineImage,
    iconBg: '',
    text: Strings.getLang('off'),
    color: '#A2A2A2',
  },
};

const RemoteOpenDoor = () => {
  const store = useStore();

  const { dpState, lockData, deviceProps, user } = usePanelStore();
  const deviceOnline = useDeviceOnline();
  const devInfo = useDevInfo();

  const { dpRemotePdSetkeyCheck, dpUnlockRecordCheck } = useDpPermission();
  const { remoteSwitch, bleOnlineState } = deviceProps;
  const { lock_motor_state } = dpState;
  const { isGW = false } = devInfo || {};

  const [loading, setLoading] = useState(false);
  const timer = useRef(null);
  const loadRef = useRef(loading);

  const themeColor = globalConfig.getConfig('themeColor') as string;

  const status = useMemo(
    () =>
      deviceOnline ? (lock_motor_state ? DoorStatus.open : DoorStatus.close) : DoorStatus.offline,
    [deviceOnline, lock_motor_state]
  );

  const text = useMemo(() => {
    let _text = statusInfo[status].text;
    if (deviceOnline) {
      _text = loading
        ? lock_motor_state
          ? Strings.getLang('locking')
          : Strings.getLang('unlocking')
        : statusInfo[status].text;
    }
    return _text;
  }, [deviceOnline, lock_motor_state, loading, status]);

  useEffect(() => {
    onDpDataChange(dpDataChangeHandle);
    return () => {
      offDpDataChange(dpDataChangeHandle);
    };
  }, []);

  useEffect(() => {
    loadRef.current = loading;
  }, [loading]);

  const dpDataChangeHandle = data => {
    const { getState } = store;
    const { devInfo: _devInfo } = getState();
    const _dpState = formatDpChange(_devInfo.arrSchema, data.dps);
    if (Object.keys(_dpState).length > 10) return;
    const remoteOpenResult = _dpState[remoteNoDpKey];
    const remoteUnlockCheckResult = _dpState[remoteUnlockCheck];
    if (remoteOpenResult) {
      setLoading(false);
      clearTimer();
      const result = remoteOpenResult.slice(0, 2);
      if (result === '00') {
        showToast({ title: Strings.getLang('openSuccess'), icon: 'success' });
      } else {
        showToast({ title: Strings.getLang('openFail'), icon: 'error' });
      }
    }
    if (remoteUnlockCheckResult) {
      setLoading(false);
      clearTimer();
      const result = remoteUnlockCheckResult.slice(-2);
      if (result === '00') {
        showToast({ title: Strings.getLang('openSuccess'), icon: 'success' });
      } else {
        showToast({ title: Strings.getLang('openFail'), icon: 'error' });
      }
    }
  };

  const remoteOpen = async () => {
    if (loading) return;
    if (!deviceOnline) {
      showModal({
        title: Strings.getLang('off'),
        content: Strings.getLang('timeout'),
        confirmText: Strings.getLang('confirm'),
        confirmColor: themeColor,
        showCancel: false,
        success: res => {
          if (res.confirm) {
            connectBLEDevice();
          }
        },
      });
      return;
    }
    setLoading(true);

    try {
      // 如果在gateway下，且蓝牙不在线，且设备在线，且有远程开锁或开锁记录权限DP，走接口远程开门逻辑
      if (
        isGW &&
        !bleOnlineState &&
        deviceOnline &&
        (dpRemotePdSetkeyCheck || dpUnlockRecordCheck)
      ) {
        if (!remoteSwitch) {
          showModal({
            title: Strings.getLang('openRemoteTitle'),
            content: Strings.getLang('openRemoteSubTitle'),
            confirmText: Strings.getLang('confirm'),
            confirmColor: themeColor,
            showCancel: false,
            success: res => {
              if (res.confirm) {
                router.push('/setting');
              }
            },
          });
          return;
        }
        await remoteOpenApi(!lock_motor_state);
      } else {
        // 蓝牙开锁
        const { lockUserId } = user;
        const { lockRandom } = lockData;
        const { devUnlockId, ins } = lockRandom;
        const userId = utils.numToHexString(lockUserId);

        const nowSec = new Date().valueOf();
        const nowTime = Math.round(nowSec / 1000).toString(16);
        // dp协议文档：https://developer.tuya.com/cn/docs/iot/ble?id=K9ow3vcpn71ua#title-36-%E5%BC%80%E5%85%B3%E9%94%81
        putDpData(remoteUnlockCheck, `ffff${devUnlockId}${ins}01${nowTime}00${userId}`)

        // 蓝牙关锁逻辑发送DP: manual_lock: true
        // putDpData(manualLock, true);
      }
    } catch (e) {
      setLoading(false);
      clearTimer();
      showToast({ title: e?.innerError?.errorMsg, icon: 'error' });
    }
    setTimer();
  };

  const setTimer = () => {
    timer.current = setTimeout(() => {
      if (loadRef.current) {
        showToast({
          title: Strings.getLang('timeout'),
          icon: 'none',
        });
      } else {
        hideToast();
      }
      setLoading(false);
    }, 15000);
  };

  const clearTimer = () => {
    timer.current && clearTimeout(timer.current);
  };

  return (
    <View className={styles.container}>
      {status !== DoorStatus.offline && (
        <RotateImage
          active={loading}
          rotateImage={statusInfo[status].bg}
          onLongClick={() => remoteOpen()}
        >
          <View className={styles.centerView}>
            {!!statusInfo[status].iconBg && (
              <Image src={statusInfo[status].iconBg} className={styles.centerImage} />
            )}
            <Text
              className={styles.lockText}
              style={{ color: statusInfo[status].color, marginTop: deviceOnline ? '0' : '160rpx' }}
            >
              {text}
            </Text>
          </View>
        </RotateImage>
      )}
      {status === DoorStatus.offline && (
        <View className={styles.outLineWrap}>
          <Image src={statusInfo[status].bg} className={styles.outLineBg} />
          <Text className={styles.outLineText} style={{ color: statusInfo[status].color }}>
            {text}
          </Text>
        </View>
      )}
    </View>
  );
};

export default RemoteOpenDoor;
