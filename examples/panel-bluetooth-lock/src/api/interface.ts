
export interface IOfflinePassword {
  pwd: string;
  pwdId: string;
  unlockBindingId: string;
  pwdName: string;
  gmtExpired: string;
  gmtStart: string;
}

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


export interface ICreatePasswordResult {
  name: string;
  unlockBindingId: string;
}

/** 列表数据 */
export interface IRecordItem {
  id: number;
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

export interface ICreatePasswordParams {
  // devId: string;
  name: string;
  effectiveTime: string;
  InvalidTime: string;
  password: string;
  originalPassword: string; // 初始化的密码
  schedule: string;
  bleOnlineState: boolean;
  // countryCode: string;
  // phone?: string;
  oneTime?: number;
  // sendMsg?: number;
  /** 是否仅保存静态数据 单点蓝牙：true，双模或者带网关的蓝牙，需要云端下发或app正在下发时，填false, 否则填true */
  symbolic?: boolean;
  /** symbolic 为false 时，必填1. app 2. 云端 双模蓝牙+nb等设备公版需求时，填2 */
  dpTunnel?: string;
}
export interface IScheduleType {
  allDay: boolean;
  effectiveTime: number;
  invalidTime: number;
  workingDay: string;
  beginTime: number;
  endTime: number;
  sn?: number;
}
export interface IGetOfflinePwdParams {
  pwdType: '0' | '1' | '9'; // 0.多次使用的密码 1. 单次使用的密码 9. 清空码
  gmtStart: number; // (非多次密码暂时传0)
  gmtExpired: number; // (非多次密码暂时传0)
  pwdName?: string;
  countryCode?: string;
  mobile?: string;
  devId?: string;
}

export interface IDeleteParams extends Partial<IRecordItem> {
  deviceOnline: boolean;
}

export interface IUpdateParams {
  id?: number;
  name: string;
  effectiveTime: number;
  invalidTime: number;
  password?: string;
  schedule?: string;
  sn?: number;
  operate: '125' | '126';
}

export interface IGetEmptyCodeParams {
  mobile?: string;
  email?: string;
  authId?: number;
  pwdName?: string;
  pwdId?: string;
  clearAll?: boolean;
}

export interface IGetEmptyCodeResult {
  gmtExpired: string;
  gmtStart: string;
  pwd: string;
  pwdId: string;
  pwdName: string;
}

export type FetchListParams = { authTypes: string[] };
export type FetchParams = { offSet: number; limit: number };

export type FetchInvalidListParams = { offSet: number; limit: number };
export type FetchResult = { datas: IRecordItem[]; hasNext: boolean; totalCount: number };
export type BleFetchResult = { datas: IBleRecordItem[]; hasNext: boolean; totalCount: number };
