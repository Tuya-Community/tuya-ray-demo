import React from 'react';
import { View, Image, Text } from '@ray-js/ray';
import Strings from '@/i18n';
import { openPlayCoolFunctional } from '@/utils/openPlayCoolFunctional';
import styles from './index.module.less';

export const CoolBarCard = () => {
  return (
    <View className={styles.banner} onClick={openPlayCoolFunctional}>
      <Image src="/images/coolBarBg.png" className={styles.image} />
      <Text className={styles.text}>{Strings.getLang('coolBarTip')}</Text>
    </View>
  );
};
