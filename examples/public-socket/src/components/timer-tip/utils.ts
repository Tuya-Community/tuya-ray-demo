import _ from 'lodash-es';
import { utils } from '@ray-js/panel-sdk';
import Strings from '@/i18n';
import { toLoopBinString } from '@/utils/string';
import {
  decodeCycleTimer,
  decodeRandomTimer,
  decodeRawCycleTimer,
  decodeRawRandomTimer,
} from '@/utils/decode';

/**
 * 获取距离今天最近要执行定时的日期天数
 * @param {Number} loops - 循环值
 * @param {Number} startTime - 定时起始执行时间
 * @return {Number} 距离今天最近的天数
 */
const getDayDiff = (loops: number, startTime: number): number => {
  const nowStartTime = new Date().getHours() * 60 + new Date().getMinutes();
  const today = new Date().getDay();
  const loopsValues = [1, 2, 4, 8, 16, 32, 64];
  // 只一次 今天的loop值 （0 ～ 6 / 一 ～ 日）
  const loopsValue = loops === 0 ? loopsValues[today] : loops;
  let dayDiff: number;
  // 如果已执行
  loopsValues.forEach((loop, idx) => {
    // 判断定时是否存在
    const isExist = !!utils.getBitValue(loopsValue, idx);
    if (isExist) {
      // 如果是今天要执行的定时并且已经过了要执行的时间段，则其实在下个礼拜才执行
      const willNextWeekExecute =
        idx === today && !!utils.getBitValue(loopsValue, today) && nowStartTime > startTime;
      const realIdx = today !== 0 && idx === 0 ? 7 : idx;
      const extraDay = willNextWeekExecute || realIdx < today ? 7 : 0;
      dayDiff = _.isNumber(dayDiff)
        ? Math.min(realIdx - today + extraDay, dayDiff)
        : realIdx - today + extraDay;
    }
  });
  return dayDiff;
};

/**
 * 根据二进制循环字符串输出多语言包
 * @param {String} source - something like this '0000000'
 */
const getRepeatStr = (source: string) => {
  if (!source) return '';
  const days = [];
  let repeat = '';
  source.split('').forEach((item, index) => {
    if (item === '1') {
      days.push(Strings.getLang(`day${index}`));
    }
  });
  if (days.length === 0) {
    repeat = Strings.getLang('dayOnce');
  } else if (days.length === 7) {
    repeat = Strings.getLang('dayEvery');
  } else if (days.length === 5 && source.substring(1, 6) === '11111') {
    repeat = Strings.getLang('weekDays');
  } else if (days.length === 2 && source.startsWith('1') && source.endsWith('1')) {
    repeat = Strings.getLang('weekend');
  } else {
    repeat = days.join(' ');
  }
  return repeat;
};

/**
 * 根据十进制数值输出多语言包
 * @param {Number} source
 */
export const getRepeatStrByNumber = (source: number) => {
  const loopBin = toLoopBinString(source);
  return getRepeatStr(loopBin);
};

const ONE_DAY_MINUTES = 1440;

type TimerData = {
  no: number;
  power: boolean;
  loops: number;
  startTime: number;
  endTime: number;
  startDuration?: number;
  endDuration?: number;
};

type TimerList = TimerData[];

type LastTimerData = TimerData & { realStartTime: number };

export const getLastTimer = (options: {
  cycleTime: string;
  randomTime: string;
  isRaw?: boolean;
}) => {
  const { cycleTime, randomTime, isRaw } = options;
  let lastTimer = {} as LastTimerData;
  const decodeRandom = isRaw ? decodeRawRandomTimer : decodeRandomTimer;
  const decodeCycle = isRaw ? decodeRawCycleTimer : decodeCycleTimer;
  const randomTimers = decodeRandom(randomTime);
  const cycleTimers = decodeCycle(cycleTime);
  const today = new Date().getDay();
  const todayIndex = today === 0 ? 6 : today - 1;
  const currentTimers =
    new Date().getHours() * 60 + new Date().getMinutes() + todayIndex * ONE_DAY_MINUTES;
  const allTimers: TimerList = [...randomTimers, ...cycleTimers].filter(timer => {
    return timer.no === 0 && timer.power;
  });

  if (allTimers.length === 0) {
    return lastTimer;
  }

  allTimers.forEach(timer => {
    const { loops, endTime, power } = timer;
    if (!power) return;
    const days = getDayDiff(loops, endTime);
    const day = days;
    const realStartTime = endTime + day * ONE_DAY_MINUTES;
    const isEmpty = Object.keys(lastTimer).length === 0;
    // 当前比较 start
    const realDiff = Math.abs(currentTimers + realStartTime);
    // last比较
    const lastTimerDiff = Math.abs(currentTimers + lastTimer.realStartTime) || currentTimers;
    // 如果最近时间不存在 并且 当前时间与  比较时间和上一次时间的差值
    if (isEmpty || lastTimerDiff > realDiff) {
      lastTimer = { ...timer, realStartTime };
    }
  });
  return lastTimer;
};
