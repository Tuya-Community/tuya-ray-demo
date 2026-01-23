/**
 * HomeKit
 *
 * @version 3.4.0
 */
declare namespace ty.home {
  /**
   * 请求接口，获取本地设备时区信息，并写入缓存
   */
  export function getLocalDeviceConfigWithDevId(params: {
    /** 设备ID */
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
   * 修改家庭信息
   */
  export function updateHomeInfoData(params: {
    /** 家庭名称 */
    homeName: string
    /** 家庭id */
    homeId: string
    /** 经度 */
    longitude: string
    /** 维度 */
    latitude: string
    /** 详细地址 */
    address: string
    /**
     * 是否是管理员
     * true 是管理员; false 非管理员
     */
    admin: boolean
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
   * 获取当前家庭信息
   */
  export function getCurrentHomeInfo(params?: {
    complete?: () => void
    success?: (params: {
      /** 家庭名称 */
      homeName: string
      /** 家庭id */
      homeId: string
      /** 经度 */
      longitude: string
      /** 维度 */
      latitude: string
      /** 详细地址 */
      address: string
      /**
       * 是否是管理员
       * true 是管理员; false 非管理员
       */
      admin: boolean
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
   * 获取设备房间信息
   */
  export function getDeviceRoomInfo(params: {
    /**
     * deviceId
     * 设备 id
     */
    deviceId: string
    complete?: () => void
    success?: (params: {
      /** The room ID. */
      roomId: number
      /** The room name. */
      name: string
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
   * 获取群组房间信息
   */
  export function getGroupRoomInfo(params: {
    /**
     * groupId
     * 群组 id
     */
    groupId: string
    complete?: () => void
    success?: (params: {
      /** The room ID. */
      roomId: number
      /** The room name. */
      name: string
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
   * 切换家庭,注: iOS下非Tab小程序使用时切换家庭后会自动跳转到首页
   */
  export function switchHome(params?: {
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
   * 从sdk本地缓存中获取当前维度下的设备id列表
   */
  export function getDeviceIdList(params: {
    /** 维度id */
    ownerId: number
    complete?: () => void
    success?: (params: {
      /** 设备id列表 */
      devIds: string[]
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
   * 从sdk本地缓存中获取当前维度下的设备id列表
   */
  export function getRoomList(params: {
    /** 维度id */
    ownerId: number
    complete?: () => void
    success?: (params: {
      /** 房间列表 */
      roomDatas: RoomData[]
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
   * 验证码校验成功
   */
  export function onTicketSuccess(params?: {
    /** ticket */
    map?: Record<string, string>
    complete?: () => void
    success?: (params: {
      /** ticket */
      map?: Record<string, string>
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
   * 【废弃】打开推荐场景详情页面
   *请用deviceKit包下同名方法替代
   */
  export function openRecommendSceneDetail(params: {
    /** 来源 */
    source: string
    /** 场景模型 */
    sceneModel: Record<string, any>
    complete?: () => void
    success?: (params: {
      /** 返回状态，默认返回 true */
      status?: boolean
      /** 成功返回的类型。0-未操作，1-保存成功，2-点击不感兴趣 */
      type: number
      /** 返回的场景数据，可能为空 */
      data?: Record<string, any>
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
   * 【废弃】跳转一键执行和自动化页面
   *请用deviceKit包下同名方法替代
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
   * 注册家庭切换通知
   */
  export function onHomeChanged(
    listener: (params: {
      /** 家庭名称 */
      homeName: string
      /** 家庭id */
      homeId: string
      /** 经度 */
      longitude: string
      /** 维度 */
      latitude: string
      /** 详细地址 */
      address: string
      /**
       * 是否是管理员
       * true 是管理员; false 非管理员
       */
      admin: boolean
    }) => void
  ): void

  /**
   * 解除注册家庭切换通知
   */
  export function offHomeChanged(
    listener: (params: {
      /** 家庭名称 */
      homeName: string
      /** 家庭id */
      homeId: string
      /** 经度 */
      longitude: string
      /** 维度 */
      latitude: string
      /** 详细地址 */
      address: string
      /**
       * 是否是管理员
       * true 是管理员; false 非管理员
       */
      admin: boolean
    }) => void
  ): void

  export type RoomData = {
    /** 房间id */
    roomId: number
    /** 房间名称 */
    name: string
    /** 房间下的设备id */
    deviceIds: string[]
  }

  export type HomeInfoData = {
    /** 家庭名称 */
    homeName: string
    /** 家庭id */
    homeId: string
    /** 经度 */
    longitude: string
    /** 维度 */
    latitude: string
    /** 详细地址 */
    address: string
    /**
     * 是否是管理员
     * true 是管理员; false 非管理员
     */
    admin: boolean
  }

  export type GetDeviceRoomInfoParams = {
    /**
     * deviceId
     * 设备 id
     */
    deviceId: string
  }

  export type GetDeviceRoomInfoResponse = {
    /** The room ID. */
    roomId: number
    /** The room name. */
    name: string
  }

  export type GroupRoomInfoParams = {
    /**
     * groupId
     * 群组 id
     */
    groupId: string
  }

  export type GroupRoomInfoResponse = {
    /** The room ID. */
    roomId: number
    /** The room name. */
    name: string
  }

  export type OwnerId = {
    /** 维度id */
    ownerId: number
  }

  export type DeviceIdList = {
    /** 设备id列表 */
    devIds: string[]
  }

  export type RoomList = {
    /** 房间列表 */
    roomDatas: RoomData[]
  }

  export type TicketModel = {
    /** ticket */
    map?: Record<string, string>
  }

  export type RecommendSceneParams = {
    /** 来源 */
    source: string
    /** 场景模型 */
    sceneModel: Record<string, any>
  }

  export type RecommendSceneCallBack = {
    /** 返回状态，默认返回 true */
    status?: boolean
    /** 成功返回的类型。0-未操作，1-保存成功，2-点击不感兴趣 */
    type: number
    /** 返回的场景数据，可能为空 */
    data?: Record<string, any>
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
}
