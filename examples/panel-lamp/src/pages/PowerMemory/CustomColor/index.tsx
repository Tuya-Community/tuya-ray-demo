/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
import { Image, Text, View } from '@ray-js/components';
import WhiteDimmer from '@/components/WhiteDimmer';
import { actions, store, useSelector } from '@/redux';
import { router } from 'ray';
import Button from '@/components/Button';
import colorUtils from '@/utils/color.js';
import React, { useEffect, useState } from 'react';
import dpCodes from '@/config/dpCodes';
import SupportUtils from '@/utils/dp/support';
import Strings from '@/i18n';
import { dpUtils } from '@/utils';
import TopBar from '@/components/TopBar';
import config from '@/config/default';
import res from '@/res';
import { hideMenuButton, setNavigationBarColor } from '@ray-js/ray';
import styles from './index.module.less';

const { dispatch } = store;
const { brightKelvin2rgb } = colorUtils;
const { brightCode, memoryCode } = dpCodes;
const { isSupportDp } = SupportUtils;
export function PowerMemory() {
  const memoryPower = useSelector(state => state.dpState[memoryCode]);
  const safeArea = useSelector(state => state.cloudState.systemInfo?.safeArea);
  const customColor = useSelector(state => state.uiState.customColor);
  const [newCustomColor, setNewCustomColor] = useState(customColor);
  useEffect(() => {
    setNavigationBarColor({
      frontColor: '#000000',
      backgroundColor: 'transparent',
      animation: {
        duration: 300,
        timingFunc: 'linear',
      },
    });
    hideMenuButton();
  }, []);
  const backToHome = () => {
    router.back();
  };
  const handleWhiteChange = (key: string, value: number) => {
    const result = { ...newCustomColor };
    result[key] = value;
    setNewCustomColor(result);
  };
  const handleSave = () => {
    router.back();
    dispatch(
      actions.common.updateUi({
        customColor: newCustomColor,
      })
    );
  };
  return (
    <View style={{ paddingTop: safeArea?.top ? safeArea?.top * 2 : 40 }} className={styles.view}>
      <TopBar
        handleCancel={backToHome}
        cancelType="icon"
        title={Strings.getLang('customMemory')}
        handleSave={handleSave}
      />

      <View className={styles.box}>
        <WhiteDimmer
          style={{ padding: '48rpx 32rpx' }}
          brightness={customColor.brightness}
          temperature={customColor.temperature}
          onRelease={handleWhiteChange}
        />
      </View>
    </View>
  );
}

export default PowerMemory;
