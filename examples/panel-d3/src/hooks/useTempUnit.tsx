import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { tempCurrentCode, tempSetCode, tempUnitConvertCode } from '@/config/dpCodes';
import { selectDpStateByCode } from '@/redux/modules/dpStateSlice';
import { celsiusToFahrenheit, convertDpToValue, getDpSchema } from '@/utils';
import Strings from '@/i18n';

/**
 * 温标切换hooks，返回一些必要信息
 * dp点的温度需要根据scale计算
 */
export default function useTempUnit(code: typeof tempSetCode | typeof tempCurrentCode) {
  const { scale = 0 } = useMemo(() => getDpSchema(code), []);
  const tempUnit = useSelector(selectDpStateByCode(tempUnitConvertCode)) || 'c';
  const dpValue = useSelector(selectDpStateByCode(code));
  const realValue = convertDpToValue(code, dpValue);
  const tempUnitLabel = Strings.getDpLang(tempUnitConvertCode, tempUnit);
  const tempFormatter = (value: number) => {
    return tempUnit === 'c' ? String(value) : celsiusToFahrenheit(value, scale);
  };
  const tempLabel = tempFormatter(realValue);

  return { dpValue, tempLabel, tempFormatter, tempUnit, tempUnitLabel };
}
