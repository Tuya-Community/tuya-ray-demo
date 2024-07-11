export interface IProps {
  /**
   * @description.zh 单击回调事件
   * @default null
   */
  onClick?: () => void;
  /**
   * @description.zh 长按回调事件
   * @default null
   */
  onLongClick?: () => void;
  /**
   * @description.zh 长按多少毫秒内触发onLongPress事件
   * @default 800ms
   */
  time?: number;
  /**
   * @description.zh 样式
   * @default null
   */
  style?: any;
  /**
   * @description.zh className
   * @default null
   */
  className?: string;
}
