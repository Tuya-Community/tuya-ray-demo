import React, { CSSProperties } from 'react';

interface DataProps {
  /**
   * @description.zh key值
   * @description.en key
   * @default -
   */
  key: string;
  /**
   * @description.zh 底部文案
   * @description.en text
   * @default -
   */
  text?: string;
  /**
   * @description.zh 图片
   * @description.en image
   * @default -
   */
  image?: any;
  /**
   * @description.zh 可以传一个children，此时仅显示children内容
   * @description.en children
   * @default -
   */
  children?: React.ReactElement | (() => void);
  /**
   * @description.zh 点击事件
   * @description.en onClick
   * @default -
   */
  onClick?: (val) => void;
}
export interface IProps {
  /**
   * @description.zh 需要显示的数据
   * @description.en data
   * @default []
   */
  data: DataProps[];
  /**
   * @description.zh 最外层样式
   * @description.en container style
   * @default -
   */
  containerStyle?: CSSProperties;
  /**
   * @description.zh 每个单独项的外层样式
   * @description.en container style
   * @default -
   */
  contentStyle?: CSSProperties;
  /**
   * @description.zh 文案样式
   * @description.en text style
   * @default -
   */
  textStyle?: CSSProperties;
  /**
   * @description.zh 图片包裹样式
   * @description.en image wrap style
   * @default -
   */
  imageWrapStyle?: CSSProperties;
  /**
   * @description.zh 图片样式
   * @description.en image style
   * @default -
   */
  imageStyle?: CSSProperties;
  /**
   * @description.zh 是否显示电池
   * @description.en show battery
   * @default false
   */
  showBattery?: boolean;
  /**
   * @description.zh 电池底部文案
   * @description.en battery text
   * @default ''
   */
  batteryText?: string;
  /**
   * @description.zh 电池电量数值
   * @description.en battery value
   * @default 0
   */
  batteryValue?: number;
}

export const defaultProps: IProps = {
  data: [],
  showBattery: false,
  batteryText: '',
  batteryValue: 0,
};
