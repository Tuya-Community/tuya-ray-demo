import React from 'react';
import Res from '@/res';

export interface IProps {
  /**
   * @description.zh 是否开启旋转动画
   * @description.en active
   * @default false
   */
  active?: boolean;
  /**
   * @description.zh 旋转图片
   * @description.en rotate image
   * @default -
   */
  rotateImage?: any;
  /**
   * @description.zh 旋转的图片样式
   * @description.en rotate image style
   * @default {}
   */
  imageStyle?: React.CSSProperties;
  /**
   * @description.zh 旋转图片中间内容
   * @description.en children
   * @default null
   */
  children: React.ReactNode;
  /**
   * @description.zh 包裹children容器样式
   * @description.en Package children Container style
   * @default {}
   */
  childrenWrapStyle?: React.CSSProperties;
  /**
   * @description.zh 最外层容器样式
   * @description.en container style
   * @default {}
   */
  containerStyle?: React.CSSProperties;
  /**
   * @description.zh 点击事件
   * @description.en click
   * @default undefined
   */
  onClick?: () => void;
  /**
   * @description.zh 长按事件
   * @description.en onLongClick
   * @default undefined
   */
  onLongClick?: () => void;
}

export const defaultProps: IProps = {
  active: false,
  rotateImage: Res.showImage,
  imageStyle: {},
  children: null,
  childrenWrapStyle: {},
  containerStyle: {},
  onClick: undefined,
  onLongClick: undefined,
};
