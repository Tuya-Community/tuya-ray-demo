declare module '*.less';
declare global {
  interface Window {
    devToolsExtension?: () => any;
    ty: Ty;
  }
}

interface Ty {
  [key]: any;
}

declare const ty: Ty;
