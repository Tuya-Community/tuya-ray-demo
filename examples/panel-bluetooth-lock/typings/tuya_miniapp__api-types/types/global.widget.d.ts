declare namespace SmartMiniprogram.Widget {
  type Instance<TData extends DataOption, TCustom extends CustomOption> = OptionalInterface<ILifetime> &
    InstanceProperties &
    InstanceMethods<TData> &
    Data<TData> &
    TCustom;

  type Options<TData extends DataOption, TCustom extends CustomOption> = (TCustom &
    Partial<Data<TData>> &
    Partial<ILifetime> & { options?: Component.ComponentOptions }) &
    ThisType<Instance<TData, TCustom>>;

  type TrivialInstance = Instance<IAnyObject, IAnyObject>;

  interface Constructor {
    <TData extends DataOption, TCustom extends CustomOption>(options: Options<TData, TCustom>): void;
  }

  interface ILifetime {
    /** 生命周期回调—监听小部件加载
     *
     * 小部件加载时触发。一个小部件只会调用一次，可以在 onLoad 的参数中获取打开当前页面路径中的参数。
     * @param query 打开当前页面路径中的参数
     */
    onLoad(query: Record<string, string | undefined>): void | Promise<void>;

    /** 生命周期回调—监听小部件显示
     *
     * 小部件显示/切入前台时触发。
     */
    onShow(): void | Promise<void>;

    /** 生命周期回调—监听小部件初次渲染完成
     *
     * 小部件初次渲染完成时触发。一个小部件只会调用一次，代表已经准备妥当，可以和视图层进行交互。
     */
    onReady(): void | Promise<void>;

    /** 生命周期回调—监听小部件隐藏
     *
     * 小部件隐藏/切入后台时触发。 如应用切入后台等。
     */
    onHide(): void | Promise<void>;

    /** 生命周期回调—监听小部件卸载
     *
     * 小部件卸载时触发。应用程序退出时，小部件会被销毁。
     */
    onUnload(): void | Promise<void>;

    /**
     * 生命周期回调-小部件所处应用界面下拉刷新操作
     */
    onRefresh(): void | Promise<void>;

    /** 小部件滚动触发事件的处理函数
     *
     * 监听用户滑动页面事件。
     * @param options {Object} 页面滚动参数
     */
    onPageScroll(options: IPageScrollOption): void | Promise<void>;

    /** 生命周期回调—监听小部件尺寸变化
     *
     * 小部件尺寸变化时触发。
     */
    onResize(options: IWidgetResizeOption): void | Promise<void>;
    /**
     * 生命周期回调 - 主题变更时触发
     * @param options
     */
    onThemeChange(options: { theme: 'light' | 'dark' }): void | Promise<void>;
  }

  interface InstanceProperties {
    /** 当前路径 */
    readonly route: string;

    /** 打开当前小部件路径中的参数 */
    readonly options: Record<string, string | undefined>;
  }

  type DataOption = Record<string, any>;
  type CustomOption = Record<string, any>;

  type InstanceMethods<D extends DataOption> = Component.InstanceMethods<D>;

  interface Data<D extends DataOption> {
    /** 初始数据
     *
     * `data` 是第一次渲染使用的**初始数据**。
     *
     * 加载时，`data` 将会以`JSON`字符串的形式由逻辑层传至渲染层，因此`data`中的数据必须是可以转成`JSON`的类型：字符串，数字，布尔值，对象，数组。
     *
     * 渲染层可以通过 `TYML` 对数据进行绑定。
     */
    data: D;
  }

  interface IPageScrollOption {
    /** 页面在垂直方向已滚动的距离（单位px） */
    scrollTop: number;
  }

  interface IWidgetResizeOption {
    /** Widget高度（单位px） */
    height: number;
    /** Widget宽度（单位px） */
    width: number;
  }
}

/**
 * 注册小程序中的一个小部件。接受一个 `Object` 类型参数，其指定初始数据、生命周期回调、事件处理函数等。
 */
declare let Widget: SmartMiniprogram.Widget.Constructor;
