import '@ray-js/panel-sdk';
import { GetStructuredDpState, GetStructuredActions } from '@ray-js/panel-sdk';

type SmartDeviceSchema = typeof import('@/devices/schema').defaultSchema; // 注意变量名
type SmartDeviceProtocols = typeof import('@/devices/protocols').protocols;
type SmartDevices = import('@ray-js/panel-sdk').SmartDeviceModel<SmartDeviceSchema>;

declare module '@ray-js/panel-sdk' {
  export const SdmProvider: React.FC<{
    value: SmartDeviceModel<SmartDeviceSchema>;
    children: React.ReactNode;
  }>;
  export type SmartDeviceInstanceData = {
    devInfo: ReturnType<SmartDevices['getDevInfo']>;
    dpSchema: ReturnType<SmartDevices['getDpSchema']>;
    network: ReturnType<SmartDevices['getNetwork']>;
    bluetooth: ReturnType<SmartDevices['getBluetooth']>;
  };
  export function useProps(): SmartDevices['model']['props'];
  export function useProps<Value extends any>(
    selector: (props?: SmartDevices['model']['props']) => Value,
    equalityFn?: (a: Value, b: Value) => boolean
  ): Value;
  export function useStructuredProps(): GetStructuredDpState<SmartDeviceProtocols>;
  export function useStructuredProps<Value extends any>(
    selector: (props?: GetStructuredDpState<SmartDeviceProtocols>) => Value,
    equalityFn?: (a: Value, b: Value) => boolean
  ): Value;
  export function useDevice(): SmartDeviceInstanceData;
  export function useDevice<Device extends any>(
    selector: (device: SmartDeviceInstanceData) => Device,
    equalityFn?: (a: Device, b: Device) => boolean
  ): Device;
  export function useActions(): SmartDevices['model']['actions'];
  export function useStructuredActions(): GetStructuredActions<SmartDeviceProtocols>;
}
