import '@ray-js/panel-sdk';

type SmartDeviceSchema = typeof import('@/devices/schema').defaultSchema;

type SmartDevices = {
  socket?: import('@ray-js/panel-sdk').SmartDeviceModel<SmartDeviceSchema>;
};

module '@ray-js/panel-sdk' {
  export const SdmProvider: React.FC<{
    value: SmartDeviceModel<SmartDeviceSchema>;
    children: React.ReactNode;
  }>;
  export type SmartDeviceInstanceData = {
    devInfo: ReturnType<SmartDevices['socket']['getDevInfo']>;
    dpSchema: ReturnType<SmartDevices['socket']['getDpSchema']>;
    network: ReturnType<SmartDevices['socket']['getNetwork']>;
    bluetooth: ReturnType<SmartDevices['socket']['getBluetooth']>;
  };
  export function useSdmProps(): SmartDevices['socket']['model']['props'];
  export function useSdmProps<Value extends any>(
    selector: (props?: SmartDevices['socket']['model']['props']) => Value,
    equalityFn?: (a: Value, b: Value) => boolean
  ): Value;
  export function useProps(): SmartDevices['socket']['model']['props'];
  export function useProps<Value extends any>(
    selector: (props?: SmartDevices['socket']['model']['props']) => Value,
    equalityFn?: (a: Value, b: Value) => boolean
  ): Value;
  export function useSdmDevice(): SmartDeviceInstanceData;
  export function useSdmDevice<Device extends any>(
    selector: (device: SmartDeviceInstanceData) => Device,
    equalityFn?: (a: Device, b: Device) => boolean
  ): Device;
  export function useDevice(): SmartDeviceInstanceData;
  export function useDevice<Device extends any>(
    selector: (device: SmartDeviceInstanceData) => Device,
    equalityFn?: (a: Device, b: Device) => boolean
  ): Device;
  export function useActions(): SmartDevices['socket']['model']['actions'];
  export function useDpSchema(): ReturnType<SmartDevices['socket']['getDpSchema']>;
  export function useDevInfo(): ReturnType<SmartDevices['socket']['getDevInfo']>;
}
