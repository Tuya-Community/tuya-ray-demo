/* eslint-disable react/require-default-props */
import React, { useEffect, useState, useRef } from 'react';
import useThrottleFn from '@/hooks/useThrottleFn';
import { formatPercent } from '@/utils';
import { OpacitySlider } from '@/components';
import Strings from '@/i18n';

interface IProps {
  style?: React.CSSProperties;
  disable?: boolean;
  value?: number;
  trackStyle?: React.CSSProperties;
  onTouchMove?: (v) => void;
  onTouchEnd?: (v) => void;
}

export const TempSlider = React.memo((props: IProps) => {
  const { value, disable = false, trackStyle, style, onTouchMove, onTouchEnd } = props;

  const [textVal, setTextVal] = useState('');
  const move = useRef(false);

  useEffect(() => {
    formatText(value);
  }, [value]);

  const formatText = useThrottleFn(
    v => {
      setTextVal(`${formatPercent(v)}%`);
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
