/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-empty-function */
export interface IProps {
  /**
   * @description.zh 禁止滑动
   * @description.en Ban sliding
   * @default false
   */
  style?: React.CSSProperties;
  // 如果太快给了value，会加载不出来，所以二级页的slider给了wait值，先赋值-1再渲染初始值
  wait?: boolean;
  disable?: boolean;
  label?: string;
  textValue?: string;
  background: any;
  /**
   * @description.zh 灯关闭状态时 thumb的状态
   * @description.en The state of thumb when the light is off
   * @default false
   */
  closed?: boolean;
  /**
   * @description.zh 滑动槽样式
   * @description.en Sliding groove style
   * @default {}
   */
  trackStyle?: React.CSSProperties,
  /**
   * @description.en Fingers sliding block style
   * @description.zh 手指滑块样式
   */
  thumbStyle?: React.CSSProperties;
  /**
   * @description.zh slider值 对应hsv的saturation 范围 1 - 1000
   * @description.en slider value
   * @default 0
   */
  value: number;
  /**
   * @description.zh slider 手指点击时触发
   * @description.en slider Value changes
   * @default () => {}
   */
  onTouchStart: (value: number) => void;
  /**
   * @description.zh slider 手指拖动时触发
   * @description.en slider Value changes
   * @default () => {}
   */
  onTouchMove: (value: number) => void;
  /**
   * @description.zh slider 手指离开时触发
   * @description.en Values change after the trigger
   * @default () => {}
   */
  onTouchEnd?: (value: number) => void;
  showMask?: boolean;
  min?: number;
  max?: number;
}

export const defaultProps: IProps = {
  value: 1,
  trackStyle: {},
  background:'transparent',
  style:{},
  min: 0,
  max: 1000,
  showMask: false,
  onTouchStart: () => null,
  onTouchMove: () => null,
  onTouchEnd: () => null,
};
