import React from 'react';
import res from '@/res';
import { View, Image } from '@ray-js/ray';
import dpCodes from '@/config/dpCodes';
import { Button } from '@/components';
import { dpUtils } from '@/utils';
import { useSelector } from '@/redux';
import styles from './index.module.less';

const { bottom_dark, power } = res;
const { powerCode } = dpCodes;

export const ControlBar = () => {
  const { powerVal } = useSelector(({ dpState }) => ({
    powerVal: dpState[powerCode],
  }));
  const handlePower = () => {
    // 下发开关
    dpUtils.putDpData(
      {
        [powerCode]: !powerVal,
      },
      { throttle: 300 }
    );
  };
  return (
    <View className={styles.container}>
      <Image className={styles.bg} mode="aspectFill" src={bottom_dark} />
      <Button
        img={power}
        onClick={handlePower}
        imgClassName={styles.powerBtn}
        className={styles.powerBox}
      />
    </View>
  );
};
