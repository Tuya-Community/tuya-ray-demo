declare namespace SmartMiniprogram {
  type RequestCloudOptions = {
    api: string;
    version: string;
    data: Record<string, any>;
    success?: (res: RequestResult) => void;
    fail?: (res: RequestError) => void;
    complete?: (res: RequestResult | RequestError) => void;
  };

  interface LaunchOptionsApp {
    path: string;
    query: Record<string, string>;
    scene: number;
  }

  type PageScrollToOptions = AsyncApiOptions<void, void> & {
    scrollTop?: number;
    duration?: number;
    selector?: string;
  };

  type SetPageStyleOptions = AsyncApiOptions<void, void> & {
    style: Record<string, string>;
  };

  type CreateAnimationOptions = {
    /** 动画延迟时间，单位 ms */
    delay?: number;
    /** 动画持续时间，单位 ms */
    duration?: number;
    /** 动画的效果
     *
     * 可选值：
     * - 'linear': 动画从头到尾的速度是相同的;
     * - 'ease': 动画以低速开始，然后加快，在结束前变慢;
     * - 'ease-in': 动画以低速开始;
     * - 'ease-in-out': 动画以低速开始和结束;
     * - 'ease-out': 动画以低速结束;
     * - 'step-start': 动画第一帧就跳至结束状态直到结束;
     * - 'step-end': 动画一直保持开始状态，最后一帧跳到结束状态; */
    timingFunction?: 'linear' | 'ease' | 'ease-in' | 'ease-in-out' | 'ease-out' | 'step-start' | 'step-end';
    transformOrigin?: string;
  };

  interface AnimationExportResult {
    actions: IAnyObject[];
  }

  interface Animation {
    /** [Object Animation.export()](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.export.html)
     *
     * 在插件中使用：支持
     *
     * 导出动画队列。**export 方法每次调用后会清掉之前的动画操作。** */
    export(): AnimationExportResult;

    /**
     * 设置背景色
     * @param value - 颜色值
     * */
    backgroundColor(value: string): Animation;

    /**
     * 设置 bottom 值 */
    bottom(
      /** 长度值，如果传入 number 则默认使用 px，可传入其他自定义单位的长度值 */
      value: number | string
    ): Animation;

    /**
     * 设置高度 */
    height(
      /** 长度值，如果传入 number 则默认使用 px，可传入其他自定义单位的长度值 */
      value: number | string
    ): Animation;

    /**
     * 设置 left 值 */
    left(
      /** 长度值，如果传入 number 则默认使用 px，可传入其他自定义单位的长度值 */
      value: number | string
    ): Animation;

    /**
     * 同 [transform-function matrix](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/matrix) */
    matrix(): Animation;

    /**
     * 同 [transform-function matrix3d](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/matrix3d) */
    matrix3d(): Animation;

    /**
     * 设置透明度 */
    opacity(
      /** 透明度，范围 0-1 */
      value: number
    ): Animation;

    /**
     * 设置 right 值 */
    right(
      /** 长度值，如果传入 number 则默认使用 px，可传入其他自定义单位的长度值 */
      value: number | string
    ): Animation;

    /**
     * 从原点顺时针旋转一个角度 */
    rotate(
      /** 旋转的角度。范围 [-180, 180] */
      angle: number
    ): Animation;

    /**
     * 从 固定 轴顺时针旋转一个角度 */
    rotate3d(
      /** 旋转轴的 x 坐标 */
      x: number,
      /** 旋转轴的 y 坐标 */
      y: number,
      /** 旋转轴的 z 坐标 */
      z: number,
      /** 旋转的角度。范围 [-180, 180] */
      angle: number
    ): Animation;

    /**
     * 从 X 轴顺时针旋转一个角度 */
    rotateX(
      /** 旋转的角度。范围 [-180, 180] */
      angle: number
    ): Animation;

    /**
     * 从 Y 轴顺时针旋转一个角度 */
    rotateY(
      /** 旋转的角度。范围 [-180, 180] */
      angle: number
    ): Animation;

    /**
     * 从 Z 轴顺时针旋转一个角度 */
    rotateZ(
      /** 旋转的角度。范围 [-180, 180] */
      angle: number
    ): Animation;

    /**
     * 缩放 */
    scale(
      /** 当仅有 sx 参数时，表示在 X 轴、Y 轴同时缩放sx倍数 */
      sx: number,
      /** 在 Y 轴缩放 sy 倍数 */
      sy?: number
    ): Animation;

    /**
     * 缩放 */
    scale3d(
      /** x 轴的缩放倍数 */
      sx: number,
      /** y 轴的缩放倍数 */
      sy: number,
      /** z 轴的缩放倍数 */
      sz: number
    ): Animation;

    /**
     * 缩放 X 轴 */
    scaleX(
      /** X 轴的缩放倍数 */
      scale: number
    ): Animation;

    /**
     * 缩放 Y 轴 */
    scaleY(
      /** Y 轴的缩放倍数 */
      scale: number
    ): Animation;

    /**
     * 缩放 Z 轴 */
    scaleZ(
      /** Z 轴的缩放倍数 */
      scale: number
    ): Animation;

    /**
     * 对 X、Y 轴坐标进行倾斜 */
    skew(
      /** 对 X 轴坐标倾斜的角度，范围 [-180, 180] */
      ax: number,
      /** 对 Y 轴坐标倾斜的角度，范围 [-180, 180] */
      ay: number
    ): Animation;

    /**
     * 对 X 轴坐标进行倾斜 */
    skewX(
      /** 倾斜的角度，范围 [-180, 180] */
      angle: number
    ): Animation;

    /**
     * 对 Y 轴坐标进行倾斜 */
    skewY(
      /** 倾斜的角度，范围 [-180, 180] */
      angle: number
    ): Animation;

    /**
     * 表示一组动画完成。可以在一组动画中调用任意多个动画方法，一组动画中的所有动画会同时开始，一组动画完成后才会进行下一组动画。 */
    step(option?: StepOption): Animation;

    /**
     * 设置 top 值 */
    top(
      /** 长度值，如果传入 number 则默认使用 px，可传入其他自定义单位的长度值 */
      value: number | string
    ): Animation;

    /**
     * 平移变换 */
    translate(
      /** 当仅有该参数时表示在 X 轴偏移 tx，单位 px */
      tx?: number,
      /** 在 Y 轴平移的距离，单位为 px */
      ty?: number
    ): Animation;

    /**
     * 对 xyz 坐标进行平移变换 */
    translate3d(
      /** 在 X 轴平移的距离，单位为 px */
      tx?: number,
      /** 在 Y 轴平移的距离，单位为 px */
      ty?: number,
      /** 在 Z 轴平移的距离，单位为 px */
      tz?: number
    ): Animation;

    /**
     * 对 X 轴平移 */
    translateX(
      /** 在 X 轴平移的距离，单位为 px */
      translation: number
    ): Animation;

    /**
     * 对 Y 轴平移 */
    translateY(
      /** 在 Y 轴平移的距离，单位为 px */
      translation: number
    ): Animation;

    /**
     * 对 Z 轴平移 */
    translateZ(
      /** 在 Z 轴平移的距离，单位为 px */
      translation: number
    ): Animation;

    /**
     * 设置宽度 */
    width(
      /** 长度值，如果传入 number 则默认使用 px，可传入其他自定义单位的长度值 */
      value: number | string
    ): Animation;
  }

  interface NodesRef {
    /** 添加节点的布局位置的查询请求。相对于显示区域，以像素为单位。其功能类似于 DOM 的 `getBoundingClientRect`。返回 `NodesRef` 对应的 `SelectorQuery`。
     *
     * @example
     *
     *  Page({
     *    getRect () {
     *      ty.createSelectorQuery().select('#the-id').boundingClientRect(function(rect){
     *        rect.id      // 节点的ID
     *        rect.dataset // 节点的dataset
     *        rect.left    // 节点的左边界坐标
     *        rect.right   // 节点的右边界坐标
     *        rect.top     // 节点的上边界坐标
     *        rect.bottom  // 节点的下边界坐标
     *        rect.width   // 节点的宽度
     *        rect.height  // 节点的高度
     *      }).exec()
     *    },
     *    getAllRects () {
     *      ty.createSelectorQuery().selectAll('.a-class').boundingClientRect(function(rects){
     *        rects.forEach(function(rect){
     *          rect.id      // 节点的ID
     *          rect.dataset // 节点的dataset
     *          rect.left    // 节点的左边界坐标
     *          rect.right   // 节点的右边界坐标
     *          rect.top     // 节点的上边界坐标
     *          rect.bottom  // 节点的下边界坐标
     *          rect.width   // 节点的宽度
     *          rect.height  // 节点的高度
     *        })
     *      }).exec()
     *    }
     *  })
     *
     */
    boundingClientRect(
      /** 回调函数，在执行 `SelectorQuery.exec` 方法后，节点信息会在 `callback` 中返回。 */
      callback?: BoundingClientRectCallback
    ): SelectorQuery;

    /**
     *  添加节点的 Context 对象查询请求。
     *
     * @example
     *
     *  Page({
     *    getContext () {
     *      ty.createSelectorQuery().select('.the-video-class').context(function(res){
     *        console.log(res.context) // 节点对应的 Context 对象。如：选中的节点是 <video> 组件，那么此处即返回 VideoContext 对象
     *      }).exec()
     *    }
     *  })
     *
     */
    // TODO: 未实现
    // context(
    //   /** 回调函数，在执行 `SelectorQuery.exec` 方法后，返回节点信息。 */
    //   callback?: ContextCallback
    // ): SelectorQuery;
    /**
     * 获取节点的相关信息。需要获取的字段在fields中指定。返回值是 `nodesRef` 对应的 `selectorQuery`
     *
     * **注意**
     *
     * computedStyle 的优先级高于 size，当同时在 computedStyle 里指定了 width/height 和传入了 size: true，则优先返回 computedStyle 获取到的 width/height。
     * @param fields - 指定获取的字段
     * @param callback - 回调函数
     * @example
     * Page({
     *  getFields () {
     *    ty.createSelectorQuery().select('#the-id').fields({
     *      dataset: true,
     *      size: true,
     *      scrollOffset: true,
     *      properties: ['scrollX', 'scrollY'],
     *      computedStyle: ['margin', 'backgroundColor'],
     *      context: true,
     *    }, function (res) {
     *      res.dataset    // 节点的dataset
     *      res.width      // 节点的宽度
     *      res.height     // 节点的高度
     *      res.scrollLeft // 节点的水平滚动位置
     *      res.scrollTop  // 节点的竖直滚动位置
     *      res.scrollX    // 节点 scroll-x 属性的当前值
     *      res.scrollY    // 节点 scroll-y 属性的当前值
     *      // 此处返回指定要返回的样式名
     *      res.margin
     *      res.backgroundColor
     *      res.context    // 节点对应的 Context 对象
     *    }).exec()
     *   }
     * })
     *
     */
    fields(fields: Fields, callback?: FieldsCallback): SelectorQuery;

    /**
     * 获取 Node 节点实例。目前支持 [Canvas] 和 [ScrollViewContext] 的获取。
     *
     * @example
     * Page({
     *  getNode() {
     *    ty.createSelectorQuery().select('.canvas').node(function(res){
     *      console.log(res.node) // 节点对应的 Canvas 实例。
     *    }).exec()
     *  }
     * })
     */
    // TODO: 未实现
    // node(
    //   /** 回调函数，在执行 `SelectorQuery.exec` 方法后，返回节点信息。 */
    //   callback?: NodeCallback
    // ): SelectorQuery;
    /**
     * 添加节点的滚动位置查询请求。以像素为单位。节点必须是 `scroll-view` 或者 `viewport`，返回 `NodesRef` 对应的 `SelectorQuery`。
     *
     * @example
     *  Page({
     *    getScrollOffset () {
     *      ty.createSelectorQuery().selectViewport().scrollOffset(function(res){
     *        res.id      // 节点的ID
     *        res.dataset // 节点的dataset
     *        res.scrollLeft // 节点的水平滚动位置
     *        res.scrollTop  // 节点的竖直滚动位置
     *      }).exec()
     *    }
     *  })
     *
     */
    scrollOffset(
      /** 回调函数，在执行 `SelectorQuery.exec` 方法后，节点信息会在 `callback` 中返回。 */
      callback?: ScrollOffsetCallback
    ): SelectorQuery;
  }

  interface SelectorQuery {
    /**
     * 执行所有的请求。请求结果按请求次序构成数组，在callback的第一个参数中返回。
     * @param callback 回调函数
     */
    exec(callback?: (...args: any[]) => any): NodesRef;

    /**
     * 在当前页面下选择第一个匹配选择器 `selector` 的节点。返回一个 `NodesRef` 对象实例，可以用于获取节点信息。
     *
     * **selector 语法**
     *
     * selector类似于 CSS 的选择器，但仅支持下列语法。
     *
     * - ID选择器：#the-id
     * - class选择器（可以连续指定多个）：.a-class.another-class
     * - 子元素选择器：.the-parent > .the-child
     * - 后代选择器：.the-ancestor .the-descendant
     * - 跨自定义组件的后代选择器：.the-ancestor >>> .the-descendant
     * - 多选择器的并集：#a-node, .some-other-nodes
     * @param selector 选择器
     */
    select(selector: string): NodesRef;

    /**
     * 在当前页面下选择匹配选择器 selector 的所有节点。
     *
     * **selector 语法**
     *
     * selector类似于 CSS 的选择器，但仅支持下列语法。
     *
     * - ID选择器：#the-id
     * - class选择器（可以连续指定多个）：.a-class.another-class
     * - 子元素选择器：.the-parent > .the-child
     * - 后代选择器：.the-ancestor .the-descendant
     * - 跨自定义组件的后代选择器：.the-ancestor >>> .the-descendant
     * - 多选择器的并集：#a-node, .some-other-nodes
     * @param selector - 选择器
     * */
    selectAll(selector: string): NodesRef;

    /**
     * 选择显示区域。可用于获取显示区域的尺寸、滚动位置等信息。 */
    selectViewport(): NodesRef;

    /**
     * 将选择器的选取范围更改为自定义组件 `component` 内。（初始时，选择器仅选取页面范围的节点，不会选取任何自定义组件中的节点）。
     *
     * @example
     *
     * Component({
     *  queryMultipleNodes (){
     *   const query = ty.createSelectorQuery().in(this)
     *   query.select('#the-id').boundingClientRect(function(res){
     *     res.top // 这个组件内 #the-id 节点的上边界坐标
     *   }).exec()
     *  }
     * })
     */
    in(component: Component.TrivialInstance | Page.TrivialInstance): SelectorQuery;
  }

  interface CreateIntersectionObserverOption {
    /** 初始的相交比例，如果调用时检测到的相交比例与这个值不相等且达到阈值，则会触发一次监听器的回调函数。 */
    initialRatio?: number;
    /** 是否同时观测多个目标节点（而非一个），如果设为 true ，observe 的 targetSelector 将选中多个节点（注意：同时选中过多节点将影响渲染性能） */
    observeAll?: boolean;
    /** 一个数值数组，包含所有阈值。 */
    thresholds?: number[];
  }

  interface IntersectionObserverObserveCallbackResult {
    /** 目标边界 */
    boundingClientRect: BoundingClientRectResult;
    /** 节点自定义数据属性 */
    dataset: Record<string, any>;
    /** 节点 ID */
    id: string;
    /** 相交比例 */
    intersectionRatio: number;
    /** 相交区域的边界 */
    intersectionRect: IntersectionRectResult;
    /** 参照区域的边界 */
    relativeRect: RelativeRectResult;
    /** 相交检测时的时间戳 */
    time: number;
  }

  type IntersectionObserverObserveCallback = (result: IntersectionObserverObserveCallbackResult) => void;

  interface Margins {
    /** 节点布局区域的下边界 */
    bottom?: number;
    /** 节点布局区域的左边界 */
    left?: number;
    /** 节点布局区域的右边界 */
    right?: number;
    /** 节点布局区域的上边界 */
    top?: number;
  }

  interface IntersectionObserver {
    /**
     * 停止监听。回调函数将不再触发 */
    disconnect(): void;

    /**
     * 指定目标节点并开始监听相交状态变化情况
     * @param targetSelector - 选择器
     * @param callback - 监听相交状态变化的回调函数
     * */
    observe(targetSelector: string, callback: IntersectionObserverObserveCallback): void;

    /**
     * 使用选择器指定一个节点，作为参照区域之一。
     * @param selector - 选择器
     * @param margins - 用来扩展（或收缩）参照节点布局区域的边界
     * */
    relativeTo(selector: string, margins?: Margins): IntersectionObserver;

    /**
     * 指定页面显示区域作为参照区域之一
     * @param margins - 用来扩展（或收缩）参照节点布局区域的边界
     * @example
     * 下面的示例代码中，如果目标节点（用选择器 .target-class 指定）进入显示区域以下 100px 时，就会触发回调函数。
     *
     * Page({
     *  onLoad: function(){
     *    ty.createIntersectionObserver().relativeToViewport({bottom: 100}).observe('.target-class', (res) => {
     *      res.intersectionRatio // 相交区域占目标节点的布局区域的比例
     *      res.intersectionRect // 相交区域
     *      res.intersectionRect.left // 相交区域的左边界坐标
     *      res.intersectionRect.top // 相交区域的上边界坐标
     *      res.intersectionRect.width // 相交区域的宽度
     *      res.intersectionRect.height // 相交区域的高度
     *    })
     *  }
     * })
     *
     */
    relativeToViewport(margins?: Margins): IntersectionObserver;
  }

  /** 小程序切前台事件的监听函数 */
  type OnAppShowCallback = (options: LaunchOptionsApp) => void;
  /** onAppShow 传入的监听函数。不传此参数则移除所有监听函数。 */
  type OffAppShowCallback = (res: GeneralCallbackResult) => void;
  /** 小程序切后台事件的监听函数 */
  type OnAppHideCallback = (res: GeneralCallbackResult) => void;

  type OnWindowResizeCallbackResult = {
    type: 'portrait' | 'landscape';
    size: { windowWidth: Number; windowHeight: Number };
  };
  type OnWindowResizeCallback = (res: OnWindowResizeCallbackResult) => void;

  type OnErrorResult = string;
  type OnErrorCallback = (res: OnErrorResult) => void;

  type OnAppEventCallbackResult = {
    key: string;
    text: string;
    iconPath: string;
  };
  type OnAppEventCallback = (res: OnAppEventCallbackResult) => void;
  type OnAppCloseCallback = (res: { pagePath: string }) => void;

  type OnThemeChangeCallbackResult = { theme: 'dark' | 'light' };
  type OnThemeChangeCallback = (res: OnThemeChangeCallbackResult) => void;

  type OnPageNotFoundCallback = (res: { url: string; query: Record<string, string> }) => void;

  type ThemeInfo = {
    '--app-B1': string;
    '--app-B1-N1': string;
    '--app-B1-N2': string;
    '--app-B1-N3': string;
    '--app-B1-N4': string;
    '--app-B1-N5': string;
    '--app-B1-N6': string;
    '--app-B1-N7': string;
    '--app-B1-N8': string;
    '--app-B1-N9': string;
    '--app-B1_2': string;
    '--app-B1_2-N1': string;
    '--app-B1_2-N2': string;
    '--app-B1_2-N3': string;
    '--app-B1_2-N4': string;
    '--app-B1_2-N5': string;
    '--app-B1_2-N6': string;
    '--app-B1_2-N7': string;
    '--app-B1_2-N8': string;
    '--app-B1_2-N9': string;
    '--app-B2': string;
    '--app-B2-N1': string;
    '--app-B2-N2': string;
    '--app-B2-N3': string;
    '--app-B2-N4': string;
    '--app-B2-N5': string;
    '--app-B2-N6': string;
    '--app-B2-N7': string;
    '--app-B2-N8': string;
    '--app-B2-N9': string;
    '--app-B2_2': string;
    '--app-B2_2-N1': string;
    '--app-B2_2-N2': string;
    '--app-B2_2-N3': string;
    '--app-B2_2-N4': string;
    '--app-B2_2-N5': string;
    '--app-B2_2-N6': string;
    '--app-B2_2-N7': string;
    '--app-B2_2-N8': string;
    '--app-B2_2-N9': string;
    '--app-B3': string;
    '--app-B3-N1': string;
    '--app-B3-N2': string;
    '--app-B3-N3': string;
    '--app-B3-N4': string;
    '--app-B3-N5': string;
    '--app-B3-N6': string;
    '--app-B3-N7': string;
    '--app-B3-N8': string;
    '--app-B3-N9': string;
    '--app-B3_2': string;
    '--app-B3_2-N1': string;
    '--app-B3_2-N2': string;
    '--app-B3_2-N3': string;
    '--app-B3_2-N4': string;
    '--app-B3_2-N5': string;
    '--app-B3_2-N6': string;
    '--app-B3_2-N7': string;
    '--app-B3_2-N8': string;
    '--app-B3_2-N9': string;
    '--app-B4': string;
    '--app-B4-N1': string;
    '--app-B4-N2': string;
    '--app-B4-N3': string;
    '--app-B4-N4': string;
    '--app-B4-N5': string;
    '--app-B4-N6': string;
    '--app-B4-N7': string;
    '--app-B4-N8': string;
    '--app-B4-N9': string;
    '--app-B4_2': string;
    '--app-B4_2-N1': string;
    '--app-B4_2-N2': string;
    '--app-B4_2-N3': string;
    '--app-B4_2-N4': string;
    '--app-B4_2-N5': string;
    '--app-B4_2-N6': string;
    '--app-B4_2-N7': string;
    '--app-B4_2-N8': string;
    '--app-B4_2-N9': string;
    '--app-B5': string;
    '--app-B5-N1': string;
    '--app-B5-N2': string;
    '--app-B5-N3': string;
    '--app-B5-N4': string;
    '--app-B5-N5': string;
    '--app-B5-N6': string;
    '--app-B5-N7': string;
    '--app-B5-N8': string;
    '--app-B5-N9': string;
    '--app-B5_2': string;
    '--app-B5_2-N1': string;
    '--app-B5_2-N2': string;
    '--app-B5_2-N3': string;
    '--app-B5_2-N4': string;
    '--app-B5_2-N5': string;
    '--app-B5_2-N6': string;
    '--app-B5_2-N7': string;
    '--app-B5_2-N8': string;
    '--app-B5_2-N9': string;
    '--app-B6': string;
    '--app-B6-N1': string;
    '--app-B6-N2': string;
    '--app-B6-N3': string;
    '--app-B6-N4': string;
    '--app-B6-N5': string;
    '--app-B6-N6': string;
    '--app-B6-N7': string;
    '--app-B6-N8': string;
    '--app-B6-N9': string;
    '--app-B6_2': string;
    '--app-B6_2-N1': string;
    '--app-B6_2-N2': string;
    '--app-B6_2-N3': string;
    '--app-B6_2-N4': string;
    '--app-B6_2-N5': string;
    '--app-B6_2-N6': string;
    '--app-B6_2-N7': string;
    '--app-B6_2-N8': string;
    '--app-B6_2-N9': string;
    '--app-C1_1': string;
    '--app-C1_2': string;
    '--app-C1_3': string;
    '--app-C2': string;
    '--app-C2_2': string;
    '--app-C2_3': string;
    '--app-C3_1': string;
    '--app-C3_2': string;
    '--app-C3_3': string;
    '--app-C3_4': string;
    '--app-I1': string;
    '--app-I2': string;
    '--app-I3': string;
    '--app-I4': string;
    '--app-I5': string;
    '--app-I6': string;
    '--app-I7': string;
    '--app-IC1': string;
    '--app-IC2': string;
    '--app-IC3': string;
    '--app-IC4': string;
    '--app-IC5': string;
    '--app-M1': string;
    '--app-M1-N1': string;
    '--app-M1-N2': string;
    '--app-M1-N3': string;
    '--app-M1-N4': string;
    '--app-M1-N5': string;
    '--app-M1-N6': string;
    '--app-M1-N7': string;
    '--app-M1-N8': string;
    '--app-M1-N9': string;
    '--app-M1_1': string;
    '--app-M1_1-N1': string;
    '--app-M1_1-N2': string;
    '--app-M1_1-N3': string;
    '--app-M1_1-N4': string;
    '--app-M1_1-N5': string;
    '--app-M1_1-N6': string;
    '--app-M1_1-N7': string;
    '--app-M1_1-N8': string;
    '--app-M1_1-N9': string;
    '--app-M1_2': string;
    '--app-M1_2-N1': string;
    '--app-M1_2-N2': string;
    '--app-M1_2-N3': string;
    '--app-M1_2-N4': string;
    '--app-M1_2-N5': string;
    '--app-M1_2-N6': string;
    '--app-M1_2-N7': string;
    '--app-M1_2-N8': string;
    '--app-M1_2-N9': string;
    '--app-M2': string;
    '--app-M2-N1': string;
    '--app-M2-N2': string;
    '--app-M2-N3': string;
    '--app-M2-N4': string;
    '--app-M2-N5': string;
    '--app-M2-N6': string;
    '--app-M2-N7': string;
    '--app-M2-N8': string;
    '--app-M2-N9': string;
    '--app-M2_1': string;
    '--app-M2_1-N1': string;
    '--app-M2_1-N2': string;
    '--app-M2_1-N3': string;
    '--app-M2_1-N4': string;
    '--app-M2_1-N5': string;
    '--app-M2_1-N6': string;
    '--app-M2_1-N7': string;
    '--app-M2_1-N8': string;
    '--app-M2_1-N9': string;
    '--app-M2_2': string;
    '--app-M2_2-N1': string;
    '--app-M2_2-N2': string;
    '--app-M2_2-N3': string;
    '--app-M2_2-N4': string;
    '--app-M2_2-N5': string;
    '--app-M2_2-N6': string;
    '--app-M2_2-N7': string;
    '--app-M2_2-N8': string;
    '--app-M2_2-N9': string;
    '--app-M3': string;
    '--app-M3-N1': string;
    '--app-M3-N2': string;
    '--app-M3-N3': string;
    '--app-M3-N4': string;
    '--app-M3-N5': string;
    '--app-M3-N6': string;
    '--app-M3-N7': string;
    '--app-M3-N8': string;
    '--app-M3-N9': string;
    '--app-M3_1': string;
    '--app-M3_1-N1': string;
    '--app-M3_1-N2': string;
    '--app-M3_1-N3': string;
    '--app-M3_1-N4': string;
    '--app-M3_1-N5': string;
    '--app-M3_1-N6': string;
    '--app-M3_1-N7': string;
    '--app-M3_1-N8': string;
    '--app-M3_1-N9': string;
    '--app-M3_2': string;
    '--app-M3_2-N1': string;
    '--app-M3_2-N2': string;
    '--app-M3_2-N3': string;
    '--app-M3_2-N4': string;
    '--app-M3_2-N5': string;
    '--app-M3_2-N6': string;
    '--app-M3_2-N7': string;
    '--app-M3_2-N8': string;
    '--app-M3_2-N9': string;
    '--app-M4': string;
    '--app-M4-N1': string;
    '--app-M4-N2': string;
    '--app-M4-N3': string;
    '--app-M4-N4': string;
    '--app-M4-N5': string;
    '--app-M4-N6': string;
    '--app-M4-N7': string;
    '--app-M4-N8': string;
    '--app-M4-N9': string;
    '--app-M4_1': string;
    '--app-M4_1-N1': string;
    '--app-M4_1-N2': string;
    '--app-M4_1-N3': string;
    '--app-M4_1-N4': string;
    '--app-M4_1-N5': string;
    '--app-M4_1-N6': string;
    '--app-M4_1-N7': string;
    '--app-M4_1-N8': string;
    '--app-M4_1-N9': string;
    '--app-M4_2': string;
    '--app-M4_2-N1': string;
    '--app-M4_2-N2': string;
    '--app-M4_2-N3': string;
    '--app-M4_2-N4': string;
    '--app-M4_2-N5': string;
    '--app-M4_2-N6': string;
    '--app-M4_2-N7': string;
    '--app-M4_2-N8': string;
    '--app-M4_2-N9': string;
    '--app-M5': string;
    '--app-M5-N1': string;
    '--app-M5-N2': string;
    '--app-M5-N3': string;
    '--app-M5-N4': string;
    '--app-M5-N5': string;
    '--app-M5-N6': string;
    '--app-M5-N7': string;
    '--app-M5-N8': string;
    '--app-M5-N9': string;
    '--app-P0': string;
    '--app-P1': string;
    '--app-P2': string;
    '--app-P3': string;
    '--app-P4': string;
    '--app-P5': string;
    '--app-P6': string;
    '--app-P7': string;
    '--app-P8': string;
    '--app-P9': string;
    '--app-T1-f': string;
    '--app-T1-h': string;
    '--app-T1-p': string;
    '--app-T2-f': string;
    '--app-T2-h': string;
    '--app-T2-p': string;
    '--app-T3-f': string;
    '--app-T3-h': string;
    '--app-T3-p': string;
    '--app-T4-f': string;
    '--app-T4-h': string;
    '--app-T4-p': string;
    '--app-T5-f': string;
    '--app-T5-h': string;
    '--app-T5-p': string;
    '--app-T6-f': string;
    '--app-T6-h': string;
    '--app-T6-p': string;
    '--app-T7-f': string;
    '--app-T7-h': string;
    '--app-T7-p': string;
    '--app-T8-f': string;
    '--app-T8-h': string;
    '--app-T8-p': string;
    '--app-T9-f': string;
    '--app-T9-h': string;
    '--app-T9-p': string;
    '--app-T10-f': string;
    '--app-T10-h': string;
    '--app-T10-p': string;
    '--app-T11-f': string;
    '--app-T11-h': string;
    '--app-T11-p': string;
    '--app-T12-f': string;
    '--app-T12-h': string;
    '--app-T12-p': string;
    '--app-T13-f': string;
    '--app-T13-h': string;
    '--app-T13-p': string;
  };

  interface SetWidgetHeightOptions {
    height: number;
  }

  type PresetFunctionalDataOptions = AsyncApiOptions<
    { errMsg: 'presetFunctionalData:ok' },
    { errMsg: 'presetFunctionalData:fail' }
  > & {
    url: string;
    data: Record<string, any>;
  };


  interface WebviewContext {
    postMessage(msg: { data: Record<string, any>}): void;
    reload(options?: {
      success?: () => void;
      fail?: () => void;
      complete?: () => void;
    }): void;
  }

  interface TY {
    /**
     * 云能力 - 发起请求
     *
     * 需要基础库 2.2.8+
     * @see https://developer.tuya.com/cn/miniapp/api
     * @example
     *
     *  ty.requestCloud({
     *    api: 'tuya.m.app.panel.url.get'
     *    version: 'v1',
     *    data: {},
     *    success(res) {
     *      console.log(res.data)
     *    }
     *  })
     *
     */
    requestCloud<T extends RequestCloudOptions = RequestCloudOptions>(
      option: T
    ): PromisifySuccessResult<T, RequestCloudOptions>;

    /**
     * 监听小程序应用初次渲染完成
     * @param listener 监听函数
     * @example
     *
     * const listener = function (res) { console.log(res) }
     * ty.onAppReady(listener)
     *
     */
    onAppReady(listener: OnAppReadyCallback): void;

    /**
     * 取消监听小程序应用初次渲染完成
     * @param listener 监听函数。不传此参数则移除所有监听函数。
     * @example
     *
     * const listener = function (res) { console.log(res) }
     * ty.onAppReady(listener)
     * ty.offAppReady(listener) // 需传入与监听时同一个的函数对象
     *
     */
    offAppReady(listener?: OnAppReadyCallback): void;

    /**
     * 监听小程序切前台事件。该事件与 App.onShow 的回调参数一致。
     * @param listener 监听函数
     * @example
     *
     * const listener = function (res) { console.log(res) }
     * ty.onAppShow(listener)
     *
     * @see https://developer.tuya.com/cn/miniapp/api/basic/application-level-events/on-app-show
     */
    onAppShow(listener: OnAppShowCallback): void;

    /**
     * 取消监听小程序切前台事件
     * @param listener 监听函数。不传此参数则移除所有监听函数。
     * @example
     *
     * const listener = function (res) { console.log(res) }
     * ty.onAppShow(listener)
     * ty.offAppShow(listener) // 需传入与监听时同一个的函数对象
     *
     * @see https://developer.tuya.com/cn/miniapp/api/basic/application-level-events/off-app-show
     */
    offAppShow(listener?: OffAppShowCallback): void;

    /**
     * 监听小程序切后台事件
     * @param listener 监听函数
     * @example
     *
     * const listener = function (res) { console.log(res) }
     * ty.onAppHide(listener)
     *
     * @see https://developer.tuya.com/cn/miniapp/api/basic/application-level-events/on-app-hide
     */
    onAppHide(listener: OnAppHideCallback): void;

    /**
     * 取消监听小程序切后台事件
     * @param listener 监听函数。不传此参数则移除所有监听函数。
     * @example
     *
     * const listener = function (res) { console.log(res) }
     * ty.onAppHide(listener)
     * ty.offAppHide(listener) // 需传入与监听时同一个的函数对象
     *
     * @see https://developer.tuya.com/cn/miniapp/api/basic/application-level-events/off-app-hide
     */
    offAppHide(listener: OnAppHideCallback): void;

    /**
     * 监听窗口尺寸变化事件
     * @param listener 监听函数
     * @example
     *
     * const listener = function (res) { console.log(res) }
     * ty.onWindowResize(listener)
     *
     * @see https://developer.tuya.com/cn/miniapp/api/basic/application-level-events/on-window-resize
     */
    onWindowResize(listener: OnWindowResizeCallback): void;

    /**
     * 取消监听窗口尺寸变化事件
     * @param listener 监听函数。不传此参数则移除所有监听函数。
     * @example
     *
     * const listener = function (res) { console.log(res) }
     * ty.onWindowResize(listener)
     * ty.offWindowResize(listener) // 需传入与监听时同一个的函数对象
     *
     * @see https://developer.tuya.com/cn/miniapp/api/basic/application-level-events/off-window-resize
     */
    offWindowResize(listener: OnWindowResizeCallback): void;

    /**
     * 监听小程序发生脚本错误或 API 调用报错事件
     * @param listener 监听函数
     * @example
     *
     * const listener = function (res) { console.log(res) }
     * ty.onError(listener)
     *
     * @see https://developer.tuya.com/cn/miniapp/api/basic/application-level-events/on-app-error
     */
    onError(listener: OnErrorCallback): void;

    /**
     * 取消监听小程序发生脚本错误或 API 调用报错事件
     * @param listener 监听函数。不传此参数则移除所有监听函数。
     * @example
     *
     * const listener = function (res) { console.log(res) }
     * ty.onError(listener)
     * ty.offError(listener) // 需传入与监听时同一个的函数对象
     *
     * @see https://developer.tuya.com/cn/miniapp/api/basic/application-level-events/off-app-error
     */
    offError(listener?: OnErrorCallback): void;

    /**
     * 点击看板的时候触发事件, 参数对应点击的 boardMenus 中的对象。
     * @param listener 监听函数
     * @example
     *
     * const listener = function (res) { console.log(res) }
     * ty.onAppEvent(listener)
     *
     * @see https://developer.tuya.com/cn/miniapp/api/basic/application-level-events/on-app-event
     */
    onAppEvent(listener: OnAppEventCallback): void;

    /**
     * 取消监听看板事件
     * @param listener 监听函数。不传此参数则移除所有监听函数。
     * @example
     *
     * const listener = function (res) { console.log(res) }
     * ty.onAppEvent(listener)
     * ty.offAppEvent(listener) // 需传入与监听时同一个的函数对象
     *
     * @see https://developer.tuya.com/cn/miniapp/api/basic/application-level-events/off-app-event
     */
    offAppEvent(listener?: OnAppEventCallback): void;

    /**
     * 监听小程序关闭事件, 全局监听模式, 请务必取消监听
     *
     * @version 2.10.10
     * @param listener 监听函数
     * @example
     * const listener = function (res) { console.log(res) }
     * ty.onAppClose(listener)
     */
    onAppClose(listener: OnAppCloseCallback): void;

    /**
     * 取消监听小程序关闭事件
     *
     * @version 2.10.10
     * @param listener 监听函数。不传此参数则移除所有监听函数。
     * @example
     * const listener = function (res) { console.log(res) }
     * ty.onAppClose(listener)
     */
    offAppClose(listener?: OnAppCloseCallback): void;

    /**
     * 监听主题变化事件
     * @param listener 监听函数
     * @example
     * const listener = function (res) { console.log(res) }
     * ty.onThemeChange(listener)
     * @see https://developer.tuya.com/cn/miniapp/api/basic/application-level-events/on-theme-change
     */
    onThemeChange(listener: OnThemeChangeCallback): void;

    /**
     * 取消监听主题变化事件
     * @param listener 监听函数。不传此参数则移除所有监听函数。
     * @example
     * const listener = function (res) { console.log(res) }
     * ty.onThemeChange(listener)
     * ty.offThemeChange(listener) // 需传入与监听时同一个的函数对象
     * @see https://developer.tuya.com/cn/miniapp/api/basic/application-level-events/off-theme-change
     */
    offThemeChange(listener?: OnThemeChangeCallback): void;

    /**
     * 监听页面不存在事件
     * @param listener 监听函数
     * @example
     *
     * const listener = function (res) { console.log(res) }
     * ty.onPageNotFound(listener)
     *
     * @see https://developer.tuya.com/cn/miniapp/api/basic/application-level-events/on-page-not-found
     */
    onPageNotFound(listener: OnPageNotFoundCallback): void;

    /**
     * 小程序 Promise reject 未捕获事件
     * @param listener 监听函数
     * @example
     *
     * const listener = function (res) { console.log(res) }
     * ty.onUnhandledRejection(listener)
     *
     * @see https://developer.tuya.com/cn/miniapp/api/basic/application-level-events/on-unhandled-rejection
     */
    onUnhandledRejection(listener: OnUnhandledRejectionCallback): void;

    /**
     * 取消监听小程序 Promise reject 未捕获事件
     * @param listener 监听函数。不传此参数则移除所有监听函数。
     * @example
     *
     * const listener = function (res) { console.log(res) }
     * ty.onUnhandledRejection(listener)
     * ty.offUnhandledRejection(listener) // 需传入与监听时同一个的函数对象
     *
     * @see https://developer.tuya.com/cn/miniapp/api/basic/application-level-events/off-unhandled-rejection
     */
    offUnhandledRejection(listener?: OnUnhandledRejectionCallback): void;

    /**
     * 将页面滚动到目标位置，频繁调用会导致卡顿，请按需调用
     * @param options 滚动参数
     * @example
     *
     * ty.pageScrollTo({ scrollTop: 0 })
     *
     * @see https://developer.tuya.com/cn/miniapp/api/interface/scroll/page-scroll-to
     */
    pageScrollTo(options: PageScrollToOptions): void;

    /**
     * 设置页面根节点样式，相当于 HTML 中的 body 节点
     * @param options 样式参数
     * @param options.style 样式内容
     * @example
     * ty.setPageStyle({ style: { backgroundColor: '#000' } })
     */
    setPageStyle(options: SetPageStyleOptions): void;

    /**
     * 创建一个动画实例。调用实例的方法来描述动画。最后通过动画实例的 export 方法导出动画数据传递给组件的 animation 属性。
     *
     * @see https://developer.tuya.com/cn/miniapp/api/interface/animation/create-animation
     * @example
     *
     * const animation = ty.createAnimation({ duration: 1000, timingFunction: 'ease' })
     * animation.opacity(0).step()
     * this.setData({ animationData: animation.export() })
     *
     */
    createAnimation(options?: CreateAnimationOptions): Animation;

    /**
     * 返回一个 SelectorQuery 对象实例。在自定义组件或包含自定义组件的页面中，应使用 `this.createSelectorQuery()` 来代替。
     *
     * @example
     *
     * const query = ty.createSelectorQuery()
     * query.select('#the-id').boundingClientRect()
     * query.selectViewport().scrollOffset()
     * query.exec(function(res){
     *  res[0].top       // #the-id节点的上边界坐标
     *  res[1].scrollTop // 显示区域的竖直滚动位置
     * })
     */
    createSelectorQuery(): SelectorQuery;

    /**
     * 创建并返回一个 IntersectionObserver 对象实例。在自定义组件或包含自定义组件的页面中，应使用 `this.createIntersectionObserver([options])` 来代替
     * @param component 自定义组件实例
     * @param options 选项
     */
    createIntersectionObserver(component: IAnyObject, options?: CreateIntersectionObserverOption): IntersectionObserver;

    /**
     * 返回当前应用的主题配置信息
     */
    getThemeInfo(): ThemeInfo;

    /**
     *
     * 延迟一部分操作到下一个时间片再执行。（类似于 setTimeout）
     *
     * **说明**
     * 因为自定义组件中的 setData 和 triggerEvent 等接口本身是同步的操作，当这几个接口被连续调用时，都是在一个同步流程中执行完的，因此若逻辑不当可能会导致出错。
     * 一个极端的案例：当父组件的 setData 引发了子组件的 triggerEvent，进而使得父组件又进行了一次 setData，期间有通过 ty:if 语句对子组件进行卸载，就有可能引发奇怪的错误，所以对于不需要在一个同步流程内完成的逻辑，可以使用此接口延迟到下一个时间片再执行。
     *
     */

    nextTick(callback: () => void): void;

    /**
     * 判断小程序的API，回调，参数，组件等是否在当前版本可用。
     * - `${API}` 代表 API 名字
     * - `${method}` 代表调用方式，有效值为return, success, object, callback
     * - `${param}` 代表参数或者返回值
     * - `${option}` 代表参数的可选值或者返回值的属性
     * - `${component}` 代表组件名字
     * - `${attribute}` 代表组件属性
     * - `${option}` 代表组件属性的可选值
     * @param schema
     */
    canIUse(schema: string): boolean;

    /**
     * 动态设置当前 Widget 高度, 仅在 Widget 下支持
     * @param options 设置参数
     * @param options.height 设置的高度, 单位: px
     * @example
     * ty.setWidgetHeight({ height: 100 })
     */
    setWidgetHeight(options: SetWidgetHeightOptions): void;

    presetFunctionalData(options: PresetFunctionalDataOptions): void;

    /**
     * 创建 WebviewContext 实例
     * 基础库 >= 2.15.0
     * @param webviewId
     */
    createWebviewContext(webviewId: string): WebviewContext;
  }

  interface I18n {
    t(key: string): string;
  }
}
