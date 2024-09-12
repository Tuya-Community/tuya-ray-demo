import { useSelectorMemoized } from '@/hooks';
import { nativeMapStatus } from '@/hybrid-mini-robot-map/protocol/constant';
import { convertColorToArgbHex } from '@/hybrid-mini-robot-map/protocol/utils/pressCoordinateUtil';
import { ReduxState, useSelector } from '@/redux';
import { selectCustomConfig } from '@/redux/modules/customConfigSlice';
import { selectMapExtraByKey } from '@/redux/modules/mapExtrasSlice';
import { selectMapStateByKey } from '@/redux/modules/mapStateSlice';
import { useMemo } from 'react';

type Props = {
  uiInterFace?: {
    isShowPileRing?: boolean; // 是否显示禁区ring
    isShowCurPosRing?: boolean; // 当前点ring
    isShowAppoint?: boolean; // 是否显示指哪扫哪点
    isShowAreaset?: boolean; // 是否显示清扫区域
    isCustomizeMode?: boolean;
    isSelectRoom?: boolean; // 是否显示选区清扫
    isRobotQuiet?: boolean;
    isFoldable?: boolean; // 房间属性是否折叠
  };
  pathVisible?: boolean;
  preCustomConfig: any;
  areaInfoList?: any[];
  fontColor?: string;
  history?: any;
  mapId: string;
};

export default function useMiddlewareMapViewParams({
  pathVisible = true,
  uiInterFace = {},
  preCustomConfig,
  areaInfoList,
  fontColor = '#ffffff',
  mapId,
}: Props) {
  const { isShowPileRing = false, isShowAreaset = false, isShowAppoint = false } = uiInterFace;

  const mapResolution = useSelector(selectMapStateByKey('mapResolution'));
  const selectRoomData = useSelectorMemoized(selectMapStateByKey('selectRoomData'));
  const RCTAreaList = useSelector(selectMapStateByKey('RCTAreaList'));
  const materialObjData = useSelector(selectMapExtraByKey('materialObjData'));
  const customConfig = useSelector(selectCustomConfig);
  const pilePosition = useSelectorMemoized((state: ReduxState) => state.mapState.pilePosition);
  const laserPanelConfig = useSelector(state => state.laserPanelConfig);
  const factor = mapResolution / 100;
  const originMap = useSelector(selectMapStateByKey('originMap'));
  const originPath = useSelector(selectMapStateByKey('originPath'));

  const iconParams = {
    pileIcon: 'https://images.tuyacn.com/app/robot/000001pj81/pile.png',
    isScale: false,
    scale: 0.015,
  };

  const areaInfoListForThisMap = useMemo(() => {
    if (areaInfoList) return areaInfoList;

    return RCTAreaList.filter((item: any) => {
      if (item.type === nativeMapStatus.pressToRun) {
        return isShowAppoint;
      }

      if (item.type === nativeMapStatus.areaSet) {
        return isShowAreaset;
      }

      return true;
    });
  }, [areaInfoList, RCTAreaList, isShowAreaset, isShowAppoint]);

  const pilePositionParams = isShowPileRing
    ? {
        ...pilePosition,
        iconParams,
        // 禁区半径
        radius: Math.floor(100 / 100 / factor),
        bgColor: convertColorToArgbHex(
          laserPanelConfig?.forbiddenAreaConfig?.pileConfig.ringBgColor
        ),
        borderColor: convertColorToArgbHex(
          laserPanelConfig?.forbiddenAreaConfig?.pileConfig.ringBorderColor
        ),
        animation: {
          rate: 2,
          borderWidth: 3,
          duration: 2,
          borderColor: '#0037C852',
          color: '#4D37C852',
          animationType: 'normal',
        },
        hidden: false,
      }
    : {
        ...pilePosition,
        iconParams,
        hidden: true,
      };

  let materialObject = {};
  if (materialObjData) {
    const materials = materialObjData.map(
      (itm: { x: number; y: number; type: number }, index: number) => ({
        id: `materialObjData${index}`,
        type: `obj${itm.type}`,
        x: itm.x,
        y: itm.y,
        extends: JSON.stringify(itm),
      })
    );
    materialObject = {
      materialMaps: {
        obj0: {
          uri: 'https://images.tuyacn.com/app/robot/png/AI_ico/Wire.png',
          width: 20,
          height: 20,
        },
        obj1: {
          uri: 'https://images.tuyacn.com/app/robot/png/AI_ico/Shoes.png',
          width: 20,
          height: 20,
        },
        obj2: {
          uri: 'https://images.tuyacn.com/app/robot/png/AI_ico/Sock.png',
          width: 20,
          height: 20,
        },
        obj3: {
          uri: 'https://images.tuyacn.com/app/robot/png/AI_ico/Toy.png',
          width: 20,
          height: 20,
        },
        obj4: {
          uri: 'https://images.tuyacn.com/app/robot/png/AI_ico/Chair.png',
          width: 20,
          height: 20,
        },
        obj5: {
          uri: 'https://images.tuyacn.com/app/robot/png/AI_ico/Table.png',
          width: 20,
          height: 20,
        },
        obj6: {
          uri: 'https://images.tuyacn.com/app/robot/png/AI_ico/Ashcan.png',
          width: 20,
          height: 20,
        },
        obj7: {
          uri: 'https://images.tuyacn.com/app/robot/png/AI_ico/Flowerpot.png',
          width: 20,
          height: 20,
        },
      },
      materials,
    };
  }
  console.log('===____++++++laserPanelConfig', laserPanelConfig);

  return {
    // 静态配置数据,数据只会在初始化的时候传入一次
    configurationData: {
      mapId,
      staticPrefix: 'https://images.tuyacn.com',
      asynchronousLoadMap: false,
      bgColor: convertColorToArgbHex('#F6F6F6'),
      factorInfo: {
        factor,
        font: 12,
        color: '#ff000000',
      },
      maxRoomPropertyLength: 3,
      mergeRoomParams: {
        checkedIcon: {
          checkedIconEnable: false,
        },
      },
      minAreaWidth: 50 / 100 / 0.05,
      pathWidth: 8,
      pilePosition: pilePositionParams,
      appointIcon: 'https://images.tuyacn.com/app/robot/000001pj81/point.png',
      posParams: {
        meter: 1.6,
        factor,
        bgColor: '#195D68FE',
        borderColor: '#FF5D68FE',
        isDash: false,
        lineWidth: 1,
        dashSize: 2,
        gapSize: 4,
        unit: {
          textColor: '#FF5D68FE',
          textSize: 12,
        },
      },
      robotParams: {
        markerIcon: 'https://images.tuyacn.com/app/robot/000001pj81/robot.png',
        iconParams: {
          isScale: false,
          scale: 0.02,
        },
      },
      selectedParams: {
        checkedIcon: {
          checkedIconEnable: true,
        },
      },
      showSelectRoomOrder: false,
      splitColor: '#ff3171D9',
      splitLineParams: {
        checkedIcon: {
          checkedIconEnable: false,
        },
        vertex: {
          vertexType: 'square',
          vertexColor: '#ff3171D9',
          radius: 3,
          vertexExtendTimes: 3,
        },
      },
      roomStyleConfig: {
        roomPropertyTextColor: '#ffffffff',
        roomPropertyBgColor: '#80225344',
        roomNameTextColor: '#ff000000',
        roomNameTextFont: 'Neue Frutiger World',
        roomNameTextStroke: {
          strokeWidth: 2,
          strokeColor: '#FFFFFFFF',
        },
      },
      roomAttributesConfig: {
        attributesFan: {
          attributesFanShow: true,
          attributesFanSet: true,
          attributesFanEnum: ['0', '1', '2', '3', '4'],
          attributesFanIconEnum: [
            'https://images.tuyacn.com/app/robot/000001pj81/fan_0.png',
            'https://images.tuyacn.com/app/robot/000001pj81/fan_1.png',
            'https://images.tuyacn.com/app/robot/000001pj81/fan_2.png',
            'https://images.tuyacn.com/app/robot/000001pj81/fan_3.png',
            'https://images.tuyacn.com/app/robot/000001pj81/fan_4.png',
          ],
        },
        attributesWater: {
          attributesWaterShow: true,
          attributesWaterSet: true,
          attributesWaterEnum: ['0', '1', '2', '3'],
          attributesWaterIconEnum: [
            'https://images.tuyacn.com/app/robot/000001pj81/water_0.png',
            'https://images.tuyacn.com/app/robot/000001pj81/water_1.png',
            'https://images.tuyacn.com/app/robot/000001pj81/water_2.png',
            'https://images.tuyacn.com/app/robot/000001pj81/water_3.png',
          ],
        },
        attributesTimes: {
          attributesTimesShow: true,
          attributesTimesSet: true,
          attributesTimesMaxNum: 3,
        },
        attributesOrder: {
          attributesOrderShow: true,
          attributesOrderSet: true,
        },
      },
      mapColorConfig: {
        cleaningColor: '#D0D0D0',
        barrierColor: 'rgba(0, 0, 0, 0.36)',
        unknownColor: 'rgba(255,255,255,0)',
      },
      // 机器人的一些配置数据
      robotConfig: {
        ringConfig: {
          ringRate: 2,
          ringBgColor: '#ff5abcfb',
          ringDuration: 2,
          ringBorderWidth: 8,
        },
      },
      // 路径的配置数据
      pathConfig: {
        pathColor: {
          commonColor: '#ffffffff',
          chargeColor: '#00FFFFFF',
          transitionsColor: '#00FFFFFF',
        },
      },
    },
    // 动态配置数据, 如一些用户交互或业务逻辑行为，会随着操作改变地图视图状态的数据
    runtimeData: {
      uiInterFace,
      selectRoomData,
      isFreezeMap: false,
      pathVisible,
      preCustomRoomConfig: preCustomConfig,
      customRoomConfig: customConfig,
      // 这里的areaInfoList 和 materialObject 需要再考虑是否后置
      materialObject,
      areaInfoList: JSON.stringify(areaInfoListForThisMap),
    },
    // 地图的Hex数据
    mapDataHex: originMap,
    // 路径的Hex数据
    pathDataHex: originPath,
  };
}
