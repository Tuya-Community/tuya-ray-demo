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

/**
 * 设备信息
 */
type DevInfo = Omit<ty.device.DeviceInfo, 'schema'> & { schema: DpSchema[] };

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

type DeviceSchema = typeof import('../src/devices/schema').defaultSchema;
