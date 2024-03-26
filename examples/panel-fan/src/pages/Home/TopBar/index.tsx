import React, { FC } from 'react';
import { Text, View } from '@ray-js/components';
import { exitMiniProgram } from '@ray-js/api';
import { kit } from '@ray-js/panel-sdk';
import { router } from 'ray';
import { TouchableOpacity } from '@/components';

import styles from './index.module.less';

const TopBar: FC = () => {
  const handleGoToSettings = () => {
    router.push('/settings');
  };

  const handleExitProgram = () => {
    exitMiniProgram();
  };

  return (
    <View className={styles.container}>
      <Text className={styles.title}>{kit.getDevInfo().name}</Text>
      <View className={styles.toolsWrapper}>
        <TouchableOpacity className={styles.tool} onClick={handleGoToSettings}>
          <Text className="iconfontpanel icon-panel-more" />
        </TouchableOpacity>
        <TouchableOpacity className={styles.tool} onClick={handleExitProgram}>
          <Text className="iconfontpanel icon-panel-closeFill" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TopBar;
