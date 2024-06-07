import React, { FC } from 'react';
import { Text, View } from '@ray-js/components';
import Slider from '@ray-js/components-ty-slider';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { selectDpStateByCode } from '@/redux/modules/dpStateSlice';
import { fanSpeedCode, switchCode } from '@/config/dpCodes';
import Strings from '@/i18n';
import { useSliderDp } from '@/hooks';

import styles from './index.module.less';

const FanSpeed: FC = () => {
  const dpSwitch = useSelector(selectDpStateByCode(switchCode));
  const { min, max, step, sliderState, handleChange, handleAfterChange } =
    useSliderDp(fanSpeedCode);

  return (
    <View className={clsx(styles.container, !dpSwitch && 'disabled')}>
      <Slider
        disabled={!dpSwitch}
        min={min}
        max={max}
        step={step}
        value={sliderState}
        isShowTicks={false}
        maxTrackHeight="20rpx"
        maxTrackRadius="14rpx"
        minTrackHeight="20rpx"
        minTrackColor="linear-gradient(to left, #87abf2 11.6%, #4b7ee2)"
        maxTrackColor="#f4faff"
        thumbHeight="56rpx"
        thumbWidth="77rpx"
        thumbRadius="48rpx"
        thumbBoxShadowStyle="14rpx 14rpx 30rpx rgba(158, 184, 210, 0.45)"
        thumbColor="linear-gradient(225deg, #FDFEFF 13%, #D5E3F3 96%)"
        onChange={handleChange}
        onAfterChange={handleAfterChange}
      />

      <View className={styles.descWrapper}>
        <Text className={styles.label}>{Strings.getDpLang(fanSpeedCode)}</Text>
        <Text className={styles.value}>{sliderState}</Text>
      </View>
    </View>
  );
};

export default FanSpeed;
