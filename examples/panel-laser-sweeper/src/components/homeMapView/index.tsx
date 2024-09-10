/* eslint-disable react-hooks/rules-of-hooks */
import { dpCodes } from '@/config';
import { useCommandTransData, useMapData, usePathData } from '@/hooks';
import { useFoldableSingleRoomInfo, useGetMapPointsInfo } from '@/hooks/openApiHooks';
import MapView from '@/hybrid-mini-robot-map/layout/mapView';
import logger from '@/hybrid-mini-robot-map/protocol/loggerUtil';
import { parseRoomId } from '@/hybrid-mini-robot-map/protocol/robotCmd';
import Strings from '@/i18n';
import Store, { useSelector } from '@/redux';
import { updateMapData } from '@/redux/modules/mapStateSlice';
import { updateTemporaryPreference } from '@/redux/modules/temporaryPreferenceSlice';
import { getDevId } from '@/utils';
import { isRobotQuiet, robotIsSelectRoom, robotIsSelectRoomPaused } from '@/utils/robotStatus';
import { useProps } from '@ray-js/panel-sdk';
import { View, showToast } from '@ray-js/ray';
import { Utils } from '@ray-js/ray-error-catch';
import { StreamDataNotificationCenter, useP2PDataStream } from '@ray-js/robot-data-stream';
import { MapHeader, RoomDecoded } from '@ray-js/robot-protocol';
import { useUpdateEffect } from 'ahooks';
import React, { useCallback, useRef, useState } from 'react';

const { Logger } = Utils;
interface IProps {
  mapStatus: number;
  mapEditable: boolean;
}

const { nativeMapStatusEnum, workModeEnum } = dpCodes;

const HomeMapView: React.FC<IProps> = props => {
  const { dispatch } = Store;

  // 状态栏高度
  const statusBarHeight = useSelector(state => state.systemInfo.statusBarHeight);
  // dp点
  const workModeState = useProps(props => props[dpCodes.workMode]);
  const robotStatusState = useProps(props => props[dpCodes.robotStatus]);
  const customizeModeSwitchState = useProps(props => props[dpCodes.customizeModeSwitch]);
  const mapId = useRef('');

  const [mapLoadEnd, setMapLoadEnd] = useState(false);

  const onReceiveMapData = (data: string) => {
    StreamDataNotificationCenter.emit('receiveMapData', data);
  };

  const onReceivePathData = (data: string) => {
    StreamDataNotificationCenter.emit('receivePathData', data);
  };

  useP2PDataStream(getDevId(), onReceiveMapData, onReceivePathData);

  /**
   * 当前是否处于选区状态
   * @param mapStatus
   * @param workMode
   * @param robotStatus
   * @returns
   */
  const isSelectingRoom = (mapStatus: number, workMode: string, robotStatus: string) => {
    const isSelectRoomStatus = mapStatus === nativeMapStatusEnum.mapClick;
    const isSelectRoom = robotIsSelectRoom(workMode, robotStatus);
    const isSelectRoomPaused = robotIsSelectRoomPaused(workMode, robotStatus);
    return isSelectRoomStatus || isSelectRoom || (isSelectRoomPaused && isSelectRoomStatus);
  };

  const [isSelectRoomState, setIsSelectRoomState] = useState(
    isSelectingRoom(props.mapStatus, workModeState, robotStatusState)
  );

  useMapData();
  usePathData();
  useCommandTransData();

  // 监听状态变化判断是否处于选区状态
  useUpdateEffect(() => {
    setIsSelectRoomState(isSelectingRoom(props.mapStatus, workModeState, robotStatusState));
  }, [props.mapStatus, workModeState, robotStatusState]);

  /**
   * 地图唯一标识
   * @param data
   */
  const onMapId = async (data: any) => {
    mapId.current = data.mapId;
    dispatch(
      updateMapData({
        mapId: data.mapId,
      })
    );
  };

  /**
   * 地图渲染完成回调
   * @param success
   */
  const onMapLoadEnd = (success: boolean) => {
    logger.info('【HomeMapView】==> onMapLoadEnd', success, new Date().getTime());
    setMapLoadEnd(success);
    dispatch(updateMapData({ mapLoadEnd: success }));
  };

  const onLoggerInfo = useCallback((data: { info: any; theme: string; args: any }) => {
    console.log(data.info || '', data.theme || '', ...Object.values(data.args || {}));
  }, []);

  /**
   * 选区
   * @param data
   * @returns
   */
  const onClickSplitArea = (data: any) => {
    const { version, selectRoomData } = Store.getState().mapState;

    if (!data || !data.length || !Array.isArray(data)) {
      Logger.info(`homeMapView onClickSplitArea is empty,${data}`);
      return;
    }
    const room = data[0];
    const { pixel } = room;
    const roomId = parseRoomId(pixel, version);
    const maxUnknownId = version === 1 ? 31 : 26;
    if (roomId > maxUnknownId) {
      showToast({
        title: Strings.getLang('dsc_home_selectRoom_unknown'),
        icon: 'error',
      });
      return;
    }
    let curData = [];
    if (!selectRoomData.includes(pixel)) {
      curData = selectRoomData.concat([pixel]);
    } else {
      curData = selectRoomData.filter((i: string) => i !== pixel);
    }
    Logger.info(
      `homeMapView onClickSplitArea,prevData:${selectRoomData},data:${pixel},curData:${curData}`
    );
    dispatch(updateMapData({ selectRoomData: curData }));
  };

  /**
   * 点击房间的回调
   * @param data
   */
  const onClickRoom = (data: { roomId: string; isFoldable: false }) => {
    const { foldableRoomIds } = Store.getState().mapState;
    const { mapStatus } = props;
    const { roomId, isFoldable } = data;
    const edit = mapStatus !== nativeMapStatusEnum.normal;
    if (edit) return;
    let curData = [];
    if (!isFoldable && !foldableRoomIds.includes(roomId)) {
      curData = foldableRoomIds.concat([roomId]);
    } else {
      curData = foldableRoomIds.filter((i: string) => i !== roomId);
    }
    dispatch(updateMapData({ foldableRoomIds: curData }));
  };

  /**
   * 操作禁区/虚拟墙的回调
   * @param data
   */
  const onLaserMapPoints = async ({ data, type }) => {
    if (type === 'remove') {
      const { data: list, type: virtualType } = await useGetMapPointsInfo(mapId.current);

      if (virtualType === nativeMapStatusEnum.areaSet && !list.length) {
        dispatch(updateTemporaryPreference({ zone: false }));
      }
    }
  };

  const onClickRoomProperties = (data: any) => {
    const {
      properties: { colorHex },
    } = data;
    useFoldableSingleRoomInfo(mapId.current, colorHex, true);
  };

  const uiInterFace = React.useMemo(() => {
    return {
      isEdit: props.mapStatus !== nativeMapStatusEnum.normal && props.mapEditable, // 当前地图是否可修改
      isShowPileRing:
        props.mapStatus === nativeMapStatusEnum.virtualArea ||
        props.mapStatus === nativeMapStatusEnum.virtualWall, // 是否显示禁区ring
      isShowCurPosRing: !isRobotQuiet(robotStatusState), // 当前点ring
      isShowAppoint:
        workModeState === workModeEnum.pose || props.mapStatus === nativeMapStatusEnum.pressToRun, // 是否显示指哪扫哪点
      isShowAreaset:
        workModeState === workModeEnum.zone || props.mapStatus === nativeMapStatusEnum.areaSet, // 是否显示清扫区域
      isCustomizeMode: customizeModeSwitchState, // 是否显示房间属性折叠标签
      isSelectRoom: isSelectRoomState, // 当前状态是否为选择
      isRobotQuiet: isRobotQuiet(robotStatusState), // 当前地图是否安静
    };
  }, [props.mapStatus, workModeState, isSelectRoomState, robotStatusState]);

  const onDecodeMapData = (data: { mapHeader: MapHeader; mapRooms: RoomDecoded[] }) => {
    console.log('onDecodeMapData====>', data);

    const { mapHeader, mapRooms } = data;
    const roomInfo: { [key: string]: RoomDecoded } = {};
    mapRooms.forEach(i => {
      const { pointHex } = i;
      roomInfo[pointHex] = {
        ...i,
      };
    });

    dispatch(
      updateMapData({
        pilePosition: {
          theta: mapHeader.chargeDirection || 0,
          startTheta: mapHeader.chargeDirection !== undefined ? 90 : 0,
          ...mapHeader.chargePositionTransformed,
        },
        mapSize: {
          width: mapHeader.mapWidth,
          height: mapHeader.mapHeight,
        },
        dataMapId: mapHeader.id,
        version: mapHeader.version,
        origin: { x: mapHeader.originX, y: mapHeader.originY },
        mapStable: mapHeader.mapStable,
        isEmptyMap: mapHeader.mapWidth === 0 || mapHeader.mapHeight === 0,
        formatRoomInfo: roomInfo,
        roomNum: mapRooms?.length || 0,
      })
    );
  };

  return (
    <View
      style={{
        position: 'absolute',
        top: `${statusBarHeight + 44}px`,
        left: 0,
        width: '100vw',
        height: '100vh',
      }}
    >
      {/* 地图组件 */}
      <MapView
        isFullScreen
        mapDisplayMode="immediateMap"
        uiInterFace={uiInterFace}
        onMapId={onMapId}
        onLaserMapPoints={onLaserMapPoints}
        onClickSplitArea={onClickSplitArea}
        onDecodeMapData={onDecodeMapData}
        onClickRoomProperties={onClickRoomProperties}
        onClickRoom={onClickRoom}
        onMapLoadEnd={onMapLoadEnd}
        onLoggerInfo={onLoggerInfo}
        onClickMapView={v => {
          console.log(v, 'onCLickMapView====>');
        }}
        showLoading
        mapLoadEnd={mapLoadEnd}
      />
    </View>
  );
};

export default HomeMapView;
