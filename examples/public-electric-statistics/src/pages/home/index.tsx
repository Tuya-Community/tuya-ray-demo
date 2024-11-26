import React, { useCallback, useEffect, useRef, useState } from 'react';
import dayjs from 'dayjs';
import {
  View,
  exportStatisticsDay,
  exportStatisticsHour,
  exportStatisticsMonth,
  getStatisticsRangDay,
  getStatisticsRangHour,
  getStatisticsRangMonth,
  showToast,
  getSystemInfoSync,
  setPageOrientation,
} from '@ray-js/ray';
import { Popup, DateTimePicker, Picker, Dialog, DialogInstance } from '@ray-js/smart-ui';
import { DpSchema, useDevice } from '@ray-js/panel-sdk';
import Strings from '@/i18n';
import clsx from 'clsx';
import { TopBar } from '@/components/top-bar';
import styles from './index.module.less';
import Chart from './chart';
import Total from './total';
import Footer, { TimeType } from './footer';

const { language } = getSystemInfoSync();

const getDpUnit = (schema: DpSchema, defaultUnit?: string) => {
  if (!schema) return '';
  let unit = schema?.property?.unit || defaultUnit || '';
  if (!Strings.getDpLang(`${schema.code}_unit`).startsWith('dp_')) {
    unit = Strings.getDpLang(`${schema.code}_unit`);
  }
  return unit;
};

export function Stats() {
  const [range, setRange] = useState<TimeType>('day');
  const [orientation, setOrientation] = useState<'portrait' | 'landscape'>('portrait');
  const [date, setDate] = useState(dayjs());
  const [visibleDatePicker, setVisibleDatePicker] = useState(false);
  const [chartData, setCharData] = useState({ categories: [], data: [] });
  const [visibleYear, setVisibleYear] = useState(false);
  const devId = useDevice(d => d.devInfo.devId);
  const totalEnergySchema = useDevice(devInfo => devInfo.dpSchema.add_ele);
  const unit = getDpUnit(totalEnergySchema, 'kW.h');

  const formatToken = range === 'year' ? 'YYYYMM' : 'YYYYMMDD';
  const startDate = date.startOf(range).format(formatToken);
  const endDate = date.endOf(range).format(formatToken);

  const handleFullScreen = useCallback(() => {
    setOrientation(d => {
      const v = d === 'portrait' ? 'landscape' : 'portrait';
      setPageOrientation({
        pageOrientation: v,
      });
      return v;
    });
    setPageOrientation({
      pageOrientation: 'landscape',
    });
  }, []);
  const showEmail = useCallback(() => {
    const beforeClose = (action: any, value?: string): Promise<boolean> =>
      new Promise(resolve => {
        console.log('value', value);
        if (action === 'confirm') {
          handleExport(value)
            .then(() => {
              resolve(true);
            })
            .catch(e => {
              resolve(false);
            });
        } else {
          resolve(true);
        }
      });
    DialogInstance.input({
      context: this,
      title: Strings.getLang('export_title'),
      value: '',
      cancelButtonText: Strings.getLang('cancel'),
      confirmButtonText: Strings.getLang('confirm'),
      beforeClose,
    });
  }, []);

  const showSelectDate = useCallback(() => {
    if (range === 'year') {
      setVisibleYear(true);
    } else {
      setVisibleDatePicker(true);
    }
  }, [range]);
  const hideSelectDate = useCallback(() => {
    if (range === 'year') {
      setVisibleYear(false);
    } else {
      setVisibleDatePicker(false);
    }
  }, [range]);

  const handleSelectDate = useCallback(event => {
    const time = dayjs(event.detail);
    setDate(time);
    setVisibleDatePicker(false);
  }, []);

  const handleSelectYear = useCallback(event => {
    const { value } = event.detail;
    setDate(dayjs().set('year', value));
    setVisibleYear(false);
  }, []);

  const handleExport = useCallback(
    async email => {
      if (!/^\w+(-+.\w+)*@\w+(-.\w+)*.\w+(-.\w+)*$/.test(email)) {
        showToast({ title: Strings.getLang('email_error'), icon: 'error' });
        throw new Error(Strings.getLang('email_error'));
      }
      const data: any = {
        devId,
        email,
        title: Strings.getLang('stats_title'),
        dpExcelQuery: [
          { dpId: totalEnergySchema.id, name: Strings.getDpLang(totalEnergySchema.code) },
        ],
        type: 'sum',
        lang: language,
      };
      try {
        // 导出数据
        // eslint-disable-next-line default-case
        switch (range) {
          case 'day':
            data.date = startDate;
            await exportStatisticsHour(data);
            break;
          case 'month':
            data.startDay = startDate;
            data.endDay = endDate;
            await exportStatisticsDay(data);
            break;
          case 'year':
            data.startMonth = startDate;
            data.endMonth = endDate;
            await exportStatisticsMonth(data);
            break;
        }
        showToast({ title: Strings.getLang('export_success'), icon: 'success' });
      } catch (e) {
        showToast({ title: Strings.getLang('export_fail'), icon: 'error' });
      }
    },
    [range, startDate, endDate, devId]
  );

  // 获取今日电量
  useEffect(() => {
    [{ id: totalEnergySchema.id, name: Strings.getDpLang(totalEnergySchema.code) }];
    const data = {
      devId,
      dpId: totalEnergySchema.id,
      type: 'sum',
    };
    switch (range) {
      case 'month': {
        // @ts-ignore
        getStatisticsRangDay({
          ...data,
          startDay: date.startOf('month').format('YYYYMMDD'),
          endDay: date.endOf('month').format('YYYYMMDD'),
        }).then(data => {
          const result = { categories: [], data: [] };
          Object.keys(data)
            .sort()
            .forEach((code: string) => {
              result.categories.push(dayjs(code, 'YYYYMMDD').format('MM/DD'));
              result.data.push(data[code]);
            });
          setCharData(result);
        });
        break;
      }
      case 'day':
        // @ts-ignore
        getStatisticsRangHour({
          ...data,
          date: date.format('YYYYMMDD'),
        })
          .then(data => {
            const result = { categories: [], data: [] };
            Object.keys(data)
              .sort()
              .forEach((code: string) => {
                result.categories.push(dayjs(code, 'YYYYMMDDHH').format('HH:mm'));
                result.data.push(data[code]);
              });
            setCharData(result);
          })
          .catch(e => {
            console.log('error', e);
          });
        break;
      case 'year':
        // @ts-ignore
        getStatisticsRangMonth({
          ...data,
          startMonth: date.startOf('year').format('YYYYMM'),
          endMonth: date.endOf('year').format('YYYYMM'),
        }).then(data => {
          const result = { categories: [], data: [] };
          Object.keys(data)
            .sort()
            .forEach((code: string) => {
              result.categories.push(dayjs(code, 'YYYYMM').format('MM'));
              result.data.push(data[code]);
            });
          setCharData(result);
        });
        break;
      default:
    }
  }, [date, range]);

  const years = new Array(2).fill(1).map((x, i) => {
    const year = dayjs().get('year');
    return (year - i).toString();
  });
  return (
    <>
      <TopBar title={Strings.getLang('stats_title')} />
      <View className={clsx(styles.container, { [styles.landscape]: orientation === 'landscape' })}>
        <Total
          data={chartData.data}
          unit={unit}
          onExport={showEmail}
          onScreen={handleFullScreen}
          orientation={orientation}
        />
        <View className={styles.chart}>
          <Chart dataSource={chartData} unit={unit} key={orientation} />
        </View>
        <Footer
          date={date}
          type={range}
          onChange={(date: dayjs.Dayjs, type: TimeType) => {
            setDate(date);
            setRange(type);
          }}
          onSelectDate={showSelectDate}
        />
      </View>
      {/* 日期选择 */}
      <Popup round show={visibleDatePicker} position="bottom" onClose={hideSelectDate}>
        <DateTimePicker
          key={range}
          locale={{
            year: Strings.getLang('stats_year'),
            month: Strings.getLang('stats_month'),
            day: Strings.getLang('stats_day'),
          }}
          minDate={dayjs()
            .subtract(range === 'day' ? 31 : 12, range === 'day' ? 'days' : 'months')
            .valueOf()}
          maxDate={dayjs().valueOf()}
          value={date.valueOf()}
          title={Strings.getLang('please_select')}
          cancelButtonText={Strings.getLang('cancel')}
          confirmButtonText={Strings.getLang('confirm')}
          type={range === 'month' ? 'year-month' : 'date'}
          onCancel={hideSelectDate}
          onConfirm={handleSelectDate}
        />
      </Popup>
      {/* 选择年 */}
      <Popup round show={visibleYear} position="bottom" onClose={hideSelectDate}>
        <Picker
          showToolbar
          unit={Strings.getLang('stats_year')}
          columns={years}
          activeIndex={years.indexOf(date.get('years').toString())}
          title={Strings.getLang('please_select')}
          cancelButtonText={Strings.getLang('cancel')}
          confirmButtonText={Strings.getLang('confirm')}
          onCancel={hideSelectDate}
          onConfirm={handleSelectYear}
        />
      </Popup>
      {/* 导出填写邮箱 */}
      <Dialog id="smart-dialog" />
    </>
  );
}

export default Stats;
