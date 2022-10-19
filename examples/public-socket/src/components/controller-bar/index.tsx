import React from 'react';
import { getSystemInfoSync, View } from '@ray-js/ray';
import { IconButton } from '@/components/icon-button';
import styles from './index.module.less';

export interface Props {
  dataSource: React.ComponentProps<typeof IconButton>[];
}

const sysInfo = getSystemInfoSync();
const isIOS = sysInfo.platform === 'ios';
const isIPhoneX = isIOS && sysInfo.screenHeight >= 812;

export const ControllerBar: React.FC<Props> = React.memo(
  props => {
    const { dataSource } = props;
    return (
      <>
        <View className={styles['controller-bar']}>
          {dataSource.map((data, idx) => (
            <IconButton key={`${idx}`} {...data} />
          ))}
        </View>
        {isIPhoneX && <View className={styles['extra-bar']} />}
      </>
    );
  },
  () => true // 本项目里不需要 rerender
);
