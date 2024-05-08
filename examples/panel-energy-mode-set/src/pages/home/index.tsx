import React, { useState, useEffect } from 'react';
import { View, switchTab } from '@ray-js/ray';
import { useActions, useProps } from '@ray-js/panel-sdk';

import { TopBar } from '@/components';
import WorkModeCard from '@/components/mode';

import styles from './index.module.less';

export function Home() {
  const work_mode = useProps(props => props.work_mode);
  const actions = useActions();

  const [workMode, setWorkMode] = useState<'1' | '2' | '3' | '4'>(
    work_mode as '1' | '2' | '3' | '4'
  );

  useEffect(() => {
    setWorkMode(work_mode as '1' | '2' | '3' | '4');
  }, [work_mode]);

  return (
    <View className={styles.view}>
      <TopBar />
      <View className={styles.content}>
        <WorkModeCard
          value={workMode}
          onChange={workMode => {
            actions.work_mode.set(workMode);
            setWorkMode(workMode);
          }}
          onMore={() => {
            // redirectTo({ url: '/pages/settings/index' });
            switchTab({ url: '/pages/settings/index' });
          }}
        />
      </View>
    </View>
  );
}

export default Home;
