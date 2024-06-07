declare module '*.png';

declare module '*.module.less' {
  const classes: {
    readonly [key: string]: string;
  };
  export default classes;
  declare module '*.less';
}

declare global {
  interface Window {
    devToolsExtension?: () => any;
    __DEV__: boolean;
  }
}

type CountdownSetState = 'cancel' | '1h' | '2h' | '3h' | '4h' | '5h' | '6h';

type Orientation = 'portrait' | 'landscape';

type SystemInfo = {
  is24Hour: boolean;
  system: string;
  brand: string;
  model: string;
  platform: string;
  timezoneId: string;
  pixelRatio: number;
  screenWidth: number;
  screenHeight: number;
  windowWidth: number;
  windowHeight: number;
  statusBarHeight: number;
  language: string;
  safeArea: SafeArea;
  albumAuthorized: boolean;
  cameraAuthorized: boolean;
  locationAuthorized: boolean;
  microphoneAuthorized: boolean;
  notificationAuthorized: boolean;
  notificationAlertAuthorized: boolean;
  notificationBadgeAuthorized: boolean;
  notificationSoundAuthorized: boolean;
  bluetoothEnabled: boolean;
  locationEnabled: boolean;
  wifiEnabled: boolean;
  theme?: Themes;
  deviceOrientation?: Orientation;
  staticPrefix?: string;
};

type IAndSingleTime = {
  dps: string;
  bizId: string;
  bizType: string;
  actions: any;
  loops?: string;
  category?: string;
  status?: number;
  isAppPush?: boolean;
  aliasName?: string;
};

type IModifySingleTimer = {
  dps: string;
  bizId: string;
  bizType: string;
  id: string | number;
  actions: any;
  loops?: string;
  status?: number;
  isAppPush?: boolean;
  aliasName?: string;
};

type Timers = Array<{
  status: number;
  loops: string;
  time: string;
  id: number;
  isAppPush: boolean;
  dps: string;
  groupOrder: number;
  groupId: string;
  aliasName: string;
}>;

type IQueryTimerTasksResponse = {
  categoryStatus: number;
  id: string;
  category: string;
  timers: Timers[];
};
