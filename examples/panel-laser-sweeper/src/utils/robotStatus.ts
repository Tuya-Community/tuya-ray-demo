/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { dpCodes } from '@/config';

// 工作模式dp枚举值
const { smart, pose, zone, selectRoom, manual } = dpCodes.workModeEnum;
// 机器状态dp枚举值
const {
  pause,
  totaling,
  pointed,
  pointing,
  areaing,
  selectRoom: selectRoomStatus,
  toCharge,
  charging,
  fullCharge,
  idle,
  mapping,
  mappingDone,
  sleep,
  collectingDust,
  seekDustBucket,
  parting,

  selfClean,
  manual: manualStatus,
  fault,
} = dpCodes.robotStatusEnum;
// 地图状态
const {
  normal,
  pressToRun,
  areaSet,
  virtualArea,
  virtualWall,
  mapSplit,
  mapClick,
  mapSelect,
  mapTimerSelect,
} = dpCodes.nativeMapStatusEnum;

/**
 * 扫地机处于全屋清扫暂停中
 * @param workMode
 * @param robotStatus
 * @returns
 */
export const robotIsAutoRunPause = (workMode: string, robotStatus: string) => {
  return workMode === smart && robotStatus === pause;
};

/**
 * 扫地机处于指哪扫哪暂停中
 * @param workMode
 * @param robotStatus
 * @returns
 */
export const robotIsPointPause = (workMode: string, robotStatus: string) => {
  return workMode === pose && robotStatus === pause;
};

/**
 * 扫地机处于划区清扫暂停中
 * @param workMode
 * @param robotStatus
 * @returns
 */
export const robotIsAreaPause = (workMode: string, robotStatus: string) => {
  return workMode === zone && robotStatus === pause;
};

/**
 * 扫地机处于选区清扫暂停中
 * @param workMode
 * @param robotStatus
 * @returns
 */
export const robotIsSelectRoomPaused = (workMode: string, robotStatus: string) => {
  return workMode === selectRoom && robotStatus === pause;
};

/**
 * 扫地机处于全屋清扫中
 * @param workMode
 * @param robotStatus
 * @returns
 */
export const robotIsAutoRunning = (workMode: string, robotStatus: string) => {
  return workMode === smart && robotStatus === totaling;
};

/**
 * 扫地机处于快速建图中/建图完成状态
 * @param workMode
 * @param robotStatus
 * @returns
 */
export const robotIsMapping = (workMode: string, robotStatus: string) => {
  return workMode === smart && (robotStatus === mapping || robotStatus === mappingDone);
};

/**
 * 扫地机处于指哪扫哪中
 * @param workMode
 * @param robotStatus
 * @returns
 */
export const robotIsPointing = (workMode: string, robotStatus: string) => {
  return (
    workMode === pose &&
    (robotStatus === pointing || robotStatus === pointed || robotStatus === parting)
  );
};

/**
 * 扫地机处于划区清扫中
 * @param workMode
 * @param robotStatus
 * @returns
 */
export const robotIsAreaing = (workMode: string, robotStatus: string) => {
  return workMode === zone && robotStatus === areaing;
};

/**
 * 扫地机处于选区清扫中
 * @param workMode
 * @param robotStatus
 * @returns
 */
export const robotIsSelectRoom = (workMode: string, robotStatus: string) => {
  return workMode === selectRoom && robotStatus === selectRoomStatus;
};

/**
 * 扫地机处于充电中
 * @param workMode
 * @param robotStatus
 * @returns
 */
export const robotIsCharing = (robotStatus: string) => {
  return robotStatus === charging;
};

/**
 * 扫地机处于寻找充电座中
 * @param workMode
 * @param robotStatus
 * @returns
 */
export const robotIsToCharing = (robotStatus: string) => {
  return robotStatus === toCharge;
};

/**
 * 扫地机处于充电完成中
 * @param workMode
 * @param robotStatus
 * @returns
 */
export const robotIsFullCharge = (robotStatus: string) => {
  return robotStatus === fullCharge;
};

/**
 * 扫地机处于寻找充电座/充电/充电完成中
 * @param robotStatus
 * @returns
 */
export const robotIsCharge = (robotStatus: string) => {
  return robotStatus === toCharge || robotStatus === charging || robotStatus === fullCharge;
};

/**
 * 扫地机处于待机状态
 * @param robotStatus
 * @returns
 */
export const robotIsStandby = (robotStatus: string) => {
  return robotStatus === idle;
};

/**
 * 地图处于指哪扫哪状态
 * @param mapStatus
 * @returns
 */
export const mapStatusIsPoint = (mapStatus: number) => {
  return mapStatus === pressToRun;
};

/**
 * 地图处于划区清扫状态
 * @param mapStatus
 * @returns
 */
export const mapStatusIsArea = (mapStatus: number) => {
  return mapStatus === areaSet;
};

/**
 * 扫地机处于待机/充电中/充电完成/休眠状态
 * @param robotStatus
 * @returns
 */
export const isRobotSilence = (robotStatus: string) => {
  const robotStatusArr = [idle, charging, fullCharge, sleep];
  return robotStatusArr.includes(robotStatus);
};

/**
 * 扫地机是否处于待机/休眠状态
 * @param robotStatus
 * @returns
 */
export const isRobotChargeDirect = (robotStatus: string) => {
  return [idle, sleep].includes(robotStatus);
};

/**
 * 扫地机是否处于休眠中状态
 */
export const isRobotSleep = (robotStatus: string) => {
  return robotStatus === sleep;
};

/**
 * 扫地机是否处于寻找集尘桶/集尘状态
 * @param robotStatus
 * @returns
 */
export const robotIsDust = (robotStatus: string) => {
  return [collectingDust, seekDustBucket].includes(robotStatus);
};

/**
 * 扫地机处于待机/充电中/已充满/暂停状态
 * @param robotStatus
 * @returns
 */
export const isRobotQuiet = (robotStatus: string) => {
  return [idle, charging, fullCharge, sleep, pause].includes(robotStatus);
};

/**
 * 扫地机处于手动控制中
 * @param workMode
 * @param robotStatus
 * @returns
 */
export const robotIsManual = (workMode: string, robotStatus: string) => {
  return workMode === manual && robotStatus === manualStatus;
};

/**
 * 扫地机不处于工作状态
 * @param robotStatus
 * @returns
 */
export const robotIsNotWorking = (robotStatus: string) => {
  return [idle, charging, fullCharge, sleep, collectingDust, selfClean].includes(robotStatus);
};

/**
 * 扫地机处于故障状态
 * @param robotStatus
 * @returns
 */
export const robotIsFault = (robotStatus: string) => {
  return robotStatus === fault;
};

export const robotIsCleaning = (workMode: string, robotStatus: string) => {
  return (
    robotIsAutoRunning(workMode, robotStatus) ||
    robotIsAutoRunPause(workMode, robotStatus) ||
    robotIsAreaing(workMode, robotStatus) ||
    robotIsAreaPause(workMode, robotStatus) ||
    robotIsSelectRoom(workMode, robotStatus) ||
    robotIsSelectRoomPaused(workMode, robotStatus) ||
    robotIsPointing(workMode, robotStatus) ||
    robotIsPointPause(workMode, robotStatus) ||
    robotIsMapping(workMode, robotStatus)
  );
};

export default {
  robotIsAutoRunPause,
  robotIsPointPause,
  robotIsAreaPause,
  robotIsSelectRoomPaused,
  robotIsAutoRunning,
  robotIsPointing,
  robotIsAreaing,
  robotIsSelectRoom,
  robotIsCharing,
  robotIsToCharing,
  robotIsFullCharge,
  robotIsCharge,
  robotIsStandby,
  mapStatusIsPoint,
  mapStatusIsArea,
  robotIsMapping,
  isRobotSilence,
  isRobotChargeDirect,
  isRobotSleep,
  robotIsDust,
  isRobotQuiet,
  robotIsManual,
  robotIsNotWorking,
  robotIsFault,
  robotIsCleaning,
};
