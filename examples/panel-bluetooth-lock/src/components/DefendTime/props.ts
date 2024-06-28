import { CSSProperties } from 'react';

export interface IProps {
  /**
   * @description.zh 天数前面文案
   * @description.en Copy of the first half
   * @default 已安全守护
   */
  fontText?: string;
  /**
   * @description.zh 天数后面文案
   * @description.en Copy of the second half
   * @default 天
   */
  backText?: string;
  /**
   * @description.zh 图片样式
   * @description.en image style
   * @default {}
   */
  imageStyle?: CSSProperties;
  /**
   * @description.zh 天数文案样式
   * @description.en image style
   * @default {}
   */
  tipTextStyle?: CSSProperties;
  /**
   * @description.zh 文案样式
   * @description.en text style
   * @default {}
   */
  textStyle?: CSSProperties;
}

export const defaultProps: IProps = {
  fontText: '已安全守护',
  backText: '天',
  imageStyle: {},
  tipTextStyle: {},
  textStyle: {},
};
