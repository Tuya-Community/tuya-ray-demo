/* eslint-disable react/require-default-props */
import React from 'react';
import { getSystemInfoSync, navigateBack, View, Icon, Text } from '@ray-js/ray';
import styles from './index.module.less';

const sysInfo = getSystemInfoSync();

const isIOS = sysInfo.platform === 'ios';
const isIPhoneX = isIOS && sysInfo.screenHeight >= 812;

let minHeight = `${44 + sysInfo.statusBarHeight}px`; // 默认安卓

if (isIOS) {
  minHeight = isIPhoneX ? '88px' : '64px';
}

export interface Props {
  style?: React.CSSProperties;
  titleStyle?: React.CSSProperties;
  title?: string;
  showBack?: boolean;
  titleAlign?: 'left' | 'center';
}

type TopBarFC<P> = React.FC<P> & {
  Main?: React.FC<P>;
  Sub?: React.FC<P>;
};

export const TopBar: TopBarFC<Props> = React.memo((props: Props) => {
  const { style, title, showBack, titleStyle, titleAlign } = props;
  return (
    <View
      style={{
        minHeight,
        paddingTop: sysInfo.statusBarHeight * 2,
        justifyContent: titleAlign,
        ...style,
      }}
      className={styles['top-bar']}
    >
      {showBack && (
        <View className={styles['top-bar-back-icon']} onClick={() => navigateBack()}>
          <Icon type="icon-right" size={30} color="rgba(0, 0, 0, 0.9)" />
        </View>
      )}
      <Text style={titleStyle} className={styles['top-bar-title']}>
        {title}
      </Text>
    </View>
  );
});

TopBar.defaultProps = {
  style: null,
  titleStyle: null,
  title: '',
  showBack: true,
  titleAlign: 'center',
};

TopBar.Main = (props: Props) => {
  return (
    <TopBar
      titleStyle={{ fontWeight: 590, fontSize: '22px', maxWidth: '70%' }}
      titleAlign="left"
      showBack={false}
      {...props}
    />
  );
};

TopBar.Sub = (props: Props) => {
  return <TopBar titleAlign="center" showBack {...props} />;
};
