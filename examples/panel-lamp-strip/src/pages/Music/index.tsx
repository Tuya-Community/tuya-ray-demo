/* eslint-disable no-shadow */
import React, { useState, useEffect } from 'react';
import { View, Text, setNavigationBarTitle } from '@ray-js/ray';
import Strings from '@/i18n';
import { useDebugPerf } from '@/hooks';

import LocalMusic from './LocalMusic';
// import AppMusic from './AppMusic'; // app端的api暂未开放
import styles from './index.module.less';

enum EMusicActionType {
  Local = 'local',
  app = 'app',
}

const Music = () => {
  const [musicType, setMusicType] = useState(EMusicActionType.Local);
  useDebugPerf(Music);
  useEffect(() => {
    setNavigationBarTitle({ title: Strings.getLang('musicTitle') });
  }, []);

  const renderTip = () => {
    const appMusicTip = Strings.getLang('appMusicTip');
    const localMusicTip = Strings.getLang('localMusicTip');
    return (
      <View className={styles.musicTipWrapper}>
        <Text className={styles.musicTip}>
          {musicType === EMusicActionType.app ? appMusicTip : localMusicTip}
        </Text>
      </View>
    );
  };
  return (
    <View className={styles.musicWrapper}>
      {renderTip()}
      <LocalMusic />
    </View>
  );
};

export default Music;
