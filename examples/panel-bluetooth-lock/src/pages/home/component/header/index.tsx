import React, { useMemo } from 'react';
import { View, Text } from '@ray-js/ray';
import Battery from '@ray-js/battery';

import {
  usePanelStore,
  useDpPermission,
} from '@/hooks';
import Strings from '@/i18n';
import { RemoteOpenDoor, DefendTime } from '@/components';

import styles from './index.module.less';


interface IProps {
  cameraRotate?: Rotate;
}

const calcColor = params => {
  const { top, highColor, middleColor, lowColor } = params;
  // 0-10%: 红色   11%-59%: 黄色    60%-100%: 绿色
  if (top <= 8.6 && top >= 3) {
    return highColor;
  }
  if (top <= 14.2 && top > 8.6) {
    return middleColor;
  }
  return lowColor;
};

const HomeTopView: React.FC<IProps> = ({ cameraRotate = '0' }) => {
  const { dpState, devInfo } = usePanelStore();
  const { dpAntiLockOutside, dpReverseLock, dpClosedOpened } = useDpPermission();

  const { devId } = devInfo;
  const {
    residual_electricity = 0,
    closed_opened,
  } = dpState;

  const isShowEle = useMemo(() => !dpAntiLockOutside && !dpReverseLock, [
    dpAntiLockOutside,
    dpReverseLock,
  ]);

  return (
    <View>
      <DefendTime
        fontText={Strings.getLang('safeTipA')}
        backText={Strings.getLang('safeTipB')}
      />
      {isShowEle && (
        <View className={styles.batteryView}>
          <View className={styles.battery}>
            <Battery
              value={residual_electricity}
              onCalcColor={calcColor}
              highColor="#1FDC4B"
              middleColor="#F9CC16"
              lowColor="#FF001F"
              type="horizontal"
            />
          </View>
          <Text className={styles.commonText}>{residual_electricity}</Text>
        </View>
      )}
      <View className={styles.centerContainer}>
        <RemoteOpenDoor />
        {dpClosedOpened && closed_opened !== 'unknown' && (
          <View className={styles.doorStatus}>
            {Strings.getLang(`doorStatus_${closed_opened}`)}
          </View>
        )}
      </View>
    </View>
  );
};

export default HomeTopView;
