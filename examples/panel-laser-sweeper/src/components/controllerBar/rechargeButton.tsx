// 充电按钮
import { dpCodes } from '@/config';
import Strings from '@/i18n';
import { View } from '@ray-js/ray';
import { GridItem } from '@ray-js/smart-ui';
import { robotIsCharing, robotIsFullCharge, robotIsToCharing } from '@/utils/robotStatus';
import { useActions, useProps } from '@ray-js/panel-sdk';
import React from 'react';
import './icons/iconfont.css';
import styles from './index.module.less';

export const RechargeButton = () => {
  const dpActions = useActions();
  const robotStatusState = useProps(props => props[dpCodes.robotStatus]);

  /**
   * 回充
   * @returns
   */
  const handleBackCharge = () => {
    // 扫地机处于寻找充电座状态
    if (robotIsToCharing(robotStatusState)) {
      dpActions[dpCodes.chargeSwitch].set(false);

      return;
    }

    dpActions[dpCodes.chargeSwitch].set(true);
  };

  const iconName = robotIsToCharing(robotStatusState)
    ? 'icon-paused'
    : robotIsCharing(robotStatusState) || robotIsFullCharge(robotStatusState)
    ? 'icon-charging'
    : 'icon-recharge';

  return (
    <GridItem
      text={
        robotIsToCharing(robotStatusState)
          ? Strings.getLang('dsc_stop_charge')
          : robotIsCharing(robotStatusState)
          ? Strings.getLang('dsc_charging')
          : robotIsFullCharge(robotStatusState)
          ? Strings.getLang('dsc_full_charge')
          : Strings.getLang('dsc_recharge')
      }
      onClick={() => {
        if (!(robotIsCharing(robotStatusState) || robotIsFullCharge(robotStatusState))) {
          // 扫地机不处于充电中/已充满状态
          handleBackCharge();
        }
      }}
      iconClass={styles.cleanModeContent}
      slot={{
        icon: (
          <View
            className={`iconfont ${iconName}`}
            style={{ color: '#000000', fontSize: '48rpx' }}
          />
        ),
      }}
    />
  );
};
