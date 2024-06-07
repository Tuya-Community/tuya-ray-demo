/* eslint-disable func-names */
/* eslint-disable @typescript-eslint/no-unused-vars */
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
  componentId: string;
  /**
   * @description.zh 模型链接
   */
  modelUrl: string;
  eventProps: {
    onComponentLoadEnd: (data: { infoKey: string; progress: number }) => void;
    onGestureChange: (start: boolean) => void;
    onResetControl: (success: boolean) => void;
  };
}

export const defaultProps: IProps = {
  componentId: `component_${new Date().getTime()}`,
  modelUrl: '',
  eventProps: {
    onComponentLoadEnd: function (data: { infoKey: string; progress: number }): void {
      throw new Error('Function not implemented.');
    },
    onGestureChange: function (start: boolean): void {
      throw new Error('Function not implemented.');
    },
    onResetControl: function (success: boolean): void {
      throw new Error('Function not implemented.');
    },
  },
};
