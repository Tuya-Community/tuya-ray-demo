import React, { useCallback, useEffect, useMemo, useState } from 'react';
import dayjs from 'dayjs';
import {
  View,
  Text,
  Image,
  location,
  ScrollView,
  exportStatisticsDay,
  exportStatisticsHour,
  exportStatisticsMonth,
  getStatisticsRangDay,
  showToast,
  getSystemInfoSync,
} from '@ray-js/ray';
import StatCharts from '@ray-js/stat-charts';
import { DpSchema, useDevice, useProps, utils } from '@ray-js/panel-sdk';
import Strings from '@/i18n';
import { Range } from '@ray-js/stat-charts/lib/charts/types';
import Tabs from '@ray-js/components-ty-tabs';
import { usePrompt } from '@/components/modal';
import { TopBar } from '@/components/top-bar';
import { images } from '@/res';
import styles from './index.module.less';
import { Circle } from './Circle';

const UNIT_MAP = {
  kwh: 'kW.h',
  money: '元',
  price: '元/度',
};

const { language } = getSystemInfoSync();

const getDpUnit = (schema: DpSchema, defaultUnit?: string) => {
  if (!schema) return '';
  let unit = schema?.property?.unit || defaultUnit || '';
  // TODO: 判断逻辑优化
  if (!Strings.getDpLang(`${schema.code}_unit`).startsWith('dp_')) {
    unit = Strings.getDpLang(`${schema.code}_unit`);
  }
  return unit;
};

export function Stats() {
  const [range, setRange] = useState<Range>('1hour');
  const [date, setDate] = useState(dayjs());
  const [todayTotal, setTodayTotal] = useState('0.00');
  const devId = useDevice(d => d.devInfo.devId);
  const totalEnergySchema = useDevice(devInfo => devInfo.dpSchema.add_ele);
  const curCurrentSchema = useDevice(devInfo => devInfo.dpSchema.cur_current);
  const curPowerSchema = useDevice(devInfo => devInfo.dpSchema.cur_power);
  const curVoltageSchema = useDevice(devInfo => devInfo.dpSchema.cur_voltage);
  const unit = getDpUnit(totalEnergySchema, UNIT_MAP.kwh);
  const power = useProps(d => d.switch_1);
  let current = useProps(d => d.cur_current) as number;
  current = power ? Number(utils.scaleNumber(curCurrentSchema?.property?.scale ?? 0, current)) : 0;
  const curPower = useProps(d => d.cur_power);
  const curVoltage = useProps(d => d.cur_voltage);
  const promt = usePrompt();
  const items = useMemo(
    () => [
      {
        key: '0',
        title: Strings.getLang('current_ele'),
        value: power ? current : 0,
      },
      {
        key: '1',
        title: Strings.getLang('current_pow'),
        value:
          current === 0 ? 0 : utils.scaleNumber(curPowerSchema?.property?.scale ?? 0, curPower),
      },
      {
        key: '3',
        title: Strings.getLang('voltage'),
        value: utils.scaleNumber(curVoltageSchema?.property?.scale ?? 0, curVoltage),
      },
    ],
    [curPower, current, curVoltage]
  );

  let unitToken: 'day' | 'month' | 'year';
  if (range === '1hour') unitToken = 'day';
  if (range === '1day') unitToken = 'month';
  if (range === '1month') unitToken = 'year';
  const formatToken = range === '1month' ? 'YYYYMM' : 'YYYYMMDD';
  const startDate = date.startOf(unitToken).format(formatToken);
  const endDate = date.endOf(unitToken).format(formatToken);

  const renderFooter = useCallback(() => {
    const now = dayjs();
    const maxDate = {
      '1hour': now,
      '1day': now,
      '1month': now,
    };
    const minDate = {
      '1hour': now.subtract(30, 'day'),
      '1day': now.subtract(12, 'month'),
      '1month': now.subtract(12, 'month'),
    };
    let isAddDisabled = false;
    let isMinusDisabled = false;
    let readableFormatToken: string;
    if (range === '1hour') {
      const tk = 'YYYYMMDD';
      isAddDisabled = date.add(1, 'day').format(tk) > maxDate['1hour'].format(tk); // 大于今天则不允许点击
      isMinusDisabled = date.format(tk) <= minDate['1hour'].format(tk); // 最多只能展示近30天的数据
      readableFormatToken = 'YYYY/MM/DD';
    }
    if (range === '1day') {
      const tk = 'YYYYMM';
      isAddDisabled = date.add(1, 'month').format(tk) > maxDate['1day'].format(tk); // 大于本月则不允许点击
      isMinusDisabled = date.format(tk) <= minDate['1day'].format(tk); // 最多只能展示近12个月的数据
      readableFormatToken = 'YYYY.MM';
    }
    if (range === '1month') {
      const tk = 'YYYY';
      isAddDisabled = date.add(1, 'year').format(tk) > maxDate['1month'].format(tk); // 大于本年则不允许点击
      isMinusDisabled = date.format(tk) <= minDate['1month'].format(tk); // 最多只能展示近12个月的数据
      readableFormatToken = 'YYYY';
    }
    return (
      <View className={styles['date-selector-container']}>
        <View className={styles['date-selector-content']}>
          <View
            className={styles['date-selector-image-wrapper']}
            style={{ opacity: isMinusDisabled ? 0.3 : 1 }}
            onClick={() => {
              if (isMinusDisabled) return;
              setDate(date.subtract(1, unitToken));
            }}
          >
            <Image src={images.arrow} className={styles['date-selector-image']} />
          </View>
          <View className={styles['date-selector-text']}>{date.format(readableFormatToken)}</View>
          <View
            className={styles['date-selector-image-wrapper']}
            style={{ opacity: isAddDisabled ? 0.3 : 1 }}
            onClick={() => {
              if (isAddDisabled) return;
              setDate(date.add(1, unitToken));
            }}
          >
            <Image
              src={images.arrow}
              style={{ transform: 'scale(-1)' }}
              className={styles['date-selector-image']}
            />
          </View>
        </View>
        <Tabs.SegmentedPicker
          style={{ backgroundColor: '#F9F9F9' }}
          tabBarStyle={{ backgroundColor: '#F9F9F9' }}
          borderRadius="84rpx"
          height="80rpx"
          onChange={(value: Range) => {
            // 切换的时候当前时间超出最大或最小时间则设置成最大或最小值
            if (value === '1hour') {
              const tk = 'YYYYMMDD';
              if (date.format(tk) > maxDate['1hour'].format(tk)) {
                setDate(maxDate['1hour']);
              }
              if (date.format(tk) <= minDate['1hour'].format(tk)) {
                setDate(minDate['1hour']);
              }
            } else if (value === '1day') {
              const tk = 'YYYYMM';
              if (date.format(tk) > maxDate['1day'].format(tk)) {
                setDate(maxDate['1day']);
              }
              if (date.format(tk) <= minDate['1day'].format(tk)) {
                setDate(minDate['1day']);
              }
            } else if (value === '1month') {
              const tk = 'YYYY';
              if (date.format(tk) > maxDate['1month'].format(tk)) {
                setDate(maxDate['1month']);
              }
              if (date.format(tk) <= minDate['1month'].format(tk)) {
                setDate(minDate['1month']);
              }
            }
            setRange(value);
          }}
        >
          <Tabs.TabPanel tabKey="1hour" tab={Strings.getLang('stats_day')} />
          <Tabs.TabPanel tabKey="1day" tab={Strings.getLang('stats_month')} />
          <Tabs.TabPanel tabKey="1month" tab={Strings.getLang('stats_year')} />
        </Tabs.SegmentedPicker>
      </View>
    );
  }, [date, range]);

  const renderTitle = useCallback(({ data }) => {
    const total = data?.[0]?.data?.reduce((acc, cur) => acc + +cur?.value || 0, 0) || 0;
    return (
      <View className={styles['title-container']}>
        <View className={styles['title-main-wrapper']}>
          <Text className={styles['title-main-text']}>{total}</Text>
          <Text className={styles['title-unit-text']}>{unit}</Text>
        </View>
        <View>
          <Image src={images.flash} className={styles['title-image']} />
          <Text className={styles['title-value-text']}>{Strings.getLang('stats_total')}</Text>
        </View>
        <View className={styles.export} hoverClassName={styles.hover} onClick={handleExport}>
          {Strings.getLang('export')}
        </View>
      </View>
    );
  }, []);

  const handleExport = useCallback(() => {
    promt(
      Strings.getLang('export_title'),
      Strings.getLang('email_tip'),
      async (email: string) => {
        if (!/^\w+(-+.\w+)*@\w+(-.\w+)*.\w+(-.\w+)*$/.test(email)) {
          throw Strings.getLang('email_error');
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
          let res;
          // eslint-disable-next-line default-case
          switch (range) {
            case '1hour':
              data.date = startDate;
              res = await exportStatisticsHour(data);
              break;
            case '1day':
              data.startDay = startDate;
              data.endDay = endDate;
              res = await exportStatisticsDay(data);
              break;
            case '1month':
              data.startMonth = startDate;
              data.endMonth = endDate;
              res = await exportStatisticsMonth(data);
              break;
          }
          showToast({ title: Strings.getLang('export_success'), icon: 'success' });
        } catch (e) {
          showToast({ title: Strings.getLang('export_fail'), icon: 'error' });
        }
      },
      {
        placeholder: Strings.getLang('email_placeholder'),
      }
    );
  }, [range, startDate, endDate, devId]);

  // 获取今日电量
  useEffect(() => {
    const now = dayjs();
    const date = now.format('YYYYMMDD');
    getStatisticsRangDay({
      devId,
      dpId: totalEnergySchema.id,
      startDay: date,
      endDay: date,
      type: 'sum',
    }).then(res => {
      setTodayTotal(res[date]);
    });
  }, []);

  return (
    <View className={styles.view}>
      <TopBar title={Strings.getLang('stats_title')} />
      <ScrollView refresherTriggered={false} scrollY>
        <View className={styles.total}>
          <Circle style={{ width: 542, height: 542 }} />
          <View className={styles.value}>{todayTotal}</View>
          <View className={styles.title}>{Strings.getLang('today_ele')}</View>
        </View>
        <View className={styles.items}>
          {items.map(item => {
            return (
              <View key={item.key} className={styles.item}>
                <View className={styles.value}>{item.value}</View>
                <View className={styles.name}>{item.title}</View>
              </View>
            );
          })}
        </View>
        <View className={styles.container}>
          <StatCharts
            style={{ width: '686rpx', padding: '0' }}
            devIdList={[devId]}
            dpList={[{ id: totalEnergySchema.id, name: Strings.getDpLang(totalEnergySchema.code) }]}
            unit={unit}
            range={range}
            // @ts-ignore
            type={location?.query?.statType}
            startDate={startDate}
            endDate={endDate}
            renderTitle={renderTitle}
            chartType="bar"
            width={686}
            height={636}
            renderFooter={renderFooter}
            colors={['rgba(113, 195, 127, 1)']}
            debug={false}
          />
        </View>
      </ScrollView>
    </View>
  );
}

export default Stats;
