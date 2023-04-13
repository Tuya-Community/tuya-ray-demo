import React, { useEffect } from 'react';
import { showNotification, hideNotification } from '@ray-js/ray';
import { parseNumToArr } from '@/utils';
import { getArray } from '@/utils/array';
import { getFaultStrings } from '@/utils/getFaultStrings';

export const BitmapView: React.FC<ItemViewProps> = ({ item, dpValue }) => {
  const labels = getArray(item?.property?.label);
  const value = parseNumToArr(labels, dpValue);

  const options = labels.map((label, index) => ({
    label,
    value: label,
    checked: value.includes(`${index + 1}`),
  }));

  useEffect(() => {
    hideNotification();
    options.forEach(
      op =>
        op.checked &&
        // @ts-ignore
        showNotification({
          message: getFaultStrings(labels, item.code, dpValue),
          icon: 'warning',
        })
    );
  }, [dpValue]);

  return <></>;
};
