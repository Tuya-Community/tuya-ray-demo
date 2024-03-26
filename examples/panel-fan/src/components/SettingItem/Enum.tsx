import React, { FC } from 'react';
import { Text, View } from '@ray-js/components';
import { useSelector } from 'react-redux';
import { DpStateKey, selectDpStateByCode } from '@/redux/modules/dpStateSlice';
import Strings from '@/i18n';

import styles from './index.module.less';

type Props = {
  dpCode: DpStateKey;
};

const Enum: FC<Props> = ({ dpCode }) => {
  const dpValue = useSelector(selectDpStateByCode(dpCode)) as string;

  return (
    <View className={styles.feature}>
      <Text className={styles.featureText}>{Strings.getDpLang(dpCode, dpValue)}</Text>
      <Text className="iconfontpanel icon-panel-angleRight" />
    </View>
  );
};

export default Enum;
