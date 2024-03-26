/**
 * 面板小程序的通用 TS 类型
 */

/// 一些 TTT 通用工具泛型 ///
type GetTTTAllParams<Fn> = Parameters<Fn>['0'];
type GetTTTParams<Fn> = Omit<GetTTTAllParams<Fn>, 'complete' | 'success' | 'fail'>;
type GetTTTCompleteData<Fn> = Parameters<GetTTTAllParams<Fn>['complete']>['0'];
type GetTTTSuccessData<Fn> = Parameters<GetTTTAllParams<Fn>['success']>['0'];
type GetTTTFailData<Fn> = Parameters<GetTTTAllParams<Fn>['fail']>['0'];
type GetTTTEventListener<Fn> = Parameters<Fn>['0'];
type GetTTTEventListenerParams<Fn> = Parameters<GetTTTEventListener<Fn>>['0'];
///                   ///

/**
 * TTT 方法统一错误码
 */
type TTTCommonErrorCode = GetTTTFailData<typeof ty.device.getDeviceInfo>;

type DpSchemaOrigin = {
  /**
   * 功能点类型
   */
  type: 'bool' | 'value' | 'enum' | 'bitmap' | 'string' | 'raw';
  range?: string[];
  label?: string[];
  maxlen: number;
  unit: string;
  min: number;
  max: number;
  scale: number;
  step: number;
  [key: string]: number | string | string[];
};

/**
 * 功能点描述信息
 */
interface DpSchema {
  attr: number;
  canTrigger: boolean;
  /**
   * 功能点标识码，如 switch
   */
  code: string;
  defaultRecommend: boolean;
  editPermission: boolean;
  executable: boolean;
  extContent: string;
  iconname: string;
  /**
   * 功能点 ID
   */
  id: number;
  /**
   * 功能点模式类型
   * rw: 可下发可上报（可读可写）
   * ro: 只可上报（仅可读）
   * wr: 只可下发（仅可写）
   */
  mode: 'rw' | 'ro' | 'wr';
  /**
   * 功能点名称，一般用于语音等场景
   */
  name: string;
  /**
   * 功能点属性
   */
  property: DpSchemaOrigin;
  type: string;
}

/**
 * 设备信息
 */
type DevInfo = Omit<ty.device.DeviceInfo, 'schema' | 'panelConfig'> & {
  schema: DpSchema[];
  idCodes: Record<string, string>;
  codeIds: Record<string, string>;
  panelConfig: PanelConfig;
};

/**
 * 设备物模型信息
 */
type ThingModelInfo = GetTTTSuccessData<typeof ty.device.getDeviceThingModelInfo>;

type DeviceInfoUpdatedHandler = GetTTTEventListener<
  typeof import('@ray-js/api').onDeviceInfoUpdated
>;

type DpDataChangeHandler = GetTTTEventListener<typeof import('@ray-js/api').onDpDataChange>;

type DeviceOnlineStatusUpdateHandler = GetTTTEventListener<
  typeof import('@ray-js/api').onDeviceOnlineStatusUpdate
>;

type NetworkStatusChangeHandler = GetTTTEventListener<
  typeof import('@ray-js/api').onNetworkStatusChange
>;

type NetworkStatus = GetTTTEventListenerParams<typeof import('@ray-js/api').onNetworkStatusChange>;

type BluetoothAdapterStateChangeHandler = GetTTTEventListener<
  typeof import('@ray-js/api').onBluetoothAdapterStateChange
>;

type BluetoothState = GetTTTEventListenerParams<
  typeof import('@ray-js/api').onBluetoothAdapterStateChange
>;
