export interface IProps {
  splitModeWithNoRealTimeArea?: boolean;
  isFullScreen?: boolean;
  mapDisplayMode: mapDisplayModeEnum | string; // 地图模式
  isManageCurrent?: boolean; // 标识地图管理的当前地图

  uiInterFace?: {
    isEdit?: boolean; // 当前地图是否可修改
    isShowPileRing?: boolean; // 是否显示禁区ring
    isShowCurPosRing?: boolean; // 当前点ring
    isShowAppoint?: boolean; // 是否显示指哪扫哪点
    isShowAreaset?: boolean; // 是否显示清扫区域
    isCustomizeMode?: boolean;
    isSelectRoom?: boolean; // 是否显示选区清扫
    isRobotQuiet?: boolean;
    isFoldable?: boolean; // 房间属性是否折叠
  };

  laserMapPanelConfig?: any;
  onMapId?: (data: { mapId: string }) => void;
  onLongPressInAreaView?: (data: { id: string }) => void;
  onLaserMapPoints?: (data: { data: any; type: string }) => void;
  onClickSplitArea?: ({ data }: any) => void;
  onClickRoom?: (data: any) => void;
  onLoggerInfo?: (info: string | any) => void;
  onClickModel?: (data: {
    info: any;
    infoKey: string;
    scale: number;
    rotate: number;
    target: number;
    point: { x: number; y: number; z: number };
  }) => void;
  onModelLoadingProgress?: (data: { key: string; progress: number }) => void;
  onMapLoadEnd?: (success: boolean) => void;
  onClickRoomMoreProperties?: (properties: any) => void;
  onGestureChange?: (start: boolean) => void;
  // 小程序体系
  onIndoorMapApiCallee?: (data: { status: boolean; values: any }) => void;
  onClickRoomProperties?: (data: any) => void;
  onPosPoints?: (data: { data: any; type: string }) => void;
  onClickMapView?: (data: { data: any; eventType: string }) => void;
  onSplitLine?: (data: { data: any; type: string }) => void;
  onScreenSnapshot?: (data: { image: string; width: number; height: number; step: string }) => void;
  onVirtualInfoRendered?: (data: { rendered: boolean; data: { areaInfoList: any } }) => void;
  onRenderContextLost?: (data: { info: string; timestamp: number }) => void;
  onRenderContextRestored?: (data: { info: string; timestamp: number }) => void;
  onRobotPositionChange?: (data: {
    position: { x: number; y: number };
    originPosition: { x: number; y: number };
  }) => void;
  onContainerVisibilityChange?: (data: { info: string; timestamp: number }) => void;
  // dpCodes,
  DPCodes?: any;

  // 配置
  config?: any;

  // 房间属性临时数据
  // 修改房间属性后，把修改后数据保存到previewCustom中，等待机器上报，如果成功，数据存储到customConfig中，
  // 这样，就无须等待地图上报就可以展示修改后地图数据，修改前后地图不会闪烁
  preCustomConfig?: any;
  customConfig?: string[];
  selectRoomData?: any; // 选区清扫房间数据，当isSelectRoom为true时生效
  foldableRoomIds?: string[];
  areaInfoList?: [];
  fontColor?: string;
  iconColor?: string;
  showLoading?: boolean;
  isLite?: boolean;
  mapLoadEnd?: boolean;
  isFreezeMap?: boolean;
  is3d?: boolean;
  snapshotImage?: { image: string; width: number; height: number } | undefined;
  pathVisible?: boolean;
  onDecodeMapData?: (data: any) => void;
  onVirtualInfoOutOfBoundingBox?: (data: {
    target: number;
    type: number;
    isOutOfBoundingBox: boolean;
    data: {
      id: number;
      extend: any;
      areaType: number;
      content: any;
      points: { x: number; y: number }[];
    };
  }) => void;
  onClickMaterial?: (data: {
    operation: 'remove' | 'rotate' | 'resize' | 'edit' | 'move' | 'add' | 'click';
    target: number;
    type: number;
    data: {
      extends: { x: number; y: number; type: number };
      uri: string;
    };
  }) => void;
  onD3MapViewModeEnd?: (data: { success: boolean }) => void;
}
export enum mapDisplayModeEnum {
  immediateMap = 'immediateMap', // 实时地图
  history = 'history', // 历史地图
  splitMap = 'splitMap', // 地图分区
  multiFloor = 'multiFloor', // 地图管理
}
