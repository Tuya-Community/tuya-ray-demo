import BlueToothAPi from './bleApi';
import WiFiApi from './wifiApi';
import ZigBeeApi from './zigbeeApi';
export * from './interface';

export class ApiCreator {
  public apis: BlueToothAPi | WiFiApi | ZigBeeApi;
  public devInfo: DevInfo;

  private hasLog: boolean;

  private log = (text: string) => {
    if (!this.hasLog) {
      this.hasLog = true;
      console.log(text);
    }
  };

  /** 获取 api 列表 */
  public initApiList = (devInfo: DevInfo) => {
    this.devInfo = devInfo;
    const { capability } = devInfo;
    /**
     * 通过 能力判断当前公版类型
     * 1 wifi
     * 1024 ble
     * 1025 ble + wifi
     * 2048 ble mesh
     * 4096 zigbee
     */
    if (capability === 1) {
      this.log('---------------生成 wifi api list---------------');
      this.apis = new WiFiApi();
    }

    if (capability === 1024 || capability === 1025 || capability === 2048) {
      this.log('---------------生成蓝牙 api list---------------');
      this.apis = new BlueToothAPi();
    }

    if (capability === 4096) {
      this.log('---------------生成 ZigBee api list---------------');
      this.apis = new ZigBeeApi();
    }
    return this.apis;
  };
}

export const Api = new ApiCreator();
