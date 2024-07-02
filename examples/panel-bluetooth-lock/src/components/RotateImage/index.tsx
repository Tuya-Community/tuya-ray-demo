import React from 'react';
import { View, Image } from '@ray-js/ray';
import LongPressView from './longPressView';
import styles from './index.module.less';
import { defaultProps, IProps } from './props';

function RotateImage(props: IProps) {
  const {
    active,
    rotateImage,
    imageStyle,
    children,
    childrenWrapStyle,
    containerStyle,
    onClick,
    onLongClick,
  } = props;
  const click = () => {
    if (!onClick) return;
    onClick();
  };

  const longClick = () => {
    if (!onLongClick) return;
    onLongClick();
  };

  return (
    <LongPressView
      className={styles.container}
      style={containerStyle}
      onLongClick={longClick}
      onClick={click}
    >
      <Image
        src={rotateImage}
        className={styles.bg}
        style={{ ...imageStyle, animationPlayState: active ? 'running' : 'paused' }}
      />
      <View className={styles.children} style={childrenWrapStyle}>
        {children}
      </View>
    </LongPressView>
  );
}

RotateImage.defaultProps = defaultProps;

export default RotateImage;
