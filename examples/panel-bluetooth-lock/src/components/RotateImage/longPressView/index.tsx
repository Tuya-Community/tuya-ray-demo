import React, { useRef } from 'react';
import { View } from '@ray-js/ray';
import { IProps } from './props';

const LongPressView: React.FunctionComponent<IProps> = ({
  children,
  className,
  onClick,
  onLongClick,
  time = 800,
  style,
  ...otherParams
}) => {
  const timer = useRef(null);
  let startTime = new Date();
  /* 开始点击 */
  const touchStart = () => {
    startTime = new Date();
    timer.current && clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      onLongClick && onLongClick();
    }, time);
  };

  const onTouchEnd = () => {
    /* 长按触发 */
    if (new Date().getTime() - startTime.getTime() < time) {
      clearTimeout(timer.current);
      timer.current = null;
    }
    /* 长按100ms内属于单击时间 */
    if (new Date().getTime() - startTime.getTime() <= 100) {
      onClick && onClick();
    }
  };
  return (
    <View
      onTouchStart={touchStart}
      onTouchEnd={onTouchEnd}
      className={className}
      style={style}
      {...otherParams}
    >
      {children}
    </View>
  );
};

export default LongPressView;
