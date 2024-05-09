/**
 * 使用 drop-shadow 实现图片可改变颜色
 */
import React from 'react';
import { View, Image, getSystemInfoSync } from '@ray-js/ray';

import clsx from 'clsx';
import styles from './index.module.less';

export interface ColorImageProps {
  /**
   * 宽度 只允许传入 string 可设置 rpx
   */
  width: string;
  /**
   * 高度 只允许传入 string 可设置 rpx
   */
  height: string;
  /**
   * 图片 url
   */
  src: string;
  /**
   * 图片 颜色
   */
  color: string;
  className?: string;
  onClick?: () => void;
}

const systemInfo = getSystemInfoSync();
const isTranslateZ =
  new RegExp('ios', 'ig').test(systemInfo.platform) && systemInfo.brand !== 'devtools';

export const ColorImage: React.FC<ColorImageProps> = props => {
  const { width, height, src, color } = props;
  const transform = isTranslateZ ? `translateX(-${width}) translateZ(0)` : `translateX(-${width})`;
  return (
    <View
      style={{ width, height }}
      className={clsx(styles.colorImageContent, props.className)}
      onClick={props.onClick}
    >
      <Image
        src={src}
        className={styles.img}
        style={{
          display: 'block',
          width,
          height,
          // transform: `translateX(-${width})`,
          transform,
          filter: `drop-shadow(${color} ${width} 0px 0px)`,
        }}
      />
    </View>
  );
};
