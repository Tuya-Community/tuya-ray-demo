import { hooks } from '@ray-js/panel-sdk';

import usePanelStore from './usePanelStore';
import useDpPermission from './useDpPermission';
import useOpenPanel from './useOpenPanel';
import useUserPermission from './useUserPermission';
import useConstructor from './useConstructor';

const { useDevInfo, useDpState, useDeviceOnline, useDpValue, usePanelConfig } = hooks;

export {
  useConstructor,
  usePanelStore,
  useDpPermission,
  useOpenPanel,
  useUserPermission,
  useDevInfo,
  useDpState,
  useDeviceOnline,
  useDpValue,
  usePanelConfig,
};
