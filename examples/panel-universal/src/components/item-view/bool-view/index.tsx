import { Switch } from '@ray-js/ray';
import React from 'react';

export const BoolView: React.FC<ItemViewProps> = ({ item, dpValue, onChange }) => {
  return (
    <Switch
      disabled={item.mode === 'ro'}
      checked={dpValue}
      onChange={event => onChange(event.value)}
    />
  );
};
