import React, { FC } from 'react';
import { Text, View } from '@ray-js/components';
import { useSelector } from 'react-redux';
import { DpStateKey, selectDpStateByCode } from '@/redux/modules/dpStateSlice';
import Strings from '@/i18n';
import { convertDpToValue } from '@/utils';
import { useTempUnit } from '@/hooks';
import { tempSetCode } from '@/config/dpCodes';

import styles from './index.module.less';

type Props = {
  dpCode: DpStateKey;
};

const TempSetValue: FC = () => {
  const { tempLabel, tempUnitLabel } = useTempUnit(tempSetCode);

  return (
    <Text className={styles.featureText}>
      {tempLabel}
      {tempUnitLabel}
    </Text>
  );
};

const Value: FC<Props> = ({ dpCode }) => {
  const dpValue = useSelector(selectDpStateByCode(dpCode)) as number;

  return (
    <View className={styles.feature}>
      {dpCode === tempSetCode ? (
        <TempSetValue />
      ) : (
        <Text className={styles.featureText}>
          {convertDpToValue(dpCode, dpValue)}
          {Strings.getDpLang(dpCode, 'unit')}
        </Text>
      )}

      <Text className="iconfontpanel icon-panel-angleRight" />
    </View>
  );
};

export default Value;
