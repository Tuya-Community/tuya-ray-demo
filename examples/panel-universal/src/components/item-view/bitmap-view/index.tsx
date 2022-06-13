import React, { useEffect } from 'react';

import { parseNumToArr } from '@/utils';
import { getArray } from '@/utils/array';
import { getFaultStrings } from '@/utils/getFaultStrings';
import { Notification } from '@ray-js/ray-components-plus';

export const BitmapView: React.FC<ItemViewProps> = ({ item, dpValue }) => {
  const labels = getArray(item?.property?.label);
  const value = parseNumToArr(labels, dpValue);

  const options = labels.map((label, index) => ({
    label,
    value: label,
    checked: value.includes(`${index + 1}`),
  }));

  useEffect(() => {
    // @ts-ignore
    Notification.hide();
    options.forEach(
      op =>
        op.checked &&
        // @ts-ignore
        Notification.show({
          message: getFaultStrings(labels, item.code, dpValue),
          icon: 'warning',
        })
    );
  }, [dpValue]);

  return <></>;
};
