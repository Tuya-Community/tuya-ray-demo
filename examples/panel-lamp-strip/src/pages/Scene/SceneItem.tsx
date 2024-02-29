import React, { useEffect, useState } from 'react';
import { View, hideLoading } from '@ray-js/ray';

import LottieView from '../../components/MyMiniLottie';
import { getLottieJSON } from './api';

type TProps = {
  sceneId: number;
  sceneIcon: string;
  onClick: (sceneId: number) => void;
};

const SceneItem = (props: TProps) => {
  const { sceneIcon, sceneId, onClick } = props;
  const [lottieSource, setLottieSource] = useState(null);
  useEffect(() => {
    if (sceneIcon.indexOf('.json') > -1) {
      getLottieJSON(sceneIcon)
        .then(res => {
          setLottieSource(res);
        })
        .catch(() => {
          hideLoading();
        });
    }
  }, [sceneIcon]);

  if (!lottieSource) {
    return null;
  }
  const width = 343;
  const height = 96;
  return (
    <View onClick={() => onClick(sceneId)}>
      <LottieView
        prop={{
          canvasId: `scene_${sceneId}`,
          lottieSource,
          containerStyle: `width: ${width}px; height: ${height}px;`,
          canvasStyle: `width: ${width}px; height: ${height}px;`,
          scaleValue: 2,
        }}
      />
    </View>
  );
};

export default React.memo(SceneItem);
