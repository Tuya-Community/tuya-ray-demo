import React from 'react';
import { View, Image } from '@ray-js/ray';
import { useActions } from '@ray-js/panel-sdk';
import res from '@/res';
import { Button } from '@/components';
import styles from './index.module.less';

const { bottom_dark, power } = res;

export const ControlBar = () => {
  const actions = useActions();
  const handleTogglePower = () => {
    actions.switch_led.toggle({ throttle: 300 });
  };
  return (
    <View className={styles.container}>
      <Image className={styles.bg} mode="aspectFill" src={bottom_dark} />
      <Button
        img={power}
        onClick={handleTogglePower}
        imgClassName={styles.powerBtn}
        className={styles.powerBox}
      />
    </View>
  );
};
