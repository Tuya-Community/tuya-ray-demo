import { useCallback, useEffect, useMemo, useState } from 'react';
import { vibrateShort } from '@ray-js/ray';
import { useDispatch, useSelector } from 'react-redux';
import { DpStateKey, selectDpStateByCode, updateDp } from '@/redux/modules/dpStateSlice';
import { getDpSchema } from '@/utils';

/**
 * 通用的滑动条类型dp(value型)的hooks
 * 例如温度、风速、亮度等等
 */
export default function useSliderDp(code: DpStateKey) {
  const dispatch = useDispatch();
  const { min, max, step } = useMemo(() => getDpSchema(code), []);
  const dpValue = useSelector(selectDpStateByCode(code)) as number;
  const [sliderState, setSliderState] = useState(dpValue);

  useEffect(() => {
    if (dpValue !== sliderState) {
      setSliderState(dpValue);
    }
  }, [dpValue]);

  const handleChange = useCallback(value => {
    setSliderState(value);
  }, []);

  const handleAfterChange = useCallback(value => {
    dispatch(updateDp({ [code]: value }, { checkRepeat: true, filterExpired: true }));
    vibrateShort({ type: 'light' });
  }, []);

  return { min, max, step, sliderState, handleChange, handleAfterChange };
}
