/* eslint-disable react/require-default-props */
import React from 'react';
import { useDebugPerf } from '@/hooks';
import SceneCard1 from './SceneCard_1';

import { TSceneData } from '../../types';

type TProps = {
  type?: number;
  style?: React.CSSProperties;
  data: TSceneData;
  isActive: boolean; // 是否选中
  onClick: () => void;
};

const SceneCard = (props: TProps) => {
  useDebugPerf(SceneCard, props);
  const { type = 4 } = props;
  switch (type) {
    case 1:
      return <SceneCard1 {...props} />;
    default:
      return <SceneCard1 {...props} />;
  }
};

export default SceneCard;
