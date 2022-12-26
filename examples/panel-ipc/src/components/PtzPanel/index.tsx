import React from 'react';
import { View } from '@ray-js/ray';
import Ptz from '@/components/Ptz';
import Zoom from '@/components/Zoom';
import { useDevInfo } from '@ray-js/panel-sdk';
import Styles from './index.module.less';

const PtzPanel = () => {
  const devInfo = useDevInfo();
  const selectDevDp = devInfo?.dpCodes || {};

  const isPtz = selectDevDp && 'ptz_control' in selectDevDp;
  const isZoom = selectDevDp && 'zoom_control' in selectDevDp;

  return (
    <View className={Styles.PtzPanel}>
      <View style={{ display: isPtz ? '' : 'none' }}>
        <Ptz />
      </View>
      {isZoom && (
        <View className={!isPtz && isZoom ? Styles.justZoomWrap : Styles.zoomWrap}>
          <Zoom />
        </View>
      )}
    </View>
  );
};

export default PtzPanel;
