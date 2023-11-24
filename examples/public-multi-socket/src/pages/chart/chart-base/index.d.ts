import React, { ReactElement, CSSProperties } from 'react';
import F2 from '@antv/f2';

export interface ChartProps<T> {
  /**
   * 当前值
   */
  data: T[];
  /**
   * 是否禁用
   */
  style?: CSSProperties;
}

const Chart: React.FC<ChartProps>;

export default Chart;
