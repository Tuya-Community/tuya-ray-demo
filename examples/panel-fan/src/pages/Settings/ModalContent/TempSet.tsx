import React, { FC } from 'react';
import Slider from '@ray-js/components-ty-slider';
import { Text, View } from '@ray-js/components';
import { convertDpToValue } from '@/utils';
import { tempSetCode } from '@/config/dpCodes';
import { useSliderDp, useTempUnit } from '@/hooks';
import { TouchableOpacity } from '@/components';
import Strings from '@/i18n';

import styles from './index.module.less';

type Props = {
  onClose: () => void;
};

const TempSet: FC<Props> = ({ onClose }) => {
  const { tempFormatter, tempUnitLabel } = useTempUnit(tempSetCode);
  const { min, max, step, sliderState, handleChange, handleAfterChange } = useSliderDp(tempSetCode);

  return (
    <View className={styles.modalWrapper}>
      <View className={styles.modalHeader}>
        <View className={styles.modalTitleWrapper}>
          <Text className={styles.modalTitle}>{Strings.getDpLang(tempSetCode)}</Text>
          <Text className={styles.modalSubTitle}>
            ·{tempFormatter(convertDpToValue(tempSetCode, sliderState))}
            {tempUnitLabel}
          </Text>
        </View>
        <TouchableOpacity className={styles.modalCloseWrapper} onClick={onClose}>
          <Text className="iconfontpanel icon-panel-close" />
        </TouchableOpacity>
      </View>
      <View className={styles.modalContent}>
        <View style={{ padding: '32rpx 0 64rpx' }}>
          <Slider
            min={min}
            max={max}
            value={sliderState}
            step={step}
            isShowTicks={false}
            maxTrackHeight="32rpx"
            maxTrackRadius="24rpx"
            minTrackHeight="32rpx"
            minTrackWidth="48rpx"
            minTrackColor="#6395f6"
            maxTrackColor="rgba(0, 0, 0, 0.05)"
            thumbHeight="48rpx"
            thumbWidth="48rpx"
            thumbBoxShadowStyle="0 4rpx 4rpx rgba(0, 0, 0, 0.1), 0 6rpx 6rpx rgba(0, 0, 0, 0.05);"
            thumbBorderStyle="0.5px solid rgba(0, 0, 0, 0.1);"
            onChange={handleChange}
            onAfterChange={handleAfterChange}
          />
          <View className={styles.sliderReference}>
            <Text className={styles.sliderReferenceText}>
              {tempFormatter(convertDpToValue(tempSetCode, min))}
            </Text>
            <Text className={styles.sliderReferenceText}>
              {tempFormatter(convertDpToValue(tempSetCode, max))}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default TempSet;
