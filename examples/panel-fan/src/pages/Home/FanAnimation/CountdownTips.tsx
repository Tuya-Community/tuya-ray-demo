import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { Text, View } from '@ray-js/components';
import { selectDpStateByCode } from '@/redux/modules/dpStateSlice';
import { countdownLeftCode, switchCode } from '@/config/dpCodes';
import Strings from '@/i18n';

import styles from './index.module.less';

const CountdownTips: FC = () => {
  const dpSwitch = useSelector(selectDpStateByCode(switchCode));
  const dpCountdownLeft = useSelector(selectDpStateByCode(countdownLeftCode));

  if (dpCountdownLeft <= 0) {
    return null;
  }

  const dpCountdownLeftFormatted = `${String(Math.floor(dpCountdownLeft / 60)).padStart(
    2,
    '0'
  )}:${String(dpCountdownLeft % 60).padStart(2, '0')}`;

  return (
    <View className={styles.countdownWrapper}>
      <Text className={styles.countdownText}>
        {Strings.formatValue(
          'dsc_countdown_tips',
          Strings.getLang(dpSwitch ? 'dsc_countdown_turn_off' : 'dsc_countdown_turn_on')
        )}
      </Text>
      <Text className={styles.countdownValue}>{dpCountdownLeftFormatted}</Text>
    </View>
  );
};

export default CountdownTips;
