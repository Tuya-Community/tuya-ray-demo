// 是否第一次配网

import { ReduxState } from '..';
import { RoomDecoded } from '@ray-js/robot-protocol';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const DEFAULT_MAP_STATE = {
  mapId: undefined as any, // map ID 主页地图
  dataMapId: undefined as any,
  decodePathFn: '',
  RCTAreaList: [], // 区域框
  tempAreaList: [], // 编辑时的临时区域数据
  selectRoomData: [] as string[],
  sweepRegionData: [],
  mapData: {} as {
    dataMapId: number;
    staticPrefix: string;
    width: number;
    height: number;
    origin: { x: number; y: number };
    decodeMapDataFn: string;
    materialObject: any;
  },
  mapStable: false,
  mapResolution: 5, // 比例尺
  bgWidth: 0,
  bgHeight: 0,
  origin: { x: 0, y: 0 },
  roomInfo: '',
  isEmptyMap: false,
  pilePosition: { x: 0, y: 0 },
  pathData: [],
  mapSize: {
    width: 0,
    height: 0,
  },
  curPos: { x: 0, y: 0 },
  foldableRoomIds: [] as string[], // 房间属性折叠数组
  isDebugMode: false, // 当前处于debug模式，可复制地图等数据链接
  realTimeMapUrl: '', // 实时地图url
  realTimePathUrl: '', // 实时路径url
  formatRoomInfo: {} as { [key: string]: RoomDecoded },
  version: 0 as 0 | 1 | 2, // 地图解析协议的版本
  mapLoadEnd: false, // 首页地图是否加载完成
  roomNum: 0, // 分区个数
  originPath: '',
  originMap: '',
  originCommand: '',
};

/**
 * Slice
 */
const mapStateSlice = createSlice({
  name: 'mapState',
  initialState: DEFAULT_MAP_STATE,
  reducers: {
    updateMapData(state, action: PayloadAction<any>) {
      return { ...state, ...action.payload };
    },
  },
});

/**
 * Actions
 */
export const { updateMapData } = mapStateSlice.actions;

/**
 * Selectors
 */
export const selectMapState = (state: ReduxState) => state.mapState;

type SelectMapStateByKey = <T extends keyof typeof DEFAULT_MAP_STATE>(
  key: T
) => (state: ReduxState) => typeof DEFAULT_MAP_STATE[T];
export const selectMapStateByKey: SelectMapStateByKey = key => state => state.mapState[key];

export default mapStateSlice.reducer;
