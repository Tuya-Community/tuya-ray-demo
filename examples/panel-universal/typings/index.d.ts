import { DpSchema } from '@ray-js/panel-sdk';

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

  interface ItemViewProps {
    item: DpSchema;
    dpValue: any;
    onChange(dpValue: any): void;
  }
}
