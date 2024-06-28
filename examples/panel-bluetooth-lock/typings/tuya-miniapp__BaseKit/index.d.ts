/**
 * BaseKit
 *
 * @version 3.0.0
 */
declare namespace ty {
  /**
   * 停止监听加速度数据
   */
  export function stopAccelerometer(params?: {
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
   * 开始监听加速度数据
   */
  export function startAccelerometer(params?: {
    /** 监听加速度数据回调函数的执行频率 */
    interval?: AccelerometerInterval
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
   * 获取音频文件时长信息
   */
  export function getAudioFileDuration(params: {
    /** 音频文件路径 */
    path: string
    complete?: () => void
    success?: (params: {
      /** 音频时长 */
      duration: number
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
   * 权限请求方法
   */
  export function authorize(params: {
    /**
     * scope 权限名称
     * 举例子：
     * scope.bluetooth 蓝牙权限
     * scope.writePhotosAlbum 写入相册权限
     * scope.userLocationBackground 后台定位权限
     * scope.record 麦克风权限
     * scope.camera 摄像头权限
     * scope.userLocation 低精度定位权限
     * scope.userPreciseLocation 高精度定位权限
     */
    scope: string
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
   * 查询权限状态
   */
  export function authorizeStatus(params: {
    /**
     * scope 权限名称
     * 举例子：
     * scope.bluetooth 蓝牙权限
     * scope.writePhotosAlbum 写入相册权限
     * scope.userLocationBackground 后台定位权限
     * scope.record 麦克风权限
     * scope.camera 摄像头权限
     * scope.userLocation 低精度定位权限
     * scope.userPreciseLocation 高精度定位权限
     */
    scope: string
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
   * 打开另一个小程序
   */
  export function navigateToMiniProgram(params?: {
    /** 要打开的小程序appId */
    appId?: string
    /** 打开的页面路径,如果为空则打开首页,path 中 ? 后面的部分会成为 query，在小程序的 `App.onLaunch`、`App.onShow` 和 `Page.onLoad` 的回调函数 */
    path?: string
    /** 打开小程序的转场方式,分为right|bottom,指代水平和竖直方向 */
    position?: string
    /** 传递给目标小程序的数据,目标小程序可在 `App.onLaunch`，`App.onShow` 中获取到这份数据 */
    extraData?: Record<string, any>
    /** 要打开的小程序版本。仅在当前小程序为开发版或体验版时此参数有效。如果当前小程序是正式版，则打开的小程序必定是正式版 */
    envVersion?: string
    /** 小程序链接，当传递该参数后，可以不传 appId 和 path */
    shortLink?: string
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
   * 开始监听罗盘数据
   */
  export function startCompass(params?: {
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
   * 停止监听罗盘数据
   */
  export function stopCompass(params?: {
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
   * 开始监听设备方向的变化。
   */
  export function startDeviceMotionListening(params?: {
    /** 监听加速度数据回调函数的执行频率 */
    interval?: DeviceMotionInterval
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
   * 停止监听设备方向的变化。
   */
  export function stopDeviceMotionListening(params?: {
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
   * 开始监听陀螺仪数据。
   */
  export function startGyroscope(params?: {
    /** 监听陀螺仪数据回调函数的执行频率 */
    interval?: GyroscopeInterval
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
   * 停止监听陀螺仪数据。
   */
  export function stopGyroscope(params?: {
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
   * 从本地相册选择图片或使用相机拍照, 可用chooseMedia替代此方法
   *
   *权限：[scope.camera, scope.writePhotosAlbum]
   *关联API：[chooseMedia]
   */
  export function chooseImage(params?: {
    /** 最多可以选择的图片张数 */
    count?: number
    /** sizeType ['original', 'compressed'] */
    sizeType?: string[]
    /** 选择图片的来源 ['album', 'camera'] */
    sourceType?: string[]
    complete?: () => void
    success?: (params: {
      /** 图片的本地临时文件路径列表 (本地路径) */
      tempFilePaths: string[]
      /** sizeType ['original', 'compressed'] */
      tempFiles?: TempFileCB[]
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
   * 拍摄或从手机相册中选择图片或视频
   *
   *权限：[scope.camera, scope.writePhotosAlbum]
   */
  export function chooseMedia(params?: {
    /** 最多可以选择的文件数 */
    count?: number
    /**
     * 选择类型, 默认图片
     * 'image' 只能拍摄图片或从相册选择图片
     * 'video' 只能拍摄视频或从相册选择视频
     */
    mediaType?: string
    /**
     * 图片和视频选择的来源, 默认['album', 'camera']
     * 'album' 从相册选择
     * 'camera' 	使用相机拍摄
     */
    sourceType?: string[]
    /**
     * 拍摄视频最长拍摄时间，单位秒。默认10s
     * 时间范围为 3s 至 60s 之间。不限制相册。
     */
    maxDuration?: number
    complete?: () => void
    success?: (params: {
      /**
       * 文件类型
       * 'image' 图片
       * 'video' 视频
       */
      type: string
      /** 本地临时文件列表 */
      tempFiles?: TempMediaFileCB[]
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
   * 从本地相册选择图片或使用相机拍照（可裁剪）
   */
  export function chooseCropImage(params?: {
    /** 选择图片的来源 ['album', 'camera']，默认都支持 */
    sourceType?: string[]
    complete?: () => void
    success?: (params: {
      /** 文件路径 */
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
   * 在新页面中全屏预览图片。
   */
  export function previewImage(params: {
    /** 需要预览的图片链接列表 */
    urls: string[]
    /** 当前显示图片的链接 */
    current: number
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
   * 获取图片信息
   */
  export function getImageInfo(params: {
    /** 图片的路径，支持网络路径、本地路径 */
    src: string
    complete?: () => void
    success?: (params: {
      /** 图片原始宽度，单位px。不考虑旋转。 */
      width: number
      /** 图片原始高度，单位px。不考虑旋转。 */
      height: number
      /**
       * 拍照时设备方向
       * 合法值	说明
       * up	默认方向（手机横持拍照），对应 Exif 中的 1。或无 orientation 信息。
       * up-mirrored	同 up，但镜像翻转，对应 Exif 中的 2
       * down	旋转180度，对应 Exif 中的 3
       * down-mirrored	同 down，但镜像翻转，对应 Exif 中的 4
       * left-mirrored	同 left，但镜像翻转，对应 Exif 中的 5
       * right	顺时针旋转90度，对应 Exif 中的 6
       * right-mirrored	同 right，但镜像翻转，对应 Exif 中的 7
       * left	逆时针旋转90度，对应 Exif 中的 8
       */
      orientation: string
      /**
       * 图片格式。
       * 合法值	说明
       * unknown	未知格式
       * jpeg	jpeg压缩格式
       * png	png压缩格式
       * gif	gif压缩格式
       * tiff	tiff压缩格式
       */
      type: string
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
   * 获取视频信息
   */
  export function getVideoInfo(params: {
    /** 视频文件路径，可以是临时文件路径也可以是永久文件路径 */
    src: string
    complete?: () => void
    success?: (params: {
      /** 图片原始宽度，单位px。不考虑旋转。 */
      width: number
      /** 图片原始高度，单位px。不考虑旋转。 */
      height: number
      /**
       * 画面方向
       * 合法值	说明
       * up	默认方向（手机横持拍照），对应 Exif 中的 1。或无 orientation 信息。
       * up-mirrored	同 up，但镜像翻转，对应 Exif 中的 2
       * down	旋转180度，对应 Exif 中的 3
       * down-mirrored	同 down，但镜像翻转，对应 Exif 中的 4
       * left-mirrored	同 left，但镜像翻转，对应 Exif 中的 5
       * right	顺时针旋转90度，对应 Exif 中的 6
       * right-mirrored	同 right，但镜像翻转，对应 Exif 中的 7
       * left	逆时针旋转90度，对应 Exif 中的 8
       */
      orientation: string
      /** 视频格式 */
      type: string
      /** 视频时长 */
      duration: number
      /** 视频大小，单位 kB */
      size: number
      /** 视频帧率 */
      fps: number
      /** 视频码率，单位 kbps */
      bitrate: number
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
   * 保存视频到系统相册，支持mp4视频格式
   */
  export function saveVideoToPhotosAlbum(params: {
    /** 视频文件路径，可以是临时文件路径也可以是永久文件路径 (本地路径) */
    filePath: string
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
   * 显示消息提示框
   */
  export function showToast(params: {
    /** 提示的内容 */
    title: string
    /** 图标 'success' / 'error' / 'loading' / 'none' */
    icon?: string
    /** 自定义图标的本地路径，image 的优先级高于 icon */
    image?: string
    /** 提示的延迟时间 */
    duration?: number
    /** 是否显示透明蒙层，防止触摸穿透 */
    mask?: boolean
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
   * 显示模态对话框
   */
  export function showModal(params: {
    /** 提示的标题 */
    title: string
    /** 提示的内容 */
    content?: string
    /** 是否显示取消按钮 */
    showCancel?: boolean
    /** 取消按钮的文字，最多 4 个字符 */
    cancelText?: string
    /** 取消按钮的文字颜色，必须是 16 进制格式的颜色字符串 */
    cancelColor?: string
    /** 确认按钮的文字，最多 4 个字符 */
    confirmText?: string
    /** 确认按钮的文字颜色，必须是 16 进制格式的颜色字符串 */
    confirmColor?: string
    complete?: () => void
    success?: (params: {
      /** 为 true 时，表示用户点击了确定按钮 */
      confirm: boolean
      /** 为 true 时，表示用户点击了取消（用于 Android 系统区分点击蒙层关闭还是点击取消按钮关闭） */
      cancel: boolean
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
   * 显示 loading 提示框。需主动调用 thing.hideLoading 才能关闭提示框
   */
  export function showLoading(params: {
    /** 提示的内容 */
    title: string
    /** 是否显示透明蒙层，防止触摸穿透 */
    mask?: boolean
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
   * 显示操作菜单
   */
  export function showActionSheet(params: {
    /** 警示文案 */
    alertText?: string
    /** 按钮的文字数组，数组长度最大为 6 */
    itemList: string[]
    /** 按钮的文字颜色 */
    itemColor?: string
    complete?: () => void
    success?: (params: {
      /** 用户点击的按钮序号，从上到下的顺序，从0开始 */
      tapIndex: number
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
   * 隐藏消息提示框
   */
  export function hideToast(params?: {
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
   * 隐藏 loading 提示框
   */
  export function hideLoading(params?: {
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
   * 拨打电话
   */
  export function makePhoneCall(params: {
    /** 需要拨打的电话号码 */
    phoneNumber: string
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
   * 设置系统剪贴板的内容
   */
  export function setClipboardData(params: {
    /** 剪贴板的内容 */
    data: string
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
   * 获取系统剪贴板的内容
   */
  export function getClipboardData(params?: {
    complete?: () => void
    success?: (params: {
      /** 剪贴板的内容 */
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
   * 设置系统音量
   *
   *错误码标注
   *入参值范围超出 errorCode = 6， The volume value is invalid, it should be [0 - 1]
   */
  export function updateVolume(params: {
    /** 音量，阈值【0 - 1】 */
    value: number
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
   * 获取当前系统音量
   */
  export function getCurrentVolume(params?: {
    complete?: () => void
    success?: (params: {
      /** 音量，阈值【0 - 1】 */
      value: number
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
   * 注册系统音量监听
   *
   *关联API：[onSystemVolumeChangeEvent, unRegisterSystemVolumeChange]
   */
  export function registerSystemVolumeChange(params?: {
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
   * 取消注册系统音量监听
   *
   *关联API：[onSystemVolumeChangeEvent, registerSystemVolumeChange]
   */
  export function unRegisterSystemVolumeChange(params?: {
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
   * 获取设备设置
   */
  export function getSystemSetting(params?: {
    complete?: () => void
    success?: (params: {
      /** 蓝牙的系统开关，默认false */
      bluetoothEnabled?: boolean
      /** 地理位置的系统开关，默认false */
      locationEnabled?: boolean
      /** Wi-Fi 的系统开关，默认false */
      wifiEnabled?: boolean
      /**
       * 设备方向, 默认竖屏
       * 竖屏 = "portrait"， 横屏 = "landscape"
       */
      deviceOrientation?: string
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
   * 获取设备基础信息
   */
  export function getDeviceInfo(params?: {
    complete?: () => void
    success?: (params: {
      /** 应用二进制接口类型（仅 Android 支持） */
      abi: string
      /** 设备品牌 */
      brand: string
      /** 设备型号。新机型刚推出一段时间会显示unknown。 */
      model: string
      /** 操作系统及版本 */
      system: string
      /** 客户端平台 */
      platform: string
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
   * 获取系统信息
   */
  export function getSystemInfo(params?: {
    complete?: () => void
    success?: (params: {
      is24Hour: boolean
      system: string
      brand: string
      model: string
      platform: string
      timezoneId: string
      pixelRatio: number
      screenWidth: number
      screenHeight: number
      windowWidth: number
      windowHeight: number
      statusBarHeight: number
      language: string
      safeArea: SafeArea
      albumAuthorized: boolean
      cameraAuthorized: boolean
      locationAuthorized: boolean
      microphoneAuthorized: boolean
      notificationAuthorized: boolean
      notificationAlertAuthorized: boolean
      notificationBadgeAuthorized: boolean
      notificationSoundAuthorized: boolean
      bluetoothEnabled: boolean
      locationEnabled: boolean
      wifiEnabled: boolean
      theme?: Themes
      deviceOrientation?: Orientation
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
   * 获取系统信息
   */
  export function getSystemInfoSync(): {
    is24Hour: boolean
    system: string
    brand: string
    model: string
    platform: string
    timezoneId: string
    pixelRatio: number
    screenWidth: number
    screenHeight: number
    windowWidth: number
    windowHeight: number
    statusBarHeight: number
    language: string
    safeArea: SafeArea
    albumAuthorized: boolean
    cameraAuthorized: boolean
    locationAuthorized: boolean
    microphoneAuthorized: boolean
    notificationAuthorized: boolean
    notificationAlertAuthorized: boolean
    notificationBadgeAuthorized: boolean
    notificationSoundAuthorized: boolean
    bluetoothEnabled: boolean
    locationEnabled: boolean
    wifiEnabled: boolean
    theme?: Themes
    deviceOrientation?: Orientation
  }

  /**
   * 获取手机附近的Wi-Fi列表；列表数据通过onGetWifiList事件发送
   */
  export function getWifiList(params?: {
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
   * 获取当前连接的wifi信息
   *iOS: 返回SSID和BSSID
   */
  export function getConnectedWifi(params?: {
    /**
     * 是否需要返回部分 Wi-Fi 信息
     * 安卓 thing.getConnectedWifi 若设置了 partialInfo:true ，将会返回只包含 SSID 属性的 WifiInfo 对象。
     * iOS thing.getConnectedWifi 若设置了 partialInfo:true ，将会返回只包含 SSID、BSSID 属性的 WifiInfo 对象，且需要用户开启微信定位权限才能正确返回结果。
     * 默认值：false
     */
    partialInfo?: boolean
    complete?: () => void
    success?: (params: {
      /** wifi的SSID */
      SSID: string
      /** wifi的BSSID */
      BSSID: string
      /** Wi-Fi 信号强度, 安卓取值 0 ～ 100 ，iOS 取值 0 ～ 1 ，值越大强度越大 */
      signalStrength: number
      /**
       * Wi-Fi是否安全
       * Android：Android系统12开始支持。
       */
      secure: boolean
      /** Wi-Fi 频段单位 MHz */
      frequency: number
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
   * 跳转系统蓝牙设置页 (仅Android)
   */
  export function openSystemBluetoothSetting(params?: {
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
   * 获取网络类型
   */
  export function getNetworkType(params?: {
    complete?: () => void
    success?: (params: {
      /** 网络类型 */
      networkType: string
      /** 信号强弱，单位 dbm */
      signalStrength: number
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
   * 设置屏幕亮度
   */
  export function setScreenBrightness(params: {
    /** 屏幕亮度值，范围 0 ~ 1。0 最暗，1 最亮 */
    value: number
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
   * 获取屏幕亮度
   */
  export function getScreenBrightness(params?: {
    complete?: () => void
    success?: (params: {
      /** 屏幕亮度值，范围 0 ~ 1。0 最暗，1 最亮 */
      value: number
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
   * 设置是否保持常亮状态
   */
  export function setKeepScreenOn(params: {
    /** 是否保持屏幕常亮 */
    keepScreenOn: boolean
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
   * 使手机发生较短时间的振动（30 ms）。仅在 iPhone 7 / 7 Plus 以上及 Android 机型生效
   */
  export function vibrateShort(params: {
    /** 震动强度类型，有效值为：heavy、medium、light */
    type: string
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
   * 使手机发生较长时间的振动（400 ms)
   */
  export function vibrateLong(params?: {
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
   * 调起客户端扫码界面进行扫码
   */
  export function scanCode(params?: {
    /** 是否只能从相机扫码，不允许从相册选择图片 */
    onlyFromCamera?: boolean
    /** 扫码类型 */
    scanType?: string[]
    complete?: () => void
    success?: (params: {
      /** 所扫码的内容 */
      result: string
      /** 所扫码的类型 */
      scanType: string
      /** 所扫码的字符集 */
      charSet: string
      /** 当所扫的码为当前小程序二维码时，会返回此字段，内容为二维码携带的 path (不一定会有返回值) */
      path: string
      /** 原始数据，base64编码 */
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
   * 将数据存储在本地缓存中指定的 key 中。会覆盖掉原来该 key 对应的内容。除非用户主动删除或因存储空间原因被系统清理，否则数据都一直可用。单个 key 允许存储的最大数据长度为 1MB，所有数据存储上限为 10MB。
   */
  export function setStorage(params: {
    /** 本地缓存中指定的 key */
    key: string
    /** key对应的内容 */
    data: string
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
   * 将数据存储在本地缓存中指定的 key 中。会覆盖掉原来该 key 对应的内容。除非用户主动删除或因存储空间原因被系统清理，否则数据都一直可用。单个 key 允许存储的最大数据长度为 1MB，所有数据存储上限为 10MB。
   */
  export function setStorageSync(storageDataBean?: StorageDataBean): null

  /**
   * 从本地缓存中异步获取指定 key 的内容
   */
  export function getStorage(params: {
    /** 本地缓存中指定的 key */
    key: string
    complete?: () => void
    success?: (params: {
      /** key对应的内容 */
      data?: string
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
   * 从本地缓存中异步获取指定 key 的内容
   */
  export function getStorageSync(storageKeyBean?: StorageKeyBean): {
    /** key对应的内容 */
    data?: string
  }

  /**
   * 清理本地数据缓存
   */
  export function removeStorage(params: {
    /** 本地缓存中指定的 key */
    key: string
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
   * 清理本地数据缓存
   */
  export function removeStorageSync(storageKeyBean?: StorageKeyBean): null

  /**
   * 清理本地数据缓存
   */
  export function clearStorage(params?: {
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
   * 清理本地数据缓存
   */
  export function clearStorageSync(): null

  /**
   * 系统音量监听通知事件
   *
   *关联API：[registerSystemVolumeChange, unRegisterSystemVolumeChange]
   */
  export function onSystemVolumeChangeEvent(
    listener: (params: CurrentVolumeResponse) => void
  ): void

  /**
   * 取消监听：系统音量监听通知事件
   *
   *关联API：[registerSystemVolumeChange, unRegisterSystemVolumeChange]
   */
  export function offSystemVolumeChangeEvent(
    listener: (params: CurrentVolumeResponse) => void
  ): void

  /**
   * 监听获取到 Wi-Fi 列表数据事件
   */
  export function onGetWifiList(
    listener: (params: WifiListResponse) => void
  ): void

  /**
   * 取消监听：监听获取到 Wi-Fi 列表数据事件
   */
  export function offGetWifiList(
    listener: (params: WifiListResponse) => void
  ): void

  /**
   * 持续录音事件
   */
  export function onRecordingEvent(
    listener: (params: AudioRecordBufferBean) => void
  ): void

  /**
   * 取消监听：持续录音事件
   */
  export function offRecordingEvent(
    listener: (params: AudioRecordBufferBean) => void
  ): void

  /**
   * 监听加速度数据事件
   */
  export function onAccelerometerChange(
    listener: (params: {
      /** X 轴 */
      x: number
      /** Y 轴 */
      y: number
      /** Z 轴 */
      z: number
    }) => void
  ): void

  /**
   * 取消监听加速度数据事件，参数为空，则取消所有的事件监听
   */
  export function offAccelerometerChange(
    listener: (params: {
      /** X 轴 */
      x: number
      /** Y 轴 */
      y: number
      /** Z 轴 */
      z: number
    }) => void
  ): void

  /**
   * 监听罗盘数据变化事件
   */
  export function onCompassChange(
    listener: (params: {
      /** 面对的方向度数 */
      direction: number
      /**
       * 精度
       * high 高精度
       * medium    中等精度
       * low    低精度
       * no-contact    不可信，传感器失去连接
       * unreliable    不可信，原因未知
       * unknow ${value}    未知的精度枚举值，即该 Android 系统此时返回的表示精度的 value 不是一个标准的精度枚举值
       */
      accuracy: string
    }) => void
  ): void

  /**
   * 取消监听罗盘数据变化事件，参数为空，则取消所有的事件监听
   */
  export function offCompassChange(
    listener: (params: {
      /** 面对的方向度数 */
      direction: number
      /**
       * 精度
       * high 高精度
       * medium    中等精度
       * low    低精度
       * no-contact    不可信，传感器失去连接
       * unreliable    不可信，原因未知
       * unknow ${value}    未知的精度枚举值，即该 Android 系统此时返回的表示精度的 value 不是一个标准的精度枚举值
       */
      accuracy: string
    }) => void
  ): void

  /**
   * 监听设备方向变化事件
   */
  export function onDeviceMotionChange(
    listener: (params: {
      /** 当 手机坐标 X/Y 和 地球 X/Y 重合时，绕着 Z 轴转动的夹角为 alpha，范围值为 [0, 2*PI)。逆时针转动为正。 */
      alpha: number
      /** 当手机坐标 Y/Z 和地球 Y/Z 重合时，绕着 X 轴转动的夹角为 beta。范围值为 [-1*PI, PI) 。顶部朝着地球表面转动为正。也有可能朝着用户为正。 */
      beta: number
      /** 当手机 X/Z 和地球 X/Z 重合时，绕着 Y 轴转动的夹角为 gamma。范围值为 [-1*PI/2, PI/2)。右边朝着地球表面转动为正。 */
      gamma: number
    }) => void
  ): void

  /**
   * 取消监听设备方向变化事件，参数为空，则取消所有的事件监听。
   */
  export function offDeviceMotionChange(
    listener: (params: {
      /** 当 手机坐标 X/Y 和 地球 X/Y 重合时，绕着 Z 轴转动的夹角为 alpha，范围值为 [0, 2*PI)。逆时针转动为正。 */
      alpha: number
      /** 当手机坐标 Y/Z 和地球 Y/Z 重合时，绕着 X 轴转动的夹角为 beta。范围值为 [-1*PI, PI) 。顶部朝着地球表面转动为正。也有可能朝着用户为正。 */
      beta: number
      /** 当手机 X/Z 和地球 X/Z 重合时，绕着 Y 轴转动的夹角为 gamma。范围值为 [-1*PI/2, PI/2)。右边朝着地球表面转动为正。 */
      gamma: number
    }) => void
  ): void

  /**
   * 监听陀螺仪数据变化事件
   */
  export function onGyroscopeChange(
    listener: (params: {
      /** X 轴 */
      x: number
      /** Y 轴 */
      y: number
      /** Z 轴 */
      z: number
    }) => void
  ): void

  /**
   * 取消监听陀螺仪数据变化事件。
   */
  export function offGyroscopeChange(
    listener: (params: {
      /** X 轴 */
      x: number
      /** Y 轴 */
      y: number
      /** Z 轴 */
      z: number
    }) => void
  ): void

  /**
   * 监听内存不足告警事件。
   *当 iOS/Android 向小程序进程发出内存警告时，触发该事件。触发该事件不意味小程序被杀，大部分情况下仅仅是告警，开发者可在收到通知后回收一些不必要资源避免进一步加剧内存紧张。
   */
  export function onMemoryWarning(
    listener: (params: {
      /** 内存告警等级，只有 Android 才有，对应系统宏定义 */
      level: number
    }) => void
  ): void

  /**
   * 取消监听内存不足告警事件。
   */
  export function offMemoryWarning(
    listener: (params: {
      /** 内存告警等级，只有 Android 才有，对应系统宏定义 */
      level: number
    }) => void
  ): void

  /**
   * 监听蓝牙适配器状态变化事件
   */
  export function onBluetoothAdapterStateChange(
    listener: (params: {
      /** 蓝牙适配器是否可用 */
      available: boolean
    }) => void
  ): void

  /**
   * 取消监听蓝牙适配器状态变化事件
   */
  export function offBluetoothAdapterStateChange(
    listener: (params: {
      /** 蓝牙适配器是否可用 */
      available: boolean
    }) => void
  ): void

  /**
   * 监听网络状态变化事件
   */
  export function onNetworkStatusChange(
    listener: (params: {
      /** 当前是否有网络连接 */
      isConnected: boolean
      /** 网络类型 */
      networkType: string
    }) => void
  ): void

  /**
   * 取消监听网络状态变化事件
   */
  export function offNetworkStatusChange(
    listener: (params: {
      /** 当前是否有网络连接 */
      isConnected: boolean
      /** 网络类型 */
      networkType: string
    }) => void
  ): void

  export type Profile = {
    /** 第一个 HTTP 重定向发生时的时间。有跳转且是同域名内的重定向才算，否则值为 0 */
    redirectStart: number
    /** 最后一个 HTTP 重定向完成时的时间。有跳转且是同域名内部的重定向才算，否则值为 0 */
    redirectEnd: number
    /** 组件准备好使用 HTTP 请求抓取资源的时间，这发生在检查本地缓存之前 */
    fetchStart: number
    /** DNS 域名查询开始的时间，如果使用了本地缓存（即无 DNS 查询）或持久连接，则与 fetchStart 值相等 */
    domainLookupStart: number
    /** DNS 域名查询完成的时间，如果使用了本地缓存（即无 DNS 查询）或持久连接，则与 fetchStart 值相等 */
    domainLookupEnd: number
    /** HTTP（TCP） 开始建立连接的时间，如果是持久连接，则与 fetchStart 值相等。注意如果在传输层发生了错误且重新建立连接，则这里显示的是新建立的连接开始的时间 */
    connectStart: number
    /** HTTP（TCP） 完成建立连接的时间（完成握手），如果是持久连接，则与 fetchStart 值相等。注意如果在传输层发生了错误且重新建立连接，则这里显示的是新建立的连接完成的时间。注意这里握手结束，包括安全连接建立完成、SOCKS 授权通过 */
    connectEnd: number
    /** SSL建立连接的时间,如果不是安全连接,则值为 0 */
    SSLconnectionStart: number
    /** SSL建立完成的时间,如果不是安全连接,则值为 0 */
    SSLconnectionEnd: number
    /** HTTP请求读取真实文档开始的时间（完成建立连接），包括从本地读取缓存。连接错误重连时，这里显示的也是新建立连接的时间 */
    requestStart: number
    /** HTTP请求读取真实文档结束的时间 */
    requestEnd: number
    /** HTTP 开始接收响应的时间（获取到第一个字节），包括从本地读取缓存 */
    responseStart: number
    /** HTTP 响应全部接收完成的时间（获取到最后一个字节），包括从本地读取缓存 */
    responseEnd: number
    /** 当次请求连接过程中实时 rtt */
    rtt: number
    /** 评估的网络状态 slow 2g/2g/3g/4g */
    estimate_nettype: string
    /** 协议层根据多个请求评估当前网络的 rtt（仅供参考） */
    httpRttEstimate: number
    /** 传输层根据多个请求评估的当前网络的 rtt（仅供参考） */
    transportRttEstimate: number
    /** 评估当前网络下载的kbps */
    downstreamThroughputKbpsEstimate: number
    /** 当前网络的实际下载kbps */
    throughputKbps: number
    /** 当前请求的IP */
    peerIP: string
    /** 当前请求的端口 */
    port: number
    /** 是否复用连接 */
    socketReused: boolean
    /** 发送的字节数 */
    sendBytesCount: number
    /** 收到字节数 */
    receivedBytedCount: number
  }

  export type FileReadFileReqBean = {
    /** 要写入的文件路径 (本地路径) */
    filePath: string
    /**
     * 指定读取文件的字符编码。
     * 支持 utf8/ascii/base64。如果不传 encoding，默认utf8
     */
    encoding?: string
    /** 从文件指定位置开始读，如果不指定，则从文件头开始读。读取的范围应该是左闭右开区间 [position, position+length)。有效范围：[0, fileLength - 1]。单位：byte */
    position?: number
    /** 指定文件的长度，如果不指定，则读到文件末尾。有效范围：[1, fileLength]。单位：byte */
    length?: number
  }

  export type SaveFileSyncParams = {
    /** taskId */
    fileId: string
    /** 临时存储文件路径 */
    tempFilePath: string
    /** 要存储的文件路径 */
    filePath: string
  }

  export type FileStats = {
    /** 文件的类型和存取的权限 */
    mode: string
    /** 文件大小，单位：B */
    size: number
    /** 文件最近一次被存取或被执行的时间，UNIX 时间戳 */
    lastAccessedTime: number
    /** 文件最后一次被修改的时间，UNIX 时间戳 */
    lastModifiedTime: number
    /** 当前文件是否一个目录 */
    isDirectory: boolean
    /** 当前文件是否一个普通文件 */
    isFile: boolean
  }

  export type FileStatsParams = {
    /** taskId */
    fileId: string
    /** 文件/目录路径 (本地路径) */
    path: string
    /**
     * 是否递归获取目录下的每个文件的 Stats 信息
     * 默认值：false
     */
    recursive?: boolean
  }

  export type MakeDirParams = {
    /** taskId */
    fileId: string
    /** 创建的目录路径 (本地路径) */
    dirPath: string
    /**
     * 是否在递归创建该目录的上级目录后再创建该目录。如果对应的上级目录已经存在，则不创建该上级目录。
     * 如 dirPath 为 a/b/c/d 且 recursive 为 true，将创建 a 目录，再在 a 目录下创建 b 目录，
     * 以此类推直至创建 a/b/c 目录下的 d 目录。
     * 默认值：false
     */
    recursive?: boolean
  }

  export type RemoveDirParams = {
    /** taskId */
    fileId: string
    /** 要删除的目录路径 (本地路径) */
    dirPath: string
    /**
     * 是否递归删除目录。如果为 true，则删除该目录和该目录下的所有子目录以及文件。
     * 默认值：false
     */
    recursive?: boolean
  }

  export type WriteFileParams = {
    /** taskId */
    fileId: string
    /** 要写入的文件路径 (本地路径) */
    filePath: string
    /** 要写入的文本数据, 根据encoding编码 */
    data: string
    /** 指定写入文件的字符编码,目前支持【utf8、ascii、base64】, 默认utf8 */
    encoding?: string
  }

  export enum HTTPMethod {
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

  export enum AccelerometerInterval {
    /** 适用于更新游戏的回调频率，在 20ms/次 左右 */
    game = "game",

    /** 适用于更新 UI 的回调频率，在 60ms/次 左右 */
    ui = "ui",

    /** 普通的回调频率，在 200ms/次 左右 */
    normal = "normal",
  }

  export enum DeviceMotionInterval {
    /** 适用于更新游戏的回调频率，在 20ms/次 左右 */
    game = "game",

    /** 适用于更新 UI 的回调频率，在 60ms/次 左右 */
    ui = "ui",

    /** 普通的回调频率，在 200ms/次 左右 */
    normal = "normal",
  }

  export enum GyroscopeInterval {
    /** 适用于更新游戏的回调频率，在 20ms/次 左右 */
    game = "game",

    /** 适用于更新 UI 的回调频率，在 60ms/次 左右 */
    ui = "ui",

    /** 普通的回调频率，在 200ms/次 左右 */
    normal = "normal",
  }

  export type TempFileCB = {
    /** 本地临时文件路径 (本地路径) */
    path: string
    /** 本地临时文件大小，单位 B */
    size?: number
  }

  export type TempMediaFileCB = {
    /** 本地临时文件路径 (本地路径) */
    tempFilePath: string
    /** 本地临时文件大小，单位 B */
    size: number
    /** 视频的时间长度 */
    duration: number
    /** 视频的高度 */
    height: number
    /** 视频的宽度 */
    width: number
    /** 视频缩略图临时文件路径 */
    thumbTempFilePath: string
    /**
     * 文件类型
     * 'image' 	图片
     * 'video' 	视频
     */
    fileType: string
  }

  export type SafeArea = {
    left: number
    right: number
    top: number
    bottom: number
    width: number
    height: number
  }

  export enum Themes {
    dark = "dark",

    light = "light",
  }

  export enum Orientation {
    portrait = "portrait",

    landscape = "landscape",
  }

  export type StorageDataBean = {
    /** 本地缓存中指定的 key */
    key: string
    /** key对应的内容 */
    data: string
  }

  export type StorageKeyBean = {
    /** 本地缓存中指定的 key */
    key: string
  }

  export type CurrentVolumeResponse = {
    /** 音量，阈值【0 - 1】 */
    value: number
  }

  export type WifiListResponse = {
    /** Wi-Fi列表 */
    wifiList: WifiInfo[]
  }

  export type AudioRecordBufferBean = {
    /** 数据流 */
    buffer: number[]
  }

  export type InnerAudioContext = {
    /** InnerAudioContext 对象 ContextId */
    contextId: string
  }

  export type AudioFileParams = {
    /** 音频文件路径 */
    path: string
  }

  export type AudioFileResponse = {
    /** 音频时长 */
    duration: number
  }

  export type InnerAudioBean = {
    /**
     * InnerAudioContext 对象 contextId
     * 需要传递createInnerAudioContext方法创建的InnerAudioContext对象Id才能找到播放实例
     */
    contextId: string
    /** src 音频资源的地址 */
    src: string
    /** startTime 开始播放的位置 */
    startTime?: number
    /** autoplay 是否自动开始播放 */
    autoplay?: boolean
    /** 是否循环播放，默认为 false */
    loop?: boolean
    /** 音量。范围 0~1。默认为 1 */
    volume?: number
    /** 播放速度。范围 0.5-2.0，默认为 1。（Android 需要 6 及以上版本） */
    playbackRate?: number
  }

  export type InnerAudioSeekBean = {
    /** InnerAudioContext 对象 ContextId */
    contextId: string
    /** 跳转的时间，单位 s。精确到小数点后 3 位，即支持 ms 级别精确度 */
    position?: number
  }

  export type AuthorizeBean = {
    /**
     * scope 权限名称
     * 举例子：
     * scope.bluetooth 蓝牙权限
     * scope.writePhotosAlbum 写入相册权限
     * scope.userLocationBackground 后台定位权限
     * scope.record 麦克风权限
     * scope.camera 摄像头权限
     * scope.userLocation 低精度定位权限
     * scope.userPreciseLocation 高精度定位权限
     */
    scope: string
  }

  export type ToMiniProgramBean = {
    /** 要打开的小程序appId */
    appId?: string
    /** 打开的页面路径,如果为空则打开首页,path 中 ? 后面的部分会成为 query，在小程序的 `App.onLaunch`、`App.onShow` 和 `Page.onLoad` 的回调函数 */
    path?: string
    /** 打开小程序的转场方式,分为right|bottom,指代水平和竖直方向 */
    position?: string
    /** 传递给目标小程序的数据,目标小程序可在 `App.onLaunch`，`App.onShow` 中获取到这份数据 */
    extraData?: Record<string, any>
    /** 要打开的小程序版本。仅在当前小程序为开发版或体验版时此参数有效。如果当前小程序是正式版，则打开的小程序必定是正式版 */
    envVersion?: string
    /** 小程序链接，当传递该参数后，可以不传 appId 和 path */
    shortLink?: string
  }

  export type DeviceMotionBean = {
    /** 监听加速度数据回调函数的执行频率 */
    interval?: DeviceMotionInterval
  }

  export type DownLoadBean = {
    /** 网络请求id */
    requestId: string
    /** 下载资源的 url */
    url: string
    /** HTTP 请求的 Header，Header 中不能设置 Referer */
    header?: Record<string, string>
    /** 超时时间，单位为毫秒 */
    timeout?: number
    /** 指定文件下载后存储的路径 (本地路径) */
    filePath?: string
  }

  export type DownLoadResult = {
    /** 临时文件路径 (本地路径)。没传入 filePath 指定文件存储路径时会返回，下载后的文件会存储到一个临时文件 */
    tempFilePath: string
    /** 用户文件路径 (本地路径)。传入 filePath 时会返回，跟传入的 filePath 一致 */
    filePath: string
    /** 开发者服务器返回的 HTTP 状态码 */
    statusCode: number
    /** 网络请求过程中一些调试信息 */
    profile: Profile
  }

  export type RequestBean = {
    /** 网络请求id */
    requestId: string
  }

  export type AccessFileParams = {
    /** 要判断是否存在的文件/目录路径 (本地路径) */
    path: string
  }

  export type ReadFileBean = {
    /** 文件内容 */
    data: string
  }

  export type SaveFileSyncCallback = {
    /** 【待废弃， 不建议使用】存储后的文件路径 */
    savedFilePath: string
  }

  export type FileStatsResponse = {
    /** 文件列表 */
    fileStatsList: FileStats[]
  }

  export type RemoveFileParams = {
    /** taskId */
    fileId: string
    /** 需要删除的文件路径 (本地路径) */
    filePath: string
  }

  export type GyroscopeBean = {
    /** 监听陀螺仪数据回调函数的执行频率 */
    interval?: GyroscopeInterval
  }

  export type ChooseImageBean = {
    /** 最多可以选择的图片张数 */
    count?: number
    /** sizeType ['original', 'compressed'] */
    sizeType?: string[]
    /** 选择图片的来源 ['album', 'camera'] */
    sourceType?: string[]
  }

  export type ChooseImageCB = {
    /** 图片的本地临时文件路径列表 (本地路径) */
    tempFilePaths: string[]
    /** sizeType ['original', 'compressed'] */
    tempFiles?: TempFileCB[]
  }

  export type ChooseMediaBean = {
    /** 最多可以选择的文件数 */
    count?: number
    /**
     * 选择类型, 默认图片
     * 'image' 只能拍摄图片或从相册选择图片
     * 'video' 只能拍摄视频或从相册选择视频
     */
    mediaType?: string
    /**
     * 图片和视频选择的来源, 默认['album', 'camera']
     * 'album' 从相册选择
     * 'camera' 	使用相机拍摄
     */
    sourceType?: string[]
    /**
     * 拍摄视频最长拍摄时间，单位秒。默认10s
     * 时间范围为 3s 至 60s 之间。不限制相册。
     */
    maxDuration?: number
  }

  export type ChooseMediaCB = {
    /**
     * 文件类型
     * 'image' 图片
     * 'video' 视频
     */
    type: string
    /** 本地临时文件列表 */
    tempFiles?: TempMediaFileCB[]
  }

  export type ChooseCropImageBean = {
    /** 选择图片的来源 ['album', 'camera']，默认都支持 */
    sourceType?: string[]
  }

  export type ChooseCropImageCB = {
    /** 文件路径 */
    path: string
  }

  export type PreviewImageBean = {
    /** 需要预览的图片链接列表 */
    urls: string[]
    /** 当前显示图片的链接 */
    current: number
  }

  export type GetImageInfoParams = {
    /** 图片的路径，支持网络路径、本地路径 */
    src: string
  }

  export type ImageInfoCB = {
    /** 图片原始宽度，单位px。不考虑旋转。 */
    width: number
    /** 图片原始高度，单位px。不考虑旋转。 */
    height: number
    /**
     * 拍照时设备方向
     * 合法值	说明
     * up	默认方向（手机横持拍照），对应 Exif 中的 1。或无 orientation 信息。
     * up-mirrored	同 up，但镜像翻转，对应 Exif 中的 2
     * down	旋转180度，对应 Exif 中的 3
     * down-mirrored	同 down，但镜像翻转，对应 Exif 中的 4
     * left-mirrored	同 left，但镜像翻转，对应 Exif 中的 5
     * right	顺时针旋转90度，对应 Exif 中的 6
     * right-mirrored	同 right，但镜像翻转，对应 Exif 中的 7
     * left	逆时针旋转90度，对应 Exif 中的 8
     */
    orientation: string
    /**
     * 图片格式。
     * 合法值	说明
     * unknown	未知格式
     * jpeg	jpeg压缩格式
     * png	png压缩格式
     * gif	gif压缩格式
     * tiff	tiff压缩格式
     */
    type: string
  }

  export type GetVideoInfoParams = {
    /** 视频文件路径，可以是临时文件路径也可以是永久文件路径 */
    src: string
  }

  export type VideoInfoCB = {
    /** 图片原始宽度，单位px。不考虑旋转。 */
    width: number
    /** 图片原始高度，单位px。不考虑旋转。 */
    height: number
    /**
     * 画面方向
     * 合法值	说明
     * up	默认方向（手机横持拍照），对应 Exif 中的 1。或无 orientation 信息。
     * up-mirrored	同 up，但镜像翻转，对应 Exif 中的 2
     * down	旋转180度，对应 Exif 中的 3
     * down-mirrored	同 down，但镜像翻转，对应 Exif 中的 4
     * left-mirrored	同 left，但镜像翻转，对应 Exif 中的 5
     * right	顺时针旋转90度，对应 Exif 中的 6
     * right-mirrored	同 right，但镜像翻转，对应 Exif 中的 7
     * left	逆时针旋转90度，对应 Exif 中的 8
     */
    orientation: string
    /** 视频格式 */
    type: string
    /** 视频时长 */
    duration: number
    /** 视频大小，单位 kB */
    size: number
    /** 视频帧率 */
    fps: number
    /** 视频码率，单位 kbps */
    bitrate: number
  }

  export type SaveVideoParams = {
    /** 视频文件路径，可以是临时文件路径也可以是永久文件路径 (本地路径) */
    filePath: string
  }

  export type ToastBean = {
    /** 提示的内容 */
    title: string
    /** 图标 'success' / 'error' / 'loading' / 'none' */
    icon?: string
    /** 自定义图标的本地路径，image 的优先级高于 icon */
    image?: string
    /** 提示的延迟时间 */
    duration?: number
    /** 是否显示透明蒙层，防止触摸穿透 */
    mask?: boolean
  }

  export type ModalBean = {
    /** 提示的标题 */
    title: string
    /** 提示的内容 */
    content?: string
    /** 是否显示取消按钮 */
    showCancel?: boolean
    /** 取消按钮的文字，最多 4 个字符 */
    cancelText?: string
    /** 取消按钮的文字颜色，必须是 16 进制格式的颜色字符串 */
    cancelColor?: string
    /** 确认按钮的文字，最多 4 个字符 */
    confirmText?: string
    /** 确认按钮的文字颜色，必须是 16 进制格式的颜色字符串 */
    confirmColor?: string
  }

  export type ModalCallback = {
    /** 为 true 时，表示用户点击了确定按钮 */
    confirm: boolean
    /** 为 true 时，表示用户点击了取消（用于 Android 系统区分点击蒙层关闭还是点击取消按钮关闭） */
    cancel: boolean
  }

  export type LoadingBean = {
    /** 提示的内容 */
    title: string
    /** 是否显示透明蒙层，防止触摸穿透 */
    mask?: boolean
  }

  export type ActionSheet = {
    /** 警示文案 */
    alertText?: string
    /** 按钮的文字数组，数组长度最大为 6 */
    itemList: string[]
    /** 按钮的文字颜色 */
    itemColor?: string
  }

  export type ActionSheetCallback = {
    /** 用户点击的按钮序号，从上到下的顺序，从0开始 */
    tapIndex: number
  }

  export type HTTPRequest = {
    /** 开发者服务器接口地址 */
    url: string
    /** 网络请求 id */
    taskId: string
    /** 请求的参数 */
    data?: string
    /** 设置请求的 header，header 中不能设置 Referer。content-type 默认为 application/json */
    header?: Record<string, string>
    /** 超时时间，单位为毫秒 */
    timeout?: number
    /** HTTP 请求方法 */
    method?: HTTPMethod
    /** 返回的数据格式 */
    dataType?: any
    /** 返回的数据类型 */
    responseType?: string
    /** enableHttp2 */
    enableHttp2?: boolean
    /** enableQuic */
    enableQuic?: boolean
    /** enableCache */
    enableCache?: boolean
  }

  export type SuccessResult = {
    /** 开发者服务器返回的数据 */
    data: string
    /** 开发者服务器返回的 HTTP 状态码 */
    statusCode: number
    /** 开发者服务器返回的 HTTP Response Header */
    header: Record<string, string>
    /** 开发者服务器返回的 cookies，格式为字符串数组 */
    cookies: string[]
    /** 网络请求过程中一些调试信息 */
    profile: Profile
    /** 网络请求id，用户取消、监听等操作 */
    taskId: string
  }

  export type RequestContext = {
    /** 网络请求id */
    taskId: string
  }

  export type PhoneCallBean = {
    /** 需要拨打的电话号码 */
    phoneNumber: string
  }

  export type ClipboradDataBean = {
    /** 剪贴板的内容 */
    data: string
  }

  export type WifiInfo = {
    /** wifi的SSID */
    SSID: string
    /** wifi的BSSID */
    BSSID: string
    /** Wi-Fi 信号强度, 安卓取值 0 ～ 100 ，iOS 取值 0 ～ 1 ，值越大强度越大 */
    signalStrength: number
    /**
     * Wi-Fi是否安全
     * Android：Android系统12开始支持。
     */
    secure: boolean
    /** Wi-Fi 频段单位 MHz */
    frequency: number
  }

  export type UpdateVolumeParams = {
    /** 音量，阈值【0 - 1】 */
    value: number
  }

  export type SystemSetting = {
    /** 蓝牙的系统开关，默认false */
    bluetoothEnabled?: boolean
    /** 地理位置的系统开关，默认false */
    locationEnabled?: boolean
    /** Wi-Fi 的系统开关，默认false */
    wifiEnabled?: boolean
    /**
     * 设备方向, 默认竖屏
     * 竖屏 = "portrait"， 横屏 = "landscape"
     */
    deviceOrientation?: string
  }

  export type DeviceInfoResponse = {
    /** 应用二进制接口类型（仅 Android 支持） */
    abi: string
    /** 设备品牌 */
    brand: string
    /** 设备型号。新机型刚推出一段时间会显示unknown。 */
    model: string
    /** 操作系统及版本 */
    system: string
    /** 客户端平台 */
    platform: string
  }

  export type SystemInfo = {
    is24Hour: boolean
    system: string
    brand: string
    model: string
    platform: string
    timezoneId: string
    pixelRatio: number
    screenWidth: number
    screenHeight: number
    windowWidth: number
    windowHeight: number
    statusBarHeight: number
    language: string
    safeArea: SafeArea
    albumAuthorized: boolean
    cameraAuthorized: boolean
    locationAuthorized: boolean
    microphoneAuthorized: boolean
    notificationAuthorized: boolean
    notificationAlertAuthorized: boolean
    notificationBadgeAuthorized: boolean
    notificationSoundAuthorized: boolean
    bluetoothEnabled: boolean
    locationEnabled: boolean
    wifiEnabled: boolean
    theme?: Themes
    deviceOrientation?: Orientation
  }

  export type GetConnectedWifiParams = {
    /**
     * 是否需要返回部分 Wi-Fi 信息
     * 安卓 thing.getConnectedWifi 若设置了 partialInfo:true ，将会返回只包含 SSID 属性的 WifiInfo 对象。
     * iOS thing.getConnectedWifi 若设置了 partialInfo:true ，将会返回只包含 SSID、BSSID 属性的 WifiInfo 对象，且需要用户开启微信定位权限才能正确返回结果。
     * 默认值：false
     */
    partialInfo?: boolean
  }

  export type NetworkTypeCB = {
    /** 网络类型 */
    networkType: string
    /** 信号强弱，单位 dbm */
    signalStrength: number
  }

  export type ScreenBean = {
    /** 屏幕亮度值，范围 0 ~ 1。0 最暗，1 最亮 */
    value: number
  }

  export type SetKeepScreenOnParam = {
    /** 是否保持屏幕常亮 */
    keepScreenOn: boolean
  }

  export type TUNIVibrateBean = {
    /** 震动强度类型，有效值为：heavy、medium、light */
    type: string
  }

  export type AudioStart = {
    /** 录音的时长，单位 ms，最大值 600000（10 分钟） */
    duration?: number
    /** 采样率 */
    sampleRate?: number
    /** 录音通道数 */
    numberOfChannels?: number
    /** 编码码率，有效值见下表格 */
    encodeBitRate?: number
    /** 音频格式 */
    format?: string
    /** 指定帧大小，单位 KB。传入 frameSize 后，每录制指定帧大小的内容后，会回调录制的文件内容，不指定则不会回调。暂仅支持 mp3、pcm 格式。 */
    frameSize: number
    /** 指定录音的音频输入源 */
    audioSource?: string
    /** 录音上下文 */
    contextId: string
  }

  export type AudioRecordResult = {
    /** 录音文件的临时路径 (本地路径) */
    tempFilePath: string
  }

  export type AudioRecordContext = {
    /** 对象id */
    contextId: string
  }

  export type AudioRecordingRequest = {
    /** 录音上下文 */
    contextId: string
    /** 间隔时间  ms */
    period: number
  }

  export type ScanCodeBean = {
    /** 是否只能从相机扫码，不允许从相册选择图片 */
    onlyFromCamera?: boolean
    /** 扫码类型 */
    scanType?: string[]
  }

  export type ScanCodeResult = {
    /** 所扫码的内容 */
    result: string
    /** 所扫码的类型 */
    scanType: string
    /** 所扫码的字符集 */
    charSet: string
    /** 当所扫的码为当前小程序二维码时，会返回此字段，内容为二维码携带的 path (不一定会有返回值) */
    path: string
    /** 原始数据，base64编码 */
    rawData: string
  }

  export type StorageCallback = {
    /** key对应的内容 */
    data?: string
  }

  export type UpLoadBean = {
    /** 网络请求id */
    requestId: string
    /** 开发者服务器地址 */
    url: string
    /** 要上传文件资源的路径 (本地路径) */
    filePath: string
    /** 文件对应的 key，开发者在服务端可以通过这个 key 获取文件的二进制内容 */
    name: string
    /** HTTP 请求的 Header，Header 中不能设置 Referer */
    header?: Record<string, string>
    /** HTTP 请求中其他额外的 form data */
    formData?: Record<string, string>
    /** 超时时间，单位为毫秒 */
    timeout?: number
  }

  export type UpLoadResult = {
    /** 开发者服务器返回的数据 */
    data: string
    /** 开发者服务器返回的 HTTP 状态码 */
    statusCode: number
  }

  /**
   * 创建内部audio上下文InnerAudioContext对象
   */
  interface CreateInnerAudioContextTask {
    /**
     * 暂停
     */
    pause(params: {
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
     * 恢复
     */
    resume(params: {
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
     * 播放
     */
    play(params: {
      /** src 音频资源的地址 */
      src: string
      /** startTime 开始播放的位置 */
      startTime?: number
      /** autoplay 是否自动开始播放 */
      autoplay?: boolean
      /** 是否循环播放，默认为 false */
      loop?: boolean
      /** 音量。范围 0~1。默认为 1 */
      volume?: number
      /** 播放速度。范围 0.5-2.0，默认为 1。（Android 需要 6 及以上版本） */
      playbackRate?: number
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
     * 跳转到指定位置
     */
    seek(params: {
      /** 跳转的时间，单位 s。精确到小数点后 3 位，即支持 ms 级别精确度 */
      position?: number
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
     * 停止。停止后的音频再播放会从头开始播放
     */
    stop(params: {
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
     * 销毁当前实例
     */
    destroy(params: {
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
     * 监听音频播放进度更新事件
     */
    onTimeUpdate(
      listener: (params: {
        /** InnerAudioContext 对象 ContextId */
        contextId: string
        /** 播放进度 【0 - 1】 */
        time: number
      }) => void
    ): void
  }
  export function createInnerAudioContext(params?: {
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
  }): CreateInnerAudioContextTask

  /**
   * 一个可以监听下载进度变化事件，以及取消下载任务的对象
   */
  interface DownloadFileTask {
    /**
     * 中断下载任务
     */
    abort(params: {
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
     * 监听 HTTP Response Header 事件。会比请求完成事件更早
     */
    onHeadersReceived(
      listener: (params: {
        /** 开发者服务器返回的 HTTP Response Header */
        header: Record<string, string>
        /** 网络请求id */
        requestId: string
      }) => void
    ): void

    /**
     * 取消监听 HTTP Response Header 事件
     */
    offHeadersReceived(
      listener: (params: {
        /** 开发者服务器返回的 HTTP Response Header */
        header: Record<string, string>
        /** 网络请求id */
        requestId: string
      }) => void
    ): void

    /**
     * 监听下载进度变化事件
     */
    onProgressUpdate(
      listener: (params: {
        /** 下载进度百分比 */
        progress: number
        /** 已经下载的数据长度，单位 Bytes */
        totalBytesSent: number
        /** 预期需要下载的数据总长度，单位 Bytes */
        totalBytesExpectedToSend: number
        /** 网络请求id */
        requestId: string
      }) => void
    ): void

    /**
     * 取消监听下载进度变化事件
     */
    offProgressUpdate(
      listener: (params: {
        /** 下载进度百分比 */
        progress: number
        /** 已经下载的数据长度，单位 Bytes */
        totalBytesSent: number
        /** 预期需要下载的数据总长度，单位 Bytes */
        totalBytesExpectedToSend: number
        /** 网络请求id */
        requestId: string
      }) => void
    ): void
  }
  export function downloadFile(params: {
    /** 下载资源的 url */
    url: string
    /** HTTP 请求的 Header，Header 中不能设置 Referer */
    header?: Record<string, string>
    /** 超时时间，单位为毫秒 */
    timeout?: number
    /** 指定文件下载后存储的路径 (本地路径) */
    filePath?: string
    complete?: () => void
    success?: (params: {
      /** 临时文件路径 (本地路径)。没传入 filePath 指定文件存储路径时会返回，下载后的文件会存储到一个临时文件 */
      tempFilePath: string
      /** 用户文件路径 (本地路径)。传入 filePath 时会返回，跟传入的 filePath 一致 */
      filePath: string
      /** 开发者服务器返回的 HTTP 状态码 */
      statusCode: number
      /** 网络请求过程中一些调试信息 */
      profile: Profile
    }) => void
    failure?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
  }): DownloadFileTask

  /**
   * 文件管理器
   */
  interface GetFileSystemManagerTask {
    /**
     * 判断文件/目录是否存在
     */
    access(params: {
      /** 要判断是否存在的文件/目录路径 (本地路径) */
      path: string
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
     * 读取本地文件内容
     */
    readFile(params: {
      /** 要写入的文件路径 (本地路径) */
      filePath: string
      /**
       * 指定读取文件的字符编码。
       * 支持 utf8/ascii/base64。如果不传 encoding，默认utf8
       */
      encoding?: string
      /** 从文件指定位置开始读，如果不指定，则从文件头开始读。读取的范围应该是左闭右开区间 [position, position+length)。有效范围：[0, fileLength - 1]。单位：byte */
      position?: number
      /** 指定文件的长度，如果不指定，则读到文件末尾。有效范围：[1, fileLength]。单位：byte */
      length?: number
      complete?: () => void
      success?: (params: {
        /** 文件内容 */
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
     * 读取本地文件内容
     */
    readFileSync(req?: FileReadFileReqBean): {
      /** 文件内容 */
      data: string
    }

    /**
     * 文件保存的同步方法， 在完成文件保存后调用回调， 需要与getTempDirectory配合使用， 目标路径会校验是否包含getTempDirectory前缀
     */
    saveFile(params: {
      /** 临时存储文件路径 */
      tempFilePath: string
      /** 要存储的文件路径 */
      filePath: string
      complete?: () => void
      success?: (params: {
        /** 【待废弃， 不建议使用】存储后的文件路径 */
        savedFilePath: string
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
     * 文件保存的同步方法， 在完成文件保存后调用回调， 需要与getTempDirectory配合使用， 目标路径会校验是否包含getTempDirectory前缀
     */
    saveFileSync(params?: SaveFileSyncParams): {
      /** 【待废弃， 不建议使用】存储后的文件路径 */
      savedFilePath: string
    }

    /**
     * 获取文件Stats对象，需要文件读写权限
     */
    stat(params: {
      /** 文件/目录路径 (本地路径) */
      path: string
      /**
       * 是否递归获取目录下的每个文件的 Stats 信息
       * 默认值：false
       */
      recursive?: boolean
      complete?: () => void
      success?: (params: {
        /** 文件列表 */
        fileStatsList: FileStats[]
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
     * 获取文件Stats对象，需要文件读写权限
     */
    statSync(params?: FileStatsParams): {
      /** 文件列表 */
      fileStatsList: FileStats[]
    }

    /**
     * 创建目录，需要文件读写权限
     */
    mkdir(params: {
      /** 创建的目录路径 (本地路径) */
      dirPath: string
      /**
       * 是否在递归创建该目录的上级目录后再创建该目录。如果对应的上级目录已经存在，则不创建该上级目录。
       * 如 dirPath 为 a/b/c/d 且 recursive 为 true，将创建 a 目录，再在 a 目录下创建 b 目录，
       * 以此类推直至创建 a/b/c 目录下的 d 目录。
       * 默认值：false
       */
      recursive?: boolean
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
     * 创建目录，需要文件读写权限
     */
    mkdirSync(params?: MakeDirParams): null

    /**
     * 删除目录，需要文件读写权限
     */
    rmdir(params: {
      /** 要删除的目录路径 (本地路径) */
      dirPath: string
      /**
       * 是否递归删除目录。如果为 true，则删除该目录和该目录下的所有子目录以及文件。
       * 默认值：false
       */
      recursive?: boolean
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
     * 删除目录，需要文件读写权限
     */
    rmdirSync(params?: RemoveDirParams): null

    /**
     * 写文件，需要文件读写权限
     */
    writeFile(params: {
      /** 要写入的文件路径 (本地路径) */
      filePath: string
      /** 要写入的文本数据, 根据encoding编码 */
      data: string
      /** 指定写入文件的字符编码,目前支持【utf8、ascii、base64】, 默认utf8 */
      encoding?: string
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
     * 写文件，需要文件读写权限
     */
    writeFileSync(params?: WriteFileParams): null

    /**
     * 删除已保存的本地缓存文件，需要文件读写权限
     */
    removeSavedFile(params: {
      /** 需要删除的文件路径 (本地路径) */
      filePath: string
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
  export function getFileSystemManager(params?: {
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
  }): GetFileSystemManagerTask

  /**
   * 获取网络请求任务对象RequestTask
   */
  interface RequestTask {
    /**
     * 中断请求任务
     */
    abort(params: {
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
     * 监听 HTTP Response Header 事件。会比请求完成事件更早
     */
    onHeadersReceived(
      listener: (params: {
        /** 开发者服务器返回的 HTTP Response Header */
        header: Record<string, string>
        /** 网络请求id */
        requestId: string
      }) => void
    ): void

    /**
     * 取消监听 HTTP Response Header 事件
     */
    offHeadersReceived(
      listener: (params: {
        /** 开发者服务器返回的 HTTP Response Header */
        header: Record<string, string>
        /** 网络请求id */
        requestId: string
      }) => void
    ): void
  }
  export function request(params: {
    /** 开发者服务器接口地址 */
    url: string
    /** 请求的参数 */
    data?: string
    /** 设置请求的 header，header 中不能设置 Referer。content-type 默认为 application/json */
    header?: Record<string, string>
    /** 超时时间，单位为毫秒 */
    timeout?: number
    /** HTTP 请求方法 */
    method?: HTTPMethod
    /** 返回的数据格式 */
    dataType?: any
    /** 返回的数据类型 */
    responseType?: string
    /** enableHttp2 */
    enableHttp2?: boolean
    /** enableQuic */
    enableQuic?: boolean
    /** enableCache */
    enableCache?: boolean
    complete?: () => void
    success?: (params: {
      /** 开发者服务器返回的数据 */
      data: string
      /** 开发者服务器返回的 HTTP 状态码 */
      statusCode: number
      /** 开发者服务器返回的 HTTP Response Header */
      header: Record<string, string>
      /** 开发者服务器返回的 cookies，格式为字符串数组 */
      cookies: string[]
      /** 网络请求过程中一些调试信息 */
      profile: Profile
      /** 网络请求id，用户取消、监听等操作 */
      taskId: string
    }) => void
    failure?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
  }): RequestTask

  /**
   * 获取全局唯一的录音管理器
   */
  interface GetRecorderManagerTask {
    /**
     * 开始录音
     */
    start(params: {
      /** 录音的时长，单位 ms，最大值 600000（10 分钟） */
      duration?: number
      /** 采样率 */
      sampleRate?: number
      /** 录音通道数 */
      numberOfChannels?: number
      /** 编码码率，有效值见下表格 */
      encodeBitRate?: number
      /** 音频格式 */
      format?: string
      /** 指定帧大小，单位 KB。传入 frameSize 后，每录制指定帧大小的内容后，会回调录制的文件内容，不指定则不会回调。暂仅支持 mp3、pcm 格式。 */
      frameSize: number
      /** 指定录音的音频输入源 */
      audioSource?: string
      complete?: () => void
      success?: (params: {
        /** 录音文件的临时路径 (本地路径) */
        tempFilePath: string
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
     * 继续录音
     */
    resume(params: {
      complete?: () => void
      success?: (params: {
        /** 录音文件的临时路径 (本地路径) */
        tempFilePath: string
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
     * 暂停录音
     */
    pause(params: {
      complete?: () => void
      success?: (params: {
        /** 录音文件的临时路径 (本地路径) */
        tempFilePath: string
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
     * 停止录音
     */
    stop(params: {
      complete?: () => void
      success?: (params: {
        /** 录音文件的临时路径 (本地路径) */
        tempFilePath: string
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
     * 开始持续录音
     */
    startRecording(params: {
      /** 间隔时间  ms */
      period: number
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
     * 停止持续录音
     */
    stopRecording(params: {
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
  export function getRecorderManager(params?: {
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
  }): GetRecorderManagerTask

  /**
   * 获取网络请求任务对象RequestTask
   */
  interface UploadFileTask {
    /**
     * 中断上传任务
     */
    abort(params: {
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
     * 监听 HTTP Response Header 事件。会比请求完成事件更早
     */
    onHeadersReceived(
      listener: (params: {
        /** 开发者服务器返回的 HTTP Response Header */
        header: Record<string, string>
        /** 网络请求id */
        requestId: string
      }) => void
    ): void

    /**
     * 取消监听 HTTP Response Header 事件
     */
    offHeadersReceived(
      listener: (params: {
        /** 开发者服务器返回的 HTTP Response Header */
        header: Record<string, string>
        /** 网络请求id */
        requestId: string
      }) => void
    ): void

    /**
     * 监听上传进度变化事件
     */
    onProgressUpdate(
      listener: (params: {
        /** 下载进度百分比 */
        progress: number
        /** 已经下载的数据长度，单位 Bytes */
        totalBytesSent: number
        /** 预期需要下载的数据总长度，单位 Bytes */
        totalBytesExpectedToSend: number
        /** 网络请求id */
        requestId: string
      }) => void
    ): void

    /**
     * 取消监听上传进度变化事件
     */
    offProgressUpdate(
      listener: (params: {
        /** 下载进度百分比 */
        progress: number
        /** 已经下载的数据长度，单位 Bytes */
        totalBytesSent: number
        /** 预期需要下载的数据总长度，单位 Bytes */
        totalBytesExpectedToSend: number
        /** 网络请求id */
        requestId: string
      }) => void
    ): void
  }
  export function uploadFile(params: {
    /** 开发者服务器地址 */
    url: string
    /** 要上传文件资源的路径 (本地路径) */
    filePath: string
    /** 文件对应的 key，开发者在服务端可以通过这个 key 获取文件的二进制内容 */
    name: string
    /** HTTP 请求的 Header，Header 中不能设置 Referer */
    header?: Record<string, string>
    /** HTTP 请求中其他额外的 form data */
    formData?: Record<string, string>
    /** 超时时间，单位为毫秒 */
    timeout?: number
    complete?: () => void
    success?: (params: {
      /** 开发者服务器返回的数据 */
      data: string
      /** 开发者服务器返回的 HTTP 状态码 */
      statusCode: number
    }) => void
    failure?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
  }): UploadFileTask
}
