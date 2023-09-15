/* eslint-disable react/require-default-props */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
import { getLaunchOptionsSync } from '@ray-js/api';
import React, { useEffect, useState, useRef } from 'react';
import useThrottleFn from '@/hooks/useThrottleFn';
import { getDpIdByCode, formatPercent } from '@/utils';
import { OpacitySlider } from '@/components';
import dpCodes from '@/config/dpCodes';
import SupportUtils from '@/utils/SupportUtils';
import Strings from '@/i18n';

interface IProps {
  style?: React.CSSProperties;
  disable?: boolean;
  isSupportKelvin?: boolean;
  value?: number;
  trackStyle?: React.CSSProperties;
  onTouchMove?: (v) => void;
  onTouchEnd?: (v) => void;
}
const { deviceId: devId, groupId } = getLaunchOptionsSync().query;
const { temperatureCode } = dpCodes;

export const TempSlider = React.memo((props: IProps) => {
  const {
    isSupportKelvin,
    value,
    disable = false,
    trackStyle,
    style,
    onTouchMove,
    onTouchEnd,
  } = props;

  const [textVal, setTextVal] = useState('');
  const move = useRef(false);

  useEffect(() => {
    formatText(value);
  }, [value, isSupportKelvin]);

  const formatText = useThrottleFn(
    v => {
      if (isSupportKelvin) {
        const params = {
          resId: groupId || devId,
          dps: [
            {
              dpCode: temperatureCode,
              dpValue: v,
              dpId: getDpIdByCode(temperatureCode),
            },
          ],
          type: SupportUtils.isGroupDevice() ? '5' : '6',
          success: r => {
            setTextVal(
              r?.advancedCapability?.[0]?.translatedValue
                ? `${r?.advancedCapability?.[0]?.translatedValue}${r?.advancedCapability[0]?.unit}`
                : `${formatPercent(v)}%`
            );
          },
          fail: res => {
            console.log('dpTranslateAdvancedCapability fail====', res);
            setTextVal(`${formatPercent(v)}%`);
          },
        };
        ty.device.dpTranslateAdvancedCapability({ ...params });
      } else {
        setTextVal(`${formatPercent(v)}%`);
      }
    },
    { wait: 100 }
  ).run;

  const handleMove = v => {
    formatText(v);
    move.current = true;
    onTouchMove?.(v);
  };

  const handleEnd = v => {
    formatText(v);
    onTouchEnd?.(v);
    move.current = false;
  };

  return (
    <OpacitySlider
      style={style}
      label={Strings.getLang('temp')}
      textValue={textVal}
      disable={disable}
      value={value}
      trackStyle={trackStyle}
      onTouchMove={handleMove}
      onTouchEnd={handleEnd}
      background="linear-gradient(270deg, #CDECFE 1.22%, #FFFFFF 45.36%, #FFFFFF 53.27%, #FFCA5C 98.32%)"
      thumbStyle={{
        backgroundColor: disable ? '#000' : 'transparent',
      }}
    />
  );
});
