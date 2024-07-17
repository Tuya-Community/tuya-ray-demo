/* eslint-disable react-hooks/rules-of-hooks */
import { dpCodes } from '@/config';
import { useSetLaserMapSplitType } from '@/hooks/openApiHooks';
import Strings from '@/i18n';
import Store, { useSelector } from '@/redux';
import { getNewAreaId, setPosPoints } from '@/utils/mapStateUtils';
import { View } from '@ray-js/ray';
import { Grid, GridItem } from '@ray-js/smart-ui';
import { mapSplitStateEnum } from '@ray/robot-map-component/lib/enums';
import React from 'react';
import { useDispatch } from 'react-redux';
import './icons/iconfont.css';

import { getAreasForMapView } from '@/hooks';
import { mapExtrasUpdated } from '@/redux/modules/mapExtrasSlice';
import { updateMapData } from '@/redux/modules/mapStateSlice';

import styles from './index.module.less';

const { nativeMapStatusEnum, cleanWorkModeEnum } = dpCodes;
const { smart, pose, zone, selectRoom } = dpCodes.workModeEnum;

interface Props {
  setMapStatus: (status: number, edit: boolean) => void;
  modeState: string;
  setModeState: (v: string) => void;
}

export const ModeChange = (props: Props) => {
  const mapDataState = useSelector(state => state.mapState); // 地图数据
  const { isEmptyMap, origin, roomNum, mapId } = mapDataState;
  const { setModeState } = props;
  const dispatch = useDispatch();

  /**
   * 获取工作模式枚举值
   * @returns
   */
  const getCleanModes = () => {
    // 是否支持划区清扫、指哪扫哪
    const { modeState } = props;
    return [
      // 全屋清扫
      {
        mode: smart,
        mapStatus: nativeMapStatusEnum.normal,
        disabled: false,
        visible: true,
        isActive: modeState === smart,
        title: Strings.getDpLang(dpCodes.workMode, smart),
      },
      // 选区清扫
      {
        mode: selectRoom,
        mapStatus: nativeMapStatusEnum.mapClick,
        disabled: isEmptyMap || roomNum === 0,
        visible: true,
        isActive: modeState === selectRoom,
        title: Strings.getDpLang(dpCodes.workMode, selectRoom),
      },
      // 指哪扫哪
      {
        mode: pose,
        mapStatus: nativeMapStatusEnum.pressToRun,
        disabled: isEmptyMap,
        visible: true,
        isActive: modeState === pose,
        title: Strings.getDpLang(dpCodes.workMode, pose),
      },
      // 划区清扫
      {
        mode: zone,
        mapStatus: nativeMapStatusEnum.areaSet,
        disabled: isEmptyMap,
        visible: true,
        isActive: modeState === zone,
        title: Strings.getDpLang(dpCodes.workMode, zone),
      },
    ];
  };

  /**
   * 增加一个指哪扫哪的移动点
   */
  const addPosPoints = async () => {
    const { RCTAreaList, tempAreaList, mapSize, mapResolution, origin } = Store.getState().mapState;
    const factor = mapResolution / 100;
    const areaId = getNewAreaId({
      RCTAreaList,
      tempAreaList,
    });

    const params = {
      mapId,
      areaId,
      origin,
      mapHeight: mapSize.height,
      mapWidth: mapSize.width,
      bgColor: '#195D68FE',
      borderColor: '#FF5D68FE',
      textColor: '#FF5D68FE',
      textSize: 12,
      meter: 1.6,
      isDash: false,
      lineWidth: 1,
      dashSize: 1,
      gapSize: 4,
      factor,
    };
    const data = await setPosPoints(params);
    console.log('addPosPoints success ==>', data);
  };

  /**
   * 切换清扫模式
   * @param modeValue
   * @param mapStatusValue
   */
  const handleSwitchMode = (modeValue: Mode, mapStatusValue: NativeMapStatus) => {
    const { setMapStatus } = props;
    setMapStatus(mapStatusValue, modeValue !== 'smart');

    // 是否是切换到选区清扫
    const isSelectRoom = mapStatusValue === 5;
    if (isSelectRoom) {
      useSetLaserMapSplitType(mapId, mapSplitStateEnum.click);
    }

    // 指哪扫哪如果不需要点击地图，立即生成一个可移动区时
    if (mapStatusValue === 1) {
      addPosPoints();
    }
    dispatch(updateMapData({ selectRoomData: [], tempAreaList: [] }));
    dispatch(mapExtrasUpdated({ appointData: [], sweepRegionData: [] }));

    const areas = getAreasForMapView([], Store.getState().mapExtras);

    dispatch(updateMapData({ RCTAreaList: areas }));
  };

  if (isEmptyMap) return null;
  const modes = getCleanModes();
  return (
    <Grid customClass={styles.full} border={false}>
      {modes.map(item => (
        <GridItem
          text={item.title}
          key={JSON.stringify({ mode: item.mode, isActive: item.isActive })}
          onClick={() => {
            if (item.disabled) return;
            setModeState(item.mode);
            handleSwitchMode(item.mode, item.mapStatus);
          }}
          iconClass={item.isActive ? styles.activeCleanModeContent : styles.cleanModeContent}
          slot={{
            icon: (
              <View
                className={`iconfont icon-${item.mode}`}
                style={{
                  color: item.isActive ? '#fff' : '#000000',
                  opacity: item.disabled ? 0.2 : 1,
                  fontSize: '48rpx',
                }}
              />
            ),
          }}
        />
      ))}
    </Grid>
  );
};
