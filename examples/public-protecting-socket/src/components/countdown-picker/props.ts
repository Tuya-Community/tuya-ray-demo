export interface IProps {
  /**
   * @description.zh 样式
   * @description.en Picker css style
   */
  style?: React.CSSProperties;
  /**
   * @description.zh 样式名称
   * @description.en Picker className
   */
  className?: string;
  /**
   * @description.en countdown value, unit is minutes, muse be between max and min
   * @description.zh 倒计时具体值，单位分钟，必须在 max 和 min 之间
   */
  value: number;
  /**
   * @description.en min value, unit is minutes, must be less than max
   * @description.zh 倒计时可选择的最小值，单位分钟，必须小于 max
   * @default 1
   */
  min?: number;
  /**
   * @description.en max value, unit is minutes, must be greater than min
   * @description.zh 倒计时可选择的最大值，单位分钟，必须大于 min
   * @default 1440
   */
  max?: number;
  /**
   * @description.en step, unit is minutes, must be between 1-60 and divisible by 60
   * @description.zh 步长，单位分钟，必须在 1-60 之间，且可被 60 整除
   * @default 1
   */
  step?: number;
  /**
   * @description.en 倒计时模式，设置或展示
   * @description.zh Countdown mode, set or display
   * @default 1
   */
  mode?: 'set' | 'display';
  /**
   * @description.en Hour Text
   * @description.zh 小时文本
   * @default "Hour"
   */
  hourText?: string;
  /**
   * @description.en Minute Text
   * @description.zh 分钟文本
   * @default "Minute"
   */
  minuteText?: string;
  /**
   * @description.en Countdown Close Text
   * @description.zh 倒计时关闭文案
   * @default "Minute"
   */
  countdownCloseText?: string;
  /**
   * @description.en Countdown Close Tip Text
   * @description.zh 倒计时关闭提示文案
   * @default "Minute"
   */
  countdownCloseTipText?: string;
  /**
   * @description.en value change callback
   * @description.zh 选择值变更时触发
   */
  onChange?: (value: { hour: number; minute: number; value: number }) => void;
  /**
   * @description.en close countdown button click callback
   * @description.zh 关闭倒计时按钮点击事件
   */
  onStop?: () => void;
  /**
   * @description.en reset button click callback
   * @description.zh 重新设置倒计时按钮点击
   */
  onReset?: () => void;
}

export const defaultProps: IProps = {
  value: 1,
  min: 1,
  max: 1440,
  step: 1,
  hourText: 'Hour',
  minuteText: 'Minute',
  countdownCloseText: 'Close Countdown',
  countdownCloseTipText: 'Close Countdown Tip',
};
