/**
 * DeviceKit
 *
 * @version 4.5.1
 */
declare namespace ty.device {
  /**
   * 注册监听远离beacon设备范围事件
   */
  export function unregisterLeaveBeaconFenceEvent(params: {
    /** 设备模型 设备id */
    deviceId: string
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
   * 注册监听远离beacon设备范围事件
   */
  export function registerLeaveBeaconFenceEvent(params: {
    /** 设备模型 设备id */
    deviceId: string
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
   * 写入BeaconFence配置
   */
  export function writeBeaconFenceConfig(params: {
    /** 设备模型 设备id */
    deviceId: string
    /** 最小信号强度 */
    beaconFenceRssi: number
    /** 设置是否打开进入范围强度区间发送dp功能 */
    isOpenEventWhenApproachingBeaconFence: boolean
    /** 设置是否打开离开范围强度区间发送dp功能 */
    isOpenEventWhenLeaveBeaconFence: boolean
    /** 设置是否打开离开范围强度区间发送本地通知 */
    isOpenNotifyWhenLeaveBeaconFence: boolean
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
   * 读取beaconFence配置
   */
  export function readBeaconFenceConfig(params: {
    /**
     * 设备模型
     * deviceId 设备Id
     */
    deviceId: string
    complete?: () => void
    success?: (params: {
      /** 设备模型 设备id */
      deviceId: string
      /** 最小信号强度 */
      beaconFenceRssi: number
      /** 设置是否打开进入范围强度区间发送dp功能 */
      isOpenEventWhenApproachingBeaconFence: boolean
      /** 设置是否打开离开范围强度区间发送dp功能 */
      isOpenEventWhenLeaveBeaconFence: boolean
      /** 设置是否打开离开范围强度区间发送本地通知 */
      isOpenNotifyWhenLeaveBeaconFence: boolean
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
   * 移除BT配对 (仅Android端实现)
   */
  export function disconnectBTBond(params: {
    /** 设备的mac地址 */
    mac: string
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
   * 打开BT配对窗口 (仅Android端实现)
   */
  export function connectBTBond(params: {
    /** 设备的mac地址 */
    mac: string
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
   * 取消文件传输到蓝牙设备 仅IOS支持
   */
  export function cancelBLEFileTransfer(params: {
    /** 设备模型 设备id */
    deviceId: string
    /** 文件id */
    fileId: number
    /** 文件标识符 */
    fileIdentifier: string
    /** 文件版本 */
    fileVersion: number
    /** 文件地址 */
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
   * 传输文件到蓝牙设备
   */
  export function postBLEFileTransfer(params: {
    /** 设备模型 设备id */
    deviceId: string
    /** 文件id */
    fileId: number
    /** 文件标识符 */
    fileIdentifier: string
    /** 文件版本 */
    fileVersion: number
    /** 文件地址 */
    filePath: string
    complete?: () => void
    success?: (params: {
      /** true/false 传输成功/传输失败 */
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
   * 获取BLE外设的信号
   */
  export function getBLEDeviceRSSI(params: {
    /**
     * 设备模型
     * deviceId 设备Id
     */
    deviceId: string
    complete?: () => void
    success?: (params: {
      /**
       * 设备信号
       * signal 若为 0，则获取失败
       */
      signal: number
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
   * 开始监听BLE(thing)连接状态
   */
  export function subscribeBLEConnectStatus(params: {
    /**
     * 设备模型
     * deviceId 设备Id
     */
    deviceId: string
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
   * 停止监听BLE(thing)连接状态
   */
  export function unsubscribeBLEConnectStatus(params: {
    /**
     * 设备模型
     * deviceId 设备Id
     */
    deviceId: string
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
   * 连接BLE(thing)设备，该方法只执行连接动作，连接状态通过【onBLEConnectStatusChange】事件获取
   */
  export function connectBLEDevice(params: {
    /**
     * 设备模型
     * deviceId 设备Id
     */
    deviceId: string
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
   * 直连BLE(thing)设备，该方法只执行连接动作，连接状态通过【onBLEConnectStatusChange】事件获取
   */
  export function directConnectBLEDevice(params: {
    /**
     * 设备模型
     * deviceId 设备Id
     */
    deviceId: string
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
   * 断开BLE(thing)设备
   */
  export function disconnectBLEDevice(params: {
    /**
     * 设备模型
     * deviceId 设备Id
     */
    deviceId: string
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
   * 查询BLE(thing)本地在线状态
   */
  export function getBLEOnlineState(params: {
    /**
     * 设备模型
     * deviceId 设备Id
     */
    deviceId: string
    complete?: () => void
    success?: (params: {
      /**
       * 蓝牙在线状态的回调boolean值
       * isOnline 是否在线
       */
      isOnline: boolean
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
   * 开始监听BLE(thing)设备数据透传通道上报，上报情况通过【onBLETransparentDataReport】事件获取
   */
  export function subscribeBLETransparentDataReport(params: {
    /**
     * 设备模型
     * deviceId 设备Id
     */
    deviceId: string
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
   * 停止监听BLE(thing)设备数据透传通道上报
   */
  export function unsubscribeBLETransparentDataReport(params: {
    /**
     * 设备模型
     * deviceId 设备Id
     */
    deviceId: string
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
   * BLE(thing)下发透传数据
   */
  export function publishBLETransparentData(params: {
    /**
     * 蓝牙透传数据
     * deviceId: 设备 id
     */
    deviceId: string
    /** data: 透传内容 */
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
   * 获取加密过的设备 localKey
   *BLE(thing)蓝牙大数据通道传输过程中需要用到的特殊加密操作
   */
  export function getEncryptLocalKeyWithData(params: {
    /**
     * 大数据通道加密计算结构
     * deviceId 设备 id
     */
    deviceId: string
    /** keyDeviceId 需要传输加密密钥的设备Id */
    keyDeviceId: string
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
   * 大数据通道操作，支持进度反馈。不同的反馈通过以下事件返回给前端
   *1. 大数据从设备传输到App成功通过【onBLEBigDataChannelDeviceToAppSuccess】事件获取
   *2. 大数据上传到云端进度通过【onBLEBigDataChannelUploadCloudProgress】事件获取
   *3. BLE数据通道传输进度通过【onBLEBigDataChannelProgressEvent】事件获取
   */
  export function postBLEBigDataChannelWithProgress(params: {
    /** deviceId 设备 id */
    deviceId: string
    /**
     * 建立数据传输所需相关参数
     * command：通道操作的具体指令；start/stop：开启/关闭大数据通道；type：要上传的数据类型
     * requestParams 通道指令集
     * {
     *   "command": "start",
     *   "type": "1"
     * }
     */
    requestParams: Record<string, {}>
    complete?: () => void
    success?: (params: {
      /** deviceId 设备 id */
      deviceId: string
      /**
       * 数据传输完毕相关参数（type dps fileUrl）
       * resultParams 数据传输完毕相关参数
       */
      resultParams: Record<string, {}>
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
   * 发起蓝牙mesh设备连接。该方法只执行连接动作，连接状态通过【onTYBLEConnectStatusChange】事件获取
   */
  export function startBLEMeshLowPowerConnection(params: {
    /** deviceId 设备 id */
    deviceId: string
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
   * 断开蓝牙mesh设备连接。该方法只执行断开动作，连接状态通过【onTYBLEConnectStatusChange】事件获取
   */
  export function stopBLEMeshLowPowerConnection(params: {
    /** deviceId 设备 id */
    deviceId: string
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
   * 启动扫描Beacon扫描
   */
  export function startBLEScanBeacon(params: {
    /**
     * 设备模型
     * deviceId 设备Id
     */
    deviceId: string
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
   * 停止扫描Beacon扫描。
   */
  export function stopBLEScanBeacon(params: {
    /**
     * 设备模型
     * deviceId 设备Id
     */
    deviceId: string
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
   * 设备是否支持BLEBeacon能力
   */
  export function bluetoothCapabilityOfBLEBeacon(params: {
    /**
     * 设备模型
     * deviceId 设备Id
     */
    deviceId: string
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
   * 判断手机蓝牙是否打开
   */
  export function bluetoothIsPowerOn(params?: {
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
   * 在指定时间内扫描已配网的设备，扫描结果通过【onBLEScanBindDevice】事件获取
   */
  export function startBLEScanBindDevice(params: {
    /** 间隔扫描时间。如果<0，则返回错误 */
    interval: number
    /**
     * 扫描类型
     * SINGLE -> "SINGLE"
     * SINGLE_QR -> "SINGLE_QR"
     * MESH -> "MESH"
     * SIG_MESH -> "SIG_MESH"
     * NORMAL -> "NORMAL"
     * Thing_BEACON -> "Thing_BEACON"
     */
    scanType: string
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
   * 【废弃】iOS单端插件方法。调用 connectBLEDevice 连接蓝牙设备前需要先调用该方法开启扫描。
   *开启扫描
   */
  export function startBLEScan(params?: {
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
   * 【废弃】iOS单端插件方法。调用 connectBLEDevice 连接蓝牙设备前需要先调用该方法开启扫描。
   *开启扫描
   */
  export function startBLEScanSync(): null

  /**
   * 【废弃】iOS单端插件方法。不需要连接设备时调用该方法关闭扫描。
   *关闭扫描
   */
  export function stopBLEScan(params?: {
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
   * 【废弃】iOS单端插件方法。不需要连接设备时调用该方法关闭扫描。
   *关闭扫描
   */
  export function stopBLEScanSync(): null

  /**
   * 蓝牙设备是否支持某个能力
   *capability 不同值对应查询的具体能力值
   *0：OTA时DP是否可控
   *1：网关和App对于该设备是否使用低功耗在线逻辑
   *2：是否具备Beacon能力
   *3：是否有蓝牙LINK层加密使能
   *4：是否支持扩展模块
   *5：是否支持定时
   *6：是否支持蓝牙BT/BLE双模
   *7：是否需要强制LINK层加密
   */
  export function bluetoothCapabilityIsSupport(params: {
    /** 设备Id */
    deviceId: string
    /**
     * 能力值标位
     * 5：定时
     */
    capability: number
    complete?: () => void
    success?: (params: {
      /**
       * 是否支持蓝牙相关能力的结果回调
       * isSupport 是否支持
       */
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
   * 获取设备BT信息
   */
  export function getBTDeviceInfo(params: {
    /**
     * 设备模型
     * deviceId 设备Id
     */
    deviceId: string
    complete?: () => void
    success?: (params: {
      /** 设备名称 */
      deviceName?: string
      /** 是否连接 */
      isConnected?: boolean
      /** 是否配对 */
      isBond?: boolean
      /** mac */
      mac?: string
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
   * 蓝牙连接
   *聚合接口, 支持ble, 双模中ble, beacon, mesh, mesh单火类连接
   */
  export function connectBluetoothDevice(params: {
    /** 设备ID */
    devId: string
    /**
     * 连接超时时限
     * 单位: 毫秒
     */
    timeoutMillis?: number
    /**
     * 来源类型
     * 如果是面板进来的自动连接, 输入1; 否则默认0, 为主动连接
     */
    souceType?: number
    /**
     * 蓝牙连接方式,默认0
     * 0 : 网关和app都需要，默认值，本地和网关两个途径任何一个可用均可生效
     * 1 : 仅app，只会判定本地是否在线，以及本地连接是否成功
     * 2 : 仅网关连接，只会判定网关是否在线，以及坚持网关连接是否成功
     */
    connectType?: number
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
   * 蓝牙断开连接
   *聚合接口, 支持ble, 双模中的ble, mesh单火类以及mesh连接断开. beacon设备调用无效
   */
  export function disconnectBluetoothDevice(params: {
    /** 设备ID */
    devId: string
    /**
     * 蓝牙连接方式,默认0
     * 0 : 网关和app都需要，默认值，本地和网关两个途径任何一个可用均可生效
     * 1 : 仅app，只会判定本地是否在线，以及本地连接是否成功
     * 2 : 仅网关连接，只会判定网关是否在线，以及坚持网关连接是否成功
     */
    connectType?: number
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
   * 激活设备的扩展模块
   */
  export function activeDeviceExtendModule(params: {
    /** 设备id */
    deviceId: string
    /** Wi-Fi的ssid */
    ssid?: string
    /** Wi-Fi的pwd */
    password?: string
    /**
     * 激活的类型
     * 0：普通双模设备的连云激活
     * 1：ble+x设备的可插拔模块的连云激活
     * 2：ble+Wi-Fi设备的 Wi-Fi模块的连云激活
     * 区别：类型0、2需要传设备ID、Wi-Fi的ssid和pwd。类型位1只需传设备id
     */
    activeType: number
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
   * 使网关进入配网模式，对其子设备进行配网
   */
  export function startGWActivation(params: {
    /**
     * 网关子设备激活数据
     * gateway Gateway 网关模型
     */
    gateway: Gateway
    /** timeout 超时时间设定（秒），建议值120 */
    timeout: number
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
   * 停止网关的配网模式
   */
  export function stopGWActivation(params: {
    /**
     * 网关模型
     * gwId 网关设备Id
     */
    gwId: string
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
   * 跳转设备断线重连页面
   */
  export function openReconnectPage(params: {
    /**
     * 设备模型
     * deviceId 设备Id
     */
    deviceId: string
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
   * 免配网-开始设备激活
   */
  export function startDirectlyConnectedDeviceActivator(params: {
    /**
     * 设备Id
     * device Device 设备模型
     */
    device: Device
    /** timeout 超时时间设定（秒），建议值120 */
    timeout: number
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
   * 免配网-停止设备激活
   */
  export function stopDirectlyConnectedDeviceActivator(params: {
    /**
     * 设备Id
     * device Device 设备模型
     */
    device: Device
    /** timeout 超时时间设定（秒），建议值120 */
    timeout: number
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
   * 进入配网-选品类首页
   */
  export function openCategoryActivatorPage(params?: {
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
   * 免配网-开始设备扫描
   */
  export function startDirectlyConnectedSearchDevice(params: {
    /**
     * 设备Id
     * device Device 设备模型
     */
    device: Device
    /** timeout 超时时间设定（秒），建议值120 */
    timeout: number
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
   * 免配网-结束设备扫描
   */
  export function stopDirectlyConnectedSearchDevice(params: {
    /**
     * 设备Id
     * device Device 设备模型
     */
    device: Device
    /** timeout 超时时间设定（秒），建议值120 */
    timeout: number
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
   * 连云激活-WiFi的激活状态
   */
  export function getDeviceWifiActivatorStatus(params: {
    /**
     * 设备模型
     * deviceId 设备Id
     */
    deviceId: string
    complete?: () => void
    success?: (params: {
      /** 设备是否WiFi激活 */
      wifiActivator: boolean
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
   * 连云激活-进行wifi激活
   */
  export function startDeviceWifiActivator(params: {
    /**
     * 设备模型
     * deviceId 设备Id
     */
    deviceId: string
    complete?: () => void
    success?: (params: {
      /** 设备是否WiFi激活 */
      wifiActivator: boolean
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
   * 修改设备名称
   */
  export function renameDeviceName(params: {
    /** deviceId 设备id */
    deviceId: string
    /** name 设备名称 */
    name: string
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
   * 重置设备并恢复出厂设置。
   *设备数据会被清除并进入待配网状态。
   */
  export function resetFactory(params: {
    /**
     * deviceId 设备id
     * 支持跨面板获取其他的设备信息，当前面板可以传当前设备的 id 来进行获取
     */
    deviceId: string
    /** dps */
    dps?: Record<string, {}>
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
   * 移除设备
   */
  export function removeDevice(params: {
    /**
     * deviceId 设备id
     * 支持跨面板获取其他的设备信息，当前面板可以传当前设备的 id 来进行获取
     */
    deviceId: string
    /** dps */
    dps?: Record<string, {}>
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
   * 注册网关子设备监听器
   */
  export function registerGateWaySubDeviceListener(params: {
    /**
     * deviceId 设备id
     * 支持跨面板获取其他的设备信息，当前面板可以传当前设备的 id 来进行获取
     */
    deviceId: string
    /** dps */
    dps?: Record<string, {}>
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
   * 注销网关子设备监听器
   */
  export function unregisterGateWaySubDeviceListener(params: {
    /**
     * deviceId 设备id
     * 支持跨面板获取其他的设备信息，当前面板可以传当前设备的 id 来进行获取
     */
    deviceId: string
    /** dps */
    dps?: Record<string, {}>
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
   * 注册Zigbee网关子设备监听器
   */
  export function registerZigbeeGateWaySubDeviceListener(params: {
    /**
     * deviceId 设备id
     * 支持跨面板获取其他的设备信息，当前面板可以传当前设备的 id 来进行获取
     */
    deviceId: string
    /** dps */
    dps?: Record<string, {}>
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
   * 注销Zigbee网关子设备监听器
   */
  export function unregisterZigbeeGateWaySubDeviceListener(params: {
    /**
     * deviceId 设备id
     * 支持跨面板获取其他的设备信息，当前面板可以传当前设备的 id 来进行获取
     */
    deviceId: string
    /** dps */
    dps?: Record<string, {}>
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
   * 检查设备某个通道是否在线
   */
  export function getDeviceOnlineType(params: {
    /**
     * deviceId 设备id
     * 支持跨面板获取其他的设备信息，当前面板可以传当前设备的 id 来进行获取
     */
    deviceId: string
    /** dps */
    dps?: Record<string, {}>
    complete?: () => void
    success?: (params: {
      /** 设备网络在线类型 */
      onlineType: number
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
   * 获取设备的设备信息
   */
  export function getDeviceInfo(params: {
    /**
     * deviceId 设备id
     * 支持跨面板获取其他的设备信息，当前面板可以传当前设备的 id 来进行获取
     */
    deviceId: string
    /** dps */
    dps?: Record<string, {}>
    complete?: () => void
    success?: (params: {
      /** 设备所处房间名 */
      roomName?: string
      /** 产品信息，schema，功能定义都在里面 */
      schema: {}[]
      /**
       * dps
       * 设备的功能点状态，可以根据对应的 dpid 拿到具体的状态值去做业务逻辑
       */
      dps: Record<string, {}>
      /**
       * attribute
       * 产品属性定义，在 backend-ng 平台上可查到对应配置，使用二进制位运算的方式进行管理
       */
      attribute: number
      /**
       * baseAttribute
       * 基础产品属性定义
       */
      baseAttribute: number
      /**
       * capability
       * 产品能力值，在 backend-ng 平台上可以查询对应的勾选项，整体业务逻辑会根据该数据进行划分
       * 区分设备类型也可以根据该属性进行调整，按二进制位运算的方式进行管理
       */
      capability: number
      /**
       * dpName
       * 自定义 dp 的名字，通常在面板里会使用到
       */
      dpName: Record<string, string>
      /**
       * ability
       * 目前业务很少使用，用于区分特殊类型的设备
       */
      ability: number
      /**
       * icon
       * 设备的 icon url
       */
      icon: string
      /**
       * devId
       * 设备的唯一 id
       */
      devId: string
      /**
       * verSw
       * 设备固件版本号
       */
      verSw: string
      /**
       * isShare
       * 是否为分享设备，true 则是分享设备
       */
      isShare: boolean
      /**
       * bv
       * 设备的基线版本号
       */
      bv: string
      /**
       * uuid
       * 设备的固件唯一标识
       */
      uuid: string
      /**
       * panelConfig
       * 产品面板里的配置项，通常在 IoT 平台上可以查看到对应的配置
       */
      panelConfig: Record<string, {}>
      /**
       * activeTime
       * 设备激活时间，时间戳
       */
      activeTime: number
      /**
       * devAttribute
       * 设备的业务能力拓展，二进制位的方式进行运算
       */
      devAttribute: number
      /**
       * pcc
       * Thing自研蓝牙 mesh 产品的分类标识
       */
      pcc: string
      /**
       * nodeId
       * 子设备的短地址
       */
      nodeId: string
      /**
       * parentId
       * 上级节点 id，子设备/或蓝牙 mesh 设备通常会有该字段，用于内部寻找相关的网关或上级模型来进行业务处理
       */
      parentId?: string
      /**
       * category
       * 产品的分类
       */
      category: string
      /**
       * standSchemaModel
       * 标准产品功能集定义模型
       */
      standSchemaModel?: {}
      /**
       * productId
       * 设备对应的产品 id
       */
      productId: string
      /**
       * productVer
       * 设备对应的产品的版本号
       */
      productVer: string
      /**
       * bizAttribute
       * 业务属性能力
       */
      bizAttribute: number
      /**
       * meshId
       * 当前设备对应的蓝牙 mesh id
       */
      meshId: string
      /**
       * 【废弃】sigmeshId
       * 当前设备所属行业属性对应的蓝牙 mesh id
       */
      sigmeshId: string
      /**
       * meta
       * 设备自定义配置元属性，用于存放业务数据
       */
      meta: Record<string, {}>
      /**
       * isLocalOnline
       * 本地局域网是否在线
       */
      isLocalOnline: boolean
      /** 设备云端在线情况 */
      isCloudOnline: boolean
      /**
       * isOnline
       * 设备总的在线情况，只要一个情况在线，就是在线，复合在线情况
       */
      isOnline: boolean
      /**
       * name
       * 设备名称
       */
      name: string
      /** groupId */
      groupId: string
      /**
       * dpCodes
       * 标准功能集 code
       */
      dpCodes: Record<string, {}>
      /** 时区信息 */
      devTimezoneId: string
      /** 设备的功能点执行的时间 */
      dpsTime: Record<string, {}>
      /** 设备纬度 */
      latitude: string
      /** 设备经度 */
      longitude: string
      /** 设备ip地址 */
      ip?: string
      /** 是否为虚拟设备 */
      isVirtualDevice: boolean
      /** zigbeeInstallCode to the cloud to mark the gateway with installation code ability */
      isZigbeeInstallCode: boolean
      /** Activate sub-device capability flag. */
      protocolAttribute: number
      /** 连接状态，nearby状态 */
      connectionStatus: number
      /** 部分设备需要用mac进行唯一识别 ，比如mesh */
      mac?: string
      /** 蓝牙的设备能力值，由设备进行上报 */
      bluetoothCapability?: string
      /** 是否三方matter设备 */
      isTripartiteMatter: boolean
      /** 是否网关设备 */
      isGW: boolean
      /** 是否支持群组 */
      isSupportGroup: boolean
      /** 是否zigbee子设备 */
      isZigBeeSubDev: boolean
      /** cadv版本号 */
      cadv?: string
      /** 设备是否支持OTA */
      isSupportOTA: boolean
      /** 设备图标 */
      iconUrl: string
      /** 设备是否有Wi-Fi模块 */
      hasWifi: boolean
      /** 快捷控制dp */
      switchDp: number
      /** 快捷控制dp */
      switchDps: number[]
      /** 设备Wi-Fi模块的状态：1:不可用 2:可用 */
      wifiEnableState: number
      /** 设备产品配置 */
      configMetas: Record<string, {}>
      /** 是否为matter设备 */
      isMatter: boolean
      /** 设备是否支持双控 */
      isSupportLink: boolean
      /** 是否支持将设备添加到苹果家庭中 */
      isSupportAppleHomeKit?: boolean
      /**
       * attribute 格式化的二进制字符串
       * 产品属性定义，在 backend-ng 平台上可查到对应配置，使用二进制位运算的方式进行管理
       */
      attributeString: string
      /**
       * 设备的扩展模块的类型
       * 0：无扩展模块
       * 1：表示存在扩展模块，即设备为ble+x的设备
       * 2：扩展模块为Wi-Fi模块。即设备为ble+Wi-Fi的设备
       */
      extModuleType: number
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
   * 通过设备id队列获取设备的设备信息队列
   */
  export function getDeviceListByDevIds(params: {
    /** deviceId 设备ids */
    deviceIds: string[]
    complete?: () => void
    success?: (params: {
      /** 设备信息队列 */
      deviceInfos: DeviceInfo[]
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
   * 获取产品信息
   */
  export function getProductInfo(params: {
    /** 产品id */
    productId: string
    /** 产品版本号 */
    productVer?: string
    complete?: () => void
    success?: (params: {
      /** 面板配置项，可以在平台进行配置 */
      panelConfig: Record<string, {}>
      /** 产品功能定义集合 */
      schema: string
      /** 产品功能定义集合拓展 */
      schemaExt: string
      /**
       * capability
       * 产品能力值，在 backend-ng 平台上可以查询对应的勾选项，整体业务逻辑会根据该数据进行划分
       * 区分设备类型也可以根据该属性进行调整，按二进制位运算的方式进行管理
       */
      capability: number
      /**
       * attribute
       * 产品属性定义，在 backend-ng 平台上可查到对应配置，使用二进制位运算的方式进行管理
       */
      attribute: number
      /**
       * productId
       * 产品 id
       */
      productId: string
      /**
       * category
       * 产品的分类
       */
      category: string
      /**
       * categoryCode
       * 产品的二级分类
       */
      categoryCode: string
      /**
       * standard
       * 是否为标准产品
       */
      standard: boolean
      /**
       * pcc
       * Thing自研蓝牙 mesh 产品的分类标识
       */
      pcc: string
      /**
       * vendorInfo
       * Thing自研蓝牙 mesh 产品的分类标识，融合类使用
       */
      vendorInfo: string
      /**
       * quickOpDps
       * 快捷操作的 dp ids
       */
      quickOpDps: string[]
      /**
       * faultDps
       * 告警/错误的显示 dp ids
       */
      faultDps: string[]
      /**
       * displayDps
       * 快捷操作的 dp ids
       */
      displayDps: string[]
      /**
       * displayMsgs
       * 快捷操作显示文案
       */
      displayMsgs: Record<string, {}>
      /**
       * uiPhase
       * ui 包当前环境，预览包或线上包
       */
      uiPhase: string
      /**
       * uiId
       * ui 包唯一包名识别
       */
      uiId: string
      /**
       * uiVersion
       * ui 包版本号
       */
      uiVersion: string
      /**
       * ui
       * ui 小标识
       */
      ui: string
      /**
       * rnFind
       * 是否有包含 RN 包
       */
      rnFind: boolean
      /**
       * uiType
       * ui 包类型
       */
      uiType: string
      /**
       * uiName
       * ui 包名称
       */
      uiName: string
      /**
       * i18nTime
       * 产品语言包最新更新时间
       */
      i18nTime: number
      /**
       * supportGroup
       * 是否支持创建群组
       */
      supportGroup: boolean
      /**
       * supportSGroup
       * 是否支持创建标准群组
       */
      supportSGroup: boolean
      /**
       * configMetas
       * 产品特殊配置项，一些功能业务的特殊配置
       */
      configMetas: Record<string, {}>
      /**
       * productVer
       * 产品版本
       */
      productVer: string
      /**
       * attribute 格式化的二进制字符串
       * 产品属性定义，在 backend-ng 平台上可查到对应配置，使用二进制位运算的方式进行管理
       */
      attributeString: string
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
   * 获取子设备信息
   */
  export function getSubDeviceInfoList(params: {
    /** 网关设备id或上级节点id */
    meshId: string
    complete?: () => void
    success?: (params: DeviceInfo[]) => void
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
   * 判断设备上网类型是否与deviceModel物模型一致
   */
  export function validDeviceOnlineType(params: {
    /** 设备id */
    deviceId: string
    /**
     * 设备在线类型，
     * Wi-Fi online             1 << 0
     * Local online             1 << 1
     * Bluetooth LE online      1 << 2
     * Bluetooth LE mesh online 1 << 3
     */
    onlineType: number
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
   * 发送 dps
   */
  export function publishDps(params: {
    /** 设备id */
    deviceId: string
    /** dps */
    dps: Record<string, {}>
    /**
     * 下发通道类型
     * 0: 局域网
     * 1: 网络
     * 2: 自动
     */
    mode: number
    /**
     * 下发通道的优先级
     * LAN       = 0, // LAN
     * MQTT      = 1, // MQTT
     * HTTP      = 2, // Http
     * BLE       = 3, // Single Point Bluetooth
     * SIGMesh   = 4, // Sig Mesh
     * BLEMesh   = 5, // Thing Private Mesh
     * BLEBeacon = 6, // Beacon
     */
    pipelines: number[]
    /** 预留下发逻辑配置标记，后续可以拓展，例如下发声音，下发操作后续动作等等 */
    options: Record<string, {}>
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
   * 发送 标准dp
   */
  export function publishCommands(params: {
    /** 设备id */
    deviceId: string
    /** dps */
    dps: Record<string, {}>
    /**
     * 下发通道类型
     * 0: 局域网
     * 1: 网络
     * 2: 自动
     */
    mode: number
    /**
     * 下发通道的优先级
     * LAN       = 0, // LAN
     * MQTT      = 1, // MQTT
     * HTTP      = 2, // Http
     * BLE       = 3, // Single Point Bluetooth
     * SIGMesh   = 4, // Sig Mesh
     * BLEMesh   = 5, // Thing Private Mesh
     * BLEBeacon = 6, // Beacon
     */
    pipelines: number[]
    /** 预留下发逻辑配置标记，后续可以拓展，例如下发声音，下发操作后续动作等等 */
    options: Record<string, {}>
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
   * 指定通道发送dps控制指令
   */
  export function publishDpsWithPipeType(params: {
    /** 设备id */
    deviceId: string
    /** dps */
    dps: Record<string, {}>
    /**
     * 下发通道类型
     * 0: 局域网
     * 1: 网络
     * 2: 自动
     */
    mode: number
    /**
     * 下发通道的优先级
     * LAN       = 0, // LAN
     * MQTT      = 1, // MQTT
     * HTTP      = 2, // Http
     * BLE       = 3, // Single Point Bluetooth
     * SIGMesh   = 4, // Sig Mesh
     * BLEMesh   = 5, // Thing Private Mesh
     * BLEBeacon = 6, // Beacon
     */
    pipelines: number[]
    /** 预留下发逻辑配置标记，后续可以拓展，例如下发声音，下发操作后续动作等等 */
    options: Record<string, {}>
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
   * 查询 dps
   */
  export function queryDps(params: {
    /** 设备id */
    deviceId: string
    /** dpids 数组 */
    dpIds: number[]
    /** 查询类型 0 */
    queryType?: number
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
   * 【废弃】通过 MQTT 消息通道下发消息。用sendMqttMessage替换
   */
  export function publishMqttMessage(params: {
    /** 消息内容 */
    message: Record<string, {}>
    /** 设备id */
    deviceId: string
    /** 协议号 */
    protocol: number
    /** 预留下发逻辑配置标记，后续可以拓展，例如下发声音，下发操作后续动作等等 */
    options: Record<string, {}>
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
   * 通过 MQTT 消息通道下发消息。
   */
  export function sendMqttMessage(params: {
    /** 消息内容 */
    message: Record<string, {}>
    /** 设备id */
    deviceId: string
    /** 协议号 */
    protocol: number
    /** 预留下发逻辑配置标记，后续可以拓展，例如下发声音，下发操作后续动作等等 */
    options: Record<string, {}>
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
   * 通过 局域网 消息通道下发消息
   */
  export function publishLanMessage(params: {
    /** 消息内容 */
    message: string
    /** 设备id */
    deviceId: string
    /** 协议号 */
    protocol: number
    /** 预留下发逻辑配置标记，后续可以拓展，例如下发声音，下发操作后续动作等等 */
    options?: Record<string, {}>
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
   * 通过 Socket 消息通道下发消息
   */
  export function publishSocketMessage(params: {
    /** 消息内容 */
    message: Record<string, {}>
    /** 设备id */
    deviceId: string
    /** 局域网消息 type */
    type: number
    /** 预留下发逻辑配置标记，后续可以拓展，例如下发声音，下发操作后续动作等等 */
    options: Record<string, {}>
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
   * 获取设备属性
   */
  export function getDeviceProperty(params: {
    /**
     * deviceId 设备id
     * 支持跨面板获取其他的设备信息，当前面板可以传当前设备的 id 来进行获取
     */
    deviceId: string
    /** dps */
    dps?: Record<string, {}>
    complete?: () => void
    success?: (params: {
      /** the properties map */
      properties: Record<string, Object>
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
   * 设置设备属性
   */
  export function setDeviceProperty(params: {
    /** deviceId */
    deviceId: string
    /** the custom data key */
    code: string
    /** the custom data value */
    value: string
    complete?: () => void
    success?: (params: {
      /** deviceId */
      deviceId: string
      /** set DeviceProperty successfully */
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
   * 同步设备信息
   */
  export function syncDeviceInfo(params: {
    /** 设备id */
    deviceId: string
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
   * 订阅设备移除事件 (430版本之后，请用registerDeviceListListener接口替换)
   */
  export function subscribeDeviceRemoved(params: {
    /** 设备id */
    deviceId: string
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
   * 取消订阅设备移除事件 (430版本之后，请用unregisterDeviceListListener接口替换)
   */
  export function unSubscribeDeviceRemoved(params: {
    /** 设备id */
    deviceId: string
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
   * 注册设备的MQTT信息监听
   */
  export function registerMQTTDeviceListener(params: {
    /**
     * deviceId 设备id
     * 支持跨面板获取其他的设备信息，当前面板可以传当前设备的 id 来进行获取
     */
    deviceId: string
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
   * 注销设备的MQTT信息监听
   */
  export function unregisterMQTTDeviceListener(params: {
    /**
     * deviceId 设备id
     * 支持跨面板获取其他的设备信息，当前面板可以传当前设备的 id 来进行获取
     */
    deviceId: string
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
   * 注册MQTT协议监听
   */
  export function registerMQTTProtocolListener(params: {
    /**
     * protocol 协议号
     * MQTT预定义的协议号
     */
    protocol: number
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
   * 注销MQTT协议监听
   */
  export function unregisterMQTTProtocolListener(params: {
    /**
     * protocol 协议号
     * MQTT预定义的协议号
     */
    protocol: number
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
   * 注册需要监听的设备列表的监听器
   */
  export function registerDeviceListListener(params: {
    /** 需注册的设备列表 */
    deviceIdList: string[]
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
   * 注销需要监听的设备列表的监听器
   */
  export function unregisterDeviceListListener(params?: {
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
   * 注册需要监听的topci列表 [仅m/m/i topic 订阅]
   */
  export function registerTopicListListener(params: {
    /** 需监听的topic列表 */
    topicList: string[]
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
   * 注销需要监听的topic列表
   */
  export function unregisterTopicListListener(params?: {
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
   * 获取mqtt连接状态  回调返回当前连接情况
   */
  export function getMqttConnectState(params?: {
    complete?: () => void
    success?: (params: {
      /**
       * mqtt连接状态
       * 0 连接失败
       * 1 连接成功
       */
      connectState: number
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
   * 请求dp点的高级能力
   */
  export function requestAdvancedCapability(params: {
    /** 设备/群组 id */
    resId: string
    /** dpCodes */
    dpCodes: string[]
    /** 设备："6" 群组："5" */
    type: string
    /** 当前空间id */
    spaceId: number
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
   * 需要先调用requestAdvancedCapability方法获取高级能力后，才可以调用此方法进行dp数据高级能力转换
   */
  export function dpTranslateAdvancedCapability(params: {
    /** 设备/群组 id */
    resId: string
    /** 需要转换的dps */
    dps: OriginalDps[]
    /** 设备："6" 群组："5" */
    type: string
    complete?: () => void
    success?: (params: {
      /** 转换后的高级能力 */
      advancedCapability: TranslateAdvancedCapability[]
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
   * 检查固件升级信息
   */
  export function checkOTAUpdateInfo(params: {
    /**
     * deviceId
     * 设备 id
     */
    deviceId: string
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
   * 跳转设备详情
   */
  export function openDeviceDetailPage(params: {
    /**
     * deviceId
     * 设备 id
     */
    deviceId: string
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
   * 跳转群组详情
   */
  export function openGroupDetailPage(params: {
    /**
     * groupId
     * 群组 id
     */
    groupId: string
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
   * 跳转定时界面
   */
  export function openTimerPage(params: {
    /**
     * deviceId
     * 设备 id ，deviceId 和 groupId 至少传一个
     */
    deviceId: string
    /**
     * category
     * 定时分类
     */
    category: string
    /**
     * repeat
     * 0表示需要选择重复，1表示不需要
     */
    repeat?: number
    /**
     * data
     * dp 数据
     * {
     *     "dpName": dp 点名称，string
     *     "dpId": dp 点 id，string
     *     "selected": dp 点默认值的 index，t.Integer
     *     "rangeKeys": dp 点的值范围，Array<object>
     *     "rangeValues": dp 点的显示数据范围，Array<string>
     * }
     */
    data: {}[]
    /**
     * timerConfig
     * UI配置
     */
    timerConfig?: TimerConfig
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
   * 跳转定时界面
   */
  export function openGroupTimerPage(params: {
    /**
     * groupId
     * 群组 id
     */
    groupId: string
    /**
     * category
     * 定时分类
     */
    category: string
    /**
     * repeat
     * 0表示需要选择重复，1表示不需要
     */
    repeat?: number
    /**
     * data
     * dp 数据
     * {
     *     "dpName": dp 点名称，string
     *     "dpId": dp 点 id，string
     *     "selected": dp 点默认值的 index，t.Integer
     *     "rangeKeys": dp 点的值范围，Array<object>
     *     "rangeValues": dp 点的显示数据范围，Array<string>
     * }
     */
    data: {}[]
    /**
     * timerConfig
     * UI配置
     */
    timerConfig?: TimerConfig
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
   * 跳转设备 wifi 网络监测页面
   */
  export function openDeviceWifiNetworkMonitorPage(params: {
    /**
     * deviceId
     * 设备 id
     */
    deviceId: string
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
   * 同步定时任务
   */
  export function syncTimerTask(params: {
    /**
     * deviceId
     * 设备 id ，deviceId 和 groupId 至少传一个
     */
    deviceId?: string
    /**
     * groupId
     * 群组 id ，deviceId 和 groupId 至少传一个
     */
    groupId?: string
    /**
     * category
     * 定时分类
     */
    category: string
    complete?: () => void
    success?: (params: {
      /**
       * timers
       * 定时列表
       */
      timers: TimerModel[]
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
   * 添加定时
   */
  export function addTimer(params: {
    /**
     * deviceId
     * 设备 id ，deviceId 和 groupId 至少传一个
     */
    deviceId?: string
    /**
     * groupId
     * 群组 id ，deviceId 和 groupId 至少传一个
     */
    groupId?: string
    /**
     * category
     * 定时分类
     */
    category: string
    /**
     * timer
     * 添加定时模型
     */
    timer: AddTimerModel
    complete?: () => void
    success?: (params: {
      /**
       * timerId
       * 定时器 id
       */
      timerId: string
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
   * 更新定时
   */
  export function updateTimer(params: {
    /**
     * deviceId
     * 设备 id，deviceId 和 groupId 至少传一个
     */
    deviceId?: string
    /**
     * groupId
     * 群组 id，deviceId 和 groupId 至少传一个
     */
    groupId?: string
    /**
     * timer
     * 更新定时模型
     */
    timer: UpdateTimerModel
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
   * 更新定时状态
   */
  export function updateTimerStatus(params: {
    /**
     * deviceId
     * 设备 id，deviceId 和 groupId 至少传一个
     */
    deviceId?: string
    /**
     * groupId
     * 群组 id，deviceId 和 groupId 至少传一个
     */
    groupId?: string
    /**
     * timerId
     * 定时 id
     */
    timerId: string
    /**
     * status
     * 状态
     */
    status: boolean
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
   * 删除定时
   */
  export function removeTimer(params: {
    /**
     * deviceId
     * 设备 id，deviceId 和 groupId 至少传一个
     */
    deviceId?: string
    /**
     * groupId
     * 群组 id，deviceId 和 groupId 至少传一个
     */
    groupId?: string
    /**
     * timerId
     * 定时器 id
     */
    timerId: string
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
   * 获取共享设备信息
   */
  export function getShareDeviceInfo(params: {
    /**
     * deviceId
     * 设备 id
     */
    deviceId: string
    complete?: () => void
    success?: (params: {
      /** 姓名 */
      name: string
      /** 手机号 */
      mobile: string
      /** 邮件 */
      email: string
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
   * 跳转设备编辑页面
   */
  export function openDeviceEdit(params: {
    /**
     * deviceId
     * 设备 id
     */
    deviceId: string
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
   * 跳转群组编辑页面
   */
  export function openGroupEdit(params: {
    /**
     * groupId
     * 设备 id
     */
    groupId: string
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
   * 跳转设备信息页面
   */
  export function openDeviceInfo(params: {
    /**
     * deviceId
     * 设备 id
     */
    deviceId: string
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
   * 设备是否支持离线提醒
   */
  export function isDeviceSupportOfflineReminder(params: {
    /**
     * deviceId
     * 设备 id
     */
    deviceId: string
    complete?: () => void
    success?: (params: {
      /**
       * support
       * 是否支持设备离线提醒
       */
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
   * 获取设备离线提醒的开关状态
   */
  export function getDeviceOfflineReminderState(params: {
    /**
     * deviceId
     * 设备 id
     */
    deviceId: string
    complete?: () => void
    success?: (params: {
      /**
       * state
       * 设备离线提醒的开关状态 0:关 1:开
       */
      state: number
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
   * 离线提醒开关
   */
  export function toggleDeviceOfflineReminder(params: {
    /**
     * deviceId
     * 设备 id
     */
    deviceId: string
    /**
     * state
     * 设备离线提醒的开关状态 0:关 1:开
     */
    state: number
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
   * 获取离线提醒警告内容（关闭离线提醒开关后的警告）
   */
  export function getDeviceOfflineReminderWarningText(params?: {
    complete?: () => void
    success?: (params: {
      /** 离线提醒关闭警告文案 */
      warningText: string
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
   * 跳转常见问题与反馈页面
   */
  export function openDeviceQuestionsAndFeedback(params: {
    /**
     * deviceId
     * 设备 id
     */
    deviceId: string
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
   * 跳转共享设备页面
   */
  export function openShareDevice(params: {
    /**
     * deviceId
     * 设备 id
     */
    deviceId: string
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
   * 添加设备到桌面
   */
  export function addDeviceToDesk(params: {
    /**
     * deviceId
     * 设备 id
     */
    deviceId: string
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
   * 移除共享设备
   */
  export function removeShareDevice(params: {
    /**
     * deviceId
     * 设备 id
     */
    deviceId: string
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
   * 获取设备支持的三方服务
   */
  export function getSupportedThirdPartyServices(params: {
    /**
     * deviceId
     * 设备 id
     */
    deviceId: string
    complete?: () => void
    success?: (params: {
      /** 服务列表 */
      services: ThirdPartyService[]
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
   * 获取设备详情App侧配置信息
   */
  export function getDeviceDetailConfiguration(params?: {
    complete?: () => void
    success?: (params: {
      /** 定制业务配置项 */
      customConfiguration: {}[]
      /** 有实现的子功能列表 */
      hasImplFunctionList: string[]
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
   * 分发设备详情子功能事件
   */
  export function dispatchSubFunctionTouchEvent(params: {
    /** 子功能id */
    id: string
    /** 名称 */
    name?: string
    /** 子功能显示类型 */
    type?: string
    /** 子功能分组类型 */
    optionType?: string
    /** 子功能来源：RN｜小程序｜APP */
    from?: string
    /** 排序 */
    order?: number
    /** 是否隐藏 */
    isHide?: boolean
    /** 业务参数 */
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
   * 分发子功能数据结果
   */
  export function dispatchDataResult(params: {
    /** 子功能id */
    id: string
    /** 名称 */
    name?: string
    /** 子功能显示类型 */
    type?: string
    /** 子功能分组类型 */
    optionType?: string
    /** 子功能来源：RN｜小程序｜APP */
    from?: string
    /** 排序 */
    order?: number
    /** 是否隐藏 */
    isHide?: boolean
    /** 业务参数 */
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
   * 子功能显示状态
   */
  export function getSubFunctionShowState(params: {
    /** 需要获取显示状态的子功能Id */
    ids: string[]
    /** 设备Id */
    deviceId?: string
    /** 群组Id */
    groupId?: number
    complete?: () => void
    success?: (params: {
      /** 需要监听的子功能列表 */
      showStateList: SubFunctionShowState[]
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
   * 获取子功能额外的显示数据
   */
  export function getSubFunctionExtShowData(params: {
    /** 子功能id */
    id: string
    /** 查询参数 / 返回的数据 */
    data?: Record<string, {}>
    complete?: () => void
    success?: (params: {
      /** 子功能id */
      id: string
      /** 查询参数 / 返回的数据 */
      data?: Record<string, {}>
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
   * 获取远程重启定时
   */
  export function getRemoteRebootTimers(params: {
    /**
     * deviceId
     * 设备 id
     */
    deviceId: string
    complete?: () => void
    success?: (params: {
      /** 定时列表 */
      timers: RemoteRebootTimers[]
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
   * 打开推荐场景详情页面
   */
  export function openRecommendSceneDetail(params: {
    /** 来源 */
    source: string
    /** 场景模型 */
    sceneModel: Record<string, {}>
    complete?: () => void
    success?: (params: {
      /** 返回状态，默认返回 true */
      status?: boolean
      /** 成功返回的类型。0-未操作，1-保存成功，2-点击不感兴趣 */
      type: number
      /** 返回的场景数据，可能为空 */
      data?: Record<string, {}>
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
   * 跳转一键执行和自动化页面
   */
  export function openDeviceExecutionAndAnutomation(params: {
    /**
     * deviceId
     * 设备 id
     */
    deviceId: string
    /** 页面标题，Android 需要 */
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
   * 保存场景动作数据
   */
  export function saveSceneAction(params: {
    /** 设备id */
    deviceId: string
    /** 动作的索引位置 */
    taskPosition: number
    /** 动作执行器 */
    actionExecutor?: string
    /** 动作执行信息 */
    executorProperty: Record<string, {}>
    /** 动作额外信息 */
    extraProperty: Record<string, {}>
    /** 动作展示信息 */
    actionDisplayNew: Record<string, {}>
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
   * 创建自动化动作
   */
  export function createAction(params: {
    /**
     * 动作类型:device,smart,remind,delay
     * device:设备
     * smart:操作某个智能（执行智能、开关自动化）
     * remind:提醒
     * delay:延时
     */
    createType: string
    /**
     * 智能类型：scene,auto
     * scene:一键执行
     * auto：自动化
     */
    smartType: string
    /** 当前场景动作列表 */
    actionArray: SceneAction[]
    complete?: () => void
    success?: (params: {
      /** 动作列表 */
      actionArray: SceneAction[]
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
   * 编辑场景动作
   */
  export function editAction(params: {
    /** 当前编辑的actionIndex */
    editIndex: string
    /** 智能类型 */
    smartType: string
    /** 动作列表 */
    actionArray: SceneAction[]
    complete?: () => void
    success?: (params: {
      /** 动作列表 */
      actionArray: SceneAction[]
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
   * 展示场景的风格弹窗
   */
  export function showSceneDialog(params?: {
    /**
     * 智能类型：scene,auto
     * scene:一键执行
     * auto：自动化
     */
    smartType?: string
    /** 颜色 */
    color?: string
    /** 图标 */
    icon?: string
    /** 图片 */
    image?: string
    complete?: () => void
    success?: (params: {
      /** 颜色 */
      color?: string
      /** 图标 */
      icon?: string
      /** 图片 */
      image?: string
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
   * 打开生效时间段页面
   */
  export function openPreConditionPage(params?: {
    /** id */
    id?: string
    /** 固定值 timeCheck */
    condType?: string
    /** 规则 */
    expr?: Expr
    complete?: () => void
    success?: (params: {
      /** id */
      id: string
      /** 固定值 timeCheck */
      condType: string
      /** 规则 */
      expr: Expr
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
   * 创建条件
   */
  export function createCondition(params: {
    /** 条件类型 */
    type: string
    /** 条件内容 */
    condition?: string
    /** 索引 */
    index?: number
    complete?: () => void
    success?: (params: {
      /** 条件类型 */
      type?: string
      /** 条件内容 */
      condition?: string
      /** 索引 */
      index?: number
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
   * 编辑条件
   */
  export function editCondition(params: {
    /** 条件类型 */
    type: string
    /** 条件内容 */
    condition?: string
    /** 索引 */
    index?: number
    complete?: () => void
    success?: (params: {
      /** 条件类型 */
      type?: string
      /** 条件内容 */
      condition?: string
      /** 索引 */
      index?: number
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
   * 获取群组下设备列表
   */
  export function getGroupDeviceList(params: {
    /** 群组id */
    groupId: string
    complete?: () => void
    success?: (params: {
      /** groupId 群组id */
      groupId: string
      /** deviceList 设备列表 */
      deviceList: DeviceInfo_UfyIUd[]
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
   * 获取群组下设备数量
   */
  export function getGroupDeviceNum(params: {
    /** 群组id */
    groupId: string
    complete?: () => void
    success?: (params: {
      /** groupId 群组id */
      groupId: string
      /** devieNum 设备数量 */
      devieNum: number
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
   * 根据dpCode获取群组下具备此dpCode的设备数量。如果是一个分享的群组，请通过接口获取。
   */
  export function getDeviceNumWithDpCode(params: {
    /** groupId 群组id */
    groupId: string
    /** dpCode内容 */
    dpCode: string
    complete?: () => void
    success?: (params: {
      /** groupId 群组id */
      groupId: string
      /** devieNum 设备数量 */
      devieNum: number
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
   * 通过dpCode下发控制指令
   */
  export function publishGroupDpCodes(params: {
    /** groupId 群组id */
    groupId: string
    /**
     * dp信息
     * 示例: dpCodes: {"switch" : true}
     */
    dpCodes: Record<string, Object>
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
   * mesh群组控制（仅用于单设备面板中的群控，如PIR传感器面板）
   */
  export function publishSigMeshMultiDps(params: {
    /** groupId 群组id */
    groupId: string
    /** localId 群组本地标识 */
    localId: string
    /**
     * dp信息
     * 示例: dps: {"1" : true}
     */
    dps: Record<string, {}>
    /** pcc mesh设备品类 */
    pcc: string
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
   * 跳转本地mesh群组
   */
  export function openMeshLocalGroup(params: {
    /**
     * 整体说明
     * 支持2个版本:
     * 1、本地版本仅支持根据vendorIds进行过滤，为本地逻辑，设备列表APP本地根据meshCategory进行比对过滤，群组结果保存在设备上，云端不参与群组的列表获取与保存。
     * 2、云端版本支持根据pccs或者codes进行过滤，为云端逻辑，设备列表获取及群组设备关系保存在云端。
     * 本地版本参数：
     * {
     * "localId": "203a",
     * "vendorIds": "1F10,2F10"
     * }
     * 云端版本参数：
     * 1、pcc过滤，相当于旧版本的vendorIds
     * {
     * "localId": "203a",
     * "type": "0",
     * "pccs":  ["1210"],
     * "categoryCode": "7001"
     * }
     * 2、code过滤，根据二级品类进行过滤，目前云端只支持ykq和gykzq这两种遥控器
     * {
     * "localId": "203a",
     * "type": "1",
     * "codes": ["xxxx"],
     * "categoryCode": "7001"
     * }
     * 关于categoryCode：categoryCode  并非三级品类，与localId匹配范围为7001-7008；localId 为云端分配，步长为8，因此一个遥控器内部最多支持关联8个群组，localid为初始值依次+1，与之匹配的categoryCode从7001依次+1.
     * vendorIds 必传 可以为空字符串
     * devId 遥控器设备id
     */
    deviceId: string
    /** localId 群组本地标识 */
    localId: string
    /**
     * 遥控器群组本地版本，使用功能此参数，云端版本传空字符串
     * vendorIds 使用meshCategory进行设备列表筛选
     * 示例：vendorIds: "1F10,2F10"
     */
    vendorIds: string
    /**
     * 遥控器群组云端版本，使用此功能参数
     * type 筛选条件  0:pccs过滤，1：codes过滤
     */
    type?: string
    /**
     * 遥控器群组云端版本，使用此功能参数
     * pccs 使用meshCategory进行设备列表筛选
     * 示例：pccs: ["1F10","2F10"]
     */
    pccs?: string[]
    /**
     * 遥控器群组云端版本，使用此功能参数
     * codes 使用二级品类进行设备列表筛选
     * 示例：pccs: ["1F10","2F10"]
     */
    codes?: string[]
    /**
     * categoryCode  并非三级品类，与localId匹配范围为7001-7008；
     * localId 为云端分配，步长为8，因此一个遥控器内部最多支持关联8个群组，localid为初始值依次+1，与之匹配的categoryCode从7001依次+1.
     */
    categoryCode?: string
    /**
     * 是否支持低功耗,部分无线开关需要用到
     * 默认值:false
     */
    isSupportLowPower?: boolean
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
   * 获取 group 信息
   */
  export function getGroupInfo(params: {
    /** 群组id */
    groupId: string
    complete?: () => void
    success?: (params: {
      /**
       * groupId
       * The group ID.
       */
      groupId: string
      /**
       * productId
       * The product ID.
       */
      productId: string
      /**
       * name
       * The name of the group.
       */
      name: string
      /**
       * time
       * The time when the group was created.
       */
      time: number
      /**
       * iconUrl
       * The URL of the icon.
       */
      iconUrl: string
      /**
       * type
       * The type of group.
       * Wifi = 0, Mesh = 1, Zigbee = 2, SIGMesh = 3, Beacon = 4,
       */
      type: number
      /** isShare */
      isShare: boolean
      /** dps */
      dps: {}
      /** dpCodes */
      dpCodes: {}
      /**
       * deviceNum
       * The number of devices,
       */
      deviceNum: number
      /**
       * localKey
       * The local key.
       */
      localKey: string
      /** The protocol version. */
      pv: number
      /** The product information. */
      productInfo: {}
      /** The custom DP name. */
      dpName: {}
      /** The device list. */
      deviceList: DeviceInfo_UfyIUd[]
      /** The local short address of groups. */
      localId: string
      /** The subclass. */
      pcc: string
      /** The mesh ID or gateway ID. */
      meshId: string
      /** Add the beacon beaconKey. */
      groupKey: string
      /** The schema array. */
      schema: {}[]
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
   * 群组控制
   */
  export function publishGroupDps(params: {
    /** groupId 群组id */
    groupId: string
    /**
     * dp信息
     * 示例: dps: {"1" : true}
     */
    dps: {}
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
   * 获取群组的属性
   */
  export function getGroupProperty(params: {
    /** 群组id */
    groupId: string
    complete?: () => void
    success?: (params: {
      /** 群组属性信息 */
      result: Record<string, {}>
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
   * 设置群组的属性
   */
  export function setGroupProperty(params: {
    /** 群组id */
    groupId: string
    /** code 属性code */
    code: string
    /** value */
    value: string
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
   * 开启对群组事件的监听
   */
  export function registerGroupChange(params: {
    /** groupIdList 群组id 列表 */
    groupIdList: string[]
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
   * 关闭对群组事件的监听
   */
  export function unRegisterGroupChange(params?: {
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
   * 通过nodeId获取子设备的设备Id
   */
  export function getMeshDeviceId(params: {
    /** nodeId */
    nodeId: string
    /** deviceId 网关id */
    deviceId: string
    complete?: () => void
    success?: (params: {
      /** 设备id */
      deviceId: string
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
   * 获取mesh子子设备的dp数据
   */
  export function getDpDataByMesh(params: {
    /** 设备模型 设备id */
    deviceId: string
    /** dpId */
    dpIds: Object[]
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
   * 获取设备的固件版本状态(即将废弃，请使用otaStatus)
   */
  export function checkOTAUpgradeStatus(params: {
    /**
     * deviceId
     * 设备 id
     */
    deviceId: string
    complete?: () => void
    success?: (params: {
      /**
       * status
       * 设备的固件版本状态 0已是最新版本、1有待升级的固件、2正在升级
       */
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
   * 获取设备的固件版本状态
   */
  export function otaStatus(params: {
    /**
     * deviceId
     * 设备 id
     */
    deviceId: string
    complete?: () => void
    success?: (params: {
      /**
       * status
       * 设备的固件版本状态 0已是最新版本、1有待升级的固件、2正在升级、3成功、4失败、5等待唤醒、6下载、7超时、13排队中、100准备中
       */
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
   * 跳转设备升级页面
   */
  export function openOTAUpgrade(params: {
    /**
     * deviceId
     * 设备 id
     */
    deviceId: string
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
   * 注册ota升级监听
   */
  export function registerOTACompleted(params?: {
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
   * 设备是否支持物模型
   */
  export function deviceIsSupportThingModel(params: {
    /** 设备id */
    devId: string
    complete?: () => void
    success?: (params: {
      /** 是否支持物模型控制 */
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
   * 更新物模型信息
   */
  export function updateDeviceThingModelInfo(params: {
    /** 产品id */
    pid: string
    /** 产品版本号 */
    productVersion: string
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
   * 获取设备物模型信息
   */
  export function getDeviceThingModelInfo(params: {
    /** 设备id */
    devId: string
    complete?: () => void
    success?: (params: {
      /** 物模型id */
      modelId: string
      /** 产品id */
      productId: string
      /** 产品版本 */
      productVersion: string
      /** 服务列表 */
      services: ServiceModel[]
      /** 扩展属性 */
      extensions: Record<string, any>
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
   * 通过物模型投递消息
   */
  export function publishThingModelMessage(params: {
    /** 设备id */
    devId: string
    /**
     * 类型
     * 0:属性, 1:动作, 2:事件
     */
    type: number
    /**
     * Example:
     *  type == property:
     *     payload = {
     *      "color":"green",
     *         "brightness": 50
     *      }
     *  type == action:
     *     payload = {
     *        "actionCode": "testAction",
     *        "inputParams": {
     *          "inputParam1":"value1",
     *          "inputParam2":"value2"
     *        }
     *     }
     */
    payload: Record<string, any>
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
   * 订阅接受物模型消息。订阅之后才可以接收到onReceivedThingModelMessage事件。
   */
  export function subscribeReceivedThingModelMessage(params: {
    /** 设备id */
    devId: string
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
   * 取消订阅接收物模型消息。取消订阅之后接收不到onReceivedThingModelMessage事件。
   */
  export function unSubscribeReceivedThingModelMessage(params: {
    /** 设备id */
    devId: string
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
   * 初始化虚拟设备
   */
  export function initVirtualDevice(params: {
    /** 产品id */
    pid: string
    complete?: () => void
    success?: (params: {
      /** 设备id */
      devId: string
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
   * 远离beacon设备的事件
   */
  export function onLeaveBeaconFence(
    listener: (params: LeaveBeaconFenceEvent) => void
  ): void

  /**
   * 取消监听：远离beacon设备的事件
   */
  export function offLeaveBeaconFence(
    listener: (params: LeaveBeaconFenceEvent) => void
  ): void

  /**
   * 传输文件的到蓝牙设备的进度事件
   */
  export function onFileTransferProgress(
    listener: (params: FileTransferProgressResult) => void
  ): void

  /**
   * 取消监听：传输文件的到蓝牙设备的进度事件
   */
  export function offFileTransferProgress(
    listener: (params: FileTransferProgressResult) => void
  ): void

  /**
   * BLE(thing)连接状态变更通知事件
   */
  export function onBLEConnectStatusChange(
    listener: (params: ThingBLEConnectStatusEvent) => void
  ): void

  /**
   * 取消监听：BLE(thing)连接状态变更通知事件
   */
  export function offBLEConnectStatusChange(
    listener: (params: ThingBLEConnectStatusEvent) => void
  ): void

  /**
   * BLE(thing)设备数据透传通道上报通知
   */
  export function onBLETransparentDataReport(
    listener: (params: ThingBLETransparentDataBean) => void
  ): void

  /**
   * 取消监听：BLE(thing)设备数据透传通道上报通知
   */
  export function offBLETransparentDataReport(
    listener: (params: ThingBLETransparentDataBean) => void
  ): void

  /**
   * BLE(thing)大数据通道传输进度
   */
  export function onBLEBigDataChannelProgressEvent(
    listener: (params: ThingBLEBigDataProgressEvent) => void
  ): void

  /**
   * 取消监听：BLE(thing)大数据通道传输进度
   */
  export function offBLEBigDataChannelProgressEvent(
    listener: (params: ThingBLEBigDataProgressEvent) => void
  ): void

  /**
   * 扫描到设备后进行通知
   */
  export function onBLEScanBindDevice(
    listener: (params: ThingBLEScanDeviceEvent) => void
  ): void

  /**
   * 取消监听：扫描到设备后进行通知
   */
  export function offBLEScanBindDevice(
    listener: (params: ThingBLEScanDeviceEvent) => void
  ): void

  /**
   * 大数据从设备传输到App成功的事件
   */
  export function onBLEBigDataChannelDeviceToAppSuccess(
    listener: (params: BLEBigDataChannelDeviceToAppSuccessResponse) => void
  ): void

  /**
   * 取消监听：大数据从设备传输到App成功的事件
   */
  export function offBLEBigDataChannelDeviceToAppSuccess(
    listener: (params: BLEBigDataChannelDeviceToAppSuccessResponse) => void
  ): void

  /**
   * 大数据上传到云端进度的事件
   */
  export function onBLEBigDataChannelUploadCloudProgress(
    listener: (params: ThingBLEBigDataProgressEvent) => void
  ): void

  /**
   * 取消监听：大数据上传到云端进度的事件
   */
  export function offBLEBigDataChannelUploadCloudProgress(
    listener: (params: ThingBLEBigDataProgressEvent) => void
  ): void

  /**
   * 子设备配网结果事件
   */
  export function onSubDeviceInfoUpdateEvent(
    listener: (params: GWActivationRespond) => void
  ): void

  /**
   * 取消监听：子设备配网结果事件
   */
  export function offSubDeviceInfoUpdateEvent(
    listener: (params: GWActivationRespond) => void
  ): void

  /**
   * 免配网-设备扫描结果事件
   */
  export function onDirectlyConnectedSearchDeviceEvent(
    listener: (params: DirectlyConnectedSearchRespond) => void
  ): void

  /**
   * 取消监听：免配网-设备扫描结果事件
   */
  export function offDirectlyConnectedSearchDeviceEvent(
    listener: (params: DirectlyConnectedSearchRespond) => void
  ): void

  /**
   * dp点变更
   */
  export function onDpDataChange(listener: (params: DpsChanged) => void): void

  /**
   * 取消监听：dp点变更
   */
  export function offDpDataChange(listener: (params: DpsChanged) => void): void

  /**
   * MQTT消息通道消息上报
   */
  export function onMqttMessageReceived(
    listener: (params: MqttResponse) => void
  ): void

  /**
   * 取消监听：MQTT消息通道消息上报
   */
  export function offMqttMessageReceived(
    listener: (params: MqttResponse) => void
  ): void

  /**
   * socket消息通道消息上报
   */
  export function onSocketMessageReceived(
    listener: (params: SocketResponse) => void
  ): void

  /**
   * 取消监听：socket消息通道消息上报
   */
  export function offSocketMessageReceived(
    listener: (params: SocketResponse) => void
  ): void

  /**
   * 设备上下线状态变更
   */
  export function onDeviceOnlineStatusUpdate(
    listener: (params: Online) => void
  ): void

  /**
   * 取消监听：设备上下线状态变更
   */
  export function offDeviceOnlineStatusUpdate(
    listener: (params: Online) => void
  ): void

  /**
   * 设备信息变化
   */
  export function onDeviceInfoUpdated(
    listener: (params: Device_Ket95t) => void
  ): void

  /**
   * 取消监听：设备信息变化
   */
  export function offDeviceInfoUpdated(
    listener: (params: Device_Ket95t) => void
  ): void

  /**
   * 设备移除事件
   */
  export function onDeviceRemoved(
    listener: (params: OnDeviceRemovedBody) => void
  ): void

  /**
   * 取消监听：设备移除事件
   */
  export function offDeviceRemoved(
    listener: (params: OnDeviceRemovedBody) => void
  ): void

  /**
   * mqtt连接状态变化事件
   */
  export function onMqttConnectState(
    listener: (params: MqttConnectStateResponse) => void
  ): void

  /**
   * 取消监听：mqtt连接状态变化事件
   */
  export function offMqttConnectState(
    listener: (params: MqttConnectStateResponse) => void
  ): void

  /**
   * 网关子设备dp信息变化事件
   */
  export function onSubDeviceDpUpdate(
    listener: (params: Device_Ket95t) => void
  ): void

  /**
   * 取消监听：网关子设备dp信息变化事件
   */
  export function offSubDeviceDpUpdate(
    listener: (params: Device_Ket95t) => void
  ): void

  /**
   * 网关子设备被移除事件
   */
  export function onSubDeviceRemoved(
    listener: (params: Device_Ket95t) => void
  ): void

  /**
   * 取消监听：网关子设备被移除事件
   */
  export function offSubDeviceRemoved(
    listener: (params: Device_Ket95t) => void
  ): void

  /**
   * 网关添加子设备的事件
   */
  export function onSubDeviceAdded(
    listener: (params: Device_Ket95t) => void
  ): void

  /**
   * 取消监听：网关添加子设备的事件
   */
  export function offSubDeviceAdded(
    listener: (params: Device_Ket95t) => void
  ): void

  /**
   * 网关子设备信息变化的事件
   */
  export function onSubDeviceInfoUpdate(
    listener: (params: Device_Ket95t) => void
  ): void

  /**
   * 取消监听：网关子设备信息变化的事件
   */
  export function offSubDeviceInfoUpdate(
    listener: (params: Device_Ket95t) => void
  ): void

  /**
   * 定时变化事件
   */
  export function onTimerUpdate(listener: (params: {}) => void): void

  /**
   * 取消监听：定时变化事件
   */
  export function offTimerUpdate(listener: (params: {}) => void): void

  /**
   * 子功能数据变化事件
   */
  export function onSubFunctionDataChange(
    listener: (params: SubFunctionParams) => void
  ): void

  /**
   * 取消监听：子功能数据变化事件
   */
  export function offSubFunctionDataChange(
    listener: (params: SubFunctionParams) => void
  ): void

  /**
   * 子功能分发事件
   */
  export function onDispatchEvent(
    listener: (params: SubFunctionParams) => void
  ): void

  /**
   * 取消监听：子功能分发事件
   */
  export function offDispatchEvent(
    listener: (params: SubFunctionParams) => void
  ): void

  /**
   * 群组内增加/移除设备事件
   */
  export function onGroupInfoChange(
    listener: (params: GroupInfoResponse) => void
  ): void

  /**
   * 取消监听：群组内增加/移除设备事件
   */
  export function offGroupInfoChange(
    listener: (params: GroupInfoResponse) => void
  ): void

  /**
   * 群组dpCode变化事件
   */
  export function onGroupDpCodeChange(
    listener: (params: GroupDpCodeBean) => void
  ): void

  /**
   * 取消监听：群组dpCode变化事件
   */
  export function offGroupDpCodeChange(
    listener: (params: GroupDpCodeBean) => void
  ): void

  /**
   * 群组移除事件
   */
  export function onGroupRemovedEvent(
    listener: (params: GroupBean) => void
  ): void

  /**
   * 取消监听：群组移除事件
   */
  export function offGroupRemovedEvent(
    listener: (params: GroupBean) => void
  ): void

  /**
   * 群组DP变更事件
   */
  export function onGroupDpDataChangeEvent(
    listener: (params: GroupDpDataBean) => void
  ): void

  /**
   * 取消监听：群组DP变更事件
   */
  export function offGroupDpDataChangeEvent(
    listener: (params: GroupDpDataBean) => void
  ): void

  /**
   * ota升级结果
   */
  export function onOtaCompleted(
    listener: (params: OtaCompletedParams) => void
  ): void

  /**
   * 取消监听：ota升级结果
   */
  export function offOtaCompleted(
    listener: (params: OtaCompletedParams) => void
  ): void

  /**
   * 接收物模型消息事件。只有subscribeReceivedThingModelMessage订阅了，才会收到该事件。
   */
  export function onReceivedThingModelMessage(
    listener: (params: OnReceivedThingModelMessageBody) => void
  ): void

  /**
   * 取消监听：接收物模型消息事件。只有subscribeReceivedThingModelMessage订阅了，才会收到该事件。
   */
  export function offReceivedThingModelMessage(
    listener: (params: OnReceivedThingModelMessageBody) => void
  ): void

  export type Gateway = {
    /**
     * 网关模型
     * gwId 网关设备Id
     */
    gwId: string
  }

  export type Device = {
    /**
     * 设备模型
     * deviceId 设备Id
     */
    deviceId: string
  }

  export type DeviceInfo = {
    /** 设备所处房间名 */
    roomName?: string
    /** 产品信息，schema，功能定义都在里面 */
    schema: {}[]
    /**
     * dps
     * 设备的功能点状态，可以根据对应的 dpid 拿到具体的状态值去做业务逻辑
     */
    dps: Record<string, {}>
    /**
     * attribute
     * 产品属性定义，在 backend-ng 平台上可查到对应配置，使用二进制位运算的方式进行管理
     */
    attribute: number
    /**
     * baseAttribute
     * 基础产品属性定义
     */
    baseAttribute: number
    /**
     * capability
     * 产品能力值，在 backend-ng 平台上可以查询对应的勾选项，整体业务逻辑会根据该数据进行划分
     * 区分设备类型也可以根据该属性进行调整，按二进制位运算的方式进行管理
     */
    capability: number
    /**
     * dpName
     * 自定义 dp 的名字，通常在面板里会使用到
     */
    dpName: Record<string, string>
    /**
     * ability
     * 目前业务很少使用，用于区分特殊类型的设备
     */
    ability: number
    /**
     * icon
     * 设备的 icon url
     */
    icon: string
    /**
     * devId
     * 设备的唯一 id
     */
    devId: string
    /**
     * verSw
     * 设备固件版本号
     */
    verSw: string
    /**
     * isShare
     * 是否为分享设备，true 则是分享设备
     */
    isShare: boolean
    /**
     * bv
     * 设备的基线版本号
     */
    bv: string
    /**
     * uuid
     * 设备的固件唯一标识
     */
    uuid: string
    /**
     * panelConfig
     * 产品面板里的配置项，通常在 IoT 平台上可以查看到对应的配置
     */
    panelConfig: Record<string, {}>
    /**
     * activeTime
     * 设备激活时间，时间戳
     */
    activeTime: number
    /**
     * devAttribute
     * 设备的业务能力拓展，二进制位的方式进行运算
     */
    devAttribute: number
    /**
     * pcc
     * Thing自研蓝牙 mesh 产品的分类标识
     */
    pcc: string
    /**
     * nodeId
     * 子设备的短地址
     */
    nodeId: string
    /**
     * parentId
     * 上级节点 id，子设备/或蓝牙 mesh 设备通常会有该字段，用于内部寻找相关的网关或上级模型来进行业务处理
     */
    parentId?: string
    /**
     * category
     * 产品的分类
     */
    category: string
    /**
     * standSchemaModel
     * 标准产品功能集定义模型
     */
    standSchemaModel?: {}
    /**
     * productId
     * 设备对应的产品 id
     */
    productId: string
    /**
     * productVer
     * 设备对应的产品的版本号
     */
    productVer: string
    /**
     * bizAttribute
     * 业务属性能力
     */
    bizAttribute: number
    /**
     * meshId
     * 当前设备对应的蓝牙 mesh id
     */
    meshId: string
    /**
     * 【废弃】sigmeshId
     * 当前设备所属行业属性对应的蓝牙 mesh id
     */
    sigmeshId: string
    /**
     * meta
     * 设备自定义配置元属性，用于存放业务数据
     */
    meta: Record<string, {}>
    /**
     * isLocalOnline
     * 本地局域网是否在线
     */
    isLocalOnline: boolean
    /** 设备云端在线情况 */
    isCloudOnline: boolean
    /**
     * isOnline
     * 设备总的在线情况，只要一个情况在线，就是在线，复合在线情况
     */
    isOnline: boolean
    /**
     * name
     * 设备名称
     */
    name: string
    /** groupId */
    groupId: string
    /**
     * dpCodes
     * 标准功能集 code
     */
    dpCodes: Record<string, {}>
    /** 时区信息 */
    devTimezoneId: string
    /** 设备的功能点执行的时间 */
    dpsTime: Record<string, {}>
    /** 设备纬度 */
    latitude: string
    /** 设备经度 */
    longitude: string
    /** 设备ip地址 */
    ip?: string
    /** 是否为虚拟设备 */
    isVirtualDevice: boolean
    /** zigbeeInstallCode to the cloud to mark the gateway with installation code ability */
    isZigbeeInstallCode: boolean
    /** Activate sub-device capability flag. */
    protocolAttribute: number
    /** 连接状态，nearby状态 */
    connectionStatus: number
    /** 部分设备需要用mac进行唯一识别 ，比如mesh */
    mac?: string
    /** 蓝牙的设备能力值，由设备进行上报 */
    bluetoothCapability?: string
    /** 是否三方matter设备 */
    isTripartiteMatter: boolean
    /** 是否网关设备 */
    isGW: boolean
    /** 是否支持群组 */
    isSupportGroup: boolean
    /** 是否zigbee子设备 */
    isZigBeeSubDev: boolean
    /** cadv版本号 */
    cadv?: string
    /** 设备是否支持OTA */
    isSupportOTA: boolean
    /** 设备图标 */
    iconUrl: string
    /** 设备是否有Wi-Fi模块 */
    hasWifi: boolean
    /** 快捷控制dp */
    switchDp: number
    /** 快捷控制dp */
    switchDps: number[]
    /** 设备Wi-Fi模块的状态：1:不可用 2:可用 */
    wifiEnableState: number
    /** 设备产品配置 */
    configMetas: Record<string, {}>
    /** 是否为matter设备 */
    isMatter: boolean
    /** 设备是否支持双控 */
    isSupportLink: boolean
    /** 是否支持将设备添加到苹果家庭中 */
    isSupportAppleHomeKit?: boolean
    /**
     * attribute 格式化的二进制字符串
     * 产品属性定义，在 backend-ng 平台上可查到对应配置，使用二进制位运算的方式进行管理
     */
    attributeString: string
    /**
     * 设备的扩展模块的类型
     * 0：无扩展模块
     * 1：表示存在扩展模块，即设备为ble+x的设备
     * 2：扩展模块为Wi-Fi模块。即设备为ble+Wi-Fi的设备
     */
    extModuleType: number
  }

  export type Object = {}

  export type OriginalDps = {
    /** dpId */
    dpId: string
    /** dpCode */
    dpCode: string
    /** dpValue */
    dpValue: {}
  }

  export type TranslateAdvancedCapability = {
    /** dpCode */
    dpCode: string
    /** 转换后的值 */
    translatedValue: string
    /** 单位 */
    unit: string
  }

  export type TimerConfig = {
    /**
     * background
     * 定时界面导航栏的背景颜色，十六进制，例如：FFFFFF
     */
    background?: string
  }

  export type TimerModel = {
    /**
     * timerId
     * 定时器 id
     */
    timerId: string
    /**
     * date
     * 日期
     */
    date: string
    /**
     * time
     * 定时器运行的时间
     */
    time: string
    /**
     * status
     * 状态
     */
    status: boolean
    /**
     * loops
     * 七位数字字符串，"1000000" 代表周日，"0100000" 代表周一
     */
    loops: string
    /**
     * dps
     * dp 点数据，示例：
     * {
     *     "1": true,
     *     "2": false
     * }
     */
    dps: Record<string, {}>
    /**
     * timezoneId
     * 时区
     */
    timezoneId: string
    /**
     * aliasName
     * 别名
     */
    aliasName: string
    /**
     * isAppPush
     * 是否发送执行通知
     */
    isAppPush: boolean
    /**
     * id
     * 任务 id
     */
    id: string
  }

  export type AddTimerModel = {
    /**
     * time
     * 定时器运行的时间
     */
    time: string
    /**
     * loops
     * 七位数字字符串，"1000000" 代表周日，"0100000" 代表周一
     */
    loops: string
    /**
     * dps
     * dp 点数据，示例：
     * {
     *     "1": true,
     *     "2": false
     * }
     */
    dps: Record<string, {}>
    /**
     * aliasName
     * 别名
     */
    aliasName: string
    /**
     * isAppPush
     * 是否发送执行通知
     */
    isAppPush: boolean
  }

  export type UpdateTimerModel = {
    /**
     * timerId
     * 定时器 id
     */
    timerId: string
    /**
     * time
     * 定时器运行的时间
     */
    time: string
    /**
     * loops
     * 七位数字字符串，"1000000" 代表周日，"0100000" 代表周一
     */
    loops: string
    /**
     * dps
     * dp 点数据，示例：
     * {
     *     "1": true,
     *     "2": false
     * }
     */
    dps: Record<string, {}>
    /**
     * aliasName
     * 别名
     */
    aliasName: string
    /**
     * isAppPush
     * 是否发送执行通知
     */
    isAppPush: boolean
  }

  export type ThirdPartyService = {
    /** 服务 id */
    serviceId: number
    /** 服务名称 */
    name: string
    /** 图标 url */
    iconUrl: string
    /** 服务 url */
    url: string
    /** attributeKey */
    attributeKey: string
    /** attributeSign */
    attributeSign: number
    /** widgetUrl */
    widgetUrl: string
    /** 包含云端完整字段的 json 对象 */
    originJson: Record<string, {}>
  }

  export type SubFunctionShowState = {
    /** 子功能Id */
    id: string
    /** 是否显示 */
    isShow: boolean
  }

  export type RemoteRebootTimers = {
    /** 定时id */
    tid: string
    /** 定时时间 */
    time: string
    /** 定时循环 */
    loops: string
    /** 定时状态 */
    status: boolean
  }

  export type SceneAction = {
    /** 条件 ID */
    id?: string
    /** 场景 ID */
    ruleId?: string
    /** 场景 ID */
    orderNum?: number
    /** 条件为设备类型时，表示设备 ID */
    entityId: string
    /** 设备名称 */
    entityName?: string
    /**
     * 动作类型。枚举：
     * ruleTrigger：触发场景
     * ruleEnable：启用场景
     * ruleDisable：禁用场景
     * appPushTrigger：推送消息
     * mobileVoiceSend：电话服务
     * smsSend：短信服务
     * deviceGroupDpIssue：执行群组
     * irIssue：执行红外设备
     * dpIssue：执行普通设备
     * delay：延时
     * irIssueVii：执行红外设备，执行参数为真实的红外控制码
     * toggle：执行切换开关动作
     * dpStep：执行步进动作
     */
    actionExecutor: string
    /** 动作执行信息 */
    executorProperty: Record<string, {}>
    /** 动作额外信息 */
    extraProperty: Record<string, {}>
    /** 设备是否在线 */
    isDevOnline?: boolean
    /** 条件为设备类型时，表示设备是否被移除 */
    devDelMark?: boolean
    /** 条件为设备类型时，表示设备被删除时的图标 */
    deleteDevIcon?: string
    /** 条件为设备类型时，设备的图标 */
    devIcon?: string
    /** 动作的策略 */
    actionStrategy?: string
    /** 面板信息（小程序或者RN面板） */
    extraPanelInfo?: ExtraPanelInfo
    /** 设备产品 ID */
    pid?: string
    /** 设备产品 ID */
    productId?: string
    /** 条件为设备类型时，表示设备产品图片 */
    productPic?: string
    /** 条件默认图标 */
    defaultIconUrl?: string
    /** 动作展示信息 */
    actionDisplayNew?: Record<string, {}>
    /** 执行状态 */
    status?: boolean
    /** 批量控制设备的数据 */
    relationGroup?: Record<string, {}>
  }

  export type Expr = {
    /** 开始时间  imeInterval=custom时自定义，其余默认00:00 */
    start: string
    /** 结束时间，timeInterval=custom时自定义，其余默认23:59 */
    end: string
    /** 自定义:custom，全天:allDay，白天:daytime，夜间:night,默认allDay */
    timeInterval: string
    /** 按7123456顺序标记，例：0001100，每周三、四；0000000表示只执行一次 */
    loops: string
    /** 时区 */
    timeZoneId: string
    /** 城市Id */
    cityId: string
    /** 城市名称 */
    cityName: string
  }

  export type DeviceInfo_UfyIUd = {
    /** 产品信息，schema，功能定义都在里面 */
    schema: {}[]
    /**
     * dps
     * 设备的功能点状态，可以根据对应的 dpid 拿到具体的状态值去做业务逻辑
     */
    dps: Record<string, {}>
    /**
     * attribute
     * 产品属性定义，在 backend-ng 平台上可查到对应配置，使用二进制位运算的方式进行管理
     */
    attribute: number
    /**
     * capability
     * 产品能力值，在 backend-ng 平台上可以查询对应的勾选项，整体业务逻辑会根据该数据进行划分
     * 区分设备类型也可以根据该属性进行调整，按二进制位运算的方式进行管理
     */
    capability: number
    /**
     * dpName
     * 自定义 dp 的名字，通常在面板里会使用到
     */
    dpName: Record<string, string>
    /**
     * ability
     * 目前业务很少使用，用于区分特殊类型的设备
     */
    ability: number
    /**
     * icon
     * 设备的 icon url
     */
    icon: string
    /**
     * devId
     * 设备的唯一 id
     */
    devId: string
    /**
     * verSw
     * 设备固件版本号
     */
    verSw: string
    /**
     * isShare
     * 是否为分享设备，true 则是分享设备
     */
    isShare: boolean
    /**
     * bv
     * 设备的基线版本号
     */
    bv: string
    /**
     * uuid
     * 设备的固件唯一标识
     */
    uuid: string
    /**
     * panelConfig
     * 产品面板里的配置项，通常在 IoT 平台上可以查看到对应的配置
     */
    panelConfig: Record<string, {}>
    /**
     * activeTime
     * 设备激活时间，时间戳
     */
    activeTime: number
    /**
     * devAttribute
     * 设备的业务能力拓展，二进制位的方式进行运算
     */
    devAttribute: number
    /**
     * pcc
     * Thing自研蓝牙 mesh 产品的分类标识
     */
    pcc: string
    /**
     * nodeId
     * 子设备的短地址
     */
    nodeId: string
    /**
     * parentId
     * 上级节点 id，子设备/或蓝牙 mesh 设备通常会有该字段，用于内部寻找相关的网关或上级模型来进行业务处理
     */
    parentId: string
    /**
     * category
     * 产品的分类
     */
    category: string
    /**
     * standSchemaModel
     * 标准产品功能集定义模型
     */
    standSchemaModel: {}
    /**
     * productId
     * 设备对应的产品 id
     */
    productId: string
    /**
     * bizAttribute
     * 设备自主上报的能力位
     */
    bizAttribute: number
    /**
     * meshId
     * Thing自研的蓝牙 mesh id
     */
    meshId: string
    /**
     * sigmeshId
     * 当前设备所属行业属性对应的蓝牙 mesh id
     */
    sigmeshId: string
    /**
     * meta
     * 设备自定义配置元属性，用于存放业务数据
     */
    meta: Record<string, {}>
    /**
     * isLocalOnline
     * 本地局域网是否在线
     */
    isLocalOnline: boolean
    /**
     * isOnline
     * 设备总的在线情况，只要一个情况在线，就是在线，复合在线情况
     */
    isOnline: boolean
    /**
     * name
     * 设备名称
     */
    name: string
    /** groupId */
    groupId: string
    /**
     * dpCodes
     * 标准功能集 code
     */
    dpCodes: Record<string, {}>
    /** 原始 json，业务来不及拓展更新的时候，可以根据这个来获取处理 */
    originJson: Record<string, {}>
    /**
     * dpsTime
     * 设备DP的执行时间
     */
    dpsTime: {}
  }

  export type ServiceModel = {
    /** 属性列表 */
    properties: ThingProperty[]
    /** 动作列表 */
    actions: ThingAction[]
    /** 事件列表 */
    events: ThingEvent[]
  }

  export type LeaveBeaconFenceEvent = {
    /** 设备模型 设备id */
    deviceId: string
    /** 具体文案 */
    text: string
  }

  export type FileTransferProgressResult = {
    /** 设备模型 设备id */
    deviceId: string
    /** 文件id */
    fileId: number
    /** 文件标识符 */
    fileIdentifier: string
    /** 文件版本 */
    fileVersion: number
    /** 文件地址 */
    filePath: string
    /** 传输进度 */
    progress: number
  }

  export type ThingBLEConnectStatusEvent = {
    /**
     * BLE（thing）连接状态
     * deviceId: 设备 id
     */
    deviceId: string
    /**
     * status 状态值
     *  CONNECTED:已连接
     *  CONNECTING:连接中
     *  CONNECT_BREAK:连接失败
     */
    status: string
  }

  export type ThingBLETransparentDataBean = {
    /**
     * 蓝牙透传数据
     * deviceId: 设备 id
     */
    deviceId: string
    /** data: 透传内容 */
    data: string
  }

  export type ThingBLEBigDataProgressEvent = {
    /**
     * 大数据通道传输进度
     * deviceId 设备 id
     */
    deviceId: string
    /** progress 传输进度，范围: 0 - 100 */
    progress: number
  }

  export type ThingBLEScanDeviceEvent = {
    /** 扫描到的设备ID */
    deviceId: string
  }

  export type BLEBigDataChannelDeviceToAppSuccessResponse = {
    /** data */
    data: BLEBigDataChannelData[]
  }

  export type GWActivationRespond = {
    /**
     * 设备模型
     * deviceId 设备Id
     */
    deviceId: string
    /**
     * 网关模型
     * gwId 网关设备Id
     */
    gwId: string
  }

  export type DirectlyConnectedSearchRespond = {
    /**
     * 设备是否激活
     * isActive 激活结果
     */
    isActive: boolean
  }

  export type DpsChanged = {
    /** dps 对应的设备 id */
    deviceId: string
    /** 子设备对应的网关设备 id，可以根据此进行网关面板的状态刷新 */
    gwId: string
    /**
     * dps
     * 变化的数据
     */
    dps: Record<string, {}>
    /**
     * options
     * 预留的标记位，后续可以区分来源等
     */
    options: Record<string, {}>
  }

  export type MqttResponse = {
    /** 设备 id */
    deviceId?: string
    /** 原始消息数据 */
    message: Record<string, {}>
    /** 双端抹平后的消息数据 */
    messageData: Record<string, {}>
    /** 消息类型 */
    type: string
    /** 协议号 */
    protocol: number
    /** topic */
    topic?: string
  }

  export type SocketResponse = {
    /** 消息内容 */
    message: Record<string, {}>
    /** 设备 id */
    deviceId: string
    /** 局域网消息 type */
    type: number
  }

  export type Online = {
    /** 在线状态 */
    online: boolean
    /** 设备 id */
    deviceId: string
    /**
     * 设备在线类型(预留，后期使用)
     * Wi-Fi online             1 << 0
     * Local online             1 << 1
     * Bluetooth LE online      1 << 2
     * Bluetooth LE mesh online 1 << 3
     */
    onlineType: number
  }

  export type Device_Ket95t = {
    /**
     * deviceId 设备id
     * 支持跨面板获取其他的设备信息，当前面板可以传当前设备的 id 来进行获取
     */
    deviceId: string
    /** dps */
    dps?: Record<string, {}>
  }

  export type OnDeviceRemovedBody = {
    /** 设备id */
    deviceId: string
  }

  export type MqttConnectStateResponse = {
    /**
     * mqtt连接状态
     * 0 连接失败
     * 1 连接成功
     */
    connectState: number
  }

  export type SubFunctionParams = {
    /** 子功能id */
    id: string
    /** 名称 */
    name?: string
    /** 子功能显示类型 */
    type?: string
    /** 子功能分组类型 */
    optionType?: string
    /** 子功能来源：RN｜小程序｜APP */
    from?: string
    /** 排序 */
    order?: number
    /** 是否隐藏 */
    isHide?: boolean
    /** 业务参数 */
    data?: Record<string, {}>
  }

  export type GroupInfoResponse = {
    /** groupId 群组id */
    groupId: string
  }

  export type GroupDpCodeBean = {
    /** groupId 群组id */
    groupId: string
    /**
     * dp信息
     * 示例: dpCodes: {"switch" : true}
     */
    dpCodes: Record<string, Object>
  }

  export type GroupBean = {
    /** 群组id */
    groupId: string
  }

  export type GroupDpDataBean = {
    /** groupId 群组id */
    groupId: string
    /**
     * dp信息
     * 示例: dps: {"1" : true}
     */
    dps: {}
  }

  export type OtaCompletedParams = {
    /**
     * deviceId
     * 设备 id
     */
    deviceId: string
    /**
     * result
     * 结果 0成功、1失败、2超时
     */
    result: number
  }

  export type OnReceivedThingModelMessageBody = {
    /**
     * 类型
     * 0:属性, 1:动作, 2:事件
     */
    type: number
    /** payload */
    payload: Record<string, any>
  }

  export type BLEBigDataChannelData = {
    /** dpsTime */
    dpsTime: string
    /** dps */
    dps: Record<string, {}>
  }

  export type ActivationInfoBean = {
    /**
     * 网关子设备激活数据
     * gateway Gateway 网关模型
     */
    gateway: Gateway
    /** timeout 超时时间设定（秒），建议值120 */
    timeout: number
  }

  export type DirectlyConnectedActivationBean = {
    /**
     * 设备Id
     * device Device 设备模型
     */
    device: Device
    /** timeout 超时时间设定（秒），建议值120 */
    timeout: number
  }

  export type DeviceWifiActivatorResponse = {
    /** 设备是否WiFi激活 */
    wifiActivator: boolean
  }

  export type DeviceNameParams = {
    /** deviceId 设备id */
    deviceId: string
    /** name 设备名称 */
    name: string
  }

  export type DeviceOnlineTypeResponse = {
    /** 设备网络在线类型 */
    onlineType: number
  }

  export type DeviceListReq = {
    /** deviceId 设备ids */
    deviceIds: string[]
  }

  export type DeviceListResp = {
    /** 设备信息队列 */
    deviceInfos: DeviceInfo[]
  }

  export type Product = {
    /** 产品id */
    productId: string
    /** 产品版本号 */
    productVer?: string
  }

  export type ProductInfo = {
    /** 面板配置项，可以在平台进行配置 */
    panelConfig: Record<string, {}>
    /** 产品功能定义集合 */
    schema: string
    /** 产品功能定义集合拓展 */
    schemaExt: string
    /**
     * capability
     * 产品能力值，在 backend-ng 平台上可以查询对应的勾选项，整体业务逻辑会根据该数据进行划分
     * 区分设备类型也可以根据该属性进行调整，按二进制位运算的方式进行管理
     */
    capability: number
    /**
     * attribute
     * 产品属性定义，在 backend-ng 平台上可查到对应配置，使用二进制位运算的方式进行管理
     */
    attribute: number
    /**
     * productId
     * 产品 id
     */
    productId: string
    /**
     * category
     * 产品的分类
     */
    category: string
    /**
     * categoryCode
     * 产品的二级分类
     */
    categoryCode: string
    /**
     * standard
     * 是否为标准产品
     */
    standard: boolean
    /**
     * pcc
     * Thing自研蓝牙 mesh 产品的分类标识
     */
    pcc: string
    /**
     * vendorInfo
     * Thing自研蓝牙 mesh 产品的分类标识，融合类使用
     */
    vendorInfo: string
    /**
     * quickOpDps
     * 快捷操作的 dp ids
     */
    quickOpDps: string[]
    /**
     * faultDps
     * 告警/错误的显示 dp ids
     */
    faultDps: string[]
    /**
     * displayDps
     * 快捷操作的 dp ids
     */
    displayDps: string[]
    /**
     * displayMsgs
     * 快捷操作显示文案
     */
    displayMsgs: Record<string, {}>
    /**
     * uiPhase
     * ui 包当前环境，预览包或线上包
     */
    uiPhase: string
    /**
     * uiId
     * ui 包唯一包名识别
     */
    uiId: string
    /**
     * uiVersion
     * ui 包版本号
     */
    uiVersion: string
    /**
     * ui
     * ui 小标识
     */
    ui: string
    /**
     * rnFind
     * 是否有包含 RN 包
     */
    rnFind: boolean
    /**
     * uiType
     * ui 包类型
     */
    uiType: string
    /**
     * uiName
     * ui 包名称
     */
    uiName: string
    /**
     * i18nTime
     * 产品语言包最新更新时间
     */
    i18nTime: number
    /**
     * supportGroup
     * 是否支持创建群组
     */
    supportGroup: boolean
    /**
     * supportSGroup
     * 是否支持创建标准群组
     */
    supportSGroup: boolean
    /**
     * configMetas
     * 产品特殊配置项，一些功能业务的特殊配置
     */
    configMetas: Record<string, {}>
    /**
     * productVer
     * 产品版本
     */
    productVer: string
    /**
     * attribute 格式化的二进制字符串
     * 产品属性定义，在 backend-ng 平台上可查到对应配置，使用二进制位运算的方式进行管理
     */
    attributeString: string
  }

  export type Mesh = {
    /** 网关设备id或上级节点id */
    meshId: string
  }

  export type DeviceOnline = {
    /** 设备id */
    deviceId: string
    /**
     * 设备在线类型，
     * Wi-Fi online             1 << 0
     * Local online             1 << 1
     * Bluetooth LE online      1 << 2
     * Bluetooth LE mesh online 1 << 3
     */
    onlineType: number
  }

  export type DpsPublish = {
    /** 设备id */
    deviceId: string
    /** dps */
    dps: Record<string, {}>
    /**
     * 下发通道类型
     * 0: 局域网
     * 1: 网络
     * 2: 自动
     */
    mode: number
    /**
     * 下发通道的优先级
     * LAN       = 0, // LAN
     * MQTT      = 1, // MQTT
     * HTTP      = 2, // Http
     * BLE       = 3, // Single Point Bluetooth
     * SIGMesh   = 4, // Sig Mesh
     * BLEMesh   = 5, // Thing Private Mesh
     * BLEBeacon = 6, // Beacon
     */
    pipelines: number[]
    /** 预留下发逻辑配置标记，后续可以拓展，例如下发声音，下发操作后续动作等等 */
    options: Record<string, {}>
  }

  export type QueryDps = {
    /** 设备id */
    deviceId: string
    /** dpids 数组 */
    dpIds: number[]
    /** 查询类型 0 */
    queryType?: number
  }

  export type MqttMessage = {
    /** 消息内容 */
    message: Record<string, {}>
    /** 设备id */
    deviceId: string
    /** 协议号 */
    protocol: number
    /** 预留下发逻辑配置标记，后续可以拓展，例如下发声音，下发操作后续动作等等 */
    options: Record<string, {}>
  }

  export type LanMessageParams = {
    /** 消息内容 */
    message: string
    /** 设备id */
    deviceId: string
    /** 协议号 */
    protocol: number
    /** 预留下发逻辑配置标记，后续可以拓展，例如下发声音，下发操作后续动作等等 */
    options?: Record<string, {}>
  }

  export type SocketMessage = {
    /** 消息内容 */
    message: Record<string, {}>
    /** 设备id */
    deviceId: string
    /** 局域网消息 type */
    type: number
    /** 预留下发逻辑配置标记，后续可以拓展，例如下发声音，下发操作后续动作等等 */
    options: Record<string, {}>
  }

  export type DeviceProperties = {
    /** the properties map */
    properties: Record<string, Object>
  }

  export type DeviceProperty = {
    /** deviceId */
    deviceId: string
    /** the custom data key */
    code: string
    /** the custom data value */
    value: string
  }

  export type DevicePropertyCB = {
    /** deviceId */
    deviceId: string
    /** set DeviceProperty successfully */
    result: boolean
  }

  export type SyncDeviceInfoParams = {
    /** 设备id */
    deviceId: string
  }

  export type SubscribeDeviceRemovedParams = {
    /** 设备id */
    deviceId: string
  }

  export type UnSubscribeDeviceRemovedParams = {
    /** 设备id */
    deviceId: string
  }

  export type MQTTDeviceListenerParams = {
    /**
     * deviceId 设备id
     * 支持跨面板获取其他的设备信息，当前面板可以传当前设备的 id 来进行获取
     */
    deviceId: string
  }

  export type MQTTProtocolListenerParams = {
    /**
     * protocol 协议号
     * MQTT预定义的协议号
     */
    protocol: number
  }

  export type DeviceListListenerParams = {
    /** 需注册的设备列表 */
    deviceIdList: string[]
  }

  export type TopicListListenerParams = {
    /** 需监听的topic列表 */
    topicList: string[]
  }

  export type AdvancedCapabilityParams = {
    /** 设备/群组 id */
    resId: string
    /** dpCodes */
    dpCodes: string[]
    /** 设备："6" 群组："5" */
    type: string
    /** 当前空间id */
    spaceId: number
  }

  export type TranslateAdvancedCapabilityParams = {
    /** 设备/群组 id */
    resId: string
    /** 需要转换的dps */
    dps: OriginalDps[]
    /** 设备："6" 群组："5" */
    type: string
  }

  export type TranslateAdvancedCapabilityResponse = {
    /** 转换后的高级能力 */
    advancedCapability: TranslateAdvancedCapability[]
  }

  export type OTAUpdateInfoParams = {
    /**
     * deviceId
     * 设备 id
     */
    deviceId: string
  }

  export type DeviceDetailParams = {
    /**
     * deviceId
     * 设备 id
     */
    deviceId: string
  }

  export type GroupDetailParams = {
    /**
     * groupId
     * 群组 id
     */
    groupId: string
  }

  export type TimerParams = {
    /**
     * deviceId
     * 设备 id ，deviceId 和 groupId 至少传一个
     */
    deviceId: string
    /**
     * category
     * 定时分类
     */
    category: string
    /**
     * repeat
     * 0表示需要选择重复，1表示不需要
     */
    repeat?: number
    /**
     * data
     * dp 数据
     * {
     *     "dpName": dp 点名称，string
     *     "dpId": dp 点 id，string
     *     "selected": dp 点默认值的 index，t.Integer
     *     "rangeKeys": dp 点的值范围，Array<object>
     *     "rangeValues": dp 点的显示数据范围，Array<string>
     * }
     */
    data: {}[]
    /**
     * timerConfig
     * UI配置
     */
    timerConfig?: TimerConfig
  }

  export type GroupTimerParams = {
    /**
     * groupId
     * 群组 id
     */
    groupId: string
    /**
     * category
     * 定时分类
     */
    category: string
    /**
     * repeat
     * 0表示需要选择重复，1表示不需要
     */
    repeat?: number
    /**
     * data
     * dp 数据
     * {
     *     "dpName": dp 点名称，string
     *     "dpId": dp 点 id，string
     *     "selected": dp 点默认值的 index，t.Integer
     *     "rangeKeys": dp 点的值范围，Array<object>
     *     "rangeValues": dp 点的显示数据范围，Array<string>
     * }
     */
    data: {}[]
    /**
     * timerConfig
     * UI配置
     */
    timerConfig?: TimerConfig
  }

  export type WifiNetworkParams = {
    /**
     * deviceId
     * 设备 id
     */
    deviceId: string
  }

  export type SyncTimerParams = {
    /**
     * deviceId
     * 设备 id ，deviceId 和 groupId 至少传一个
     */
    deviceId?: string
    /**
     * groupId
     * 群组 id ，deviceId 和 groupId 至少传一个
     */
    groupId?: string
    /**
     * category
     * 定时分类
     */
    category: string
  }

  export type SyncTimerResult = {
    /**
     * timers
     * 定时列表
     */
    timers: TimerModel[]
  }

  export type AddTimerParams = {
    /**
     * deviceId
     * 设备 id ，deviceId 和 groupId 至少传一个
     */
    deviceId?: string
    /**
     * groupId
     * 群组 id ，deviceId 和 groupId 至少传一个
     */
    groupId?: string
    /**
     * category
     * 定时分类
     */
    category: string
    /**
     * timer
     * 添加定时模型
     */
    timer: AddTimerModel
  }

  export type AddNewTimerModel = {
    /**
     * timerId
     * 定时器 id
     */
    timerId: string
  }

  export type UpdateTimerParams = {
    /**
     * deviceId
     * 设备 id，deviceId 和 groupId 至少传一个
     */
    deviceId?: string
    /**
     * groupId
     * 群组 id，deviceId 和 groupId 至少传一个
     */
    groupId?: string
    /**
     * timer
     * 更新定时模型
     */
    timer: UpdateTimerModel
  }

  export type UpdateTimerStatusParams = {
    /**
     * deviceId
     * 设备 id，deviceId 和 groupId 至少传一个
     */
    deviceId?: string
    /**
     * groupId
     * 群组 id，deviceId 和 groupId 至少传一个
     */
    groupId?: string
    /**
     * timerId
     * 定时 id
     */
    timerId: string
    /**
     * status
     * 状态
     */
    status: boolean
  }

  export type RemoveTimerParams = {
    /**
     * deviceId
     * 设备 id，deviceId 和 groupId 至少传一个
     */
    deviceId?: string
    /**
     * groupId
     * 群组 id，deviceId 和 groupId 至少传一个
     */
    groupId?: string
    /**
     * timerId
     * 定时器 id
     */
    timerId: string
  }

  export type GetShareDeviceInfoParams = {
    /**
     * deviceId
     * 设备 id
     */
    deviceId: string
  }

  export type GetShareDeviceInfoResponse = {
    /** 姓名 */
    name: string
    /** 手机号 */
    mobile: string
    /** 邮件 */
    email: string
  }

  export type OpenDeviceEditParams = {
    /**
     * deviceId
     * 设备 id
     */
    deviceId: string
  }

  export type OpenGroupEditParams = {
    /**
     * groupId
     * 设备 id
     */
    groupId: string
  }

  export type OpenDeviceInfoParams = {
    /**
     * deviceId
     * 设备 id
     */
    deviceId: string
  }

  export type IsDeviceSupportOfflineReminderParams = {
    /**
     * deviceId
     * 设备 id
     */
    deviceId: string
  }

  export type IsDeviceSupportOfflineReminderResponse = {
    /**
     * support
     * 是否支持设备离线提醒
     */
    isSupport: boolean
  }

  export type GetDeviceOfflineReminderStateParams = {
    /**
     * deviceId
     * 设备 id
     */
    deviceId: string
  }

  export type GetDeviceOfflineReminderStateResponse = {
    /**
     * state
     * 设备离线提醒的开关状态 0:关 1:开
     */
    state: number
  }

  export type ToggleDeviceOfflineReminderParams = {
    /**
     * deviceId
     * 设备 id
     */
    deviceId: string
    /**
     * state
     * 设备离线提醒的开关状态 0:关 1:开
     */
    state: number
  }

  export type GetDeviceOfflineReminderWarningTextResponse = {
    /** 离线提醒关闭警告文案 */
    warningText: string
  }

  export type Device_yQKNyw = {
    /**
     * deviceId
     * 设备 id
     */
    deviceId: string
  }

  export type OpenShareDeviceParams = {
    /**
     * deviceId
     * 设备 id
     */
    deviceId: string
  }

  export type AddDeviceToDeskParams = {
    /**
     * deviceId
     * 设备 id
     */
    deviceId: string
  }

  export type RemoveShareDeviceParams = {
    /**
     * deviceId
     * 设备 id
     */
    deviceId: string
  }

  export type GetSupportedThirdPartyServicesParams = {
    /**
     * deviceId
     * 设备 id
     */
    deviceId: string
  }

  export type GetSupportedThirdPartyServicesResponse = {
    /** 服务列表 */
    services: ThirdPartyService[]
  }

  export type ConfigurationResponse = {
    /** 定制业务配置项 */
    customConfiguration: {}[]
    /** 有实现的子功能列表 */
    hasImplFunctionList: string[]
  }

  export type SubFunctionShowParams = {
    /** 需要获取显示状态的子功能Id */
    ids: string[]
    /** 设备Id */
    deviceId?: string
    /** 群组Id */
    groupId?: number
  }

  export type SubFunctionShowResponse = {
    /** 需要监听的子功能列表 */
    showStateList: SubFunctionShowState[]
  }

  export type SubFunctionExtShowData = {
    /** 子功能id */
    id: string
    /** 查询参数 / 返回的数据 */
    data?: Record<string, {}>
  }

  export type GetRemoteRebootTimersParams = {
    /**
     * deviceId
     * 设备 id
     */
    deviceId: string
  }

  export type GetRemoteRebootTimersResult = {
    /** 定时列表 */
    timers: RemoteRebootTimers[]
  }

  export type UiComponent = {
    /** 组件code */
    code: string
    /** 组件版本 */
    version: string
    /** 排序 */
    sort: number
    /** 版本路径 */
    content?: string
    /** 文件大小 */
    fileSize?: string
    /** 文件md5 */
    fileMd5?: string
  }

  export type UiInfo = {
    /** 发布状态 */
    phase?: string
    /** 类型：H5 RN */
    type?: string
    /** uiId版本 */
    ui?: string
    /** rn版本 */
    appRnVersion?: string
    /** 名称 */
    name?: string
    /** 是否找到面板 */
    rnFind?: boolean
    /** 面板配置 */
    uiConfig?: Record<string, {}>
    /** 包下载地址相对路径 */
    content?: string
    /** 文件大小 */
    fileSize?: string
    /** 文件md5 */
    fileMd5?: string
    /** 包类型:0.全量包,1.拆分包 */
    rnBizPack?: number
    /** 包ID */
    bizClientId?: string
    /** 拆分包依赖组件列表 */
    uiComponentList?: UiComponent[]
  }

  export type RNPanelInfo = {
    /** 面板id */
    uiid?: string
    /** 面板信息 */
    uiInfo?: UiInfo
    /** Android 面板信息 */
    androidUiInfo?: UiInfo
    /** 多语言 */
    i18nTime?: number
  }

  export type MiniInfo = {
    /** 小程序额外信息 */
    extraMiniInfo?: Record<string, {}>
  }

  export type ExtraPanelInfo = {
    /** RN面板信息 */
    rnPanelInfo?: RNPanelInfo
    /** 小程序信息 */
    miniInfo?: MiniInfo
  }

  export type RecommendSceneParams = {
    /** 来源 */
    source: string
    /** 场景模型 */
    sceneModel: Record<string, {}>
  }

  export type RecommendSceneCallBack = {
    /** 返回状态，默认返回 true */
    status?: boolean
    /** 成功返回的类型。0-未操作，1-保存成功，2-点击不感兴趣 */
    type: number
    /** 返回的场景数据，可能为空 */
    data?: Record<string, {}>
  }

  export type OpenDeviceExecutionAndAnutomationParams = {
    /**
     * deviceId
     * 设备 id
     */
    deviceId: string
    /** 页面标题，Android 需要 */
    title?: string
  }

  export type SaveSceneActionParams = {
    /** 设备id */
    deviceId: string
    /** 动作的索引位置 */
    taskPosition: number
    /** 动作执行器 */
    actionExecutor?: string
    /** 动作执行信息 */
    executorProperty: Record<string, {}>
    /** 动作额外信息 */
    extraProperty: Record<string, {}>
    /** 动作展示信息 */
    actionDisplayNew: Record<string, {}>
  }

  export type ActionParams = {
    /**
     * 动作类型:device,smart,remind,delay
     * device:设备
     * smart:操作某个智能（执行智能、开关自动化）
     * remind:提醒
     * delay:延时
     */
    createType: string
    /**
     * 智能类型：scene,auto
     * scene:一键执行
     * auto：自动化
     */
    smartType: string
    /** 当前场景动作列表 */
    actionArray: SceneAction[]
  }

  export type ActionResponse = {
    /** 动作列表 */
    actionArray: SceneAction[]
  }

  export type EditActionParams = {
    /** 当前编辑的actionIndex */
    editIndex: string
    /** 智能类型 */
    smartType: string
    /** 动作列表 */
    actionArray: SceneAction[]
  }

  export type SceneDialogParams = {
    /**
     * 智能类型：scene,auto
     * scene:一键执行
     * auto：自动化
     */
    smartType?: string
    /** 颜色 */
    color?: string
    /** 图标 */
    icon?: string
    /** 图片 */
    image?: string
  }

  export type SceneDialogResponse = {
    /** 颜色 */
    color?: string
    /** 图标 */
    icon?: string
    /** 图片 */
    image?: string
  }

  export type PreConditionPageParams = {
    /** id */
    id?: string
    /** 固定值 timeCheck */
    condType?: string
    /** 规则 */
    expr?: Expr
  }

  export type PreConditionPageResponse = {
    /** id */
    id: string
    /** 固定值 timeCheck */
    condType: string
    /** 规则 */
    expr: Expr
  }

  export type ConditionParams = {
    /** 条件类型 */
    type: string
    /** 条件内容 */
    condition?: string
    /** 索引 */
    index?: number
  }

  export type ConditionResponse = {
    /** 条件类型 */
    type?: string
    /** 条件内容 */
    condition?: string
    /** 索引 */
    index?: number
  }

  export type DeviceListResponse = {
    /** groupId 群组id */
    groupId: string
    /** deviceList 设备列表 */
    deviceList: DeviceInfo_UfyIUd[]
  }

  export type DeviceNumResponse = {
    /** groupId 群组id */
    groupId: string
    /** devieNum 设备数量 */
    devieNum: number
  }

  export type DpCodeParams = {
    /** groupId 群组id */
    groupId: string
    /** dpCode内容 */
    dpCode: string
  }

  export type SigMeshMultiDpDataParams = {
    /** groupId 群组id */
    groupId: string
    /** localId 群组本地标识 */
    localId: string
    /**
     * dp信息
     * 示例: dps: {"1" : true}
     */
    dps: Record<string, {}>
    /** pcc mesh设备品类 */
    pcc: string
  }

  export type MeshLocalGroupParams = {
    /**
     * 整体说明
     * 支持2个版本:
     * 1、本地版本仅支持根据vendorIds进行过滤，为本地逻辑，设备列表APP本地根据meshCategory进行比对过滤，群组结果保存在设备上，云端不参与群组的列表获取与保存。
     * 2、云端版本支持根据pccs或者codes进行过滤，为云端逻辑，设备列表获取及群组设备关系保存在云端。
     * 本地版本参数：
     * {
     * "localId": "203a",
     * "vendorIds": "1F10,2F10"
     * }
     * 云端版本参数：
     * 1、pcc过滤，相当于旧版本的vendorIds
     * {
     * "localId": "203a",
     * "type": "0",
     * "pccs":  ["1210"],
     * "categoryCode": "7001"
     * }
     * 2、code过滤，根据二级品类进行过滤，目前云端只支持ykq和gykzq这两种遥控器
     * {
     * "localId": "203a",
     * "type": "1",
     * "codes": ["xxxx"],
     * "categoryCode": "7001"
     * }
     * 关于categoryCode：categoryCode  并非三级品类，与localId匹配范围为7001-7008；localId 为云端分配，步长为8，因此一个遥控器内部最多支持关联8个群组，localid为初始值依次+1，与之匹配的categoryCode从7001依次+1.
     * vendorIds 必传 可以为空字符串
     * devId 遥控器设备id
     */
    deviceId: string
    /** localId 群组本地标识 */
    localId: string
    /**
     * 遥控器群组本地版本，使用功能此参数，云端版本传空字符串
     * vendorIds 使用meshCategory进行设备列表筛选
     * 示例：vendorIds: "1F10,2F10"
     */
    vendorIds: string
    /**
     * 遥控器群组云端版本，使用此功能参数
     * type 筛选条件  0:pccs过滤，1：codes过滤
     */
    type?: string
    /**
     * 遥控器群组云端版本，使用此功能参数
     * pccs 使用meshCategory进行设备列表筛选
     * 示例：pccs: ["1F10","2F10"]
     */
    pccs?: string[]
    /**
     * 遥控器群组云端版本，使用此功能参数
     * codes 使用二级品类进行设备列表筛选
     * 示例：pccs: ["1F10","2F10"]
     */
    codes?: string[]
    /**
     * categoryCode  并非三级品类，与localId匹配范围为7001-7008；
     * localId 为云端分配，步长为8，因此一个遥控器内部最多支持关联8个群组，localid为初始值依次+1，与之匹配的categoryCode从7001依次+1.
     */
    categoryCode?: string
    /**
     * 是否支持低功耗,部分无线开关需要用到
     * 默认值:false
     */
    isSupportLowPower?: boolean
  }

  export type GroupInfo = {
    /**
     * groupId
     * The group ID.
     */
    groupId: string
    /**
     * productId
     * The product ID.
     */
    productId: string
    /**
     * name
     * The name of the group.
     */
    name: string
    /**
     * time
     * The time when the group was created.
     */
    time: number
    /**
     * iconUrl
     * The URL of the icon.
     */
    iconUrl: string
    /**
     * type
     * The type of group.
     * Wifi = 0, Mesh = 1, Zigbee = 2, SIGMesh = 3, Beacon = 4,
     */
    type: number
    /** isShare */
    isShare: boolean
    /** dps */
    dps: {}
    /** dpCodes */
    dpCodes: {}
    /**
     * deviceNum
     * The number of devices,
     */
    deviceNum: number
    /**
     * localKey
     * The local key.
     */
    localKey: string
    /** The protocol version. */
    pv: number
    /** The product information. */
    productInfo: {}
    /** The custom DP name. */
    dpName: {}
    /** The device list. */
    deviceList: DeviceInfo_UfyIUd[]
    /** The local short address of groups. */
    localId: string
    /** The subclass. */
    pcc: string
    /** The mesh ID or gateway ID. */
    meshId: string
    /** Add the beacon beaconKey. */
    groupKey: string
    /** The schema array. */
    schema: {}[]
  }

  export type GetGroupPropertyResponse = {
    /** 群组属性信息 */
    result: Record<string, {}>
  }

  export type SetGroupPropertyBean = {
    /** 群组id */
    groupId: string
    /** code 属性code */
    code: string
    /** value */
    value: string
  }

  export type GroupIdListBean = {
    /** groupIdList 群组id 列表 */
    groupIdList: string[]
  }

  export type NodeParams = {
    /** nodeId */
    nodeId: string
    /** deviceId 网关id */
    deviceId: string
  }

  export type DeviceResult = {
    /** 设备id */
    deviceId: string
  }

  export type DpDataParams = {
    /** 设备模型 设备id */
    deviceId: string
    /** dpId */
    dpIds: Object[]
  }

  export type CheckOTAUpgradeStatusParams = {
    /**
     * deviceId
     * 设备 id
     */
    deviceId: string
  }

  export type CheckOTAUpgradeStatusResponse = {
    /**
     * status
     * 设备的固件版本状态 0已是最新版本、1有待升级的固件、2正在升级
     */
    status: number
  }

  export type OtaStatusResponse = {
    /**
     * status
     * 设备的固件版本状态 0已是最新版本、1有待升级的固件、2正在升级、3成功、4失败、5等待唤醒、6下载、7超时、13排队中、100准备中
     */
    status: number
  }

  export type OpenOTAUpgradeParams = {
    /**
     * deviceId
     * 设备 id
     */
    deviceId: string
  }

  export type ThingProperty = {
    /** 属性id */
    abilityId: number
    /** 访问模式: ro-只读, wr-只写, rw-读写 */
    accessMode: string
    /** 属性类型 */
    typeSpec: Record<string, any>
    /** 属性默认值 */
    defaultValue: {}
    /** 标识代码 */
    code: string
  }

  export type ThingAction = {
    /** 动作id */
    abilityId: number
    /** 动作的输入参数列表 */
    inputParams: {}[]
    /** 动作的输出参数列表 */
    outputParams: {}[]
    /** 标识代码 */
    code: string
  }

  export type ThingEvent = {
    /** 事件id */
    abilityId: number
    /** 事件的输出参数列表 */
    outputParams: {}[]
    /** 标识代码 */
    code: string
  }

  export type DeviceIsSupportThingModelParams = {
    /** 设备id */
    devId: string
  }

  export type DeviceIsSupportThingModelResponse = {
    /** 是否支持物模型控制 */
    isSupport: boolean
  }

  export type UpdateThingModelInfoParams = {
    /** 产品id */
    pid: string
    /** 产品版本号 */
    productVersion: string
  }

  export type GetDeviceThingModelInfoParams = {
    /** 设备id */
    devId: string
  }

  export type GetDeviceThingModelInfoResponse = {
    /** 物模型id */
    modelId: string
    /** 产品id */
    productId: string
    /** 产品版本 */
    productVersion: string
    /** 服务列表 */
    services: ServiceModel[]
    /** 扩展属性 */
    extensions: Record<string, any>
  }

  export type PublishThingModelMessageParams = {
    /** 设备id */
    devId: string
    /**
     * 类型
     * 0:属性, 1:动作, 2:事件
     */
    type: number
    /**
     * Example:
     *  type == property:
     *     payload = {
     *      "color":"green",
     *         "brightness": 50
     *      }
     *  type == action:
     *     payload = {
     *        "actionCode": "testAction",
     *        "inputParams": {
     *          "inputParam1":"value1",
     *          "inputParam2":"value2"
     *        }
     *     }
     */
    payload: Record<string, any>
  }

  export type SubscribeReceivedThingModelMessageParams = {
    /** 设备id */
    devId: string
  }

  export type UnSubscribeReceivedThingModelMessageParams = {
    /** 设备id */
    devId: string
  }

  export type InitReq = {
    /** 产品id */
    pid: string
  }

  export type InitRes = {
    /** 设备id */
    devId: string
  }
}
