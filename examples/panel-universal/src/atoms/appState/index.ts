import { atom } from 'jotai';
import { selectAtom } from 'jotai/utils';
import deepEqual from 'fast-deep-equal';

interface AppState {
  network: NetworkStatus;
  bluetooth: BluetoothState;
}

const initialNetworkStatus: NetworkStatus = {
  isConnected: true,
  networkType: 'WIFI',
};

export const networkAtom = atom<NetworkStatus, NetworkStatus>(
  initialNetworkStatus,
  (_get, set, payload) => {
    set(networkAtom, payload);
  }
);

const initialBluetoothState = {
  available: false,
};

export const bluetoothAtom = atom<BluetoothState, BluetoothState>(
  initialBluetoothState,
  (_get, set, payload) => {
    set(bluetoothAtom, payload);
  }
);

export const appStateAtom = atom<AppState>(get => ({
  network: get(networkAtom),
  bluetooth: get(bluetoothAtom),
}));

export const selectAppStateAtom = selectAtom<AppState, AppState>(
  appStateAtom,
  data => data,
  deepEqual
);
