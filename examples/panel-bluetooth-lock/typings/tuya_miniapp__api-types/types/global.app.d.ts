declare namespace SmartMiniprogram.App {
  interface ReferrerInfo {
    /** 来源小程序或公众号或App的 appId
     */
    appId: string;
    /** 来源小程序传过来的数据，scene=1037或1038时支持 */
    extraData?: any;
  }

  type SceneValues = 10000;

  interface LaunchShowOption {
    /** 打开小程序的路径 */
    path: string;
    /** 打开小程序的query */
    query: IAnyObject;
    /** 打开小程序的场景值 */
    scene: SceneValues;
  }

  interface PageNotFoundOption {
    /** 不存在页面的路径 */
    path: string;
    /** 打开不存在页面的 query */
    query: IAnyObject;
    /** 是否本次启动的首个页面（例如从分享等入口进来，首个页面是开发者配置的分享页面） */
    isEntryPage: boolean;
  }

  interface Option {
    /**
     * 小程序有未处理的 Promise 拒绝时触发。也可以使用 [ty.onUnhandledRejection] 绑定监听。注意事项请参考 [ty.onUnhandledRejection]。
     * **参数**：与 [ty.onUnhandledRejection] 一致
     */
    onUnhandledRejection: OnUnhandledRejectionCallback;
    /**
     * 系统切换主题时触发。也可以使用 ty.onThemeChange 绑定监听。
     */
    onThemeChange: OnThemeChangeCallback;

    /** 生命周期回调—监听小程序初始化
     *
     * 小程序初始化完成时触发，全局只触发一次。
     */
    onLaunch(options: LaunchShowOption): void;

    /** 生命周期回调—监听小程序显示
     *
     * 小程序启动，或从后台进入前台显示时
     */
    onShow(options: LaunchShowOption): void;

    /** 生命周期回调—监听小程序隐藏
     *
     * 小程序从前台进入后台时
     */
    onHide(): void;

    /** 错误监听函数
     *
     * 小程序发生脚本错误，或者 api
     */
    onError(/** 错误信息，包含堆栈 */ error: string): void;

    /** 页面不存在监听函数
     *
     * 小程序要打开的页面不存在时触发，会带上页面信息回调该函数
     */
    onPageNotFound(options: PageNotFoundOption): void;
  }

  type Instance<T extends IAnyObject> = Option & T;
  type Options<T extends IAnyObject> = Partial<Option> & T & ThisType<Instance<T>>;
  type TrivialInstance = Instance<IAnyObject>;

  interface Constructor {
    <T extends IAnyObject>(options: Options<T>): void;
  }

  interface GetAppOption {
    /** 在 `App` 未定义时返回默认实现。当App被调用时，默认实现中定义的属性会被覆盖合并到App中。一般用于独立分包 */
    allowDefault?: boolean;
  }

  interface GetApp {
    <T extends IAnyObject = IAnyObject>(): Instance<T>;
  }
}

declare let App: SmartMiniprogram.App.Constructor;
declare let getApp: SmartMiniprogram.App.GetApp;
