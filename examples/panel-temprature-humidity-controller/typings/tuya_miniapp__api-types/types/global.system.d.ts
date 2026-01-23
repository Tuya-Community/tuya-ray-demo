declare namespace SmartMiniprogram {
  type SystemInfo = {
    is24Hour: boolean;
    system: string;
    brand: string;
    model: string;
    platform: string;
    timezoneId: string;
    pixelRatio: number;
    screenWidth: number;
    screenHeight: number;
    windowWidth: number;
    windowHeight: number;
    statusBarHeight: number;
    language: string;
    safeArea: {
      left: number;
      right: number;
      top: number;
      bottom: number;
      width: number;
      height: number;
    };
    albumAuthorized: boolean;
    cameraAuthorized: boolean;
    locationAuthorized: boolean;
    microphoneAuthorized: boolean;
    notificationAuthorized: boolean;
    notificationAlertAuthorized: boolean;
    notificationBadgeAuthorized: boolean;
    notificationSoundAuthorized: boolean;
    bluetoothEnabled: boolean;
    locationEnabled: boolean;
    wifiEnabled: boolean;
    theme?: 'dark' | 'light';
    deviceOrientation?: 'landscape' | 'portrait';
  };

  type GetSystemInfoOption = AsyncApiOptions<SystemInfo>;

  interface TY {
    /**
     * 环境变量
     * @example
     * ```js
     * ty.env.USER_DATA_PATH // 文件系统中的用户目录路径 (本地路径)
     * ```
     * @see https://developer.tuya.com/cn/miniapp/api/basic/env
     */
    env: {
      /* 文件系统中的用户目录路径 (本地路径) */
      USER_DATA_PATH: string;
    };

    // /**
    //  * 获取系统信息
    //  * @param option 监听获取系统信息相关回调
    //  * @example
    //  * ```js
    //  * ty.getSystemInfo({
    //  *  success: (res) => { console.log(res) },
    //  *  fail: (res) => { console.log(res) },
    //  *  complete: (res) => { console.log(res) }
    //  * });
    //  * ```
    //  * @see https://developer.tuya.com/cn/miniapp/api/kits/base-kit/get-system-info
    //  */
    // getSystemInfo<T extends GetSystemInfoOption = GetSystemInfoOption>(
    //   option?: T
    // ): PromisifySuccessResult<T, GetSystemInfoOption>;

    // /**
    //  * 获取系统信息同步接口
    //  * @example
    //  * ```js
    //  * const res = ty.getSystemInfoSync();
    //  * console.log(res);
    //  * ```
    //  * @see https://developer.tuya.com/cn/miniapp/api/kits/base-kit/get-system-info-sync
    //  */
    // getSystemInfoSync(): SystemInfo;

    /**
     * 设置系统导航栏后退键行为
     */
    setNavigationBarBack(options: AsyncApiOptions<void, void> & { type: 'system' | 'custom' }): void;

    /**
     * 监听自定义导航栏后退键行为
     * @param listener 监听函数
     * @example
     * ```js
     * ty.onNavigationBarBack(() => {
     *  console.log('onNavigationBarBack');
     * });
     * ```
     */
    onNavigationBarBack(listener: Function): void;

    /**
     * 取消监听自定义导航栏后退键行为
     * @param listener 监听函数
     * @example
     * ```js
     * const listener = () => { console.log('onNavigationBarBack'); };
     * ty.onNavigationBarBack(listener);
     * ty.offNavigationBarBack(listener);
     * ```
     */
    offNavigationBarBack(listener: Function): void;
  }
}
