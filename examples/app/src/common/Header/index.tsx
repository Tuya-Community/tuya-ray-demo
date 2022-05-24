import React from 'react';

import { View, Text } from '@ray-js/components';

import styles from './index.module.less';

const Header: React.FC<{
  title: string;
  description?: string;
}> = ({ title, description }) => {
  return (
    <View className={styles.wrapper}>
      <Text className={styles.title}>{title}</Text>
      {!!description && <Text className={styles.desc}>{description}</Text>}
    </View>
  );
};

export default Header;
