import React from 'react';
import { View, Text, Image } from '@ray-js/ray';
import styles from './index.module.less';

interface EmptyProps {
  style?: React.CSSProperties;
  title?: string;
}

export const Empty: React.FC<EmptyProps> = props => {
  const { style, title = '' } = props;
  return (
    <View style={style} className={styles.emptyContent}>
      <Image className={styles.img} src="/images/empty.png" />
      {title && <Text className={styles.title}>{title}</Text>}
    </View>
  );
};
