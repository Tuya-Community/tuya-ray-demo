import { Textarea } from '@ray-js/ray';
import React from 'react';

export const RawView: React.FC<ItemViewProps> = ({ item, dpValue, onChange }) => {
  return (
    <Textarea
      disabled={item.mode === 'ro'}
      value={dpValue}
      onInput={event => onChange(event.value)}
    />
  );
};
