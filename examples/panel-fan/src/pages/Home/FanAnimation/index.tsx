import React, { FC, useEffect, useMemo } from 'react';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { Image, View } from '@ray-js/components';
import { imgFanBlade, imgFanBottom, imgFanShadow } from '@/res';
import { selectDpStateByCode } from '@/redux/modules/dpStateSlice';
import { fanSpeedCode, switchCode } from '@/config/dpCodes';
import { getDpSchema } from '@/utils';

import styles from './index.module.less';
import Temperature from './Temperature';
import CountdownTips from './CountdownTips';

type Props = {
  disabledAnimation?: boolean;
};

const FanAnimation: FC<Props> = ({ disabledAnimation = false }) => {
  const dpSwitch = useSelector(selectDpStateByCode(switchCode));
  const dpFanSpeed = useSelector(selectDpStateByCode(fanSpeedCode));
  const { min, max } = useMemo(() => getDpSchema(fanSpeedCode), []);

  const animationEnable = !disabledAnimation && dpSwitch;

  return (
    <View className={styles.container}>
      <Image src={imgFanBottom} className={styles.imgFanBottom} />
      <View
        className={clsx(styles.spinElementWrapper, animationEnable && dpFanSpeed < 33 && 'running')}
      >
        <View className={clsx(styles.spinElement, animationEnable && dpFanSpeed < 66 && 'running')}>
          <Image
            src={imgFanBlade}
            className={clsx(styles.imgFanBlade, animationEnable && 'running')}
          />
        </View>
      </View>
      <Image src={imgFanShadow} className={styles.imgFanShadow} />
      <Temperature />
      <CountdownTips />
    </View>
  );
};

export default FanAnimation;
