import { utils } from '@ray-js/panel-sdk';
const { toFixed, generateDpStrStep } = utils;

type TimeSchedule = {
  code: number;
  startTime: string; // 起始时间
  startMinute: string; // 起始时间
  endTime: string; // 结束时间
  endMinute: string; // 结束时间
  chargeSwitch: boolean;
  disChargeSwitch: boolean;
}[];

export default class TimeScheduleFormatter {
  uuid: string;
  defaultValue: TimeSchedule;

  constructor(uuid = 'time_schedule', defaultValue = null) {
    this.defaultValue = [];
    this.uuid = uuid;
    if (defaultValue) {
      this.defaultValue = defaultValue;
    }
  }

  equal(source, target) {
    return source === target;
  }

  parser(dpValue = '') {
    const result: TimeSchedule = [];
    try {
      if (dpValue && `${dpValue}`.length % 12 === 0) {
        const dpStr = `${dpValue}`;
        for (let i = 0, len = dpStr.length; i < len; i++) {
          const str = dpStr.slice(i, i + 12);
          const startTime = `${toFixed(generateDpStrStep(str.slice(0, 2))().value, 2)}`;
          const startMinute = `${toFixed(generateDpStrStep(str.slice(2, 4))().value, 2)}`;
          const endTime = `${toFixed(generateDpStrStep(str.slice(4, 6))().value, 2)}`;
          const endMinute = `${toFixed(generateDpStrStep(str.slice(6, 8))().value, 2)}`;
          const chargeSwitch = generateDpStrStep(str.slice(8, 10))().value === 1;
          const disChargeSwitch = generateDpStrStep(str.slice(10, 12))().value === 1;
          result.push({
            code: i / 12,
            startTime,
            startMinute,
            endTime,
            endMinute,
            chargeSwitch,
            disChargeSwitch,
          });
          i += 11;
        }
      }
    } catch (e) {
      console.debug(e);
    }
    return result;
  }

  to16(value, length) {
    let result = Number(value).toString(16);
    if (result.length < length) {
      result = result.padStart(length, '0');
    }
    return result;
  }

  formatter(data) {
    // '03050001070b00000c0e0101'
    let result = '';
    try {
      if (data && Array.isArray(data)) {
        data.forEach(ele => {
          result += this.to16(ele.startTime, 2);
          result += this.to16(ele.startMinute, 2);
          result += this.to16(ele.endTime, 2);
          result += this.to16(ele.endMinute, 2);
          result += this.to16(ele.chargeSwitch ? 1 : 0, 2);
          result += this.to16(ele.disChargeSwitch ? 1 : 0, 2);
        });
      }
    } catch (e) {
      console.debug(e);
    }
    return result || '00';
  }
}
