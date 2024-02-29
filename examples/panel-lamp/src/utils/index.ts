interface PercentOption {
  min?: number;
  max?: number;
  minPercent?: number;
}

/**
 * 标准百分比计算公式
 * @param value 值
 * @param option 百分比计算配置
 */
export const formatPercent = (
  value = 0,
  { min = 0, max = 1000, minPercent = 0 }: PercentOption = {}
): number => {
  return Math.min(100, Math.round(((100 - minPercent) * (value - min)) / (max - min) + minPercent));
};
