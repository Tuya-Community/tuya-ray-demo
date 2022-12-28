import '@ray-js/panel-sdk';

type SmartDeviceSchema = typeof import('@/devices/schema').ipcSchema;

type SmartDevices = {
  /**
   * 此处 TS 类型定义建议以智能设备的名称作为键名赋值
   */
  ipc?: import('@ray-js/panel-sdk').SmartDeviceModel<SmartDeviceSchema>;
};

declare module '@ray-js/panel-sdk' {
  export const SdmProvider: React.FC<{
    value: SmartDeviceModel<SmartDeviceSchema>;
    children: React.ReactNode;
  }>;
  export type SmartDeviceInstanceData = {
    devInfo: ReturnType<SmartDevices['ipc']['getDevInfo']>;
    dpSchema: ReturnType<SmartDevices['ipc']['getDpSchema']>;
    network: ReturnType<SmartDevices['ipc']['getNetwork']>;
    bluetooth: ReturnType<SmartDevices['ipc']['getBluetooth']>;
  };
  export function useProps(): SmartDevices['ipc']['model']['props'];
  export function useProps<Value extends any>(
    selector: (props?: SmartDevices['ipc']['model']['props']) => Value,
    equalityFn?: (a: Value, b: Value) => boolean
  ): Value;
  export function useDevice(): SmartDeviceInstanceData;
  export function useDevice<Device extends any>(
    selector: (device: SmartDeviceInstanceData) => Device,
    equalityFn?: (a: Device, b: Device) => boolean
  ): Device;
  export function useActions(): SmartDevices['ipc']['model']['actions'];
}
