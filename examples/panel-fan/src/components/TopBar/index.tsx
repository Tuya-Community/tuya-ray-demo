import React, { FC } from 'react';
import { router } from 'ray';
import { Text, View } from '@ray-js/components';
import { TouchableOpacity } from '@/components';

import styles from './index.module.less';

type Props = {
  title: string;
};

const TopBar: FC<Props> = ({ title }) => {
  const handleBack = () => {
    router.back();
  };

  return (
    <View className={styles.topBar}>
      <TouchableOpacity onClick={handleBack}>
        <Text className="iconfontpanel icon-panel-arrowLeft" />
      </TouchableOpacity>
      <Text className={styles.title}>{title}</Text>
      {/* 占位，只是为了设置在中间。。 */}
      <Text className="iconfontpanel icon-panel-arrowLeft" style={{ opacity: 0 }} />
    </View>
  );
};

export default TopBar;
