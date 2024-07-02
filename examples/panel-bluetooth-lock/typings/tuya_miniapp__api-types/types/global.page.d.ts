declare namespace SmartMiniprogram.Page {
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
    /** 生命周期回调—监听页面加载
     *
     * 页面加载时触发。一个页面只会调用一次，可以在 onLoad 的参数中获取打开当前页面路径中的参数。
     * @param query 打开当前页面路径中的参数
     */
    onLoad(query: Record<string, string | undefined>): void | Promise<void>;

    /** 生命周期回调—监听页面显示
     *
     * 页面显示/切入前台时触发。
     */
    onShow(): void | Promise<void>;

    /** 生命周期回调—监听页面初次渲染完成
     *
     * 页面初次渲染完成时触发。一个页面只会调用一次，代表页面已经准备妥当，可以和视图层进行交互。
     *

     * 注意：对界面内容进行设置的 API 如`tx.setNavigationBarTitle`，请在`onReady`之后进行。
     */
    onReady(): void | Promise<void>;

    /** 生命周期回调—监听页面隐藏
     *
     * 页面隐藏/切入后台时触发。 如 `navigateTo` 或底部 `tab` 切换到其他页面，小程序切入后台等。
     */
    onHide(): void | Promise<void>;

    /** 生命周期回调—监听页面卸载
     *
     * 页面卸载时触发。如`redirectTo`或`navigateBack`到其他页面时。
     */
    onUnload(): void | Promise<void>;

    /** 监听用户下拉动作
     *
     * 监听用户下拉刷新事件。
     * - 需要在`app.json`的`window`选项中或页面配置中开启`enablePullDownRefresh`。
     * - 可以通过`ty.startPullDownRefresh`触发下拉刷新，调用后触发下拉刷新动画，效果与用户手动下拉刷新一致。
     * - 当处理完数据刷新后，`ty.stopPullDownRefresh`可以停止当前页面的下拉刷新。
     */
    onPullDownRefresh(): void | Promise<void>;

    /** 页面上拉触底事件的处理函数
     *
     * 监听用户上拉触底事件。
     * - 可以在`app.json`的`window`选项中或页面配置中设置触发距离`onReachBottomDistance`。
     * - 在触发距离内滑动期间，本事件只会被触发一次。
     */
    onReachBottom(): void | Promise<void>;

    /** 页面滚动触发事件的处理函数
     *
     * 监听用户滑动页面事件。
     * @param options {Object} 页面滚动参数
     */
    onPageScroll(options: IPageScrollOption): void | Promise<void>;

    /**
     *  窗口尺寸改变时触发
     *  @param options {Object} 窗口尺寸改变参数
     */
    onResize(options: IResizeOption): void | Promise<void>;
  }

  interface InstanceProperties {
    /** 页面的文件路径 */
    is: string;

    /** 到当前页面的路径 */
    route: string;

    /** 打开当前页面路径中的参数 */
    options: Record<string, string | undefined>;
  }

  type DataOption = Record<string, any>;
  type CustomOption = Record<string, any>;

  type InstanceMethods<D extends DataOption> = Component.InstanceMethods<D>;

  interface Data<D extends DataOption> {
    /** 页面的初始数据
     *
     * `data` 是页面第一次渲染使用的**初始数据**。
     *
     * 页面加载时，`data` 将会以`JSON`字符串的形式由逻辑层传至渲染层，因此`data`中的数据必须是可以转成`JSON`的类型：字符串，数字，布尔值，对象，数组。
     *
     * 渲染层可以通过 `TYML` 对数据进行绑定。
     */
    data: D;
  }

  interface IPageScrollOption {
    /** 页面在垂直方向已滚动的距离（单位px） */
    scrollTop: number;
  }

  interface IResizeOption {
    size: {
      /** 变化后的窗口宽度，单位 px */
      windowWidth: number;
      /** 变化后的窗口高度，单位 px */
      windowHeight: number;
    };
  }

  interface IAddToFavoritesOption {
    /** 页面中包含web-view组件时，返回当前web-view的url */
    webviewUrl?: string;
  }

  interface IAddToFavoritesContent {
    /** 自定义标题，默认值：页面标题或账号名称 */
    title?: string;
    /** 自定义图片，显示图片长宽比为 1：1，默认值：页面截图 */
    imageUrl?: string;
    /** 自定义query字段，默认值：当前页面的query */
    query?: string;
  }

  interface GetCurrentPages {
    (): Array<Instance<IAnyObject, IAnyObject>>;
  }
}

/**
 * 注册小程序中的一个页面。接受一个 `Object` 类型参数，其指定页面的初始数据、生命周期回调、事件处理函数等。
 */
declare let Page: SmartMiniprogram.Page.Constructor;
/**
 * 获取当前页面栈。数组中第一个元素为首页，最后一个元素为当前页面。

 *  __注意：__

 *  - __不要尝试修改页面栈，会导致路由以及页面状态错误。__
 *  - 不要在 `App.onLaunch` 的时候调用 `getCurrentPages()`，此时 `page` 还没有生成。
 */
declare let getCurrentPages: SmartMiniprogram.Page.GetCurrentPages;
