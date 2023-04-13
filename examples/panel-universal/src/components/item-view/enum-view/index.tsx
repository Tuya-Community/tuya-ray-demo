import React from 'react';

import { Button, Text, View } from '@ray-js/ray';
import Strings from '@/i18n';
import { getArray } from '@/utils/array';

import styles from './index.module.less';

export const EnumView: React.FC<ItemViewProps> = ({ item, dpValue, onChange }) => {
  return (
    <View className={styles.container}>
      {getArray(item?.property?.range).map(rangeItem => (
        <Button
          key={rangeItem}
          className={styles.item}
          onClick={() => onChange(rangeItem)}
          style={
            rangeItem === dpValue
              ? {
                  backgroundColor: '#468AEE',
                  color: '#fff',
                }
              : {
                  backgroundColor: '#4689ee61',
                  color: '#fff',
                }
          }
        >
          <Text>{Strings.getDpLang(item.code, rangeItem)}</Text>
        </Button>
      ))}
    </View>
  );
};
