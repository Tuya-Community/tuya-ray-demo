declare module '*.png';

declare module '*.module.less' {
  const classes: {
    readonly [key: string]: string;
  };
  export default classes;
  declare module '*.less';
}

declare global {
  interface Window {
    devToolsExtension?: () => any;
    __DEV__: boolean;
  }
}

type DpValue = boolean | number | string;
interface DpState {
  switch?: boolean;
  [dpCode: string]: DpValue;
}

/// 一些 TTT 通用工具泛型 ///
type GetTTTAllParams<Fn> = Parameters<Fn>['0'];
type GetTTTParams<Fn> = Omit<GetTTTAllParams<Fn>, 'complete' | 'success' | 'fail'>;
type GetTTTCompleteData<Fn> = Parameters<GetTTTAllParams<Fn>['complete']>['0'];
type GetTTTSuccessData<Fn> = Parameters<GetTTTAllParams<Fn>['success']>['0'];
type GetTTTFailData<Fn> = Parameters<GetTTTAllParams<Fn>['fail']>['0'];
///                   ///

/**
 * TTT 方法统一错误码
 */
type TTTCommonErrorCode = GetTTTFailData<typeof ty.device.getDeviceInfo>;

/**
 * 设备信息
 */
type DevInfo = ty.device.DeviceInfo & { state: DpState };

/**
 * 设备物模型信息
 */
type ThingModelInfo = GetTTTSuccessData<typeof ty.device.getDeviceThingModelInfo>;

type AtLeastOne<T extends Record<string, any>> = keyof T extends infer K
  ? K extends string
    ? Pick<T, K & keyof T> & Partial<T>
    : never
  : never;

type IAndSingleTime = {
  dps: string;
  bizId: string;
  bizType: string;
  actions: any;
  loops?: string;
  category?: string;
  status?: number;
  isAppPush?: boolean;
  aliasName?: string;
};

type IModifySingleTimer = {
  dps: string;
  bizId: string;
  bizType: string;
  id: string | number;
  actions: any;
  loops?: string;
  status?: number;
  isAppPush?: boolean;
  aliasName?: string;
};

type Timers = Array<{
  status: number;
  loops: string;
  time: string;
  id: number;
  isAppPush: boolean;
  dps: string;
  groupOrder: number;
  groupId: string;
  aliasName: string;
}>;

type IQueryTimerTasksResponse = {
  categoryStatus: number;
  id: string;
  category: string;
  timers: Timers[];
};

type Terminal = 'fan' | 'floor' | 'radiator';

type Region = 'zone1' | 'zone2' | 'dhw';

type DeviceParamValue = {
  type: 'value';
  scale: number;
  na?: number;
  bytes: number;
  unit?: string;
  negative?: boolean;
};

type DeviceParamEnum = {
  type: 'enum';
  bytes: number;
};

type DeviceParamBool = {
  type: 'bool';
  bytes: number;
};

type DeviceParamVersion = {
  type: 'version';
  bytes: number;
};

type DateType = 'week' | 'month' | 'year';

type ProgramItem = {
  startHour: number;
  startMinute: number;
  endHour: number;
  endMinute: number;
  enable: boolean;
  frequency: number;
};
