import { Slider } from '@ray-js/components';
import React from 'react';

export const ValueView: React.FC<ItemViewProps> = ({ item, dpValue, onChange }) => {
  return (
    <Slider
      step={item?.property?.step}
      max={item?.property?.max}
      min={item?.property?.min}
      value={dpValue}
      onChange={event => onChange(event.value)}
    />
  );
};
