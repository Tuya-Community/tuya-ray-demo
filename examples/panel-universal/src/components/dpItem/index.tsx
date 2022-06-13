import { useAtomValue } from 'jotai/utils';
import React from 'react';

import { selectDevInfoAtom, selectDpStateAtom } from '@/atoms';
import { publishDps } from '@ray-js/api';
import { Text, View } from '@ray-js/components';

import Strings from '@/i18n';
import { ItemView } from '../item-view';
import styles from './index.module.less';

export interface DpItemProps {
  item: DpSchema;
  hostname: string;
}

export const DpItem: React.FC<DpItemProps> = ({ item, hostname }) => {
  const devInfo = useAtomValue(selectDevInfoAtom);
  const dpState = useAtomValue(selectDpStateAtom);

  const dpCode = item?.code;
  const dpValue = dpState?.[dpCode];

  let headValue = dpValue;
  if (item?.property?.type === 'value') {
    headValue = `${dpValue}${item?.property?.unit || ''}`;
  } else {
    headValue = Strings.getDpLang(dpCode, dpValue);
  }

  return (
    <View className={styles.container} key={item.code}>
      <View
        className={styles.head}
        style={{
          backgroundImage: hostname
            ? `url(${`${hostname}/smart/uiconf/img_fangkuai@3x.png`})`
            : null,
        }}
      >
        <Text className={styles.headName}>{item.name}</Text>
        <Text className={styles.headValue}>{headValue}</Text>
      </View>
      <View className={styles.content}>
        <ItemView
          item={item}
          dpValue={dpValue}
          onChange={value => {
            publishDps({
              deviceId: devInfo?.devId,
              dps: {
                [item.id]: value,
              },
            } as any);
          }}
        />
      </View>
    </View>
  );
};
