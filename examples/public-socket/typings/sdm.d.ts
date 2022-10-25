type SmartDeviceSchema = typeof import('@/devices/schema').socketSchema;

type SmartDevices = {
  socket?: import('@tuya-miniapp/sdm').SmartDeviceModel<SmartDeviceSchema>;
};

declare module '@ray-js/sdm-react' {
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
  export function useProps(): SmartDevices['socket']['model']['props'];
  export function useProps<Value extends any>(
    selector: (props?: SmartDevices['socket']['model']['props']) => Value,
    equalityFn?: (a: Value, b: Value) => boolean
  ): Value;
  export function useDevice(): SmartDeviceInstanceData;
  export function useDevice<Device extends any>(
    selector: (device: SmartDeviceInstanceData) => Device,
    equalityFn?: (a: Device, b: Device) => boolean
  ): Device;
  export function useActions(): SmartDevices['socket']['model']['actions'];
}
