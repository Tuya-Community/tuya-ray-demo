import { Input } from '@ray-js/ray';
import React from 'react';

export const StringView: React.FC<ItemViewProps> = ({ item, dpValue, onChange }) => {
  return (
    <Input
      disabled={item.mode === 'ro'}
      value={dpValue}
      onConfirm={event => onChange(event.value)}
    />
  );
};
