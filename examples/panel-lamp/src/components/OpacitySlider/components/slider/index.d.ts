/* eslint-disable react/require-default-props */
import React from 'react';

export interface EventType<T> {
  type: T;
  timeStamp: number;
  target: any;
  currentTarget: any;
  detail: SjsSliderEventData;
}

export interface SjsSliderEventData {
  start: number;
  end: number;
  range: number;
  position: 'start' | 'end';
}

export interface SjsSliderProps {
  /**
   * @description.en instanceId
   * @description.zh 唯一ID
   */
  instanceId: string;
  /**
   * @description.en className
   * @description.zh 样式
   */
  className?: string;
  /**
   * @description.en disable
   * @description.zh disable
   * @default false
   */
  disable?: boolean;
  /**
   * @description.en closed
   * @description.zh closed
   * @default false
   */
  closed?: boolean;
  /**
   * @description.en left value
   * @description.zh 左滑块初始值
   * @default 0
   */
  start?: number;
  /**
   * @description.en watch value and change
   * @description.zh 监听值，并随之变化
   */
  watchStart?: number;
  /**
   * @description.en left value min
   * @description.zh 左滑块最小值限制
   */
  startMin?: number;
  /**
   * @description.en left value max
   * @description.zh 左滑块最大值限制
   */
  startMax?: number;
  /**
   * @description.en Right slider initial value/one-way slider initial value
   * @description.zh 右滑块初始值/单向滑条初始值
   * @default 30
   */
  end?: number;
  /**
   * @description.en watch value and change
   * @description.zh 监听值，并随之变化
   */
  watchEnd?: number;
  /**
   * @description.en Right slider min/one-way slider min
   * @description.zh 右滑块最小值/单向滑条最小值
   */
  endMin?: number;
  /**
   * @description.en Right slider Max/one-way slider Max
   * @description.zh 右滑块最大值/单向滑条最大值
   */
  endMax?: number;
  /**
   * @description.en min
   * @description.zh 最小值, 建议用 endMin 代替
   * @default 0
   * @deprecated
   */
  min?: number;
  /**
   * @description.en max
   * @description.zh 最大值
   * @default 100
   */
  max?: number;
  /**
   * @description.en step
   * @description.zh 阶段值
   * @default 1
   */
  step?: number;
  /**
   * @description.en step
   * @description.zh 阶段值
   */
  forceStep?: number;
  /**
   * @description.en thumbStyle
   * @description.zh 滑块样式
   */
  thumbStartStyle?: React.CSSProperties;
  /**
   * @description.en thumbStyle
   * @description.zh 滑块样式
   */
  thumbEndStyle?: React.CSSProperties;
  /**
   * @description.en trackStyle
   * @description.zh 轨道样式
   */
  trackStyle?: React.CSSProperties;
  /**
   * @description.en barStyle
   * @description.zh 滑条样式
   */
  barStyle?: React.CSSProperties;
  /**
   * @description.en stepStyle
   * @description.zh step样式
   */
  stepStyle?: React.CSSProperties;
  /**
   * @description.en bar stepStyle
   * @description.zh bar step样式
   */
  activeStepStyle?: React.CSSProperties;
  /**
   * @description.en mode
   * @description.zh 单向还是双向
   * @default normal
   */
  mode?: 'range' | 'normal';
  /**
   * @description.en barPad
   * @description.zh 控制滑动bar的偏移量，用于样式微调
   */
  barPad?: number;
  /**
   * @description.en maxRangeOffset
   * @description.zh 按钮对齐偏移
   * @default null
   */
  maxRangeOffset?: number;
  /**
   * @description.en hideThumb
   * @description.zh 隐藏滑块
   * @default false
   */
  hideThumb?: boolean;
  /**
   * @description.en showSteps
   * @description.zh 显示阶段提示
   * @default false
   */
  showSteps?: boolean;
  /**
   * @description.en direction
   * @description.zh 方向
   * @default horizontal
   */
  direction?: 'horizontal' | 'vertical';
  /**
   * @description.en callback
   * @description.zh 回调
   */
  bindmove?: (event: EventType<'move'>) => void;
  /**
   * @description.en callback
   * @description.zh 回调
   */
  bindend?: (event: EventType<'end'>) => void;
  /**
   * @description.en callback
   * @description.zh 回调
   */
  bindstart?: (event: EventType<'start'>) => void;
  /**
   * @description.en reverse
   * @description.zh 是否反转
   * @default false
   */
  reverse?: boolean;
  /**
   * @description.en enableTouch
   * @description.zh 使用触摸跳跃
   * @default false
   */
  enableTouch?: boolean;
  /**
   * @description.en enableTouchBar
   * @description.zh 使用触摸bar增加偏移
   * @default false
   */
  enableTouchBar?: boolean;
  /**
   * @description.en showText
   * @description.zh 在bar上显示文本
   * @default false
   */
  showText?: boolean;
  /**
   * @description.en textStyle
   * @description.zh bar文本样式
   */
  textStyle?: React.CSSProperties;
  /**
   * @description.en textTemplate
   * @description.zh 文本格式化，例如 textTemplate="比率 {{text}} %"
   */
  textTemplate?: string;
  /**
   * @description.en calc style, such as { background: "rgba(0,0,0, {{text / 100 }}" }
   * @description.zh 动态计算thumb样式，如 { background: "rgba(0,0,0, {{text /100 }})" }
   */
  thumbStyleCalc?: Partial<Record<keyof React.CSSProperties, string>>;
}

const SjsSlider: React.FC<SjsSliderProps>;

export default SjsSlider;
