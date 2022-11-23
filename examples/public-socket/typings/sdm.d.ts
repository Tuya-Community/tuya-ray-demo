import '@ray-js/panel-sdk';

type SmartDeviceSchema = typeof import('@/devices/schema').defaultSchema;

type SmartDevices = {
  socket?: import('@ray-js/panel-sdk').SmartDeviceModel<SmartDeviceSchema>;
};

type DevInfo = ReturnType<SmartDevices['socket']['getDevInfo']>;

type DpSchema = ReturnType<SmartDevices['socket']['getDpSchema']>;

type Actions = SmartDevices['socket']['model']['actions'];

type Network = ReturnType<SmartDevices['socket']['getNetwork']>;

type Bluetooth = ReturnType<SmartDevices['socket']['getBluetooth']>;

type Props = SmartDevices['socket']['model']['props'];

module '@ray-js/panel-sdk' {
  export const SdmProvider: React.FC<{
    value: SmartDeviceModel<SmartDeviceSchema>;
    children: React.ReactNode;
  }>;
  export type SmartDeviceInstanceData = {
    devInfo: DevInfo;
    dpSchema: DpSchema;
    network: Network;
    bluetooth: Bluetooth;
  };
  export function useSdmProps(): Props;
  export function useSdmProps<Value extends any>(
    selector: (props?: Props) => Value,
    equalityFn?: (a: Value, b: Value) => boolean
  ): Value;
  export function useProps(): Props;
  export function useProps<Value extends any>(
    selector: (props?: Props) => Value,
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
  export function useDpSchema(): DpSchema;
  export function useDevInfo(
    selector?: (deviceInfo: DevInfo) => any,
    equalityFn?: (a: DevInfo, b: DevInfo) => boolean
  ): DevInfo;
  export function useActions(): Actions;
}
