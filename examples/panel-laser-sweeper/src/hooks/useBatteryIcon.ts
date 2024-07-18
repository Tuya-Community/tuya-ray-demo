/**
 * 根据电量高低获取icon classname的逻辑
 */
import { useMemo } from 'react';

import { useProps } from '@ray-js/panel-sdk';

import { dpCodes } from '@/config';

const { batteryPercentageCode } = dpCodes;

export default function useBatteryIcon() {
  const batteryPercentage = useProps(props => props[batteryPercentageCode]);

  const iconFontClassName = useMemo(() => {
    let value = '100';
    let color = '#000000';
    if (batteryPercentage <= 10) {
      value = '10';
    } else if (batteryPercentage <= 20) {
      value = '20';
      color = '#ff4444';
    } else if (batteryPercentage <= 60) {
      value = '60';
    } else if (batteryPercentage <= 99) {
      value = '99';
    } else {
      value = '100';
    }

    return {
      className: `icon-${batteryPercentageCode}-${value}`,
      color: color,
      batteryPercentage,
    };
  }, [batteryPercentage]);

  return iconFontClassName;
}
