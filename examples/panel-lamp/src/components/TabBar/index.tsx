import React from 'react';
import { View, Text } from '@ray-js/components';
import Strings from '@/i18n';
import styles from './index.module.less';

type Props = {
  tabs: string[];
  activeTab: string;
  onClick: (tab: string) => void;
};

export const TabBar = (props: Props) => {
  const { tabs, activeTab, onClick } = props;
  const index = tabs.findIndex(item => item === activeTab);
  const tabWidth = 100 / tabs.length;
  const left = tabWidth * index;
  return (
    <View className={styles.container}>
      {tabs.map(tabItem => {
        const isActive = activeTab === tabItem;
        return (
          <View
            key={tabItem}
            className={styles.tabBox}
            style={{ width: `${tabWidth}%` }}
            onClick={() => onClick(tabItem)}
          >
            <Text
              className={styles.tabText}
              style={{ color: isActive ? '#43AAFF' : 'rgba(255,255,255,.9)' }}
            >
              {Strings.getLang(tabItem)}
            </Text>
          </View>
        );
      })}
      {index !== -1 && (
        <View className={styles.lineBox} style={{ left: `${left}%`, width: `${tabWidth}%` }}>
          <View className={styles.tabLine} />
        </View>
      )}
    </View>
  );
};
