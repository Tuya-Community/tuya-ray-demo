import React from 'react';
import { DpSchema, useActions, useProps } from '@ray-js/panel-sdk';
import Strings from '@/i18n';
import { Text, View } from '@ray-js/ray';
import { ItemView } from '../item-view';
import styles from './index.module.less';

export interface DpItemProps {
  item: DpSchema;
  hostname: string;
}

export const DpItem: React.FC<DpItemProps> = ({ item, hostname }) => {
  const dpCode = item?.code;
  const dpValue = useProps(state => state[dpCode]);
  const actions = useActions<DeviceSchema>();

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
        <Text className={styles.headName}>{Strings.getDpName(item.code, item.name)}</Text>
        <Text className={styles.headValue}>{headValue}</Text>
      </View>
      <View className={styles.content}>
        <ItemView
          item={item}
          dpValue={dpValue}
          onChange={value => {
            actions[dpCode].set(value);
          }}
        />
      </View>
    </View>
  );
};
