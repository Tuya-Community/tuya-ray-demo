export interface IProps {
  /**
   * @description.zh 色盘id 唯一标识
   * @description.en Color wheel id unique identification
   * @default 'rectPicker'
   */
  canvasId: string;
  /**
   * @description.zh 默认数值
   * @description.en default value
   * @default 0
   */
  value: number;
  /**
   * @description.zh 拖动的色圈宽度
   * @description.en Drag the color ring width
   * @default 50
   */
  innerRingRadius?: number;
  /**
   * @description.zh 色盘宽度
   * @description.en Color plate width
   * @default 100
   */
  radius?: number;
  /**
   * @description.zh 是否展示色圈
   * @description.en Whether to show color circle
   * @default true
   */
  isShowThumb?: boolean;
  /**
   * @description.zh 是否当前颜色文案
   * @description.en Whether the current color text
   * @default false
   */
  isShowColorTip?: boolean;
  /**
   * @description.zh 手指按下时的回调函数
   * @description.en Finger press when the callback function
   * @default ''
   */
  onTouchStart?: (value: number) => void;
  /**
   * @description.zh 手指按下拖动时的回调函数
   * @description.en Finger to press the drag of the callback function
   * @default ''
   */
  onTouchMove?: (value: number) => void;
  /**
   * @description.zh 手指按下结束时的回调函数
   * @description.en Finger press at the end of the callback function
   * @default ''
   */
  onTouchEnd?: (value: number) => void;
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const nilFn = () => null;
export const defaultProps: IProps = {
  innerRingRadius: 50,
  radius: 100,
  isShowThumb: true,
  onTouchStart: nilFn,
  onTouchMove: nilFn,
  onTouchEnd: nilFn,
  canvasId: 'AnnulusPickerColor',
  value: 0,
};
