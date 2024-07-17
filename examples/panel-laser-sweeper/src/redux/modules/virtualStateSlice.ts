import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ReduxState } from '..';

// FIXME: 这里的变量类型需要更新下

/**
 * 编辑时的临时区域数据
 */
interface TempArea {
  id: number;
  name: string;
  coordinates: number[][];
}

/**
 * 选择的房间数据
 */
interface SelectRoom {
  id: number;
  areaId: number;
  name: string;
  coordinates: number[][];
}

/**
 * 扫描区域数据
 */
interface SweepRegion {
  id: number;
  roomId: number;
  areaId: number;
  coordinates: number[][];
}

/**
 * 格式化房间信息
 */
interface FormatRoomInfo {
  [key: number]: {
    areaId: number;
    roomId: number;
    roomName: string;
  };
}

const DEFAULT_MAP_STATE = {
  RCTAreaList: [], // 区域框
  tempAreaList: [], // 编辑时的临时区域数据
  selectRoomData: [],
  sweepRegionData: [],
  sweepCount: 1,
  formatRoomInfo: {},
};
/**
 * Slice
 */
const virtualStateSlice = createSlice({
  name: 'virtualState',
  initialState: DEFAULT_MAP_STATE,
  reducers: {
    updateAreaData(state, action: PayloadAction<Record<string, any>>) {
      return Object.assign({}, state, action.payload);
    },
  },
});

export const { actions } = virtualStateSlice;
/**
 * Selectors
 */
export const selectAreaData = (state: ReduxState) => state.virtualState;

type SelectVirtualStateByKey = <T extends keyof typeof DEFAULT_MAP_STATE>(
  key: T
) => (state: ReduxState) => typeof DEFAULT_MAP_STATE[T];

export const selectVirtualStateByKey: SelectVirtualStateByKey = key => state =>
  state.virtualState[key];

export default virtualStateSlice.reducer;
