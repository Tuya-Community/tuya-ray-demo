import { HomeMapView, TopBar } from '@/components';
import { dpCodes } from '@/config';
import Strings from '@/i18n';
import { useSelector } from '@/redux';
import { useProps } from '@ray-js/panel-sdk';
import { View } from '@ray-js/ray';
import React, { useRef, useState } from 'react';
import ControllerBar from '@/components/controllerBar';
import { robotIsPointPause } from '@/utils/robotStatus';
import { IndoorMapApi, IndoorMapUtils } from '@ray-js/robot-map-component';
import styles from './index.module.less';

const { nativeMapStatus } = dpCodes;

export function Home() {
  // const actions = useActions();
  const robotStatusState = useProps(props => props[dpCodes.robotStatus]);
  const workModeState = useProps(props => props[dpCodes.workMode]);
  const [mapStatus, setMapStatus] = useState(nativeMapStatus.normal); // 地图状态
  const [mapEditable, setMapEditable] = useState(false); // 地图是否处于编辑状态
  const { mapId } = useSelector(state => state.mapState);
  const mapStateRef = useRef(nativeMapStatus.normal);
  const editRef = useRef(false);

  /**
   * 修改地图状态&地图编辑状态
   * @param status 地图状态
   * @param edit 地图编辑状态
   */
  const setMapStatusChange = (status: number, edit: boolean) => {
    // 当切换为选区清扫时,冻结地图,阻止地图更新
    if (status === nativeMapStatus.mapClick && edit) {
      IndoorMapApi.freezeMapUpdate(IndoorMapUtils.getMapInstance(mapId), false);
    }
    // 切换回来时恢复地图
    if (status === nativeMapStatus.normal) {
      IndoorMapApi.freezeMapUpdate(IndoorMapUtils.getMapInstance(mapId), false);
    }

    IndoorMapApi.setLaserMapStateAndEdit(IndoorMapUtils.getMapInstance(mapId), {
      state: status,
      mapId,
      edit: edit || false,
    }).then(() => {
      setMapStatus(status);
      setMapEditable(edit || false);

      // 选区时和指哪扫哪编辑时隐藏路径
      // 防止路径过多点不到地图
      if ((status === nativeMapStatus.mapClick || status === nativeMapStatus.pressToRun) && edit) {
        if (![robotIsPointPause].some(fn => fn(workModeState, robotStatusState))) {
          IndoorMapApi.removePathFromScene(IndoorMapUtils.getMapInstance(mapId));
        }
      } else if (
        (mapStateRef.current === nativeMapStatus.mapClick ||
          mapStateRef.current === nativeMapStatus.pressToRun) &&
        status !== nativeMapStatus.mapClick &&
        status !== nativeMapStatus.pressToRun
      ) {
        if (![robotIsPointPause].some(fn => fn(workModeState, robotStatusState))) {
          IndoorMapApi.reCreatePathIntoScene(IndoorMapUtils.getMapInstance(mapId));
        }
      }
      mapStateRef.current = status;
      editRef.current = edit;
    });
  };

  return (
    <View className={styles.view}>
      {/* 实时地图 */}
      <HomeMapView mapStatus={mapStatus} mapEditable={mapEditable} />
      {/* Topbar1 */}

      <TopBar title={Strings.getDpLang(dpCodes.robotStatus, robotStatusState)} />
      {/* 操作栏 */}
      <ControllerBar
        mapStatus={mapStatus}
        setMapStatus={setMapStatusChange}
        mapEditable={mapEditable}
      />
    </View>
  );
}

export default Home;
