import dayjs from 'dayjs';

import Strings from '@/i18n';
import { Code } from '@/config';
import { momentFormat } from '@/utils';
const {
  logTypeFormDpCodes,
  logTypeAlarmCodes,
  unLockLogTypeCodes,
  openModeDpCodes,
  tempPWDLogTypeCodes,
  clearLogTypeCodes,
} = Code;

const dateFormat = 'YYYY-MM-DD';

export const formatLog = item => {
  const { time, logType, logCategory, userName, currentUser, data, unlockNameRosettaKey, unionUnlockInfo } = item;
  const todayTimeText = momentFormat('HH:mm', Number(time));
  const timeText = momentFormat('MM/DD HH:mm', Number(time));
  const date = momentFormat(dateFormat, Number(time));
  const today = momentFormat(dateFormat);
  const isToday = date === today;
  // 时间参数
  const formatTime = isToday ? todayTimeText : timeText;

  // 用户名称
  let _userName = userName;
  if (currentUser) {
    _userName = Strings.getLang('me');
  }
  const formatUserName = _userName.length > 6 ? `${_userName.slice(0, 6)}...` : `${_userName}`;
  // end

  // 额外信息解析 start
  let newData = '';
  let openText = '';
  if (data && data.includes('[')) {
    newData = JSON.parse(data);
  }
  // 额外信息解析 end

  // 日志文案
  let openModeType = `${Strings.getLang(`subPage_log_${logType}`)}`;
  if (openModeDpCodes.includes(logType)) {
    openModeType = `${Strings.getLang(`subPage_log_${logType}`)}${data ? `【${data}】` : ''}`;
  }

  // dp相关日志
  if (logTypeFormDpCodes.includes(logType)) {
    if (logType === 'auto_lock_time') {
      openModeType = `${Strings.getLang(logType)}【${newData ? newData[0] : data}s】`;
    } else if (logType === 'remote_voice_pwd_setting') {
      openModeType = `${Strings.getLang(logType)}【${Strings.getLang(
        `remote_voice_pwd_setting_${newData ? newData[0] : data}`
      )}】`;
    } else {
      openModeType = `${Strings.getLang(logType)}【${Strings.getDpLang(
        logType,
        newData ? newData[0] : data
      )}】`;
    }
  }
  // 告警记录
  if (logTypeAlarmCodes.includes(logType)) {
    openModeType = Strings.getLang(`${logType}${data ? '_' + data : ''}`);
  }

  // nb+ble双模插拔
  if (logType === 'dev_communication_module_add') {
    openModeType = Strings.getLang(`subPage_log_module_${newData ? newData[0] : data}`);
  }

  // 关锁记录
  if (logCategory === 'close_record') {
    openModeType = Strings.getLang(unlockNameRosettaKey);
  }

  if (unLockLogTypeCodes.includes(logType)) {
    const text = `${Strings.formatValue(
      `subPage_log_${logType}`,
      `【${newData[1].length > 6 ? `${newData[1].slice(0, 6)}...` : newData[1]}】`,
      `${Strings.getLang(`subPage_log_${newData[3]}`)}`
    )}${`【${newData[2]}】`}`;
    openText += ` ${text}`;
  } else {
    openText += ` ${openModeType}`;
  }

  // 清空码
  if (clearLogTypeCodes.includes(logType)) {
    openText += `【${newData[0]}】`;
  }
  // 临时密码处理
  if (tempPWDLogTypeCodes.includes(logType)) {
    const text = `${`【${
      newData[0].length > 6 ? `${newData[0].slice(0, 6)}...` : newData[0]
    }】`}【${momentFormat(dateFormat, Number(newData[1]) * 1000)}-${momentFormat(
      dateFormat,
      Number(newData[2]) * 1000
    )}】`;
    openText += ` ${text}`;
  }
  // 单次限时获取
  if (logType === 'offline_pwd_achieve') {
    let text = '';
    if (newData[3]) {
      text = `${Strings.getLang(`subPage_log_offline_pwd_achieve_${newData[3]}`)}【${
        newData[0].length > 6 ? `${newData[0].slice(0, 6)}...` : newData[0]
      }】`;
    } else {
      text = `${`${Strings.getLang(`subPage_log_offline_pwd_achieve_${newData[3]}`)}【${
        newData[0].length > 6 ? `${newData[0].slice(0, 6)}...` : newData[0]
      }】`}【${momentFormat(dateFormat, Number(newData[1]) * 1000)}-${momentFormat(
        dateFormat,
        Number(newData[2]) * 1000
      )}】`;
    }

    openText += `${text}`;
  }
  // 单次限时重命名修改
  if (logType === 'offline_pwd_name_update') {
    const text = `${Strings.getLang(`subPage_log_offline_pwd_name_update_${newData[2]}`)}【${
      newData[0].length > 6 ? `${newData[0].slice(0, 6)}...` : newData[0]
    }】${Strings.getLang(`subPage_log_to`)}【${
      newData[1].length > 6 ? `${newData[1].slice(0, 6)}...` : newData[1]
    }】`;
    openText += `${text}`;
  }
  // 自定义密码名称修改
  if (logType === 'temp_pwd_name_update') {
    const text = `【${
      newData[0].length > 6 ? `${newData[0].slice(0, 6)}...` : newData[0]
    }】${Strings.getLang(`subPage_log_to`)}【${
      newData[1].length > 6 ? `${newData[1].slice(0, 6)}...` : newData[1]
    }】`;
    openText += `${text}`;
  }
  // 成员时效修改
  if (logType === 'member_schedule_update') {
    let text = '';
    if (!newData[1]) {
      text = `【${
        newData[0].length > 6 ? `${newData[0].slice(0, 6)}...` : newData[0]
      }】${Strings.getLang('subPage_log_suffix_custom')}【${momentFormat(
        dateFormat,
        Number(newData[2]) * 1000
      )}-${momentFormat(dateFormat, Number(newData[3]) * 1000)}】`;
    } else {
      text = `【${
        newData[0].length > 6 ? `${newData[0].slice(0, 6)}...` : newData[0]
      }】${Strings.getLang('subPage_log_suffix_permanent')}`;
    }
    openText += `${text}`;
  }
  // 组合解锁信息
  let unionText = '';
  if (unionUnlockInfo) {
    unionUnlockInfo.map((i, number) => {
      unionText += `${i.userName ? `【${i.userName}】` : ''}${
        i.unlockName
          ? `【${i.unlockName}】`
          : `【${Strings.getLang(`subPage_log_${i.opMode}`)}${i.sn}】`
      }${number === 0 ? '+' : ''}`;
    });
    unionText += `${Strings.getLang('subPage_log_unlock_double_kit')}`;
  }

  return { formatTime, formatUserName, openText: unionUnlockInfo ? unionText : openText };
};

export const logCategoryList = [
  { title: Strings.getLang('subPage_log_all_record'), key: '' },
  { title: Strings.getLang('subPage_log_unlock_record'), key: 'unlock_record' },
  { title: Strings.getLang('subPage_log_close_record'), key: 'close_record' },
  { title: Strings.getLang('subPage_log_alarm_record'), key: 'alarm_record' },
  { title: Strings.getLang('subPage_log_operation'), key: 'operation' },
];


export const timeList = [
  { title: Strings.getLang('subPage_log_allTime'), key: 'time' },
  { title: Strings.getLang('subPage_log_threeDay'), key: 'threeDay' },
  { title: Strings.getLang('subPage_log_sevenDay'), key: 'sevenDay' },
  { title: Strings.getLang('subPage_log_nearMonth'), key: 'nearMonth' },
];

export const getSelectTime = (time: string) => {
  const now = dayjs();
  switch (time) {
    case 'threeDay':
      return ['', now.subtract(3, 'day').valueOf()];
    case 'sevenDay':
      return ['', now.subtract(7, 'day').valueOf()];
    case 'nearMonth':
      return ['', now.subtract(1, 'month').valueOf()];
    default:
      return [null, null];
  }
};
