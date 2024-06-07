import React, { FC } from 'react';
import { View } from '@ray-js/components';
import { selectSafeArea } from '@/redux/modules/systemInfoSlice';
import { checkDpExist } from '@/utils';
import { fanSpeedCode } from '@/config/dpCodes';
import { useHideMenuButton, useSelectorMemoized } from '@/hooks';
import Fan from './Fan';
import TopBar from './TopBar';
import FanSpeed from './FanSpeed';
import Control from './Control';
import styles from './index.module.less';

const Home: FC = () => {
  const safeArea = useSelectorMemoized(selectSafeArea);

  useHideMenuButton();

  return (
    <View className={styles.container} style={{ paddingTop: `${safeArea?.top ?? 48}px` }}>
      <TopBar />
      <Fan />
      {checkDpExist(fanSpeedCode) && <FanSpeed />}
      <Control />
    </View>
  );
};

export default Home;
