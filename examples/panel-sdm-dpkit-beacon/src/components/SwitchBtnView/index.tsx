import React from 'react';

import Strings from '@/i18n';
import { DpBooleanAction, useActions } from '@ray-js/panel-sdk';
import { vibrateShort, View } from '@ray-js/ray';

import styles from './index.module.less';
import { IDpCodes } from '@/devices/schema';

export interface SwitchBtnViewProps {
  dpCode: IDpCodes;
}

export const SwitchBtnView: React.FC<SwitchBtnViewProps> = ({ dpCode }) => {
  const actions = useActions();

  const onOff = () => {
    const dpAction: DpBooleanAction = actions[dpCode as string] as any;
    if (dpAction) {
      dpAction.off();
    }
  };
  const onOn = () => {
    const dpAction: DpBooleanAction = actions[dpCode as string] as any;
    if (dpAction) {
      dpAction.on();
    }
  };

  return (
    <View className={styles.contain}>
      <View
        hoverClassName={styles.active}
        className={styles.left}
        onClick={() => {
          vibrateShort({
            type: 'light',
          });
          onOn && onOn();
        }}
      >
        {Strings.getLang('switch_on')}
      </View>
      <View
        hoverClassName={styles.active}
        className={styles.right}
        onClick={() => {
          vibrateShort({
            type: 'light',
          });
          onOff && onOff();
        }}
      >
        {Strings.getLang('switch_off')}
      </View>
    </View>
  );
};
