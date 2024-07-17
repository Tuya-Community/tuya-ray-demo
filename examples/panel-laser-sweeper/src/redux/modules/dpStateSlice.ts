/* eslint-disable camelcase */
import { createSlice } from '@reduxjs/toolkit';
import { responseUpdateDpCreator, updateDpCreator } from '@ray-js/tuya-dp-kit';
import { TYSdk } from 'tuya-panel-kit';
import {
  alarmTimeCode,
  autoBoostCode,
  batteryPercentageCode,
  breakCleanCode,
  carpetCleanPreferCode,
  childLockCode,
  cisternCode,
  cleanAreaCode,
  cleanAreaTotalCode,
  cleanCountTotalCode,
  cleanTimeCode,
  cleanTimesCode,
  cleanTimeTotalCode,
  commandTransCode,
  customizeModeSwitchCode,
  deviceInfoCode,
  deviceTimerCode,
  directionControlCode,
  disturbTimeSetCode,
  dustCollectionNumCode,
  dustCollectionSwitchCode,
  edgeBrushLifeCode,
  faultCode,
  filterLifeCode,
  mapResetCode,
  modeCode,
  mopStateCode,
  pathDataCode,
  pauseCode,
  ragLifeCode,
  requestCode,
  rollBrushLifeCode,
  seekCode,
  statusCode,
  suctionCode,
  switchChargeCode,
  switchGoCode,
  switchLedCode,
  unitSetCode,
  voiceDataCode,
  volumeSetCode,
  workModeCode,
  workstationTypeCode,
  yMopCode,
} from '@config/dpCodes';
import { RootState } from '@models';
import { devInfoChange } from './devInfoSlice';

export type DpState = {
  /**
   * 在此自定义你的当前项目 dp type
   */
  [switchGoCode]: boolean;
  [pauseCode]: boolean;
  [switchChargeCode]: boolean;
  [modeCode]: Mode;
  [statusCode]: Status;
  [customizeModeSwitchCode]: boolean;
  [workModeCode]: WorkMode;
  [cleanTimesCode]: number;
  [suctionCode]: Suction;
  [cisternCode]: Cistern;
  [mopStateCode]: MopState;
  [yMopCode]: boolean;
  [carpetCleanPreferCode]: CarpetCleanPrefer;
  [autoBoostCode]: boolean;
  [pathDataCode]: string;
  [requestCode]: DpRequest;
  [commandTransCode]: string;
  [batteryPercentageCode]: number;
  [deviceTimerCode]: string;
  [seekCode]: boolean;
  [directionControlCode]: DirectionControl;
  [mapResetCode]: boolean;
  [disturbTimeSetCode]: string;
  [volumeSetCode]: number;
  [voiceDataCode]: string;
  [unitSetCode]: UnitSet;
  [breakCleanCode]: boolean;
  [dustCollectionSwitchCode]: boolean;
  [dustCollectionNumCode]: number;
  [childLockCode]: boolean;
  [edgeBrushLifeCode]: number;
  [rollBrushLifeCode]: number;
  [filterLifeCode]: number;
  [ragLifeCode]: number;
  [cleanTimeCode]: number;
  [cleanAreaCode]: number;
  [cleanTimeTotalCode]: number;
  [cleanAreaTotalCode]: number;
  [cleanCountTotalCode]: number;
  [deviceInfoCode]: string;
  [alarmTimeCode]: number;
  [switchLedCode]: boolean;
  [workstationTypeCode]: WorkstationType;
  [faultCode]: number;
};

export type DpStateKey = keyof DpState;

type UpdateDpStatePayload = Partial<DpState>;

export const responseUpdateDp = responseUpdateDpCreator<UpdateDpStatePayload>();
/**
 * 请全程使用该方法进行下发，dispatch(updateDp({ switch: true }))
 */
export const updateDp = updateDpCreator<UpdateDpStatePayload>();

/**
 * Slice
 */
const dpStateSlice = createSlice({
  name: 'dpState',
  initialState: {} as DpState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(devInfoChange, (state, action) => ({ ...state, ...action.payload.state }));
    builder.addCase(responseUpdateDp, (state, action) => ({ ...state, ...action.payload }));
  },
});

export default dpStateSlice.reducer;

/**
 * Selectors
 */
type SelectDpState = <T extends DpStateKey>(key: T) => (state: RootState) => DpState[T];
/* 选择一个dp值 */
export const selectDpState: SelectDpState = key => state => state.dpState[key];
/* 选择多个dp值的集合 */
export const selectDpStateMultiple =
  <T extends DpStateKey>(keys: T[]) =>
  (state: RootState) =>
    keys.map(key => state.dpState[key]);
/* 选择自定义dp key的集合 */
/* 记得用useSelectorMemoized */
export const selectCustomDpCodes = (state: RootState) =>
  Object.keys(state.dpState).filter(dpCode => Number(TYSdk.device.getDpIdByCode(dpCode)) >= 100);
