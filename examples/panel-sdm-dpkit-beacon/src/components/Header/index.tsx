import React from 'react';

import Strings from '@/i18n';
import Battery from '@ray-js/battery';
import { useProps } from '@ray-js/panel-sdk';
import { Text, View } from '@ray-js/ray';

import { SwitchBtnView } from '../SwitchBtnView';
import styles from './index.module.less';
import dpCodes from '@/config/dpCodes';

export interface HeaderProps {
  style?: React.CSSProperties;
}

const BatteryColor = {
  low: {
    color: '#FF4444',
    value: 10,
    text: Strings.getLang('batteryVal_low'),
  },
  middle: {
    color: '#F5A623',
    value: 60,
    text: Strings.getLang('batteryVal_mid'),
  },
  high: {
    color: '#70CF98',
    value: 100,
    text: Strings.getLang('batteryVal_high'),
  },
};

export const Header: React.FC<HeaderProps> = ({ style }) => {
  const battery_state = useProps(state => state?.battery_state);

  return (
    <View className={styles.contain} style={style}>
      <View>
        <SwitchBtnView dpCode={dpCodes.powerCode} />
      </View>
      <View className={styles.battery}>
        <Battery
          type="vertical"
          backgroundColor="#333333"
          value={BatteryColor[battery_state]?.value || BatteryColor.low.value}
          onCalcColor={() => BatteryColor[battery_state]?.color || BatteryColor.low.color}
        />
        <Text className={styles.batteryText}>
          {Strings.getLang('batteryVal')}:{' '}
          {BatteryColor[battery_state]?.text || BatteryColor.low.text}
        </Text>
      </View>
    </View>
  );
};
