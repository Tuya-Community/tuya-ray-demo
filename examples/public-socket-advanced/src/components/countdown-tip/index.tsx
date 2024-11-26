/* eslint-disable react/default-props-match-prop-types */
import React from 'react';
import dayjs from 'dayjs';
import { View } from '@ray-js/ray';
import { useProps } from '@ray-js/panel-sdk';
import { useSystemInfo } from '@/hooks/useSystemInfo';
import Strings from '@/i18n';
import styles from './index.module.less';

const defaultProps = {
  powerCode: 'switch_1',
  countdownCode: 'countdown_1',
};

type Props = typeof defaultProps;

export const CountdownTip: React.FC<Props> = props => {
  const { powerCode, countdownCode } = props;

  const sysInfo = useSystemInfo();
  const power = useProps(p => p[powerCode]) as boolean;
  const countdown = useProps(p => p[countdownCode]) as number;

  // 在倒计时不存在或者等于 0 时，仅不可见，实际仍需要占位，保证 UI 协调
  const hideCountdown = power === null || countdown === null || countdown === 0;

  const is24Hour = !!sysInfo?.is24Hour;
  const formatToken = is24Hour ? 'HH:mm' : 'hh:mm A';
  const countdownText = dayjs()
    .add(countdown || 0, 'second')
    .format(formatToken);

  const onOffText = Strings.getLang(power ? 'off' : 'on');
  return (
    <View
      className={styles['text-hint']}
      style={{ visibility: hideCountdown ? 'hidden' : 'inherit' }}
    >
      {Strings.formatValue('countdownTip', countdownText, onOffText)}
    </View>
  );
};

CountdownTip.defaultProps = defaultProps;
