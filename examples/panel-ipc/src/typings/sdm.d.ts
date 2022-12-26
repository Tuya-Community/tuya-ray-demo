import '@ray-js/panel-sdk';

type SmartDeviceSchema = typeof import('@/devices/schema').robotSchema;

type SmartDevices = {
  /**
   * 此处 TS 类型定义建议以智能设备的名称作为键名赋值
   */
  robot?: import('@ray-js/panel-sdk').SmartDeviceModel<SmartDeviceSchema>;
};

declare module '@ray-js/panel-sdk' {
  export const SdmProvider: React.FC<{
    value: SmartDeviceModel<SmartDeviceSchema>;
    children: React.ReactNode;
  }>;
  export type SmartDeviceInstanceData = {
    devInfo: ReturnType<SmartDevices['robot']['getDevInfo']>;
    dpSchema: ReturnType<SmartDevices['robot']['getDpSchema']>;
    network: ReturnType<SmartDevices['robot']['getNetwork']>;
    bluetooth: ReturnType<SmartDevices['robot']['getBluetooth']>;
  };
  export function useProps(): SmartDevices['robot']['model']['props'];
  export function useProps<Value extends any>(
    selector: (props?: SmartDevices['robot']['model']['props']) => Value,
    equalityFn?: (a: Value, b: Value) => boolean
  ): Value;
  export function useDevice(): SmartDeviceInstanceData;
  export function useDevice<Device extends any>(
    selector: (device: SmartDeviceInstanceData) => Device,
    equalityFn?: (a: Device, b: Device) => boolean
  ): Device;
  export function useActions(): SmartDevices['robot']['model']['actions'];
}
