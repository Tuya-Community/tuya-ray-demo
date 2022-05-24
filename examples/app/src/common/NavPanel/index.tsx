import React from 'react';

import { View, Text } from '@ray-js/components';
import { router } from 'ray';
import clsx from 'clsx';

import styles from './index.module.less';

const NavPanel: React.FC<{
  sort?: boolean;
  title: string;
  list: { name: string; path?: string; onClick?: () => void }[];
}> = ({ title, list, sort = true }) => {
  return (
    <View className={styles.wrapper}>
      <Text className={styles.title}>{title}</Text>
      <View className={styles.listWrapper}>
        {list
          .sort((a, b) => {
            if (sort) {
              return a.name.localeCompare(b.name);
            }
            return 0;
          })
          .map(({ name, path = '', onClick }, index) => {
            return (
              <View
                key={path + index}
                className={clsx(styles.item, index === 0 && styles['first-child'])}
                hoverClassName={styles.itemHover}
                onClick={() => {
                  if (typeof onClick === 'function') {
                    onClick();
                  } else {
                    router.push(path);
                  }
                }}
              >
                <Text className={styles.itemName}>{name}</Text>
                <View className={styles.itemArrow}></View>
              </View>
            );
          })}
      </View>
    </View>
  );
};

export default NavPanel;
