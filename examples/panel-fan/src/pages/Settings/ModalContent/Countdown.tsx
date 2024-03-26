import React, { FC, useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Slider from '@ray-js/components-ty-slider';
import { Text, View } from '@ray-js/components';
import { getDpSchema } from '@/utils';
import { countdownSetCode } from '@/config/dpCodes';
import { selectDpStateByCode, updateDp } from '@/redux/modules/dpStateSlice';
import Strings from '@/i18n';

import styles from './index.module.less';

const Countdown: FC = () => {
  const dispatch = useDispatch();
  const { range = [] } = useMemo(
    () => getDpSchema(countdownSetCode) as { range: CountdownSetState[] },
    []
  );
  const dpCountdownSet = useSelector(selectDpStateByCode(countdownSetCode));
  const [countdownSetLocal, setCountdownSetLocal] = useState(dpCountdownSet);

  useEffect(() => {
    if (dpCountdownSet !== countdownSetLocal) {
      setCountdownSetLocal(dpCountdownSet);
    }
  }, [dpCountdownSet]);

  const handleCountdownSetLocal = useCallback(value => {
    setCountdownSetLocal(range[value]);
  }, []);

  const handleCountdownSet = useCallback(value => {
    dispatch(
      updateDp({ [countdownSetCode]: range[value] }, { checkRepeat: true, filterExpired: true })
    );
    ty.vibrateShort({ type: 'light' });
  }, []);

  return (
    <View style={{ padding: '32rpx 0 64rpx' }}>
      <Slider
        min={0}
        max={range.length - 1}
        value={range.indexOf(countdownSetLocal)}
        step={1}
        isShowTicks
        maxTrackHeight="32rpx"
        maxTrackRadius="24rpx"
        minTrackHeight="32rpx"
        minTrackWidth="48rpx"
        minTrackColor="#6395f6"
        maxTrackColor="rgba(0, 0, 0, 0.05)"
        thumbHeight="48rpx"
        thumbWidth="48rpx"
        tickHeight="16rpx"
        tickWidth="16rpx"
        tickRadius="16rpx"
        maxTrackTickColor="#fff"
        minTrackTickColor="#fff"
        thumbBoxShadowStyle="0 4rpx 4rpx rgba(0, 0, 0, 0.1), 0 6rpx 6rpx rgba(0, 0, 0, 0.05);"
        thumbBorderStyle="0.5px solid rgba(0, 0, 0, 0.1);"
        onChange={handleCountdownSetLocal}
        onAfterChange={handleCountdownSet}
      />
      <View className={styles.sliderReference}>
        <Text className={styles.sliderReferenceText}>
          {Strings.getDpLang(countdownSetCode, range[0])}
        </Text>
        <Text className={styles.sliderReferenceText}>
          {Strings.getDpLang(countdownSetCode, range[range.length - 1])}
        </Text>
      </View>
    </View>
  );
};

export default Countdown;
