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

type DpValue = boolean | number | string | any;
interface DpState {
  switch?: boolean;
  [dpCode: string]: DpValue;
}

/**
 * TTT 方法统一错误码
 */
type TTTCommonErrorCode = GetTTTFailData<typeof ty.device.getDeviceInfo>;

/**
 * 设备信息
 */
type DevInfo = ty.device.DeviceInfo & { state: DpState };

type COLOUR = {
  hue: number;
  saturation: number;
  value: number;
};
type WHITE = {
  temperature: number;
  brightness: number;
};
type RGB = {
  r: number;
  g: number;
  b: number;
};

type RGBA = RGB & {
  a?: number;
};

type HSL = {
  h: number;
  s: number;
  l: number;
};

type HSV = {
  h: number;
  s: number;
  v: number;
};
