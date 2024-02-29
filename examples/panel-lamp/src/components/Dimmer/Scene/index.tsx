import React from 'react';
import { View } from '@ray-js/components';
import { useActions, useSupport } from '@ray-js/panel-sdk';
import { getDefaultScenes } from '@/utils/getDefaultScenes';
import { CoolBarCard, SceneCard } from '@/components';
import styles from './index.module.less';

interface Props {
  style?: React.CSSProperties;
}

export const Scene: React.FC<Props> = ({ style }) => {
  const support = useSupport();
  const actions = useActions();

  const handlePutScene = (item: any) => {
    const isGroupDevice = support.isGroupDevice();
    if (isGroupDevice) {
      actions.switch_led.on({ checkRepeat: false });
      actions.work_mode.set('scene', { checkRepeat: false, delay: 300 });
    }
    actions.scene_data.set(item.sceneData, {
      delay: isGroupDevice ? 600 : 0,
      checkRepeat: false,
    });
  };

  return (
    <View style={style} className={styles.list}>
      <CoolBarCard />
      <View className={styles.contentBox}>
        {getDefaultScenes().map(item => {
          return <SceneCard key={item.sceneId} data={item} onClick={() => handlePutScene(item)} />;
        })}
      </View>
    </View>
  );
};
