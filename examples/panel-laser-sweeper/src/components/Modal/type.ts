export type Props = {
  /**
   * 必填
   * 是否显示Modal
   */
  visible: boolean;
  /**
   * 是否显示遮罩
   */
  overlay?: boolean;
  /**
   * 过渡时间
   */
  duration?: number;
  /**
   * 位置(top / bottom 会带有滑出的动画)
   */
  position?: 'top' | 'center' | 'bottom';
  /**
   * 点击遮罩回调
   */
  onClickOverlay?: (e: any) => void;
  /**
   * 自定义容器样式
   */
  containerStyle?: React.CSSProperties;
  /**
   * 自定义内容样式
   */
  overlayStyle?: React.CSSProperties;
  /**
   * 自定义内容样式
   */
  contentStyle?: React.CSSProperties;
  /**
   * 自定义容器类名
   */
  className?: string;
};
