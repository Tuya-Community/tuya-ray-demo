/* eslint-disable no-shadow */
export enum PasswordType {
  oneTime = 'oneTime',
  dynamic = 'dynamic',
  limitTimes = 'limitTimes',
  custom = 'custom',
  clean = 'clear',
}

export enum PasswordStatus {
  '生效中',
  '待生效',
  '未生效',
  '已失效',
  '已冻结',
  '冻结中',
  '同步中',
  '已同步',
  '清除单个',
  '清除所有',
  '密码已满',
  '密码不存在',
  '密码重复',
  '已删除',
  '待删除',
}

export enum PasswordOperates {
  delete = 'delete',
  edit = 'edit',
  reName = 'reName',
}

/** 公版类型 */
export enum PannelCategory {
  WiFi = 'WiFi',
  ZigBee = 'ZigBee',
  BlueTooth = 'BlueTooth',
}

export interface IScheduleListItem {
  effectiveTime: number;
  invalidTime: number;
  workingDay: number;
  timeZoneId: string;
  allDay: boolean;
}

export interface IOpModeInfo {
  hasClearPwd: boolean;
  revokedPwdName: string;
  revokedPwdEffectiveTime: number;
  revokedPwdInvalidTime: number;
}
export interface ICreatPasswordResult {
  name: string;
  unlockBindingId: string;
}

/** 列表数据 */
export interface IRecordItem {
  id: string;
  effective?: number; // 蓝牙接口独有
  authId?: number;
  pwdType: number; // 密码类型 0-在线临时密码 1-离线多次临时密码 2-离线单次临时密码 3-清空码所有 4-清空码单次
  name: string; // 密码名称
  effectiveTime: number; // 生效时间
  invalidTime: number; // 失效时间
  oneTime: number; // 是否一次性
  operate: number; // 操作类型
  deliveryStatus: number; // 下发状态
  phase: number; // 状态
  devId: string; //
  tyNumber: number; // 服务端生成的门锁上的流水号(wifi门锁对应旧的sn或者serialNum)
  phone: string;
  uid: string;
  sn?: number;
  status: boolean;
  ifEffective: number; // 是否有效
  gmtCreate: number; // 创建时间
  requestId: number; // 请求方的业务流水编号，一般是数据库的id字段或其他唯一标志
  timeZone: string; // 时区
  scheduleList?: IScheduleListItem[];
  password: string;
  opModeInfo: IOpModeInfo;
  ifCanDelOfflinePwd: boolean; // 离线密码如果使用了，该字段会为true，为true时才能在线删除，生成清空码逻辑不受此影响
}
/** 蓝牙列表数据 */
export interface IBleRecordItem extends IRecordItem {
  unlockBindingId: number;
  effectiveTime: number;
  invalidTime: number;
  name: string;
  userName: string;
  scheduleDetails: IScheduleListItem[];
  opModeType: number;
  opModeSubType: number;
  sn: number;
  lockUserId: number;
  account: string;
  countryCode: string;
  opModeInfo: IOpModeInfo;
}

export interface ICustomDetailData {
  id: number;
  name: string;
  startDate: number;
  endDate: number;
  password: string;
  sn: number;
  schedule?: {
    startTime: number;
    endTime: number;
    weekDays: string;
  };
}

export type TimeRangeType = {
  beginTime: number;
  endTime: number;
};

export type GetEnumKeys<TEnum> = keyof TEnum;
export type PasswordKeyType = GetEnumKeys<typeof PasswordType>;
export type TabItemKeys = Exclude<PasswordKeyType, 'clean'>;
export type GetComponent<T> = T extends React.ClassicComponent<infer P>
  ? P
  : T extends React.FunctionComponent<infer P>
  ? P
  : null;
