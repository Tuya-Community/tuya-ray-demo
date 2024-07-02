import dayjs from 'dayjs';
import { get, toArray, join } from 'lodash';
import { utils } from '@ray-js/panel-sdk';

import Strings from '@/i18n';

export const strParse = str => {
  const arr = toArray(str);
  return join(
    arr.map(i => `0${i}`),
    ''
  );
};

export const getUserTimeText = timeSchedule => {
  const { expiredTime, effectiveTime, scheduleDetails, permanent } = timeSchedule;
  let timeStr = Strings.getLang('permanent');
  let repeatTime = '';
  if (!permanent && scheduleDetails) {
    const expiredDate = dayjs(expiredTime * 1000).format('YYYY/MM/DD HH:mm');
    const effectiveDate = dayjs(effectiveTime * 1000).format('YYYY/MM/DD HH:mm');
    repeatTime = get(scheduleDetails[0], 'allDay')
      ? ''
      : `${getRepeatStrByNumber(scheduleDetails[0].workingDay)} ${utils.parseTimer(
          scheduleDetails[0].effectiveTime * 60
        )} - ${utils.parseTimer(scheduleDetails[0].invalidTime * 60)}`;
    timeStr = `${effectiveDate} - ${expiredDate} ${repeatTime}`;
  }
  return timeStr;
};

export const getRepeatStrByNumber = source => {
  const days = [];
  for (let i = 0; i < 7; i++) {
    let k = i + 1;
    if (k > 6) k = 0;
    if (source & (1 << k)) {
      days.push(Strings.getLang(`day${k}`));
    }
  }
  if (days.length === 0) {
    return Strings.getLang('day8');
  } else if (days.length === 7) {
    return Strings.getLang('day7');
  }
  return days.join(', ');
};

export enum FamilyIconType {
  card = 'unlock_card',
  password = 'unlock_password',
  fingerprint = 'unlock_fingerprint',
  face = 'unlock_face',
  fingerVein = 'unlock_finger_vein',
  hand = 'unlock_hand',
}

// 获取开门类型
export const getModeType = {
  unlock_password: '01',
  unlock_card: '02',
  unlock_fingerprint: '03',
  unlock_face: '04',
  unlock_hand: '05',
  unlock_finger_vein: '06',
};

export const getUserType = {
  10: '01',
  20: '00',
  40: '00',
  50: '01',
};

export const getDpCode = {
  '01': 'unlock_password',
  '02': 'unlock_card',
  '03': 'unlock_fingerprint',
  '04': 'unlock_face',
  '05': 'unlock_hand',
  '06': 'unlock_finger_vein',
};

