import React from 'react';
import { View } from '@ray-js/ray';
import clsx from 'clsx';
import { useScreenInfo } from '@/hooks';
import { useMount } from 'ahooks';
import styles from './index.module.less';

interface FixedBottomProps {
  className?: string;
  /**
   * 是否流出底部安全距离
   */
  safeArea?: boolean;
  /**
   * 内容的高度，要求必须是 rpx
   */
  contentHeight: string;
  /**
   * 获取当前底部安全距离
   */
  getFixedBottomHeight: (safeHeight: string) => void;
}

export const FixedBottom: React.FC<FixedBottomProps> = props => {
  const { className, safeArea } = props;
  const { bottomSafeHeight } = useScreenInfo();

  const paddingBottom = `calc(32rpx + ${safeArea ? bottomSafeHeight : 0}px)`;
  const bottomHeight = `calc(32rpx + 48rpx + ${props.contentHeight} + ${
    safeArea ? bottomSafeHeight : 0
  }px)`;

  useMount(() => {
    typeof props.getFixedBottomHeight === 'function' && props.getFixedBottomHeight(bottomHeight);
  });

  return (
    <View className={clsx(styles.fixedBottom, className)} style={{ paddingBottom }}>
      {props.children}
    </View>
  );
};

FixedBottom.defaultProps = {
  safeArea: true,
};
