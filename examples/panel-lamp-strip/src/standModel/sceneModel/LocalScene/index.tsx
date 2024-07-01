import React, { useEffect, useState } from 'react';
import { View } from '@ray-js/ray';
import {
  useActions,
  useSupport,
  useStructuredProps,
  useDevice,
  useStructuredActions,
  useProps,
} from '@ray-js/panel-sdk';
import { useDebugPerf } from '@/hooks';
import SceneCard from './components/SceneCard';
import { getSceneData } from './sceneData';
import { TSceneData } from './types';
import SceneDpParser from './dpParser';

import './index.less';
import { getSceneDpCode, setSceneDpCode } from './utils';

const LocalScene = () => {
  const support = useSupport();
  const actions = useActions();
  const structActions = useStructuredActions();
  const device = useDevice();
  const structuredProps = useStructuredProps();
  const props = useProps();
  const [sceneParser, setSceneParser] = useState(null);
  useDebugPerf(LocalScene);

  useEffect(() => {
    const dpCode = setSceneDpCode(device?.dpSchema);
    setSceneParser(new SceneDpParser(dpCode));
  }, [device.dpSchema]);

  const handlePutScene = (item: TSceneData) => {
    const isGroupDevice = support.isGroupDevice();
    actions.switch_led.on({ checkRepeat: !isGroupDevice });
    actions.work_mode.set('scene', { checkRepeat: !isGroupDevice, delay: 300 });
    const dpData = sceneParser?.parser(item.sceneData);
    const sceneCode = getSceneDpCode();
    structActions[sceneCode].set(dpData, {
      delay: isGroupDevice ? 600 : 0,
      checkRepeat: false,
    });
  };

  if (!sceneParser) {
    return null;
  }

  const dpCode = getSceneDpCode();
  const _curSceneData = structuredProps[dpCode] || {};
  const isSceneMode = props.work_mode === 'scene';
  const sceneData = getSceneData(device?.devInfo);
  return (
    <View className="local-scene-container">
      {sceneData.map(item => {
        const type = item.sceneIconDisplayType;
        const isActive = isSceneMode && sceneParser?.formatter(_curSceneData) === item.sceneData;
        return (
          <SceneCard
            isActive={isActive}
            key={item.sceneId}
            data={item}
            type={type}
            onClick={() => handlePutScene(item)}
          />
        );
      })}
    </View>
  );
};

export { SceneDpParser };

LocalScene.SceneDpParser = SceneDpParser;

export default LocalScene;
