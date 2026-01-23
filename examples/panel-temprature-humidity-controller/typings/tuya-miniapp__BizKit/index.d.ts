/**
 * BizKit
 *
 * @version 4.5.1
 */
declare namespace ty {
  /**
   * 获取历史消息
   */
  export function getAIAssistantHistory(params: {
    /** 数量，不传递默认值30 */
    size: number
    /** primaryId */
    primaryId: number
    /** 消息标识 */
    requestId: string
    /** 类型， TEXT_FINISH SKILL_FINISH */
    type: string
    /** 渠道 可选参数，不传表示首页AI组手 */
    channel: string
    complete?: () => void
    success?: (params: {
      /** 列表数据 */
      data: string
      /** 渠道 */
      channel: string
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
   * 删除消息
   */
  export function deleteAIAssistant(params: {
    /** primaryId */
    primaryId: number
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
   * 发送消息
   */
  export function sendAIAssistant(params: {
    /** 消息 */
    block: string
    /** 可选参数 */
    options: string
    /** 类型 TEXT / SKILL，存在DB中的类型是TEXT_FINISH, SKILL_FINISH */
    type: string
    /** 可选字段，如果传递了，则会绑定到该消息上，如果没有传递，则会生成一个新的requestId */
    requestId?: string
    complete?: () => void
    success?: (params: {
      /** 单次对话消息标识 */
      requestId: string
      /** primaryId */
      primaryId: number
      /** 发送消息 200成功 -2001 发送失败 */
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
   * 数据初始
   */
  export function createAIAssistant(params?: {
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
   * 移除消息监听
   *获取单次对话消息标识
   */
  export function getAIAssistantRequestId(params?: {
    complete?: () => void
    success?: (params: {
      /** 单次对话消息标识 */
      requestId: string
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
   * 插入数据
   */
  export function insertAIAssistantInfo(params: {
    /** 消息标识：如果requestId是新生成的，则会作为宿主消息查询出来；如果是用的其他消息的requestId，列表查询的时候则会被绑定到这条消息上返回 */
    requestId: string
    /**
     * 类型， 自定义类型
     * 保留字段：TEXT_FINISH,CUSTOM_FINISH, 这两个字符串会被插件默认当做宿主消息，会被当做一个气泡，其他类型的比如SKILL_FINISH,XX_FINISH，都会绑定到该消息上，删除的时候会被一起删除掉
     * 1、如果你想插入一条河其他消息绑定的，则不能传入 TEXT_FINISH, CUSTOM_FINISH，传入其他的，比如：XX1_FINISH，requestId则需要传入绑定的那条消息的requestId
     * 2、如果你想插入一条消息作为单独的气泡，则需要传入 TEXT_FINISH 或者 CUSTOM_FINISH，requestId则需要重新生成，可以通过插件提供的api获取。
     * 3、消息的绑定也会根据插入的source值相关，只有source相同的才会绑定。比如requestId==1的数据在数据库中有两条，source分别是1和2，插入内容根据source匹配绑定到对应的消息上。
     */
    type: string
    /** 消息内容: 消息内容完全业务方自己定义，如果业务复杂，涉及到自定义的type很多，需要业务自己规划设计好data的结构进行区分。 */
    data: string
    /** 错误码 */
    code: string
    /** 错误信息 */
    message: string
    /**
     * 消息来源 1. 本地 2. 云端
     * 消息的绑定会根据插入的source值相关，只有source相同的才会绑定。比如requestId==1的数据在数据库中有两条，source分别是1和2，插入内容根据source匹配绑定到对应的消息上。
     */
    source: string
    /** 渠道 可选参数，不传表示首页AI组手 */
    channel: string
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
   * 更新数据
   */
  export function updateAIAssistantInfo(params: {
    /** 消息标识 */
    primaryId: number
    /** 消息内容 */
    data: string
    /** 错误码 */
    code: string
    /** 错误信息 */
    message: string
    /** 消息来源 1. 本地 2. 云端 */
    source: string
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
   * 获取语音助手展示类型
   */
  export function getSpeechDisplayType(params?: {
    complete?: () => void
    success?: (params: {
      /** 0 不展示 1 显示老助手 2 显示新助手 */
      type: number
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
   * 关闭AI助手
   */
  export function disableAIAssistant(params?: {
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
   * 打开AI助手
   */
  export function enableAIAssistant(params?: {
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
   * 清除数据
   */
  export function deleteAIAssistantDbSource(params: {
    /** 清除家庭数据, 不传表示清除当前家庭 */
    homeId: string
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
   * 获取单条数据
   */
  export function getSingleAIAssistant(params: {
    /** 主键 */
    primaryId: number
    complete?: () => void
    success?: (params: {
      /** 主键 */
      primaryId: number
      /** 消息标识 */
      requestId: string
      /** 消息来源 1. 本地 2. 云端 */
      source: string
      /** 消息内容 */
      data: string
      /** 错误码 */
      code: number
      /** 类型 */
      type: string
      /** 创建时间 */
      createTime: number
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
   * 是否支持老语音助手
   */
  export function isSupportOldSpeech(params?: {
    complete?: () => void
    success?: (params: boolean) => void
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
    /**
     * extData 额外参数，当前只支持传递gid
     * 数据格式：{"gid":"xxxx"}
     */
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
   * highway面板接口
   */
  export function apiRequestByHighwayRestful(params: {
    /**
     * 域名
     * e.g. apigw-cn.wgine.com
     */
    host?: string
    /**
     * 请求API, 严格遵循restful标准格式，"/"开头
     * e.g. /v1.0/m/thing/test/path/to/my/api
     */
    api: string
    /**
     * 数据不会被加密，以 HEADER 形式传递
     * 每一个request都包含了默认的公共参数，header会覆盖默认的公共参数
     */
    header?: Record<string, any>
    /** 数据会被加密，最终以 QUERY 形式传递 */
    query?: Record<string, any>
    /** 只针对 POST 请求，数据会被加密，最终以 BODY 形式传递 */
    body?: Record<string, any>
    /** http请求方式 */
    method?: HighwayMethod
    complete?: () => void
    success?: (params: {
      /** 序列化返回结果 */
      result: {}
      /** apiName */
      api: string
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
   * 链路埋点 支持10个链路点，链路下标：0 - 9
   */
  export function eventLink(params: {
    /** 链路点位置，目前只支持10个链路点，0 - 9 */
    linkIndex: number
    /** 链路唯一id，保证唯一性，建议格式是：链路关键词_小程序id */
    linkId: string
    /** 业务扩展参数 map转成string */
    params: string
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
      /** app id */
      appId: string
      /** app clientId */
      clientId?: string
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
   * 获取NG配置
   */
  export function getNGConfigByKeys(params: {
    /** ng配置的key */
    keys: string[]
    complete?: () => void
    success?: (params: {
      /** ng配置 */
      config: Record<string, {}>
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
   * 获取配置中心的配置
   */
  export function getConfigByKeys(params: {
    /**
     * 三段式结构对应配置中心的业务配置
     * 举例：["oem:config:open_device_network"]
     */
    keys: string[]
    complete?: () => void
    success?: (params: {
      /** ng配置 */
      config: Record<string, {}>
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
   * 获取三方服务信息
   */
  export function getThirdPartyServiceInfo(params: {
    /** 三方服务列表 ThirdPartyType */
    types: number[]
    complete?: () => void
    success?: (params: ThirdPartyServiceInfo[]) => void
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
   * 打开三方小程序
   */
  export function openThirdPartyMiniProgram(params: {
    /** 三方小程序类型 ThirdPartyMiniProgramType */
    type: number
    /** 三方小程序参数 */
    params: Record<string, {}>
    complete?: () => void
    success?: (params: {
      /** 三方小程序结果 */
      data: Record<string, {}>
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
   * IAP支付方法
   */
  export function iapPay(params: {
    /** 订单ID */
    orderID: string
    /** 商品ID */
    productID: string
    /** 订阅单预支付code */
    preFlowCode: string
    complete?: () => void
    success?: (params: {
      /** 订单ID */
      orderID: string
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
   * 支付类型
   */
  export function iapType(params?: {
    complete?: () => void
    success?: (params: {
      /** 支付类型 0:三方支付; 1:苹果支付 */
      data: number
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
    /** file type, ios necessary */
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
   * 视频上传
   */
  export function uploadVideo(params: {
    /** the file path */
    filePath: string
    /** business type, config via backend ng */
    bizType: string
    /** file type, ios necessary */
    contentType?: string
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
   * 注册界面刷新
   */
  export function registerPageRefreshListener(params?: {
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
   * 传入key值，获取对应NG元数据
   */
  export function getNgRawData(params: {
    /** 要获取元数据的key值，支持x.y.z格式 */
    rawKey: string
    complete?: () => void
    success?: (params: {
      /** 返回元数据 */
      rawData: string
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
   * 获取在线客户电子
   */
  export function getOnlineCustomerService(params?: {
    complete?: () => void
    success?: (params: { url: string }) => void
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
   * 回到首页并打开面板
   */
  export function backToHomeAndOpenPanel(params: {
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
   * !!!注: 由于审核安全风险,在iOS端调用此方法只会打开当前应用对应的设置界面，不再支持以下scope
   *根据不同scope值，打开对应的手机系统设置界面
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
   * Call this to set the result that your activity will return to its caller
   */
  export function setActivityResult(params: {
    /** The result code to propagate back to the originating activity, often RESULT_CANCELED or RESULT_OK */
    resultCode: number
    /** The data to propagate back to the originating activity. */
    data?: Record<string, {}>
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
   * 打开三方App
   */
  export function openThirdApp(params: {
    /** an RFC 2396-compliant, encoded URI */
    uriString: string
    /** The name of the application package to handle the intent, or null to allow any application package. */
    packageName: string
    complete?: () => void
    success?: (params: { isCanOpen?: boolean }) => void
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
   * 打开三方App
   */
  export function openThirdAppSync(params?: ThirdAppBean): {
    isCanOpen?: boolean
  }

  /**
   * 聚焦系统浏览器通过打开URL
   */
  export function openUrlForceDefaultBrowser(params: {
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
   * 获取支付相关常量信息
   */
  export function getIapInfo(params?: {
    complete?: () => void
    success?: (params: {
      /**
       * 支付方式
       * 目前仅Android可用
       * 0: 三方支付方式
       * 1: 苹果支付
       * 2: google支付
       */
      iapType?: number
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
   * iap支付是否准备就绪
   */
  export function iapPayReady(params: {
    /** 1: 订阅 0: 非订阅 */
    subscription: number
    complete?: () => void
    success?: (params: {
      /**
       * iap是否准备就绪
       * true: 准备就绪, 可以支付
       */
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
   * 发起iap应用内购买, 购买结果请通过onOrderStatusListener做相关的监听
   */
  export function pay(params: {
    /** 前置订单id */
    order_id: string
    /** 关联商品id */
    product_id: string
    /** 1: 订阅 0: 非订阅 */
    subscription?: number
    /**
     * 指定订阅升级/降级期间的按比例分配模式
     * Google提供的几种模式：
     * int UNKNOWN_SUBSCRIPTION_UPGRADE_DOWNGRADE_POLICY = 0;
     * int IMMEDIATE_WITH_TIME_PRORATION = 1;
     * int IMMEDIATE_AND_CHARGE_PRORATED_PRICE = 2;
     * int IMMEDIATE_WITHOUT_PRORATION = 3;
     * int DEFERRED = 4
     */
    billing_mode?: number
    /** 之前的sku商品，用于筛选和获取历史订单的令牌做升级处理 */
    previous_sku?: string
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
   * 添加订单状态监听, 后可用onOrderStatusListener收到相关事件
   */
  export function addOrderStatusListener(params: {
    /** 前置订单id */
    order_id: string
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
   * 移除订单状态监听
   */
  export function removeOrderStatusListener(params: {
    /** 前置订单id */
    order_id: string
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
    /** recipients 邮件收件人/短信接收人 */
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
   * 是否支持 siri, 仅 iOS
   */
  export function isSupportedShortcut(params?: {
    complete?: () => void
    success?: (params: {
      /** 是否支持 */
      isSupported: boolean
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
   * 获取是否关联 siri 状态, 仅 iOS
   */
  export function isAssociatedShortcut(params: {
    /** 场景 id */
    sceneId: string
    /** 场景 name */
    name?: string
    complete?: () => void
    success?: (params: {
      /** 是否已关联 */
      isAssociated: boolean
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
   * 操作快捷方式，包括添加和移除, 仅 iOS
   */
  export function handleShortcut(params: {
    /** 操作类型。0-添加、1-移除 */
    type: number
    /** 场景 id */
    sceneId: string
    /** 场景名称 */
    name: string
    /** 场景 logo */
    iconUrl?: string
    complete?: () => void
    success?: (params: {
      /** 操作步骤，0-添加、1-移除、2-更新、3-取消 */
      operationStep: number
      /** 操作状态，YES，表示成功；NO，表示失败 */
      operationStatus: boolean
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
   * 获取websocket的连接状态
   */
  export function getWebSocketStatus(params?: {
    complete?: () => void
    success?: (params: {
      /** 0.未初始化 1. 连接中 2. 连接成功 3. 连接失败 ', */
      status: number
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
   * 获取websocket的连接状态
   */
  export function getWebSocketStatusSync(): {
    /** 0.未初始化 1. 连接中 2. 连接成功 3. 连接失败 ', */
    status: number
  }

  /**
   * 绑定微信
   */
  export function bindWechat(params?: {
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
   * 是否支持微信绑定
   */
  export function isSupportWechat(params?: {
    complete?: () => void
    success?: (params: {
      /** 是否支持微信绑定 */
      isSupport: boolean
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
   * 跳转微信小程序
   */
  export function gotoWechatMiniApp(params: {
    /** 小程序原始 appId */
    miniAppId: string
    /** 小程序路径 */
    path: string
    /**
     * mini program Type:
     *  0: 正式版 MINIPTOGRAM_TYPE_RELEASE
     *  1: 测试版 MINIPROGRAM_TYPE_TEST
     *  2: 预览版 MINIPROGRAM_TYPE_PREVIEW
     */
    miniProgramType: number
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
   * 是否正在通话中
   */
  export function isCalling(params?: {
    complete?: () => void
    success?: (params: {
      /** 结果 */
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
   * 是否正在通话中
   */
  export function canLaunchCall(params?: {
    complete?: () => void
    success?: (params: {
      /** 结果 */
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
   * 发起呼叫
   */
  export function launchCall(params: {
    /** 设备id */
    targetId: string
    /**
     * 超时时间，单位秒
     * note: 不要传时间戳
     */
    timeout: number
    /** 通话业务参数 例如linux中控 {"channelType": 1, "category": "dgnzk"} */
    extra: Record<string, any>
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
   * 添加消息监听
   */
  export function onAIAssistantChange(
    listener: (params: ReceiveBean) => void
  ): void

  /**
   * 取消监听：添加消息监听
   */
  export function offAIAssistantChange(
    listener: (params: ReceiveBean) => void
  ): void

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
   * 页面刷新事件
   */
  export function onPageRefresh(listener: (params: RefreshParams) => void): void

  /**
   * 取消监听：页面刷新事件
   */
  export function offPageRefresh(
    listener: (params: RefreshParams) => void
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
   * 订单状态监听, 只有在addOrderStatusListener之后, 才能收到监听
   */
  export function onOrderStatusListener(
    listener: (params: OrderStatusEvent) => void
  ): void

  /**
   * 取消监听：订单状态监听, 只有在addOrderStatusListener之后, 才能收到监听
   */
  export function offOrderStatusListener(
    listener: (params: OrderStatusEvent) => void
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

  /**
   * RN或小程序页面关闭事件（Android独有）
   */
  export function onFrontPageClose(
    listener: (params: PageCloseResponse) => void
  ): void

  /**
   * 取消监听：RN或小程序页面关闭事件（Android独有）
   */
  export function offFrontPageClose(
    listener: (params: PageCloseResponse) => void
  ): void

  /**
   * onWebSocketStatusChange 接受消息
   */
  export function onWebSocketStatusChange(
    listener: (params: StatusBean) => void
  ): void

  /**
   * 取消监听：onWebSocketStatusChange 接受消息
   */
  export function offWebSocketStatusChange(
    listener: (params: StatusBean) => void
  ): void

  export enum HighwayMethod {
    /** HTTP 请求 GET */
    GET = "GET",

    /** HTTP 请求 POST */
    POST = "POST",

    /** HTTP 请求 PUT */
    PUT = "PUT",

    /** HTTP 请求 DELETE */
    DELETE = "DELETE",
  }

  export type ThirdPartyServiceInfo = {
    /** 服务是否可用 */
    available: boolean
    /** app是否已经安装 */
    isAppInstalled: boolean
    /** app安装连接 */
    appInstallUrl: string
    /** 三方服务类型 ThirdPartyType */
    type: number
  }

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

  export type ThirdAppBean = {
    /** an RFC 2396-compliant, encoded URI */
    uriString: string
    /** The name of the application package to handle the intent, or null to allow any application package. */
    packageName: string
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

  export type ReceiveBean = {
    /** 消息内容 */
    data: string
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

  export type RefreshParams = {
    /** 关键词 */
    key: string
    /** 业务参数 */
    data?: Record<string, {}>
  }

  export type EventChannelMessageParams = {
    /** 事件id */
    eventId: string
    /** 传递事件对象 */
    event?: {}
  }

  export type OrderStatusEvent = {
    /** 前置订单id */
    order_id: string
    /**
     * 订单结果
     * 0: 订单支付成功
     * 1: 用户取消支付
     * 2: 支付失败, 有错误信息
     */
    resultCode: number
    /** 内部实际错误码, 只有当支付失败时, 有相关信息 */
    errorCode?: number
    /** 内部实际错误信息, 只有当支付失败时, 有相关信息 */
    errorMsg?: string
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

  export type PageCloseResponse = {
    /** 来源 */
    from?: string
  }

  export type StatusBean = {
    /** 0.未初始化 1. 连接中 2. 连接成功 3. 连接失败 ', */
    status: number
  }

  export type ApiRequestByAtopParams = {
    /**
     * atop入参数据模型
     * api api名称
     */
    api: string
    /** version api版本号 */
    version?: string
    /** postData 入参结构体 */
    postData: Record<string, any>
    /**
     * extData 额外参数，当前只支持传递gid
     * 数据格式：{"gid":"xxxx"}
     */
    extData?: Record<string, any>
  }

  export type ApiRequestByAtopResponse = {
    /**
     * 请求结果
     * thing_data_ 出参结构体， JSON序列化
     */
    thing_json_?: {}
    /** 元数据 */
    data: string
  }

  export type HighwayReq = {
    /**
     * 域名
     * e.g. apigw-cn.wgine.com
     */
    host?: string
    /**
     * 请求API, 严格遵循restful标准格式，"/"开头
     * e.g. /v1.0/m/thing/test/path/to/my/api
     */
    api: string
    /**
     * 数据不会被加密，以 HEADER 形式传递
     * 每一个request都包含了默认的公共参数，header会覆盖默认的公共参数
     */
    header?: Record<string, any>
    /** 数据会被加密，最终以 QUERY 形式传递 */
    query?: Record<string, any>
    /** 只针对 POST 请求，数据会被加密，最终以 BODY 形式传递 */
    body?: Record<string, any>
    /** http请求方式 */
    method?: HighwayMethod
  }

  export type HighwayResp = {
    /** 序列化返回结果 */
    result: {}
    /** apiName */
    api: string
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

  export type EventLinkBean = {
    /** 链路点位置，目前只支持10个链路点，0 - 9 */
    linkIndex: number
    /** 链路唯一id，保证唯一性，建议格式是：链路关键词_小程序id */
    linkId: string
    /** 业务扩展参数 map转成string */
    params: string
  }

  export type ManagerContext = {
    /** managerId */
    managerId: number
    /** 家庭id */
    homeId: string
    /** 码率，eg：u律传8000，pcm传16000 */
    sampleRate: number
    /** 通道， eg：1 */
    channels: number
    /** 编码格式，eg：ThingAudioAsrCodeTypePCM = 0 ,ThingAudioAsrCodeTypePCMU = 1 */
    codec: string
    /** 云端asr解析选项，参考：https://wiki.tuya-inc.com:7799/page/1400707433826881594#5A14F9， 注意不要设置其他跟文本无关的参数，本检测只会处理跟文本相关的数据，nlp，skill，tts不包含。 */
    options: string
  }

  export type AsrManagerContext = {
    /** managerId */
    managerId: number
  }

  export type Active = {
    /** 状态 */
    isActive: boolean
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
    /** app id */
    appId: string
    /** app clientId */
    clientId?: string
  }

  export type SystemWirelessInfoBean = {
    /** 拿到当前连接的wifi的ssid */
    ssId: string
  }

  export type NGConfigParams = {
    /** ng配置的key */
    keys: string[]
  }

  export type ConfigResponse = {
    /** ng配置 */
    config: Record<string, {}>
  }

  export type ConfigParams = {
    /**
     * 三段式结构对应配置中心的业务配置
     * 举例：["oem:config:open_device_network"]
     */
    keys: string[]
  }

  export type ThirdPartyServiceParams = {
    /** 三方服务列表 ThirdPartyType */
    types: number[]
  }

  export type ThirdPartyMiniProgramParams = {
    /** 三方小程序类型 ThirdPartyMiniProgramType */
    type: number
    /** 三方小程序参数 */
    params: Record<string, {}>
  }

  export type ThirdPartyMiniProgramResult = {
    /** 三方小程序结果 */
    data: Record<string, {}>
  }

  export type IconfontInfoBean = {
    /**
     * iconfont 信息结构体
     * nameMap iconfont信息载体
     */
    nameMap: string
  }

  export type PaymentParam = {
    /** 订单ID */
    orderID: string
    /** 商品ID */
    productID: string
    /** 订阅单预支付code */
    preFlowCode: string
  }

  export type PaymentResponse = {
    /** 订单ID */
    orderID: string
  }

  export type TypeResponse = {
    /** 支付类型 0:三方支付; 1:苹果支付 */
    data: number
  }

  export type UploadParams = {
    /** the file path */
    filePath: string
    /** business type, config via backend ng */
    bizType: string
    /** file type, ios necessary */
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

  export type VideoUploadParams = {
    /** the file path */
    filePath: string
    /** business type, config via backend ng */
    bizType: string
    /** file type, ios necessary */
    contentType?: string
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

  export type ManagerContext_YsyvT3 = {
    /** managerId */
    managerId: number
    /** 自定义标记 */
    tag: string
  }

  export type ManagerReqContext = {
    /** managerId */
    managerId: number
    /** 单条日志不要过10k */
    message: string
  }

  export type NGRequestBean = {
    /** 要获取元数据的key值，支持x.y.z格式 */
    rawKey: string
  }

  export type NGResponseBean = {
    /** 返回元数据 */
    rawData: string
  }

  export type CustomerServiceRes = {
    url: string
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

  export type ActivityResultBean = {
    /** The result code to propagate back to the originating activity, often RESULT_CANCELED or RESULT_OK */
    resultCode: number
    /** The data to propagate back to the originating activity. */
    data?: Record<string, {}>
  }

  export type CanOpenThirdAppBean = {
    isCanOpen?: boolean
  }

  export type OpenDefaultBrowserUrlBean = {
    /** 要打开的url */
    url: string
  }

  export type PayInfoBean = {
    /**
     * 支付方式
     * 目前仅Android可用
     * 0: 三方支付方式
     * 1: 苹果支付
     * 2: google支付
     */
    iapType?: number
  }

  export type iapPayReadyReq = {
    /** 1: 订阅 0: 非订阅 */
    subscription: number
  }

  export type iapPayReadyResp = {
    /**
     * iap是否准备就绪
     * true: 准备就绪, 可以支付
     */
    result: boolean
  }

  export type payReq = {
    /** 前置订单id */
    order_id: string
    /** 关联商品id */
    product_id: string
    /** 1: 订阅 0: 非订阅 */
    subscription?: number
    /**
     * 指定订阅升级/降级期间的按比例分配模式
     * Google提供的几种模式：
     * int UNKNOWN_SUBSCRIPTION_UPGRADE_DOWNGRADE_POLICY = 0;
     * int IMMEDIATE_WITH_TIME_PRORATION = 1;
     * int IMMEDIATE_AND_CHARGE_PRORATED_PRICE = 2;
     * int IMMEDIATE_WITHOUT_PRORATION = 3;
     * int DEFERRED = 4
     */
    billing_mode?: number
    /** 之前的sku商品，用于筛选和获取历史订单的令牌做升级处理 */
    previous_sku?: string
  }

  export type OrderReq = {
    /** 前置订单id */
    order_id: string
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
    /** recipients 邮件收件人/短信接收人 */
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

  export type SiriEnabledResponse = {
    /** 是否支持 */
    isSupported: boolean
  }

  export type ShortcutAssociatedParams = {
    /** 场景 id */
    sceneId: string
    /** 场景 name */
    name?: string
  }

  export type ShortcutAssociatedResponse = {
    /** 是否已关联 */
    isAssociated: boolean
  }

  export type ShortcutParams = {
    /** 操作类型。0-添加、1-移除 */
    type: number
    /** 场景 id */
    sceneId: string
    /** 场景名称 */
    name: string
    /** 场景 logo */
    iconUrl?: string
  }

  export type ShortcutOperationResponse = {
    /** 操作步骤，0-添加、1-移除、2-更新、3-取消 */
    operationStep: number
    /** 操作状态，YES，表示成功；NO，表示失败 */
    operationStatus: boolean
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

  export type WechatSupport = {
    /** 是否支持微信绑定 */
    isSupport: boolean
  }

  export type MiniApp = {
    /** 小程序原始 appId */
    miniAppId: string
    /** 小程序路径 */
    path: string
    /**
     * mini program Type:
     *  0: 正式版 MINIPTOGRAM_TYPE_RELEASE
     *  1: 测试版 MINIPROGRAM_TYPE_TEST
     *  2: 预览版 MINIPROGRAM_TYPE_PREVIEW
     */
    miniProgramType: number
  }

  export type Result = {
    /** 结果 */
    result: boolean
  }

  export type Call = {
    /** 设备id */
    targetId: string
    /**
     * 超时时间，单位秒
     * note: 不要传时间戳
     */
    timeout: number
    /** 通话业务参数 例如linux中控 {"channelType": 1, "category": "dgnzk"} */
    extra: Record<string, any>
  }

  /**
   * AI语音助手管理器
   */
  interface GetAsrListenerManagerTask {
    /**
     * 状态
     */
    getAsrActive(params: {
      complete?: () => void
      success?: (params: {
        /** 状态 */
        isActive: boolean
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
     * 关闭麦克风，关闭后识音要等到全部识别完成才结束
     */
    stopDetect(params: {
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
     * 关闭麦克风，关闭后识音要等到全部识别完成才结束
     */
    startDetect(params: {
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
     * 开始监听 + 识音
     */
    onDetect(
      listener: (params: {
        /** managerId */
        managerId: number
        /** 拾音状态 0. 未开启 1.进行中 2.结束 3.发送错误 */
        state: number
        /** 语言转换内容 */
        text: string
        /** 错误码 0. 录音时间太短 */
        errorCode: number
      }) => void
    ): void

    /**
     * 取消监听
     */
    offDetect(
      listener: (params: {
        /** managerId */
        managerId: number
        /** 拾音状态 0. 未开启 1.进行中 2.结束 3.发送错误 */
        state: number
        /** 语言转换内容 */
        text: string
        /** 错误码 0. 录音时间太短 */
        errorCode: number
      }) => void
    ): void
  }
  export function getAsrListenerManager(params: {
    /** 家庭id */
    homeId: string
    /** 码率，eg：u律传8000，pcm传16000 */
    sampleRate: number
    /** 通道， eg：1 */
    channels: number
    /** 编码格式，eg：ThingAudioAsrCodeTypePCM = 0 ,ThingAudioAsrCodeTypePCMU = 1 */
    codec: string
    /** 云端asr解析选项，参考：https://wiki.tuya-inc.com:7799/page/1400707433826881594#5A14F9， 注意不要设置其他跟文本无关的参数，本检测只会处理跟文本相关的数据，nlp，skill，tts不包含。 */
    options: string
    complete?: () => void
    success?: (params: null) => void
    failure?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
  }): GetAsrListenerManagerTask

  /**
   * AI语音助手管理器
   */
  interface GetLogManagerTask {
    /**
     * log日志
     */
    log(params: {
      /** 单条日志不要过10k */
      message: string
      complete?: () => void
      success?: (params: null) => void
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
     * error日志
     */
    error(params: {
      /** 单条日志不要过10k */
      message: string
      complete?: () => void
      success?: (params: null) => void
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
     * feedback日志
     */
    feedback(params: {
      /** 单条日志不要过10k */
      message: string
      complete?: () => void
      success?: (params: null) => void
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
     * debug日志
     */
    debug(params: {
      /** 单条日志不要过10k */
      message: string
      complete?: () => void
      success?: (params: null) => void
      failure?: (params: {
        errorMsg: string
        errorCode: string | number
        innerError: {
          errorCode: string | number
          errorMsg: string
        }
      }) => void
    }): void
  }
  export function getLogManager(params: {
    /** 自定义标记 */
    tag: string
    complete?: () => void
    success?: (params: null) => void
    failure?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
  }): GetLogManagerTask

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
