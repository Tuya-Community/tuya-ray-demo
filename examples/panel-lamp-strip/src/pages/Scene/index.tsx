/* eslint-disable no-shadow */
import React, { useEffect } from 'react';
import { setNavigationBarTitle } from '@ray-js/ray';
import Strings from '@/i18n';
import LocalScene from '@/standModel/sceneModel/LocalScene';
import { useDebugPerf } from '@/hooks';

type TProps = {
  show: boolean;
};
const Scene = (props: TProps) => {
  const { show } = props;
  useDebugPerf(Scene);
  useEffect(() => {
    if (!show) {
      return;
    }
    setNavigationBarTitle({ title: Strings.getLang('sceneTitle') });
  }, [show]);
  return <LocalScene />;
};

export default Scene;
