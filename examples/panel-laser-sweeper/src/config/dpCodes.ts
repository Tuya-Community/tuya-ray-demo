const nameCodeMap = {
  cleanSwitch: 'switch_go', // 清扫开关
  pauseSwitch: 'pause', // 暂停/继续
  robotStatus: 'status', // 机器状态
  cleanTime: 'clean_time', // 清扫时间
  cleanArea: 'clean_area', // 清扫面积
  energy: 'battery_percentage', // 剩余电量
  workMode: 'mode', // 工作模式
  workTimes: 'clean_times', // 工作次数
  moveCtrl: 'direction_control', // 方向
  suckMode: 'suction', // 吸力选择
  mopMode: 'cistern', // 水量选择
  faultData: 'fault', // 故障告警
  commText: 'command_trans', // 指令传输
  commFlag: 'request', // 请求数据
  resetMap: 'map_reset', // 重置地图
  pathData: 'path_data', // 路径传输
  chargeSwitch: 'switch_charge', // 回充开关
  location: 'seek', // 寻找机器
  volume: 'volume_set', // 音量设置
  sideBshTm: 'edge_brush_life', // 边刷已使用时间
  mainBshTm: 'roll_brush_life', // 滚刷已使用时间
  filterTm: 'filter_life', // 滤芯已使用时间
  dusterCloth: 'rag_life', // 拖布已使用时间
  carpetCleanPrefer: 'carpet_clean_prefer', // 地毯清洁偏好
  autoBoost: 'auto_boost', // 地毯增压
  childLock: 'child_lock', // 按键童锁
  yMop: 'y_mop', // Y字形拖地

  landStrengthMode: 'land_strength', // 擦地强度
  selfClean: 'self_clean', // 拖布自清洁
  selfCleanFrequency: 'self_clean_frequency', // 拖布自清洁频率
  selfCleanStrength: 'self_clean_strength', // 拖布自清洁强度
  drying: 'drying', // 烘干开关

  breakClean: 'break_clean', // 断点续扫
  voiceData: 'voice_data', // 语音包数据下发
  deviceInfo: 'device_info', // 设备信息
  totalArea: 'clean_area_total', // 总清扫面积
  totalMinutes: 'clean_time_total', // 总清扫时间
  totalCount: 'clean_count_total', // 总清扫次数
  deviceTimer: 'device_timer', // 定时
  customizeModeSwitch: 'customize_mode_switch', // 自定义模式
  dustCollectionNum: 'dust_collection_num',
  dustCollectionSwitch: 'dust_collection_switch', // 集尘频率设置
  unitSet: 'unit_set', // 单位设置
  estimatedArea: 'estimated_area', // 预估面积
  cleanWorkMode: 'work_mode', // 工作模式
  mopState: 'mop_state', // 拖布状态

  statusCode: 'status', // 机器状态
  switchGoCode: 'switch_go', // 清扫开关
  batteryPercentageCode: 'battery_percentage', // 电量
  switchChargeCode: 'switch_charge', // 回充开关
  autoBoostCode: 'auto_boost', // 地毯增压
  carpetCleanPreferCode: 'carpet_clean_prefer', // 地毯清洁偏好
  modeCode: 'mode', // 工作模式
  unitSetCode: 'unit_set', // 单位设置
  switchLed: 'switch_led', // 灯效开关
  workstationTypeCode: 'workstation_type', // 工作站类型

  // 请求数据枚举值
  commonFlagValues: {
    gmap: 'get_map',
    gpath: 'get_path',
    inmap: 'get_both',
  },

  // 地图状态
  nativeMapStatus: {
    normal: 0,
    pressToRun: 1,
    areaSet: 2,
    virtualArea: 3,
    virtualWall: 4,
    mapClick: 5,
    selectRoom: 6,
  },

  // 机器状态枚举值
  robotStatusEnum: {
    toCharge: 'goto_charge', // 回充的路上，去回充
    charging: 'charging', // 充电中
    fullCharge: 'charge_done', // 充满电
    pause: 'paused', // 暂停
    idle: 'standby', // 待机
    sleep: 'sleep', // 休眠
    totaling: 'smart', // 全局清扫
    pointing: 'goto_pos', // 指哪扫哪
    pointed: 'pos_arrived', // 指哪扫哪已到达目标点
    unpointed: 'pos_unarrive', // 未到达目标点
    areaing: 'zone_clean', // 划区清扫
    parting: 'part_clean', // 局部清扫
    selectRoom: 'select_room', // 选区清扫
    collectingDust: 'collecting_dust', // 集尘中
    seekDustBucket: 'seek_dust_bucket', // 寻找集尘桶
    selfClean: 'self_clean', // 自清洁中
    mapping: 'mapping', // 快速建图中
    mappingDone: 'mapping_done', // 建图完成
    manual: 'manual', // 手动控制
    cleaning: 'cleaning', // 清扫中
    fault: 'fault', // 故障
  },

  // 工作模式枚举值
  workModeEnum: {
    smart: 'smart', // 全局清扫
    zone: 'zone', // 区域清扫
    pose: 'pose', // 指哪扫哪
    part: 'part', // 局部清扫
    toCharge: 'goto_charge', // 回充
    selectRoom: 'select_room', // 选区清扫
    manual: 'manual', // 手动控制
  },

  // 清洁模式枚举值
  cleanWorkModeEnum: {
    bothWork: 'both_work', // 扫拖
    onlySweep: 'only_sweep', // 仅扫
    onlyMop: 'only_mop', // 仅拖
  },

  suckModeEnum: {
    closed: 'closed',
    gentle: 'gentle',
    normal: 'normal',
    strong: 'strong',
    max: 'max',
  },

  mopModeEnum: {
    closed: 'closed',
    low: 'low',
    middle: 'middle',
    high: 'high',
  },

  unitSetEnum: {
    meter: 'square_meter',
    foot: 'square_foot',
  },

  nativeMapStatusEnum: {
    normal: 0, // 正常
    pressToRun: 1, // 指拿扫哪
    areaSet: 2, // 划区清扫
    virtualArea: 3, // 虚拟框
    virtualWall: 4, // 虚拟墙
    mapSplit: 5, // 地图分区
    mapClick: 5, // 选区清扫 RN端的命名规则可能不同
    mapSelect: 6, // 地图清扫顺序区块选择
    mapTimerSelect: 7, // 定时状态下的区域选择
  },

  mapSplitStateEnum: {
    normal: 0,
    rest: 1,
    merge: 2,
    split: 3,
    click: 4,
  },

  workstationTypeEnum: {
    chargingStand: 'charging_stand',
    dustBucket: 'dust_bucket',
    baseStation: 'base_station',
    almightyBase: 'almighty_base',
  },
};

export const switchGoCode = 'switch_go';
export const pauseCode = 'pause';
export const switchChargeCode = 'switch_charge';
export const modeCode = 'mode';
export const statusCode = 'status';
export const customizeModeSwitchCode = 'customize_mode_switch';
export const workModeCode = 'work_mode';
export const cleanTimesCode = 'clean_times';
export const suctionCode = 'suction';
export const cisternCode = 'cistern';
export const mopStateCode = 'mop_state';
export const yMopCode = 'y_mop';
export const carpetCleanPreferCode = 'carpet_clean_prefer';
export const autoBoostCode = 'auto_boost';
export const pathDataCode = 'path_data';
export const requestCode = 'request';
export const commandTransCode = 'command_trans';
export const batteryPercentageCode = 'battery_percentage';
export const deviceTimerCode = 'device_timer';
export const seekCode = 'seek';
export const directionControlCode = 'direction_control';
export const mapResetCode = 'map_reset';
export const disturbTimeSetCode = 'disturb_time_set';
export const volumeSetCode = 'volume_set';
export const voiceDataCode = 'voice_data';
export const unitSetCode = 'unit_set';
export const breakCleanCode = 'break_clean';
export const dustCollectionSwitchCode = 'dust_collection_switch';
export const dustCollectionNumCode = 'dust_collection_num';
export const childLockCode = 'child_lock';
export const edgeBrushLifeCode = 'edge_brush_life';
export const rollBrushLifeCode = 'roll_brush_life';
export const filterLifeCode = 'filter_life';
export const ragLifeCode = 'rag_life';
export const faultCode = 'fault';
export const cleanTimeCode = 'clean_time';
export const cleanAreaCode = 'clean_area';
export const cleanTimeTotalCode = 'clean_time_total';
export const cleanAreaTotalCode = 'clean_area_total';
export const cleanCountTotalCode = 'clean_count_total';
export const deviceInfoCode = 'device_info';
export const alarmTimeCode = 'alarm_time';
export const switchLedCode = 'switch_led';
export const workstationTypeCode = 'workstation_type';

export default nameCodeMap;
