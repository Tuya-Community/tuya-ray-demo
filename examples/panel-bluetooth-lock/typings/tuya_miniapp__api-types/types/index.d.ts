/// <reference path="./global.d.ts" />
/// <reference path="./global.system.d.ts" />
/// <reference path="./global.component.d.ts" />
/// <reference path="./global.page.d.ts" />
/// <reference path="./global.widget.d.ts" />
/// <reference path="./global.app.d.ts" />
/// <reference path="./global.behavior.d.ts" />
/// <reference path="./global.render.d.ts" />
/// <reference path="./panel.d.ts" />

declare namespace SmartMiniprogram {
  type IAnyObject = Record<string, any>;
  type Optional<F> = F extends (arg: infer P) => infer R ? (arg?: P) => R : F;
  type OptionalInterface<T> = { [K in keyof T]: Optional<T[K]> };

  interface GeneralCallbackResult {
    errorMsg: string;
    errorCode: string;
    innerError?: {
      errorCode: string;
      errorMsg: string;
    };
  }

  interface AsyncMethodOptionLike {
    success?: (...args: any[]) => void;
  }

  type PromisifySuccessResult<P, T extends AsyncMethodOptionLike> = P extends {
    success: any;
  }
    ? void
    : P extends { fail: any }
    ? void
    : P extends { complete: any }
    ? void
    : Promise<Parameters<Exclude<T['success'], undefined>>[0]>;

  type RequestResult = { data: any };
  type RequestError = {
    errorMsg: string;
    errorCode: string | number;
    innerError: { errorCode: string | number; errorMsg: string };
  };

  /**
   * 异步回调方法的通用阐述
   */
  type AsyncApiOptions<S, F extends GeneralCallbackResult = GeneralCallbackResult> = {
    success?: (res: S) => void;
    fail?: (res: F) => void;
    complete?: (res: S | F) => void;
  };

  interface TY {}
}

declare let ty: SmartMiniprogram.TY;

declare let I18n: SmartMiniprogram.I18n;

declare module '*.rjs';
