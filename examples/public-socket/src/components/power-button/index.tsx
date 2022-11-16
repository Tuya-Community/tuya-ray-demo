import React from 'react';
import clsx from 'clsx';
import { View } from '@ray-js/ray';
import { useProps, useActions, DpBooleanAction } from '@ray-js/panel-sdk';
import { Icon } from '@/components/icon';
import { icons } from '@/res';
import styles from './index.module.less';

export interface Props {
  dpCode: string;
}

export const PowerButton = React.memo<Props>(props => {
  const { dpCode } = props;
  const value = useProps(dpState => dpState[dpCode]);

  const actions = useActions();

  if (!dpCode || typeof value !== 'boolean') {
    return null;
  }

  const action = actions[dpCode] as DpBooleanAction;
  return (
    <View className={styles['power-button']} onClick={action.toggle}>
      <View
        className={clsx(styles['power-button-content'], {
          [`${styles['power-button-off']}`]: !value,
        })}
      />
      <Icon
        className={styles['power-button-icon']}
        d={icons.power}
        size="34px"
        fill={value ? '#ef550d' : '#ffffff'}
      />
    </View>
  );
});
