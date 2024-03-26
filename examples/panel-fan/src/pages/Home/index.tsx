import React, { FC, useCallback, useState } from 'react';
import { View } from '@ray-js/components';
import { selectSafeArea } from '@/redux/modules/systemInfoSlice';
import { checkDpExist } from '@/utils';
import { fanSpeedCode } from '@/config/dpCodes';
import { useHideMenuButton, useSelectorMemoized } from '@/hooks';

import styles from './index.module.less';
import FanAnimation from './FanAnimation';
import TopBar from './TopBar';
import FanSpeed from './FanSpeed';
import Control from './Control';

const Home: FC = () => {
  const safeArea = useSelectorMemoized(selectSafeArea);

  useHideMenuButton();

  return (
    <View className={styles.container} style={{ paddingTop: `${safeArea?.top ?? 48}px` }}>
      <TopBar />
      <FanAnimation />
      {checkDpExist(fanSpeedCode) && <FanSpeed />}
      <Control />
    </View>
  );
};

export default Home;
