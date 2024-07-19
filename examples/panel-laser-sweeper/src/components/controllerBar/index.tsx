/* eslint-disable react-hooks/rules-of-hooks */
import { dpCodes } from '@/config';
import {
  useShowPilePositionBreatheAnimation,
  useShowRobotSleepAnimation,
} from '@/hooks/openApiHooks';
import { actions, useSelector } from '@/redux';
import { useActions, useDevice, useProps } from '@ray-js/panel-sdk';

import {
  formatDps,
  getPosData,
  getRoomClean,
  getRoomSuccess,
  getZoneArea,
  putDeviceData,
} from '@/utils';
import {
  isRobotSilence,
  isRobotSleep,
  robotIsAreaPause,
  robotIsAreaing,
  robotIsAutoRunPause,
  robotIsAutoRunning,
  robotIsCharing,
  robotIsDust,
  robotIsFault,
  robotIsManual,
  robotIsMapping,
  robotIsPointPause,
  robotIsPointing,
  robotIsSelectRoom,
  robotIsSelectRoomPaused,
  robotIsStandby,
  robotIsToCharing,
} from '@/utils/robotStatus';
import { CoverView, View, offDpDataChange, onDpDataChange, Text } from '@ray-js/ray';
import { Grid } from '@ray-js/smart-ui';
import { IndoorMapApi, IndoorMapUtils } from '@ray-js/robot-map-component';
import { mapSplitStateEnum } from '@ray-js/robot-map-component/lib/enums';

import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { AddAreaButton } from './addAreaButton';
import './icons/iconfont.css';
import styles from './index.module.less';
import { ModeChange } from './modeChange';
import { QuickMapButton } from './quickMapButton';
import { RechargeButton } from './rechargeButton';
import { SettingButton } from './settingButton';
import SwitchButton from './switchButton';

interface Props {
  mapStatus: number;
  mapEditable: boolean;
  setMapStatus: (status: number, edit: boolean) => void;
}

// 工作模式dp枚举值
const { smart, pose, zone, selectRoom } = dpCodes.workModeEnum;
const modeStateEnum = [smart, pose, zone, selectRoom];
// 地图状态
const { nativeMapStatusEnum, cleanWorkModeEnum } = dpCodes;

function ControllerBar(props: Props) {
  const dispatch = useDispatch();
  const robotStatusState = useProps(props => props[dpCodes.robotStatus]);
  const workModeState = useProps(props => props[dpCodes.workMode]);
  const mapDataState = useSelector(state => state.mapState); // 地图数据
  const dpActions = useActions();

  // 工作模式
  const [modeState, setModeState] = useState(
    modeStateEnum.includes(workModeState) ? workModeState : smart
  );

  const selectRoomCleanTimer = useRef<NodeJS.Timeout>();

  const { mapId, mapLoadEnd } = mapDataState;

  /**
   * 工作模式/机器状态改变回调函数
   */
  const modeAndStatusChange = async () => {
    const { setMapStatus } = props;
    if (!mapId) return;
    // 扫地机处于充电状态下显示充电中的动画
    useShowPilePositionBreatheAnimation(mapId, robotIsCharing(robotStatusState));
    // 扫地机是否处于休眠中状态
    useShowRobotSleepAnimation(mapId, isRobotSleep(robotStatusState));

    // 扫地机处于回充/寻找集尘桶/集尘/手动控制状态
    if (
      robotIsToCharing(robotStatusState) ||
      robotIsCharing(robotStatusState) ||
      robotIsDust(robotStatusState) ||
      robotIsManual(workModeState, robotStatusState)
    ) {
      setModeState(smart);
      setMapStatus(nativeMapStatusEnum.normal, false);
      dispatch(actions.virtualState.updateAreaData({ selectRoomData: [], tempAreaList: [] }));
    }
    // 扫地机处于待机状态
    if (robotIsStandby(robotStatusState)) {
      setModeState(smart);
      setMapStatus(nativeMapStatusEnum.normal, false);
    }
    // 扫地机处于指哪扫哪暂停状态
    if ([robotIsPointPause].some(fn => fn(workModeState, robotStatusState))) {
      setModeState(pose);
      setMapStatus(nativeMapStatusEnum.pressToRun, true);
      actions[dpCodes.commText];
      dpActions.command_trans.set(getPosData());
    }
    // 扫地机处于指哪扫哪清扫状态
    if ([robotIsPointing].some(fn => fn(workModeState, robotStatusState))) {
      setModeState(pose);
      setMapStatus(nativeMapStatusEnum.normal, false);
      dpActions.command_trans.set(getPosData());
    }
    // 扫地机处于划区清扫暂停状态
    if ([robotIsAreaPause].some(fn => fn(workModeState, robotStatusState))) {
      setModeState(pose);
      setMapStatus(nativeMapStatusEnum.areaSet, true);
      dpActions.command_trans.set(getZoneArea());
    }
    // 扫地机处于划区清扫中状态
    if ([robotIsAreaing].some(fn => fn(workModeState, robotStatusState))) {
      setModeState(zone);
      setMapStatus(nativeMapStatusEnum.normal, false);
      dpActions.command_trans.set(getZoneArea());

      dispatch(actions.virtualState.updateAreaData({ selectRoomData: [], tempAreaList: [] }));
    }
    // 扫地机处于全屋清扫/全屋清扫暂停/快速建图/快速建图暂停状态
    if (
      [robotIsAutoRunning, robotIsAutoRunPause, robotIsMapping].some(fn =>
        fn(workModeState, robotStatusState)
      )
    ) {
      setModeState(smart);
      setMapStatus(nativeMapStatusEnum.normal, false);
    }
    // 扫地机处于选区清扫状态
    if ([robotIsSelectRoom].some(fn => fn(workModeState, robotStatusState))) {
      setModeState(selectRoom);
      setMapStatus(nativeMapStatusEnum.normal, false);
      IndoorMapApi.setLaserMapSplitType(IndoorMapUtils.getMapInstance(mapId), {
        mapId,
        state: mapSplitStateEnum.click,
      });
      onDpDataChange(deviceDataChangeFn);
      startLoading();
      dpActions.command_trans.set(getRoomClean());
    }
    // 扫地机处于选区清扫暂停状态
    if ([robotIsSelectRoomPaused].some(fn => fn(workModeState, robotStatusState))) {
      setModeState(selectRoom);
      dispatch(actions.virtualState.updateAreaData({ tempAreaList: [] }));
      IndoorMapApi.setLaserMapSplitType(IndoorMapUtils.getMapInstance(mapId), {
        mapId,
        state: mapSplitStateEnum.click,
      });
      setMapStatus(nativeMapStatusEnum.mapClick, true);
      onDpDataChange(deviceDataChangeFn);
      startLoading();
      putDeviceData({ [dpCodes.commText]: getRoomClean() });
    }
    // 扫地机处于待机/充电中/充电完成/休眠/故障状态
    if (isRobotSilence(robotStatusState) || robotIsFault(robotStatusState)) {
      setModeState(smart);
      setMapStatus(nativeMapStatusEnum.normal, false);
      dispatch(actions.virtualState.updateAreaData({ selectRoomData: [], tempAreaList: [] }));
    }
  };

  /**
   * 监听 工作模式/机器状态 DP值上报
   */
  useEffect(() => {
    modeAndStatusChange();
  }, [workModeState, robotStatusState, mapLoadEnd]);

  const deviceDataChangeFn = (data: ty.device.DpsChanged) => {
    const { [dpCodes.commText]: v } = formatDps(data) as any;
    if (v) {
      // 上报值为选区清扫
      if (getRoomSuccess(v)) {
        selectRoomCleanTimer.current && clearTimeout(selectRoomCleanTimer.current);
        offDpDataChange(deviceDataChangeFn);
        const { count, roomIds } = getRoomSuccess(v) || { count: 1, roomIds: [] };
        dispatch(
          actions.virtualState.updateAreaData({ selectRoomData: roomIds, sweepCount: count })
        );
        // 扫地机不处于待机/寻找充电座中/充电中/休眠/充电完成状态
        if (!isRobotSilence(robotStatusState) || !robotIsToCharing(robotStatusState)) {
          IndoorMapApi.updateSelectRoom(IndoorMapUtils.getMapInstance(mapId), roomIds, true);
        }
      }
    }
  };

  const startLoading = () => {
    selectRoomCleanTimer.current = setTimeout(() => {
      offDpDataChange(deviceDataChangeFn);
    }, 10000);
  };

  return (
    <CoverView className={styles.controllerBarContainer}>
      {/* 清扫按钮、清洁偏好、回充、快速建图 */}
      <View className={styles.operationContainer}>
        <View
          style={{
            background: '#FA8C16',

            padding: 10,
            borderRadius: 10,
            margin: 10,
          }}
        >
          <Text style={{ color: '#fff', fontSize: '12px' }}>
            由于扫地机的地图数据及路径数据依赖于P2P通道进行数据上报，如需体验该模版的完整能力，请绑定涂鸦方案的扫地机真实设备进行体验
          </Text>
        </View>
        {/* 快速建图: 无地图且不处于快速建图状态中时显示快速建图按钮 */}
        <QuickMapButton />

        <ModeChange
          setMapStatus={props.setMapStatus}
          modeState={modeState}
          setModeState={v => {
            console.log(v);
            setModeState(v);
          }}
        />
        {/* 控制栏 */}
        <Grid customClass={styles.full} border={false}>
          <SwitchButton mapStatus={props.mapStatus} />
          {/* 回充 */}
          {props.mapStatus === nativeMapStatusEnum.areaSet && props.mapEditable ? (
            <AddAreaButton />
          ) : (
            <RechargeButton />
          )}
          <SettingButton />
        </Grid>
      </View>
    </CoverView>
  );
}

export default ControllerBar;
