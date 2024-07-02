/**
 * MiniKit
 *
 * @version 3.0.1
 */
declare namespace ty {
  /**
   * 特殊方法：是否异层渲染响应
   */
  export function nativeDisabled(params: {
    /** 禁用异层渲染手势分发 */
    nativeDisabled: boolean
    /** 需要禁止或启用手势分发的页面id */
    pageId: string
    complete?: () => void
    success?: (params: string) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
  }): void

  /**
   * 通用方法：调用组件API
   */
  export function nativeInovke(params: {
    /** 原生组件类型 */
    type?: number
    /** 原生组件的ApiName */
    apiName: string
    /** 异层渲染原生视图id */
    id: string
    /** 小程序页面id */
    pageId: string
    /** 参数等 */
    params: Record<string, string>
    complete?: () => void
    success?: (params: {}) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
  }): void

  /**
   * 获取权限的配置信息
   */
  export function getPermissionConfig(params?: {
    complete?: () => void
    success?: (params: {
      /** 权限相关配置信息 */
      result: Record<string, any>
    }) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
  }): void

  /**
   * 获取权限的配置信息
   */
  export function getPermissionConfigSync(): {
    /** 权限相关配置信息 */
    result: Record<string, any>
  }

  /**
   * 调起客户端小程序设置界面，返回用户设置的操作结果。
   */
  export function openSetting(params?: {
    complete?: () => void
    success?: (params: {
      /** 用户授权设置信息 */
      scope: Record<string, boolean>
    }) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
  }): void

  /**
   * 设置调试模式
   */
  export function changeDebugMode(params: {
    /** 调试模式开关 */
    isEnable: boolean
    complete?: () => void
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
  }): void

  /**
   * 打开帮助中心，默认：面板小程序会跳转到面板帮助中心，普通小程序会跳转到App帮助中心
   */
  export function openHelpCenter(params?: {
    complete?: () => void
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
  }): void

  /**
   * 显示 tabBar 某一项的右上角的红点
   */
  export function showTabBarRedDot(params: {
    /** tabBar 的哪一项，从左边算起 */
    index: number
    complete?: () => void
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
  }): void

  /**
   * 显示 tabBar
   */
  export function showTabBar(params: {
    /** 是否需要动画效果 */
    animation: boolean
    complete?: () => void
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
  }): void

  /**
   * 动态设置 tabBar 的整体样式
   */
  export function setTabBarStyle(params: {
    /** tab 上的文字默认颜色 */
    color: string
    /** tab 上的文字选中时的颜色 */
    selectedColor: string
    /** tab 的背景色 */
    backgroundColor: string
    /** tabBar上边框的颜色， 仅支持 black/white */
    borderStyle: string
    complete?: () => void
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
  }): void

  /**
   * 动态设置 tabBar 某一项的内容
   */
  export function setTabBarItem(params: {
    /** tabBar 的哪一项，从左边算起 */
    index: number
    /** tab 上的按钮文字 */
    text: string
    /** 图片路径 */
    iconPath: string
    /** 选中时的图片路径 */
    selectedIconPath: string
    complete?: () => void
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
  }): void

  /**
   * 为 tabBar 某一项的右上角添加文本
   */
  export function setTabBarBadge(params: {
    /** tabBar 的哪一项，从左边算起 */
    index: number
    /** 显示的文本，超过 4 个字符则显示成 ... */
    text: string
    complete?: () => void
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
  }): void

  /**
   * 移除 tabBar 某一项右上角的文本
   */
  export function removeTabBarBadge(params: {
    /** tabBar 的哪一项，从左边算起 */
    index: number
    /** 显示的文本，超过 4 个字符则显示成 ... */
    text: string
    complete?: () => void
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
  }): void

  /**
   * 隐藏 tabBar 某一项的右上角的红点
   */
  export function hideTabBarRedDot(params: {
    /** tabBar 的哪一项，从左边算起 */
    index: number
    complete?: () => void
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
  }): void

  /**
   * 隐藏 tabBar
   */
  export function hideTabBar(params: {
    /** 是否需要动画效果 */
    animation: boolean
    complete?: () => void
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
  }): void

  /**
   * 发起highway请求
   */
  export function apiRequestByHighway(params: {
    /** api 名称 */
    api: string
    /** data 请求入参 */
    data?: Record<string, any>
    /** method 请求方法 */
    method?: HighwayMethod
    complete?: () => void
    success?: (params: {
      /**
       * 请求结果
       * thing_data_ 出参结构体， JSON序列化
       */
      thing_json_?: {}
      /** 元数据 */
      data: string
    }) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
  }): void

  /**
   * 返回到上一个小程序。只有在当前小程序是被其他小程序打开时可以调用成功
   */
  export function navigateBackMiniProgram(params?: {
    /** 需要返回给上一个小程序的数据，上一个小程序可在 App.onShow 中获取到这份数据 */
    extraData?: Record<string, any>
    complete?: () => void
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
  }): void

  /**
   * 退出当前小程序
   */
  export function exitMiniProgram(params?: {
    complete?: () => void
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
  }): void

  /**
   * 获取小程序启动时的参数。与App.onLaunch的回调参数一致。
   */
  export function getLaunchOptions(params?: {
    complete?: () => void
    success?: (params: {
      /** 启动小程序的路径 (代码包路径) */
      path: string
      /** 启动小程序的 query 参数 */
      query: Record<string, any>
      /** 分享转发 */
      referrerInfo: ReferrerInfo
      /** API 类别: default	默认类别; embedded 内嵌，通过打开半屏小程序能力打开的小程序 */
      apiCategory?: string
    }) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
  }): void

  /**
   * 获取小程序启动时的参数。与App.onLaunch的回调参数一致。
   */
  export function getLaunchOptionsSync(): {
    /** 启动小程序的路径 (代码包路径) */
    path: string
    /** 启动小程序的 query 参数 */
    query: Record<string, any>
    /** 分享转发 */
    referrerInfo: ReferrerInfo
    /** API 类别: default	默认类别; embedded 内嵌，通过打开半屏小程序能力打开的小程序 */
    apiCategory?: string
  }

  /**
   * 获取本次小程序启动时的参数。如果当前是冷启动，则返回值与App.onLaunch的回调参数一致；如果当前是热启动，则返回值与App.onShow 一致。
   */
  export function getEnterOptions(params?: {
    complete?: () => void
    success?: (params: {
      /** 启动小程序的路径 (代码包路径) */
      path: string
      /** 启动小程序的 query 参数 */
      query: Record<string, any>
      /** 分享转发 */
      referrerInfo: ReferrerInfo
      /** API 类别: default	默认类别; embedded 内嵌，通过打开半屏小程序能力打开的小程序 */
      apiCategory?: string
    }) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
  }): void

  /**
   * 获取本次小程序启动时的参数。如果当前是冷启动，则返回值与App.onLaunch的回调参数一致；如果当前是热启动，则返回值与App.onShow 一致。
   */
  export function getEnterOptionsSync(): {
    /** 启动小程序的路径 (代码包路径) */
    path: string
    /** 启动小程序的 query 参数 */
    query: Record<string, any>
    /** 分享转发 */
    referrerInfo: ReferrerInfo
    /** API 类别: default	默认类别; embedded 内嵌，通过打开半屏小程序能力打开的小程序 */
    apiCategory?: string
  }

  /**
   * 小程序看板的标题，小程序名称，面板名称等
   */
  export function setBoardTitle(params: {
    /** 看板的标题 */
    title: string
    complete?: () => void
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
  }): void

  /**
   * 小程序看板的标题，小程序名称，面板名称等
   */
  export function setBoardTitleSync(boardBean?: BoardBean): null

  /**
   * 获取菜单按钮（右上角胶囊按钮）的布局位置信息。坐标信息以屏幕左上角为原点。
   */
  export function getMenuButtonBoundingClientRect(params?: {
    complete?: () => void
    success?: (params: {
      /** 宽度，单位：px */
      width: number
      /** 高度，单位：px */
      height: number
      /** 上边界坐标，单位：px */
      top: number
      /** 右边界坐标，单位：px */
      right: number
      /** 下边界坐标，单位：px */
      bottom: number
      /** 左边界坐标，单位：px */
      left: number
    }) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
  }): void

  /**
   * 获取菜单按钮（右上角胶囊按钮）的布局位置信息。坐标信息以屏幕左上角为原点。
   */
  export function getMenuButtonBoundingClientRectSync(): {
    /** 宽度，单位：px */
    width: number
    /** 高度，单位：px */
    height: number
    /** 上边界坐标，单位：px */
    top: number
    /** 右边界坐标，单位：px */
    right: number
    /** 下边界坐标，单位：px */
    bottom: number
    /** 左边界坐标，单位：px */
    left: number
  }

  /**
   * 预下载智能小程序，此接口仅供提供预下载普通智能小程序调用，面板小程序的预下载需要使用另外的接口。
   */
  export function preDownloadMiniApp(params: {
    /** 小程序id */
    miniAppId: string
    /** 指定小程序版本(可选参数) */
    miniAppVersion?: string
    complete?: () => void
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
  }): void

  /**
   * 调用接口获取登录凭证（code）。通过凭证进而换取用户登录态信息，包括用户在当前小程序的唯一标识（openid）、iot账号下的唯一标识（unionid）
   */
  export function login(params?: {
    /** 超时时间，单位ms */
    timeout?: number
    complete?: () => void
    success?: (params: {
      /** 用户登录凭证（有效期五分钟） */
      code: string
    }) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
  }): void

  /**
   * 屏幕旋转设置，auto / portrait / landscape。pad模式下不支持屏幕旋转
   */
  export function setPageOrientation(params: {
    /** 屏幕旋转设置， auto(暂不支持) / portrait / landscape */
    pageOrientation: string
    complete?: () => void
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
  }): void

  /**
   * 隐藏右上角胶囊按钮
   */
  export function hideMenuButton(params?: {
    complete?: () => void
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
  }): void

  /**
   * 显示右上角胶囊按钮
   */
  export function showMenuButton(params?: {
    complete?: () => void
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
  }): void

  /**
   * 显示手机状态栏
   */
  export function showStatusBar(params?: {
    complete?: () => void
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
  }): void

  /**
   * 隐藏手机状态栏
   */
  export function hideStatusBar(params?: {
    complete?: () => void
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
  }): void

  /**
   * 关闭小部件
   */
  export function exitMiniWidget(params?: {
    complete?: () => void
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
  }): void

  /**
   * 判断设备上是否有已经安装相应应用或可以处理URL的程序，返回结果是一个对象，只有一个参数，格式为Boolean值。
   */
  export function canOpenURL(params: {
    /** 要打开的url */
    url: string
    complete?: () => void
    success?: (params: {
      /** 是否支持打开对应的url */
      isCanOpen?: boolean
    }) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
  }): void

  /**
   * 判断设备上是否有已经安装相应应用或可以处理URL的程序，返回结果是一个对象，只有一个参数，格式为Boolean值。
   */
  export function canOpenURLSync(openURLBean?: OpenURLBean): {
    /** 是否支持打开对应的url */
    isCanOpen?: boolean
  }

  /**
   * 打开设备上的某个应用或可以处理URL的程序。
   */
  export function openURL(params: {
    /** 要打开的url */
    url: string
    complete?: () => void
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
  }): void

  /**
   * 在当前页面显示导航条加载动画
   */
  export function showNavigationBarLoading(params?: {
    complete?: () => void
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
  }): void

  /**
   * 动态设置当前页面的标题
   */
  export function setNavigationBarTitle(params: {
    /** 页面标题 */
    title: string
    complete?: () => void
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
  }): void

  /**
   * 设置页面导航条颜色
   */
  export function setNavigationBarColor(params: {
    /** 前景颜色值，包括按钮、标题、状态栏的颜色，仅支持 #ffffff 和 #000000 */
    frontColor: string
    /** 背景颜色值，有效值为十六进制颜色 */
    backgroundColor: string
    /** 动画效果 */
    animation: NavigationBarColorAnimationInfo
    complete?: () => void
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
  }): void

  /**
   * 在当前页面隐藏导航条加载动画
   */
  export function hideNavigationBarLoading(params?: {
    complete?: () => void
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
  }): void

  /**
   * 隐藏返回首页按钮
   */
  export function hideHomeButton(params?: {
    complete?: () => void
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
  }): void

  /**
   * 路由到新页面
   */
  export function navigateTo(params: {
    /** 页面路径 */
    url: string
    /** 打开方式，支持全屏full，半屏half；默认全屏full */
    type?: string
    complete?: () => void
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
  }): void

  /**
   * 关闭当前页面，返回上一页面或多级页面
   */
  export function navigateBack(params?: {
    /** 返回的页面数，如果 delta 大于现有页面数，则返回到首页 */
    delta?: number
    complete?: () => void
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
  }): void

  /**
   * 关闭当前页面，跳转到应用内的某个页面
   */
  export function redirectTo(params: {
    /** 页面路径 */
    url: string
    /** 打开方式，支持全屏full，半屏half；默认全屏full */
    type?: string
    complete?: () => void
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
  }): void

  /**
   * 关闭所有页面，打开到应用内的某个页面
   */
  export function reLaunch(params: {
    /** 页面路径 */
    url: string
    /** 打开方式，支持全屏full，半屏half；默认全屏full */
    type?: string
    complete?: () => void
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
  }): void

  /**
   * 跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面
   */
  export function switchTab(params: {
    /** 页面路径 */
    url: string
    /** 打开方式，支持全屏full，半屏half；默认全屏full */
    type?: string
    complete?: () => void
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
  }): void

  /**
   * 判断自定义API是否可用
   */
  export function extApiCanIUse(params: {
    /** api名称 */
    api: string
    /** api参数 */
    params?: Record<string, any>
    complete?: () => void
    success?: (params: {
      /** 当前版本是否可用 */
      result: boolean
    }) => void
    failure?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
  }): void

  /**
   * 判断自定义API是否可用
   */
  export function extApiCanIUseSync(extApiBean?: ExtApiBean): {
    /** 当前版本是否可用 */
    result: boolean
  }

  /**
   * 调用自定义API
   */
  export function extApiInvoke(params: {
    /** api名称 */
    api: string
    /** api参数 */
    params?: Record<string, any>
    complete?: () => void
    success?: (params: {
      /** extApi返回数据 */
      data?: {}
    }) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
  }): void

  /**
   * 调用自定义API
   */
  export function extApiInvokeSync(extApiBean?: ExtApiBean): {
    /** extApi返回数据 */
    data?: {}
  }

  /**
   * 开始下拉刷新。调用后触发下拉刷新动画，效果与用户手动下拉刷新一致。
   */
  export function startPullDownRefresh(params?: {
    complete?: () => void
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
  }): void

  /**
   * 停止当前页面下拉刷新。
   */
  export function stopPullDownRefresh(params?: {
    complete?: () => void
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
  }): void

  /**
   * 原生上报的事件
   */
  export function onNativeEvent(
    listener: (params: NativeUploadData) => void
  ): void

  /**
   * 取消监听：原生上报的事件
   */
  export function offNativeEvent(
    listener: (params: NativeUploadData) => void
  ): void

  export enum HighwayMethod {
    /** HTTP 请求 OPTIONS */
    OPTIONS = "OPTIONS",

    /** HTTP 请求 GET */
    GET = "GET",

    /** HTTP 请求 HEAD */
    HEAD = "HEAD",

    /** HTTP 请求 POST */
    POST = "POST",

    /** HTTP 请求 PUT */
    PUT = "PUT",

    /** HTTP 请求 DELETE */
    DELETE = "DELETE",

    /** HTTP 请求 TRACE */
    TRACE = "TRACE",

    /** HTTP 请求 TRACE */
    CONNECT = "CONNECT",
  }

  export type ReferrerInfo = {
    /** 来源小程序、公众号或 App 的 appId */
    appId: string
    /** 来源小程序传过来的数据，特定scene支持 */
    extraData: Record<string, any>
  }

  export type BoardBean = {
    /** 看板的标题 */
    title: string
  }

  export type OpenURLBean = {
    /** 要打开的url */
    url: string
  }

  export type NavigationBarColorAnimationInfo = {
    /** 动画变化时间，单位 ms */
    duration?: number
    /**
     * 动画变化方式
     *   'linear'	动画从头到尾的速度是相同的
     *   'easeIn'	动画以低速开始
     *   'easeOut'	动画以低速结束
     *   'easeInOut'	动画以低速开始和结束
     */
    timingFunc?: string
  }

  export type ExtApiBean = {
    /** api名称 */
    api: string
    /** api参数 */
    params?: Record<string, any>
  }

  export type NativeUploadData = {
    /** 原生组件的EventName */
    eventName: string
    /** 异层渲染原生视图id */
    id: string
    /** 小程序页面id */
    pageId: string
    /** 数据等 */
    data: Record<string, Object>
  }

  export type Object = {}

  export type NativeDisabledParam = {
    /** 禁用异层渲染手势分发 */
    nativeDisabled: boolean
    /** 需要禁止或启用手势分发的页面id */
    pageId: string
  }

  export type NativeParams = {
    /** 原生组件类型 */
    type?: number
    /** 原生组件的ApiName */
    apiName: string
    /** 异层渲染原生视图id */
    id: string
    /** 小程序页面id */
    pageId: string
    /** 参数等 */
    params: Record<string, string>
  }

  export type PermissionConfig = {
    /** 权限相关配置信息 */
    result: Record<string, any>
  }

  export type AuthSetting = {
    /** 用户授权设置信息 */
    scope: Record<string, boolean>
  }

  export type DebugModeSetting = {
    /** 调试模式开关 */
    isEnable: boolean
  }

  export type RedDotParams = {
    /** tabBar 的哪一项，从左边算起 */
    index: number
  }

  export type OperateTabBarParams = {
    /** 是否需要动画效果 */
    animation: boolean
  }

  export type TabBarStyleParams = {
    /** tab 上的文字默认颜色 */
    color: string
    /** tab 上的文字选中时的颜色 */
    selectedColor: string
    /** tab 的背景色 */
    backgroundColor: string
    /** tabBar上边框的颜色， 仅支持 black/white */
    borderStyle: string
  }

  export type TabBarItemParams = {
    /** tabBar 的哪一项，从左边算起 */
    index: number
    /** tab 上的按钮文字 */
    text: string
    /** 图片路径 */
    iconPath: string
    /** 选中时的图片路径 */
    selectedIconPath: string
  }

  export type TabBarBadgeParams = {
    /** tabBar 的哪一项，从左边算起 */
    index: number
    /** 显示的文本，超过 4 个字符则显示成 ... */
    text: string
  }

  export type HighwayRequestBean = {
    /** api 名称 */
    api: string
    /** data 请求入参 */
    data?: Record<string, any>
    /** method 请求方法 */
    method?: HighwayMethod
  }

  export type HighwayRequestResponse = {
    /**
     * 请求结果
     * thing_data_ 出参结构体， JSON序列化
     */
    thing_json_?: {}
    /** 元数据 */
    data: string
  }

  export type BackMiniProgramBean = {
    /** 需要返回给上一个小程序的数据，上一个小程序可在 App.onShow 中获取到这份数据 */
    extraData?: Record<string, any>
  }

  export type MiniAppOptions = {
    /** 启动小程序的路径 (代码包路径) */
    path: string
    /** 启动小程序的 query 参数 */
    query: Record<string, any>
    /** 分享转发 */
    referrerInfo: ReferrerInfo
    /** API 类别: default	默认类别; embedded 内嵌，通过打开半屏小程序能力打开的小程序 */
    apiCategory?: string
  }

  export type CapsuleButtonRectBean = {
    /** 宽度，单位：px */
    width: number
    /** 高度，单位：px */
    height: number
    /** 上边界坐标，单位：px */
    top: number
    /** 右边界坐标，单位：px */
    right: number
    /** 下边界坐标，单位：px */
    bottom: number
    /** 左边界坐标，单位：px */
    left: number
  }

  export type PreDownloadMiniAppParams = {
    /** 小程序id */
    miniAppId: string
    /** 指定小程序版本(可选参数) */
    miniAppVersion?: string
  }

  export type LoginBean = {
    /** 超时时间，单位ms */
    timeout?: number
  }

  export type LoginResult = {
    /** 用户登录凭证（有效期五分钟） */
    code: string
  }

  export type OrientationBean = {
    /** 屏幕旋转设置， auto(暂不支持) / portrait / landscape */
    pageOrientation: string
  }

  export type CanOpenURLResultBean = {
    /** 是否支持打开对应的url */
    isCanOpen?: boolean
  }

  export type NavigationBarLoadingParams = {
    /** 页面标题 */
    title: string
  }

  export type NavigationBarColorParams = {
    /** 前景颜色值，包括按钮、标题、状态栏的颜色，仅支持 #ffffff 和 #000000 */
    frontColor: string
    /** 背景颜色值，有效值为十六进制颜色 */
    backgroundColor: string
    /** 动画效果 */
    animation: NavigationBarColorAnimationInfo
  }

  export type RouteBean = {
    /** 页面路径 */
    url: string
    /** 打开方式，支持全屏full，半屏half；默认全屏full */
    type?: string
  }

  export type BackRouteBean = {
    /** 返回的页面数，如果 delta 大于现有页面数，则返回到首页 */
    delta?: number
  }

  export type SuccessResult = {
    /** 当前版本是否可用 */
    result: boolean
  }

  export type InvokeResult = {
    /** extApi返回数据 */
    data?: {}
  }
}
