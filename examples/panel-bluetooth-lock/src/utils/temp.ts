import dayjs from 'dayjs';
import color from 'color';

import Strings from '@/i18n';
import { TimeRangeType, IRecordItem } from '../pages/temp/interface';
import { globalConfig } from '@/config';

const numberMap: { [key: string]: string } = {
  '0': Strings.getLang('Password_weeks_sun'),
  '1': Strings.getLang('Password_weeks_mon'),
  '2': Strings.getLang('Password_weeks_tues'),
  '3': Strings.getLang('Password_weeks_wed'),
  '4': Strings.getLang('Password_weeks_thu'),
  '5': Strings.getLang('Password_weeks_fri'),
  '6': Strings.getLang('Password_weeks_sat'),
};

/**
 * 格式化周期文案
 * 每周一、周二、周三、周四、周五 08:00~20:00
 * 若全选 每天 HH:mm - HH:mm
 * */
export const formatScheduleText = (
  weekDays: string | number,
  timeRange: Required<TimeRangeType>
) => {
  const wk = weekDays.toString(2).padStart(7, '0');
  const isAllWeek = !/[0]/g.test(wk); // 是否是每天
  const formatTime = (time: number) =>
    `${String(parseInt(String(time / 60), 10)).padStart(2, '0')} : ${String(time % 60).padStart(
      2,
      '0'
    )}`;

  const timeText = `${formatTime(timeRange.beginTime)} ~ ${formatTime(timeRange.endTime)}`;

  if (isAllWeek) return `每天 ${timeText}`;

  const perfix = `${Strings.getLang('Password_weeks_weekly')} `;
  const weekDaysArr = wk.split('').reverse().join('').split('');
  const weekText = weekDaysArr.reduce((text, dItem, index) => {
    let t = text;
    if (dItem === '1') {
      t += `${numberMap[String(index)]}、`;
    }
    return t;
  }, perfix);
  return `${weekText.substring(0, weekText.length - 1)} ${timeText}`;
};


/**
 * 格式化列表项的文案
 * @param param0
 * @returns
 */
export const formatRecordItemText = ({
    pwdType,
    scheduleList,
    effectiveTime,
    invalidTime,
    isInvalid = false,
  }: Pick<IRecordItem, 'pwdType' | 'scheduleList' | 'effectiveTime' | 'invalidTime'> & {
    isInvalid?: boolean;
  }) => {
    const formatDate = (date: number) => dayjs(date * 1000).format('YYYY/MM/DD HH:mm');
    /** 在线密码 */
    if ((pwdType === 0 && scheduleList) || pwdType === 1 || pwdType === 4 || pwdType === 9) {
      const schedule = scheduleList && scheduleList[0];
  
      const dateText = `${formatDate(effectiveTime)} ~ ${formatDate(invalidTime)}`;
  
      if (!schedule) return dateText;
  
      const scheduleText = schedule.timeZoneId ? formatScheduleText(schedule.workingDay, {
        beginTime: schedule.effectiveTime,
        endTime: schedule.invalidTime,
      }) : '';
  
      return `${dateText} ${scheduleText}`;
    }
    
    if (pwdType === 2 && isInvalid) {
      return `${Strings.getLang('Password_hasBeen')} ${formatDate(effectiveTime)} ${Strings.getLang('Password_invalid')}`;
    }
  
    return isInvalid ? `${Strings.getLang('Password_hasBeen')} ${formatDate(invalidTime)} ${Strings.getLang('Password_invalid')}` : `${Strings.getLang('Password_willBeen')} ${formatDate(invalidTime)} ${Strings.getLang('Password_invalid')}`;
  };

  /** 根据密码进制获取长度范围 */
export const getPwdLengthRange = (digitalBase: number, isWifi: boolean): [number, number] => {
  const minHexMap: Record<number, number> = { 4: 8, 5: 8, 6: 8, 7: 8, 8: 7, 9: 7, 10: isWifi ? 7 : 6 };
  const maxHexMap: Record<number, number> = { 4: 12, 5: 12, 6: 12, 7: 11, 8: 11, 9: 10, 10: isWifi ? 7 : 6 };

  return [minHexMap[digitalBase], maxHexMap[digitalBase]];
};

export const getCustomPwdTitle = (digitalBase: number, isWifi: boolean) => {
  const pwdLimit = getPwdLengthRange(digitalBase, isWifi);
  if (pwdLimit[0] === pwdLimit[1]) {
    return Strings.formatValue('Password_singlePwd', pwdLimit[0]);
  }
  return Strings.formatValue('Password_rangePwd', pwdLimit[0], pwdLimit[1]);
};

export const checkNumIsInRange = (num: number, range: [number, number]): boolean => {
  return num >= range[0] && num <= range[1];
};

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

/**
 * 中间状态：#F67352
 * 生效状态：themeColor
 * 失败状态：#666666
 */

const themeColor = globalConfig.getConfig('themeColor') as string;


const colors = {
  middle: {
    bgColor: '#FEF1EE',
    fontColor: '#F67352',
  },

  effect: {
    bgColor: color(themeColor).alpha(0.1),
    fontColor: themeColor as string,
  },

  failure: {
    bgColor: '#EBEBEB',
    fontColor: '#666666',
  },
};

const statusText: {
  [key: string]: { text: string; colors: { bgColor: string; fontColor: string } };
} = {
  [PasswordStatus.待生效]: {
    text: Strings.getLang('Password_recordStatus_toBeEffect'),
    colors: colors.effect,
  },
  [PasswordStatus.生效中]: {
    text: Strings.getLang('Password_recordStatus_inEffect'),
    colors: colors.effect,
  },
  [PasswordStatus.未生效]: {
    text: Strings.getLang('Password_recordStatus_inEffective'),
    colors: colors.effect,
  },
  [PasswordStatus.已失效]: {
    text: Strings.getLang('Password_recordStatus_failure'),
    colors: colors.failure,
  },
  [PasswordStatus.同步中]: {
    text: Strings.getLang('Password_recordStatus_toBeSure'),
    colors: colors.middle,
  },
  [PasswordStatus.已同步]: {
    text: Strings.getLang('Password_recordStatus_confirmed'),
    colors: colors.effect,
  },
  [PasswordStatus.密码已满]: {
    text: Strings.getLang('Password_recordStatus_fullPassword'),
    colors: colors.failure,
  },
  [PasswordStatus.密码重复]: {
    text: Strings.getLang('Password_recordStatus_repeatPassword'),
    colors: colors.failure,
  },
  [PasswordStatus.密码不存在]: {
    text: Strings.getLang('Password_recordStatus_noPassword'),
    colors: colors.failure,
  },
  [PasswordStatus.冻结中]: {
    text: Strings.getLang('Password_recordStatus_freezing'),
    colors: colors.effect,
  },
  [PasswordStatus.已删除]: {
    text: Strings.getLang('Password_recordStatus_deleted'),
    colors: colors.failure,
  },
  [PasswordStatus.待删除]: {
    text: Strings.getLang('Password_recordStatus_toDelete'),
    colors: colors.middle,
  },
  [PasswordStatus.清除单个]: {
    text: Strings.getLang('Password_recordStatus_cleanOne'),
    colors: colors.effect,
  },
  [PasswordStatus.清除所有]: {
    text: Strings.getLang('Password_recordStatus_cleanAll'),
    colors: colors.effect,
  },
};

export const getItemStatusText = (item: any, isInvalid: boolean) => {
  const isOffLine = [1, 2].includes(item.pwdType);
  const isOnLine = item.pwdType === 0;

  if (item.pwdType === 3) return statusText[PasswordStatus.清除单个];
  if (item.pwdType === 4) return statusText[PasswordStatus.清除所有];

  /** 蓝牙密码状态 effective 待生效=1 生效中=2 已生效=4（基本不展示） phase=3 冻结 简单明了 */
  if (item.phase === 3) return statusText[PasswordStatus.已冻结];
  if (item.phase === 10) return statusText[PasswordStatus.同步中];
  if (item.phase === 9) return statusText[PasswordStatus.待删除];
  if (item?.effective === 1) return statusText[PasswordStatus.待生效];
  if (item?.effective === 2 && item.phase === 2) return statusText[PasswordStatus.同步中]; // 处理修改后的蓝牙密码状态。要做到同步
  if (item?.effective === 2) return statusText[PasswordStatus.生效中];

  /** 根据当前时间判断是否生效 */
  const checkDate = () => {
    const now = new Date().getTime();
    /** 失效数据 */
    if (isInvalid) {
      return statusText[PasswordStatus.已失效];
    }

    if (isOnLine) {
      if (item.phase === 1) return statusText[PasswordStatus.同步中];
      if (item.phase === 2) return statusText[PasswordStatus.已同步];
    }
    /** 如果是离线密码 判断下发状态 */
    if (isOffLine) {
      if (item.deliveryStatus === 1) return statusText[PasswordStatus.同步中];
      if (item.deliveryStatus === 2) {
        if (now < item.effectiveTime * 1000) {
          return statusText[PasswordStatus.待生效];
        }
    
        return statusText[PasswordStatus.生效中];
      };
    }

    if (now < item.effectiveTime * 1000) {
      return statusText[PasswordStatus.待生效];
    }

    return statusText[PasswordStatus.生效中];
  };


  /**
   * 先判断 phase 再判断下发状态 deliveryStatus
   */

  /** 清空码 */
  if ([3, 4].includes(item.pwdType)) {
    return null;
  }

  /** 离线密码 */
  if (isOffLine) {
    return checkDate();
  }

  /** 临时密码 */
  if (isOnLine) {
    if (item.phase === 1 || item.phase === 2) {
      return checkDate();
    }

    if (item.phase === 3) return statusText[PasswordStatus.待删除];

    return statusText[PasswordStatus.已删除];
  }

  /** 密码已满状态 */
  if (item.phase === 5) {
    return statusText[PasswordStatus.密码已满];
  }
};

export const getPwdTypeBle = (opModeType: number, opModeSubType: number): number => {
  // 密码类型 0-在线临时密码 1-离线多次临时密码 2-离线单次临时密码 3-清空码所有 4-清空码单次
  /**
   * opModeType: 1. 带时效的临时密码 2. 普通永久密码，3. 离线临时密码 4. 虚拟钥匙 5. 指纹 6. 门卡 7. 手机蓝牙开门方式授权
    opModeSubType
    离线临时密码 0. 可以多次使用 1. 单次使用 8. 清空单个 9. 清空全部
    在线临时密码 0. 时效密码 1. 只能使用一次的密码
    手机蓝牙开门方式授权 0. 时效内可以多次使用 1. 单次使用
   */
  let type = 0;
  switch (`${opModeType}-${opModeSubType}`) {
    case '1-0':
      type = 0;
      break;
    case '3-0':
      type = 1;
      break;
    case '3-1':
      type = 2;
      break;
    case '3-8':
      type = 3;
      break;
    case '3-9':
      type = 4;
      break;
    default:
      break;
  }
  return type;
};