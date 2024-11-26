import { Image, Text, View } from '@ray-js/ray';
import React, { FC, useMemo } from 'react';
import Strings from '@/i18n';
import { images } from '@/res';
import styles from './index.module.less';

interface Props {
  data: string[];
  unit: string;
  orientation: 'portrait' | 'landscape';
  onExport: () => void;
  onScreen: () => void;
}

const Total: FC<Props> = ({ data, unit, orientation, onExport, onScreen }) => {
  const total = useMemo(() => {
    return data?.reduce((acc, cur) => acc + +cur || 0, 0) || 0;
  }, [data]);

  return (
    <View className={styles['title-container']}>
      <View className={styles['title-container-left']}>
        <View className={styles['title-main-wrapper']}>
          <Text className={styles['title-main-text']}>{total}</Text>
          <Text className={styles['title-unit-text']}>{unit}</Text>
        </View>
        <View className={styles['title-main-total']}>
          <Image src={images.flash} className={styles['title-image']} />
          <Text className={styles['title-value-text']}>{Strings.getLang('stats_total')}</Text>
        </View>
      </View>
      <View className={styles.btns}>
        <View className={styles.btn} hoverClassName={styles.hover} onClick={onExport}>
          {Strings.getLang('export')}
        </View>
        <View className={styles.btn} hoverClassName={styles.hover} onClick={onScreen}>
          {Strings.getLang(orientation === 'portrait' ? 'full_screen' : 'exist')}
        </View>
      </View>
    </View>
  );
};

export default Total;
