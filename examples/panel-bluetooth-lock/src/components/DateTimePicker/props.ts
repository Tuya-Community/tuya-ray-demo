export type DatetimePickerColumnType = 'year' | 'month' | 'day' | 'hour' | 'minute';

export type DatetimePickerType =
  | 'date'
  // | 'time'
  | 'datetime'
  | 'datehour'
  | 'month-day'
  | 'year-month';

export interface DateTimePickerProps {
  /**
   * @description.en value
   * @description.zh 当前值
   */
  value?: Date;
  /**
   * @description.en defaultValue
   * @description.zh 默认值
   */
  defaultValue?: Date;
  /**
   * @description.en Optional minimum time, accurate to the minute
   * @description.zh 可选的最小时间，精确到分钟
   */
  minDate?: Date;
  /**
   * @description.en Optional maximum time, accurate to minutes
   * @description.zh 可选的最大时间，精确到分钟
   */
  maxDate?: Date;
  /**
   * @description.en hange event
   * @description.zh 当值变化时触发的事件
   */
  onChange?: (value: Date) => void;
  /**
   * @description.en style
   * @description.zh 容器样式
   */
  style?: React.CSSProperties;
  /**
   * @description.en class name
   * @description.zh 选择器类名
   */
  className?: string;
  /**
   * @description.en background color
   * @description.zh 背景色
   */
  bgColor?: string;
  /**
   * @description.en font style
   * @description.zh 字体样式
   */
  fontStyle?: React.CSSProperties;
  /**
   * @description.en font size
   * @description.zh 字体大小
   */
  fontSize?: string | number;
  /**
   * @description.en font weight
   * @description.zh 字重
   */
  fontWeight?: string;
  /**
   * @description.en font color
   * @description.zh 字体颜色
   */
  fontColor?: string;
  /**
   * @description.en overlay style
   * @description.zh 蒙层的样式
   */
  overlayStyle?: React.CSSProperties;
  /**
   * @description.en indicator style
   * @description.zh 选择器中间选中框的样式
   */
  indicatorStyle?: React.CSSProperties;
  /**
   * @description.en render custom overlay view
   * @description.zh 自定义蒙层
   */
  renderOverlay?: () => React.ReactNode;
  /**
   * @description.en date type: "date" | "datetime" | "datehour" | "month-day" | "year-month"
   * @description.zh 时间类型: "date" | "datetime" | "datehour" | "month-day" | "year-month"
   * @default "datetime"
   */
  type?: DatetimePickerType;
  /**
   * @description.en option filter function
   * @description.zh 选项过滤函数
   */
  filter?: (type: string, values: string[]) => string[];
  /**
   * 自定义列排序数组,
   * 子项可选值为: year、month、day、hour、minute
   */
  /**
   * @description.en custom column sort array,The optional value of the sub-item is: year、month、day、hour、minute
   * @description.zh 自定义列排序数组,子项可选值为: year、month、day、hour、minute
   */
  columnsOrder?: string[];
  /**
   * @description.en option formatting function
   * @description.zh 选项格式化函数
   */
  formatter?: (type: string, value: string) => string;
}

const currentYear = new Date().getFullYear();

export const datePickerDefaultProps: DateTimePickerProps = {
  type: 'datetime',
  minDate: new Date(currentYear - 10, 0, 1),
  maxDate: new Date(currentYear + 10, 11, 31),
  formatter: (type: string, value: string) => value,
};
