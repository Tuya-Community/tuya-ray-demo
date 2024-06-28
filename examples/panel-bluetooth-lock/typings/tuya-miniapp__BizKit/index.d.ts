/**
 * BizKit
 *
 * @version 3.0.6
 */
declare namespace ty {
  /**
   * atop接口
   */
  export function apiRequestByAtop(params: {
    /**
     * atop入参数据模型
     * api api名称
     */
    api: string
    /** version api版本号 */
    version?: string
    /** postData 入参结构体 */
    postData: Record<string, any>
    /** extData 额外参数：{"GID":"xxxx"} */
    extData?: Record<string, any>
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
   * 单次点 事件埋点
   */
  export function event(params: {
    /** 事件id */
    eventId: string
    /** 事件点对象 */
    event: Record<string, {}>
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
   * 链路点 开始事件埋点
   *开始一个（时长类）事件
   */
  export function beginEvent(params: {
    /** 事件名称（事件平台生成） */
    eventName: string
    /** 事件唯一ID （在同一条链路上，begin,track,end 的标识） */
    identifier: string
    /** 所有事件(begin,track,end)公有字段（该链路上，后面打点的数据会覆盖前面点数据，如下example中非data中的字段，ps：beginTime，endTime默认会打上） */
    attributes: Record<string, {}>
    /** (begin,track,end)独有字段（会按照打点顺序组装成数组） */
    infos: Record<string, {}>
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
   * 链路点 发送事件埋点
   *发送一个（时长类）事件
   */
  export function trackEvent(params: {
    /** 事件名称（事件平台生成） */
    eventName: string
    /** 事件唯一ID （在同一条链路上，begin,track,end 的标识） */
    identifier: string
    /** 所有事件(begin,track,end)公有字段（该链路上，后面打点的数据会覆盖前面点数据，如下example中非data中的字段，ps：beginTime，endTime默认会打上） */
    attributes: Record<string, {}>
    /** (begin,track,end)独有字段（会按照打点顺序组装成数组） */
    infos: Record<string, {}>
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
   * 链路点 结束事件埋点
   *开始一个（时长类）事件
   */
  export function endEvent(params: {
    /** 事件名称（事件平台生成） */
    eventName: string
    /** 事件唯一ID （在同一条链路上，begin,track,end 的标识） */
    identifier: string
    /** 所有事件(begin,track,end)公有字段（该链路上，后面打点的数据会覆盖前面点数据，如下example中非data中的字段，ps：beginTime，endTime默认会打上） */
    attributes: Record<string, {}>
    /** (begin,track,end)独有字段（会按照打点顺序组装成数组） */
    infos: Record<string, {}>
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
   * 拿到当前App的业务信息
   */
  export function getAppInfo(params?: {
    complete?: () => void
    success?: (params: {
      /**
       * App信息
       * serverTimestamp 云端时间戳
       * appVersion app版本
       * language app语言包
       * countryCode 国家码
       * regionCode 地区码， 在RN Api中被当作“service”字段
       */
      serverTimestamp: number
      appVersion: string
      language: string
      countryCode: string
      regionCode: string
      /** appName app名称 */
      appName: string
      /** appIcon app图标 */
      appIcon: string
      /**
       * app环境
       * 0: 日常
       * 1: 预发
       * 2: 线上
       */
      appEnv?: number
      /** app包名 */
      appBundleId: string
      /** app scheme */
      appScheme: string
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
   * 拿到当前连接的wifi的ssid
   */
  export function getCurrentWifiSSID(params?: {
    complete?: () => void
    success?: (params: {
      /** 拿到当前连接的wifi的ssid */
      ssId: string
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
   * 进入选择国家页面
   */
  export function openCountrySelectPage(params?: {
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
   * 获取iconfont信息
   */
  export function getIconfontInfo(params?: {
    complete?: () => void
    success?: (params: {
      /**
       * iconfont 信息结构体
       * nameMap iconfont信息载体
       */
      nameMap: string
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
   * 图片上传
   */
  export function uploadImage(params: {
    /** the file path */
    filePath: string
    /** business type, config via backend ng */
    bizType: string
    /** file type */
    contentType?: string
    /** polling interval of big file in second, default is 2 second */
    delayTime?: number
    /** max polling count, default is 5 */
    pollMaxCount?: number
    complete?: () => void
    success?: (params: {
      /** The json string returned by the request */
      result: string
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
   * 获取手机当前地区语言 zh-hans 、en-GB
   */
  export function getLangKey(params?: {
    complete?: () => void
    success?: (params: {
      /** 手机当前地区语言 */
      langKey: string
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
   * 获取多语言
   */
  export function getLangContent(params?: {
    complete?: () => void
    success?: (params: {
      /** 多语言 */
      langContent: {}
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
   * 打开RN面板 (该方法已被废弃, 请使用openPanel替代)
   */
  export function openRNPanel(params: {
    /**
     * 跳转RN面板（优先通过deviceId跳转设备面板，panelUiInfoBean不为null，则两者组合来跳转面板）
     * deviceId 设备Id
     */
    deviceId: string
    /** uiId 面板uiId */
    uiId: string
    /**
     * panelUiInfoBean 面板信息
     * panelUiInfoBean的信息需要与对应deviceId匹配。如果在传入时，两者不对应，跳转的面板可能会出现问题。
     */
    panelUiInfoBean?: PanelUiInfoBean
    /**
     * 面板初始化参数
     * initialProps 初始化参数
     */
    initialProps?: Record<string, {}>
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
   * 跳转打开面板
   *不关心是跳转RN面板还是面板小程序
   */
  export function openPanel(params: {
    /** 设备信息Id */
    deviceId: string
    /**
     * 额外面板信息
     * 当跳转的是二级面板时, 需要传递的额外信息
     */
    extraInfo?: PanelExtraParams
    /** 面板携带业务启动参数 */
    initialProps?: Record<string, {}>
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
   * 面板预下载
   */
  export function preloadPanel(params: {
    /** 设备id */
    deviceId: string
    /**
     * 额外面板信息
     * 当预下载的是二级面板时, 需要传递的额外信息
     */
    extraInfo?: PanelExtraParams
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
   * 打开内置H5容器
   */
  export function openInnerH5(params: {
    /** url H5链接地址 */
    url: string
    /** title H5标题 */
    title?: string
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
   * 根据不同scope值，打开当前应用对应的设置界面
   *"App-Settings" -> App应用设置界面
   *"App-Settings-Permission" -> App应用权限设置界面 (Android 独有)
   *"App-Settings-Notification" -> App应用通知设置界面 (Android 独有)
   */
  export function openAppSystemSettingPage(params: {
    /**
     * 跳转系统-设置项名称
     * "Settings"-> 手机设置主界面
     * "Settings-Bluetooth" -> 手机蓝牙设置界面
     * "Settings-WiFi" -> 手机WiFi设置界面
     * "Settings-Location" -> 手机定位设置界面
     * "Settings-Notification" -> 手机通知设置界面
     * 跳转系统-应用-设置项名称
     * "App-Settings" -> App应用设置界面
     * "App-Settings-Permission" -> App应用权限设置界面 (Android 独有)
     * "App-Settings-Notification" -> App应用通知设置界面 (Android 独有)
     */
    scope: string
    /** 请求code,Android特有 */
    requestCode?: number
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
   * 根据不同scope值，打开对应的手机系统设置界面
   *"Settings"-> 手机设置主界面
   *"Settings-Bluetooth" -> 手机蓝牙设置界面
   *"Settings-WiFi" -> 手机Wifi设置界面
   *"Settings-Location" -> 手机定位设置界面
   *"Settings-Notification" -> 手机通知设置界面
   */
  export function openSystemSettingPage(params: {
    /**
     * 跳转系统-设置项名称
     * "Settings"-> 手机设置主界面
     * "Settings-Bluetooth" -> 手机蓝牙设置界面
     * "Settings-WiFi" -> 手机WiFi设置界面
     * "Settings-Location" -> 手机定位设置界面
     * "Settings-Notification" -> 手机通知设置界面
     * 跳转系统-应用-设置项名称
     * "App-Settings" -> App应用设置界面
     * "App-Settings-Permission" -> App应用权限设置界面 (Android 独有)
     * "App-Settings-Notification" -> App应用通知设置界面 (Android 独有)
     */
    scope: string
    /** 请求code,Android特有 */
    requestCode?: number
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
   * 事件发送
   */
  export function emitChannel(params: {
    /** 事件名称 */
    eventName: string
    /** 传递事件对象 */
    event?: {}
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
   * 路由跳转原生页面
   *当传递的路由url带协议头, 则直接跳转; 若不带协议头, 则补充对应APP协议头进行跳转
   *1. 在使用万能路由跳转前, 需要在app.json中声明使用到的路由, 如果没有声明相关路由, 则该路由无法执行该方法
   *e.g. "routers":['deviceDetail', 'thingsmart://device']
   *2. 在使用router方法前, 建议使用canIUseRouter来做兼容, 处理当APP没有对应路由时执行业务兜底
   *errorCode 10014 当前路由不存在当前APP中, 不可用
   */
  export function router(params: {
    /** 路由链接 */
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
   * 判断该路由host是否存在在当前APP中
   */
  export function canIUseRouter(params: {
    /** 路由链接 */
    url: string
    complete?: () => void
    success?: (params: {
      /** 路由是否可用 */
      result: boolean
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
   * 跳转设备详情页面, 已废弃, 推荐使用thing.device
   */
  export function goDeviceDetail(params: {
    /** 设备Id */
    deviceId: string
    /** 群组id */
    groupId?: string
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
   * 跳转设备定时页面, 已废弃, 推荐使用thing.device
   */
  export function goDeviceAlarm(params: {
    /** 设备Id */
    deviceId: string
    /** 群组id */
    groupId?: string
    /** category */
    category?: string
    /** repeat */
    repeat?: number
    /** timerConfig */
    timerConfig?: TimeConfig
    /** data */
    data: {}[]
    /** enableFilter */
    enableFilter?: boolean
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
   * 分享
   */
  export function share(params: {
    /**
     * 分享渠道，可选值如下：
     * WeChat：微信
     * Message：短信
     * Email：邮件
     * More：系统更多分享渠道（调用系统分享）
     */
    type: string
    /** title 标题 */
    title: string
    /** message 文本内容 */
    message: string
    /**
     * contentType 内容类型
     * 空值默认为text
     * 可选值如下：
     * text：文本
     * image：图片
     * file：文件
     * web：网页地址
     * miniProgram：微信小程序分享内容
     */
    contentType: string
    /** recipients 邮件收件人 */
    recipients?: string[]
    /** imagePath 图片路径 */
    imagePath?: string
    /** filePath 当 contentType == file 时候使用 */
    filePath?: string
    /** web 当 contentType == file 时候使用 */
    webPageUrl?: string
    /** miniProgramInfo 当 contentType == miniProgram 时候使用，且分享渠道必须是微信。 */
    miniProgramInfo?: MiniProgramInfo
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
   * 获取可分享的渠道列表
   */
  export function getShareChannelList(params?: {
    complete?: () => void
    success?: (params: {
      /** 可分享的渠道列表 */
      shareChannelList: string[]
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
   * 获取用户信息
   */
  export function getUserInfo(params?: {
    complete?: () => void
    success?: (params: {
      /** nickName 用户昵称 */
      nickName: string
      /** 用户头像 */
      avatarUrl: string
      /** 国家代码 */
      phoneCode: string
      /** 是否是临时用户 */
      isTemporaryUser: boolean
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
   * 压缩图片， 在保持原图长宽比基础上先裁剪至目标尺寸， 然后根据文件大小限制去执行质量压缩
   */
  export function resizeImage(params: {
    /**
     * 压缩参数
     * aspectFitWidth 自适应宽度
     */
    aspectFitWidth: number
    /** aspectFitHeight 自适应高度 */
    aspectFitHeight: number
    /** maxFileSize 最大图片文件大小限制值， 为空则不做限制, 单位:B */
    maxFileSize?: number
    /** path 图片路径 */
    path: string
    complete?: () => void
    success?: (params: {
      /**
       * 图片返回内容
       * path 图片路径
       */
      path: string
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
   * 旋转图片
   */
  export function rotateImage(params: {
    /** path 图片路径 */
    path: string
    /**
     * orientation 旋转方向
     * 0 - 默认方向
     * 1 - 旋转180°
     * 2 - 逆时针90°
     * 3 - 顺时针90°
     */
    orientation: number
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
   * 下载网络图片至相册
   */
  export function saveToAlbum(params: {
    /** path 图片url */
    url: string
    /** encryptKey 密钥 */
    encryptKey: string
    /**
     * orientation 旋转方向
     * 90 - 顺时针90°
     * 180 - 顺时针180°
     * 270 - 顺时针270°
     */
    orientation: number
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
   * 国家列表界面选择的国家信息
   */
  export function onCountrySelectResult(
    listener: (params: CountrySelectResultResponse) => void
  ): void

  /**
   * 取消监听：国家列表界面选择的国家信息
   */
  export function offCountrySelectResult(
    listener: (params: CountrySelectResultResponse) => void
  ): void

  /**
   * 上传进度回调
   */
  export function onUploadProgressUpdate(
    listener: (params: ProgressEvent) => void
  ): void

  /**
   * 取消监听：上传进度回调
   */
  export function offUploadProgressUpdate(
    listener: (params: ProgressEvent) => void
  ): void

  /**
   * 事件通道响应
   */
  export function onReceiveMessage(
    listener: (params: EventChannelMessageParams) => void
  ): void

  /**
   * 取消监听：事件通道响应
   */
  export function offReceiveMessage(
    listener: (params: EventChannelMessageParams) => void
  ): void

  /**
   * 统一路由事件通知
   */
  export function onRouterEvent(listener: (params: RouterEvent) => void): void

  /**
   * 取消监听：统一路由事件通知
   */
  export function offRouterEvent(listener: (params: RouterEvent) => void): void

  /**
   * 万能路由界面返回的数据
   */
  export function onRouterResult(
    listener: (params: RouterResultResponse) => void
  ): void

  /**
   * 取消监听：万能路由界面返回的数据
   */
  export function offRouterResult(
    listener: (params: RouterResultResponse) => void
  ): void

  export type PanelUiInfoBean = {
    /** phase 面板phase */
    phase?: string
    /** type 面板类型 */
    type?: string
    /** ui 面板ui */
    ui?: string
    /** ui 面板版本号 */
    version?: string
    /** appRnVersion rn版本号 */
    appRnVersion?: string
    /** name 面板名称 */
    name?: string
    /** uiConfig 面板配置项 */
    uiConfig?: Record<string, {}>
    /** rnFind 面板Find */
    rnFind?: boolean
    /** pid 产品id */
    pid?: string
    /** i18nTime 多语言 */
    i18nTime?: number
  }

  export type PanelExtraParams = {
    /** 产品id */
    productId: string
    /** 产品版本 */
    productVersion: string
    /** 面板多语言时间戳 */
    i18nTime: string
    /**
     * 容器ID
     * 可能是uiid的值也可能是miniAppId的值
     */
    bizClientId: string
    /**
     * 包类型
     * RN RN类型
     * SMART_MINIPG 小程序类型
     */
    uiType?: string
    /** 包发布状态 */
    uiPhase?: string
  }

  export type TimeConfig = {
    /** background */
    background: string
  }

  export type MiniProgramInfo = {
    /** 用户名称 */
    userName: string
    /** 路径 */
    path: string
    /** 图片地址 */
    hdImagePath: string
    /** ticket */
    withShareTicket: boolean
    /** 类型 */
    miniProgramType: number
    /** 小程序地址 */
    webPageUrl: string
  }

  export type CountrySelectResultResponse = {
    /** 国家码 */
    countryCode?: string
    /** 国家编码 */
    countryAbb?: string
    /** 国家名称 */
    countryName?: string
  }

  export type ProgressEvent = {
    /** the file path */
    filePath: string
    /** progress */
    progress: number
  }

  export type EventChannelMessageParams = {
    /** 事件id */
    eventId: string
    /** 传递事件对象 */
    event?: {}
  }

  export type RouterEvent = {
    /** 业务事件名称,例如设备定时更新onDeviceAlarmUpdate */
    bizEventName: string
    /** 业务事件数据 */
    bizEventData: Object
  }

  export type RouterResultResponse = {
    /** 路由链接 */
    url: string
    /** 路由调整之后返回的数据 */
    data?: string
  }

  export type EventBean = {
    /** 事件id */
    eventId: string
    /** 事件点对象 */
    event: Record<string, {}>
  }

  export type TrackEventBean = {
    /** 事件名称（事件平台生成） */
    eventName: string
    /** 事件唯一ID （在同一条链路上，begin,track,end 的标识） */
    identifier: string
    /** 所有事件(begin,track,end)公有字段（该链路上，后面打点的数据会覆盖前面点数据，如下example中非data中的字段，ps：beginTime，endTime默认会打上） */
    attributes: Record<string, {}>
    /** (begin,track,end)独有字段（会按照打点顺序组装成数组） */
    infos: Record<string, {}>
  }

  export type AppInfoBean = {
    /**
     * App信息
     * serverTimestamp 云端时间戳
     * appVersion app版本
     * language app语言包
     * countryCode 国家码
     * regionCode 地区码， 在RN Api中被当作“service”字段
     */
    serverTimestamp: number
    appVersion: string
    language: string
    countryCode: string
    regionCode: string
    /** appName app名称 */
    appName: string
    /** appIcon app图标 */
    appIcon: string
    /**
     * app环境
     * 0: 日常
     * 1: 预发
     * 2: 线上
     */
    appEnv?: number
    /** app包名 */
    appBundleId: string
    /** app scheme */
    appScheme: string
  }

  export type SystemWirelessInfoBean = {
    /** 拿到当前连接的wifi的ssid */
    ssId: string
  }

  export type IconfontInfoBean = {
    /**
     * iconfont 信息结构体
     * nameMap iconfont信息载体
     */
    nameMap: string
  }

  export type UploadParams = {
    /** the file path */
    filePath: string
    /** business type, config via backend ng */
    bizType: string
    /** file type */
    contentType?: string
    /** polling interval of big file in second, default is 2 second */
    delayTime?: number
    /** max polling count, default is 5 */
    pollMaxCount?: number
  }

  export type UploadResponse = {
    /** The json string returned by the request */
    result: string
  }

  export type LocalConstants = {
    /** 手机当前地区语言 */
    langKey: string
    /** 多语言 */
    langContent: {}
  }

  export type LangKeyResult = {
    /** 手机当前地区语言 */
    langKey: string
  }

  export type LangContentResult = {
    /** 多语言 */
    langContent: {}
  }

  export type PanelBean = {
    /**
     * 跳转RN面板（优先通过deviceId跳转设备面板，panelUiInfoBean不为null，则两者组合来跳转面板）
     * deviceId 设备Id
     */
    deviceId: string
    /** uiId 面板uiId */
    uiId: string
    /**
     * panelUiInfoBean 面板信息
     * panelUiInfoBean的信息需要与对应deviceId匹配。如果在传入时，两者不对应，跳转的面板可能会出现问题。
     */
    panelUiInfoBean?: PanelUiInfoBean
    /**
     * 面板初始化参数
     * initialProps 初始化参数
     */
    initialProps?: Record<string, {}>
  }

  export type PanelParams = {
    /** 设备信息Id */
    deviceId: string
    /**
     * 额外面板信息
     * 当跳转的是二级面板时, 需要传递的额外信息
     */
    extraInfo?: PanelExtraParams
    /** 面板携带业务启动参数 */
    initialProps?: Record<string, {}>
  }

  export type PreloadPanelParams = {
    /** 设备id */
    deviceId: string
    /**
     * 额外面板信息
     * 当预下载的是二级面板时, 需要传递的额外信息
     */
    extraInfo?: PanelExtraParams
  }

  export type WebViewBean = {
    /** url H5链接地址 */
    url: string
    /** title H5标题 */
    title?: string
  }

  export type SettingPageBean = {
    /**
     * 跳转系统-设置项名称
     * "Settings"-> 手机设置主界面
     * "Settings-Bluetooth" -> 手机蓝牙设置界面
     * "Settings-WiFi" -> 手机WiFi设置界面
     * "Settings-Location" -> 手机定位设置界面
     * "Settings-Notification" -> 手机通知设置界面
     * 跳转系统-应用-设置项名称
     * "App-Settings" -> App应用设置界面
     * "App-Settings-Permission" -> App应用权限设置界面 (Android 独有)
     * "App-Settings-Notification" -> App应用通知设置界面 (Android 独有)
     */
    scope: string
    /** 请求code,Android特有 */
    requestCode?: number
  }

  export type EventEmitChannelParams = {
    /** 事件名称 */
    eventName: string
    /** 传递事件对象 */
    event?: {}
  }

  export type EventChannelParams = {
    /** 事件id */
    eventId: string
    /** 事件名称 */
    eventName: string
  }

  export type EventOffChannelParams = {
    /** 事件id */
    eventId: string
  }

  export type Object = {}

  export type RouterBean = {
    /** 路由链接 */
    url: string
  }

  export type RouteUsageResult = {
    /** 路由是否可用 */
    result: boolean
  }

  export type DeviceDetailBean = {
    /** 设备Id */
    deviceId: string
    /** 群组id */
    groupId?: string
  }

  export type AlarmBean = {
    /** 设备Id */
    deviceId: string
    /** 群组id */
    groupId?: string
    /** category */
    category?: string
    /** repeat */
    repeat?: number
    /** timerConfig */
    timerConfig?: TimeConfig
    /** data */
    data: {}[]
    /** enableFilter */
    enableFilter?: boolean
  }

  export type ShareInformationBean = {
    /**
     * 分享渠道，可选值如下：
     * WeChat：微信
     * Message：短信
     * Email：邮件
     * More：系统更多分享渠道（调用系统分享）
     */
    type: string
    /** title 标题 */
    title: string
    /** message 文本内容 */
    message: string
    /**
     * contentType 内容类型
     * 空值默认为text
     * 可选值如下：
     * text：文本
     * image：图片
     * file：文件
     * web：网页地址
     * miniProgram：微信小程序分享内容
     */
    contentType: string
    /** recipients 邮件收件人 */
    recipients?: string[]
    /** imagePath 图片路径 */
    imagePath?: string
    /** filePath 当 contentType == file 时候使用 */
    filePath?: string
    /** web 当 contentType == file 时候使用 */
    webPageUrl?: string
    /** miniProgramInfo 当 contentType == miniProgram 时候使用，且分享渠道必须是微信。 */
    miniProgramInfo?: MiniProgramInfo
  }

  export type ShareChannelResponse = {
    /** 可分享的渠道列表 */
    shareChannelList: string[]
  }

  export type UserInfoResult = {
    /** nickName 用户昵称 */
    nickName: string
    /** 用户头像 */
    avatarUrl: string
    /** 国家代码 */
    phoneCode: string
    /** 是否是临时用户 */
    isTemporaryUser: boolean
  }

  export type ImageResizeBean = {
    /**
     * 压缩参数
     * aspectFitWidth 自适应宽度
     */
    aspectFitWidth: number
    /** aspectFitHeight 自适应高度 */
    aspectFitHeight: number
    /** maxFileSize 最大图片文件大小限制值， 为空则不做限制, 单位:B */
    maxFileSize?: number
    /** path 图片路径 */
    path: string
  }

  export type ImageResizeResultBean = {
    /**
     * 图片返回内容
     * path 图片路径
     */
    path: string
  }

  export type ImageRotateBean = {
    /** path 图片路径 */
    path: string
    /**
     * orientation 旋转方向
     * 0 - 默认方向
     * 1 - 旋转180°
     * 2 - 逆时针90°
     * 3 - 顺时针90°
     */
    orientation: number
  }

  export type ImageEncryptBean = {
    /** path 图片url */
    url: string
    /** encryptKey 密钥 */
    encryptKey: string
    /**
     * orientation 旋转方向
     * 90 - 顺时针90°
     * 180 - 顺时针180°
     * 270 - 顺时针270°
     */
    orientation: number
  }

  /**
   * EventChannel
   */
  interface RegisterChannelTask {
    /**
     * 相关事件关闭订阅
     */
    unRegisterChannel(params: {
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
  }
  export function registerChannel(params: {
    /** 事件名称 */
    eventName: string
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
  }): RegisterChannelTask
}
