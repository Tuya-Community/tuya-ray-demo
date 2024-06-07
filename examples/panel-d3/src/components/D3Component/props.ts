export interface IProps {
  /**
   * @description.zh 类名
   * @description.en class name
   */
  className?: string;
  /**
   * @description.zh 样式
   * @description.en Style
   */
  style?: React.CSSProperties;

  /**
   * @description.zh 组件Id
   * @description.en component id
   */
  componentId: string;
}

export const defaultProps: IProps = {
  componentId: `component_${new Date().getTime()}`,
};
