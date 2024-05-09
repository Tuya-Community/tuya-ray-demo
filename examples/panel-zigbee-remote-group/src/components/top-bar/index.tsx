import React from 'react';
import { Text, View, router } from '@ray-js/ray';
import { useDevice } from '@ray-js/panel-sdk';
import clsx from 'clsx';
import { getCachedSystemInfo } from '@/api/getCachedSystemInfo';
import iconArrow from './icon_arrow.png';
import styles from './index.module.less';
import { ColorImage } from '../color-image';

interface Props {
  /**
   * 顶部栏的默认主题，默认为 dark，即黑色字体
   *
   * @default 'dark'
   */
  theme?: 'dark' | 'light';
  /**
   * 顶部栏标题，默认为设备名称
   */
  title?: string;
  /**
   * 是否为二级路由，二级路由显示返回按钮且标题居中
   */
  isSubPage?: boolean;
  /**
   * 顶部栏的定位方式，默认为 relative，即占据页面的位置
   */
  position?: 'relative' | 'absolute';
  /**
   * 顶部栏右侧的自定义区域，默认为空
   */
  Right?: React.ReactNode;
}

export const { statusBarHeight } = getCachedSystemInfo();
export const TopBarContentHeight = 44;
export const TopBarHeight = TopBarContentHeight + statusBarHeight;

export const TopBar: React.FC<Props> = props => {
  const devInfo = useDevice(device => device.devInfo);
  return (
    <View
      style={{ color: props.theme === 'light' ? '#fff' : '#000' }}
      className={clsx(styles.topBarWrap, { [styles.absolute]: props.position === 'absolute' })}
    >
      <View className={styles.statusBar} style={{ height: `${statusBarHeight}px` }} />
      <View className={styles.topBar} style={{ height: `${TopBarContentHeight}px` }}>
        <View className={clsx(styles.title, { [styles.titleCenter]: props.isSubPage })}>
          <Text>{props.title || `${devInfo.name}`}</Text>
        </View>
        {props.isSubPage && (
          <ColorImage
            className={styles.backIcon}
            width="24px"
            height="24px"
            color={props.theme === 'light' ? '#fff' : '#000'}
            src={iconArrow}
            onClick={router.back}
          />
        )}
        <View
          style={{ color: props.theme === 'light' ? '#fff' : '#1961CE' }}
          className={styles.right}
        >
          {props.Right && props.Right}
        </View>
      </View>
    </View>
  );
};

TopBar.defaultProps = {
  isSubPage: false,
  position: 'relative',
};
