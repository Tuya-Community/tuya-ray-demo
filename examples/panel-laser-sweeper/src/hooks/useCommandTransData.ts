import { emitter, getVirtualForbid, getVirtualWall, putDeviceData } from '@/utils';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import dataProtocol from '@/hybrid-mini-robot-map/protocol';
import _ from 'lodash';
import { commandTransCode } from '@/config/dpCodes';
import { mapExtrasUpdated } from '@/redux/modules/mapExtrasSlice';
import {
  decodeToRCTArea,
  decodeToRCTCleanArea,
  decodeToRCTPoint,
  decodeToRCTWall,
} from '@/hybrid-mini-robot-map/protocol/area';
import { convertColorToArgbHex } from '@/hybrid-mini-robot-map/protocol/utils/pressCoordinateUtil';
import {
  bDeleteBase64Img,
  bResizeBase64Img,
  bRotateBase64Img,
  deleteBase64Img,
  oDeleteBase64Img,
  oResizeBase64Img,
  oRotateBase64Img,
  rDeleteBase64Img,
  rResizeBase64Img,
  rRotateBase64Img,
  resizeBase64Img,
  rotateBase64Img,
} from '@/hybrid-mini-robot-map/res/base64Imgs';
import { ForbidTypeEnum } from '@/hybrid-mini-robot-map/protocol/constant';
import logger from '@/hybrid-mini-robot-map/protocol/loggerUtil';
import store from '@/redux';
import { updateMapData } from '@/redux/modules/mapStateSlice';

export const getAreasForMapView = (existAreas: any[], mapAreas: any) => {
  const {
    forbiddenAreaConfig: { sweepForbiddenArea, virtualWall, mopForbiddenArea },
    selectAreaConfig: { selectAreaBgColor, selectAreaLineColor },
  } = store.getState().laserPanelConfig;
  const factor = store.getState().mapState.mapResolution / 100;
  const {
    virtualAreaData,
    virtualMopAreaData,
    virtualWallData,
    sweepRegionData,
    appointData,
  } = mapAreas;

  const areas: any[] = [];

  const vertexParams = {
    vertexImages: [deleteBase64Img(), rotateBase64Img(), resizeBase64Img()],
    showVertexImage: true, // 是否需要显示顶点贴图
    vertexType: 'circle',
  };

  // 扫拖禁区
  if (!!virtualAreaData && !!virtualAreaData.length) {
    areas.push(
      ...decodeToRCTArea(virtualAreaData, existAreas, areas, {
        forbidType: ForbidTypeEnum.sweep,
        bgColor: sweepForbiddenArea.sweepForbiddenBgColor,
        borderColor: sweepForbiddenArea.sweepForbiddenLineColor,
        vertexParams: {
          // vertexColor: convertColorToArgbHex(sweepForbiddenArea.sweepForbiddenLineColor),
          ...vertexParams,
          vertexImages: [rDeleteBase64Img(), rRotateBase64Img(), rResizeBase64Img()],
        },
        unitParams: {
          textColor: convertColorToArgbHex(sweepForbiddenArea.sweepForbiddenLineColor),
        },
        viewType: 'dashEdit',
      })
    );
  }

  // 拖地禁区
  if (virtualMopAreaData && virtualMopAreaData.length > 0) {
    areas.push(
      ...decodeToRCTArea(virtualMopAreaData, existAreas, areas, {
        forbidType: ForbidTypeEnum.mop,
        bgColor: mopForbiddenArea.mopForbiddenBgColor,
        borderColor: mopForbiddenArea.mopForbiddenLineColor,
        vertexParams: {
          // vertexColor: convertColorToArgbHex(mopForbiddenArea.mopForbiddenLineColor),
          ...vertexParams,
          vertexImages: [oDeleteBase64Img(), oRotateBase64Img(), oResizeBase64Img()],
        },
        unitParams: {
          textColor: convertColorToArgbHex(mopForbiddenArea.mopForbiddenLineColor),
        },
        viewType: 'dashEdit',
      })
    );
  }

  // 虚拟墙
  if (!!virtualWallData && !!virtualWallData.length) {
    areas.push(
      ...decodeToRCTWall(virtualWallData, existAreas, areas, {
        forbidType: ForbidTypeEnum.sweep,
        bgColor: virtualWall.virtualWallLineColor,
        lineWidth: 3,
        vertexParams: {
          showVertexImage: false, // 是否需要显示顶点贴图
          vertexType: 'square',
          vertexColor: convertColorToArgbHex(virtualWall.virtualWallLineColor),
          radius: 3,
          vertexExtendTimes: 3,
        },
        unitParams: {
          textColor: convertColorToArgbHex(virtualWall.virtualWallLineColor),
        },
        sideVertexParams: {
          showSideVertex: true,
          showSideVertexImage: true,
          sideVertexImage: rDeleteBase64Img(),
          radius: 4,
        },
      })
    );
  }

  if (sweepRegionData && sweepRegionData.length > 0) {
    areas.push(
      ...decodeToRCTCleanArea(sweepRegionData, existAreas, areas, {
        bgColor: selectAreaBgColor,
        borderColor: selectAreaLineColor,
        vertexParams: {
          ...vertexParams,
          vertexImages: [bDeleteBase64Img(), bRotateBase64Img(), bResizeBase64Img()],
        },
        unitParams: {
          textColor: convertColorToArgbHex(selectAreaLineColor),
        },
        viewType: 'dashEdit',
      })
    );
  }

  // 指哪扫哪

  if (appointData && appointData.length > 0) {
    areas.push(decodeToRCTPoint(appointData, existAreas, areas, factor));
  }

  return areas;
};

/**
 * 接收指令数据并解析
 * @returns
 */
export default function useCommandTransData() {
  const dispatch = useDispatch();

  useEffect(() => {
    const handleCommandTransData = (command: string) => {
      const data = dataProtocol.area.decode(command) as any;

      if (Object.keys(data).length === 0) return;

      logger.success('区域数据', data);

      dispatch(mapExtrasUpdated(data));

      const areas = getAreasForMapView([], store.getState().mapExtras);

      dispatch(updateMapData({ RCTAreaList: areas }));
    };

    emitter.on('receiveCommandTransData', handleCommandTransData);
    putDeviceData({
      [commandTransCode]: getVirtualForbid(),
    });
    putDeviceData({
      [commandTransCode]: getVirtualWall(),
    });

    return () => {
      emitter.off('receiveCommandTransData');
    };
  }, []);
  return {};
}
