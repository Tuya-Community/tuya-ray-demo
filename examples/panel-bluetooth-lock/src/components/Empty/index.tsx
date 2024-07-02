import React from 'react';
import { View, Text } from '@ray-js/ray';
import Icon from '@ray-js/components/lib/Icon';

import String from '@/i18n';
import styles from './index.module.less';


interface IEmpty {
  text?: string;
}

/**
 * 当为数据列表为空的时候渲染的占位组件
 */
const Empty: React.FC<IEmpty> = ({ text }) => {
  return (
    <View className={styles.warp}>
        <Icon type="icon-a-scrollfill" size={48} color={'rgba(0,0,0,0.2)'} />
        <Text className={styles.text}>{text || String.getLang('noData')}</Text>
    </View>
  );
};

export default Empty;
