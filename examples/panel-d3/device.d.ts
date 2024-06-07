/**
 * 当前设备的 TS 类型
 */
type SmartRobotDpState = {
  /**
   * 开关
   */
  power: boolean;
  /**
   * 工作模式
   */
  mode: string;
  /**
   * 故障告警
   */
  fault: number;
};
