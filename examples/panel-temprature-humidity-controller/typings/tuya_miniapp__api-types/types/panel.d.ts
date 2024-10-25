declare namespace SmartMiniprogram {
  type PanelKitInitConfig = {
    /**
     * @description 设备 ID
     * @default null
     */
    deviceId?: string;
    /**
     * @description 群组 ID
     * @default null
     */
    groupId?: string;

    /**
     * @description 是否使用默认离线弹窗
     * @default true
     */
    useDefaultOffline: boolean;
    /**
     * 蓝牙 toast 是否需要覆盖界面
     * @default false
     * @version 2.10.4
     */
    bleCover?: boolean;

    /**
     * @description 自定义导航栏后，需要配置高度
     * @default 0
     * @version 2.10.4
     */
    customTop?: string;

    /**
     * @description 是否显示蓝牙连接状态提示
     *
     * @default true
     * @version 2.10.4
     */
    showBLEToast?: boolean;

    /**
     * @description 蓝牙连接类型。0 : 网关和app都需要，默认值，本地和网关两个途径任何一个可用均可生效 1 : 仅app，只会判定本地是否在线，以及本地连接是否成功 2 : 仅网关连接，只会判定网关是否在线，以及坚持网关连接是否成功
     * @default 0
     */
    bleConnectType?: number;
  };

  type StatusToastOptions = {
    /**
     * @description 提示文案
     */
    title: string;
    /**
     * @description 提示類型
     * @default success
     */
    type?: 'success' | 'warning' | 'error';
    /**
     * @description 提示左侧图标 base64
     */
    leftIcon?: string;
    /**
     * @description 提示右侧图标 base64
     */
    rightIcon?: string;
    /**
     * @description 是否遮罩界面阻止底层交互
     * @default false
     */
    cover?: boolean;
    /**
     * @description 显示时长
     * @default 15000 ms
     */
    duration?: number;
    /**
     * @description 是否自动关闭
     * @default true
     */
    autoClose?: boolean;
    /**
     * @description 遮罩背景色
     * @default transparent
     */
    coverColor?: string;
  };

  type WarningItem = {
    /**
     * @description 提示内容
     */
    content: string;
    /**
     * @description 展示类型
     * @default error
     */
    type?: 'success' | 'warning' | 'error';
  };

  type ListConfig = {
    /**
     * @description 展开列表自定义标题
     */
    title?: string;
  };

  type Permissions =
    | 'bluetooth'
    | 'writePhotosAlbum'
    | 'userLocationBackground'
    | 'record'
    | 'camera'
    | 'userLocation'
    | 'userPreciseLocation';

  interface TY {
    panel: {
      /**
       * 初始化面板基础组件
       * @param config PanelKitInitConfig 其中 deviceId 与 groupId 二者必填其一
       */
      initPanelKit(config: PanelKitInitConfig): void;
      /**
       * 移除事件监听，在面板销毁时调用
       */
      unregisterEvent(): void;

      /**
       * 检测设备 OTA 更新
       * @param deviceId 设备 ID
       */
      checkOTAUpdate(deviceId: string): void;
      /**
       * 显示 toast
       * @param options 配置信息
       * @version 2.10.4
       */
      showToast(options: StatusToastOptions): Promise<string>;
      /**
       * 关闭 toast
       * @param id 要关闭的 toast id，不传则关闭所有。
       * @version 2.10.4
       */
      closeToast(id?: string): void;

      /**
       * 显示告警提示
       * @param list 告警列表
       * @param config 展开列表配置
       * @version 2.10.4
       */
      showWarningWithList(list: WarningItem[], config?: ListConfig): Promise<string>;

      /**
       * 查询是否有某权限，若没有则尝试请求，请求成功返回 true, 失败返回 false
       * @param permission 需要查询的权限
       * @version 2.10.4
       */
      checkPermission(permission: Permissions): Promise<boolean>;
    };
  }
}
