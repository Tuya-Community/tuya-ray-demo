import React, { CSSProperties, FC } from 'react';
import { Text } from '@ray-js/ray';
import clsx from 'clsx';

type Props = {
  icon: string;
  className?: string;
  style?: CSSProperties;
  children?: React.ReactNode;
  onClick?: (event: {
    type: string;
    timeStamp: number;
    pageX: number;
    pageY: number;
    origin: any;
  }) => void;
};

export const IconFont: FC<Props> = ({ icon, style, className, children, onClick }) => {
  const cls = clsx('iconfont', `icon-panel-${icon}`, className);
  return <Text className={cls} style={style} onClick={onClick}>{children}</Text>;
};
