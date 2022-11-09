import { ProductName } from '@/constants';
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
    devInfo: ReturnType<SmartDevices[ProductName]['getDevInfo']>;
    dpSchema: ReturnType<SmartDevices[ProductName]['getDpSchema']>;
    network: ReturnType<SmartDevices[ProductName]['getNetwork']>;
    bluetooth: ReturnType<SmartDevices[ProductName]['getBluetooth']>;
  };
  export function useProps(): SmartDevices[ProductName]['model']['props'];
  export function useProps<Value extends any>(
    selector: (props?: SmartDevices[ProductName]['model']['props']) => Value,
    equalityFn?: (a: Value, b: Value) => boolean
  ): Value;
  export function useDevice(): SmartDeviceInstanceData;
  export function useDevice<Device extends any>(
    selector: (device: SmartDeviceInstanceData) => Device,
    equalityFn?: (a: Device, b: Device) => boolean
  ): Device;
  export function useActions(): SmartDevices[ProductName]['model']['actions'];
}
