import React, { FC } from 'react';
import { Text, View } from '@ray-js/components';
import { tempCurrentCode } from '@/config/dpCodes';
import { useTempUnit } from '@/hooks';

import styles from './index.module.less';

const Temperature: FC = () => {
  const { tempLabel, tempUnitLabel } = useTempUnit(tempCurrentCode);

  return (
    <View className={styles.temperatureWrapper}>
      <Text className="iconfontpanel icon-panel-temperature" />
      <Text className={styles.temperatureText}>
        {tempLabel} {tempUnitLabel}
      </Text>
    </View>
  );
};

export default Temperature;
