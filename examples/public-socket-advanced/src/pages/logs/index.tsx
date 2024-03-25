import React, { useCallback, useRef, useState } from 'react';
import { getAnalyticsLogsStatusLog, ScrollView, View, Text } from '@ray-js/ray';
import { useDevice } from '@ray-js/panel-sdk';
import dayjs from 'dayjs';
import { TopBar } from '@/components/top-bar';
import Strings from '@/i18n';
import styles from './index.module.less';

export function Logs() {
  const { devInfo, dpSchema } = useDevice();
  const [list, setList] = useState([]);
  const hasNext = useRef(true);
  const [loading, setLoading] = useState(false);
  const [offset, setOffset] = useState(0);

  const fetchData = useCallback(async (offset: number) => {
    if (hasNext.current && !loading) {
      setLoading(true);
      try {
        const res = await getAnalyticsLogsStatusLog({
          devId: devInfo.devId,
          dpIds: dpSchema.switch_1.id,
          offset,
          limit: 50,
          sortType: 'DESC',
        });
        setOffset(offset);
        hasNext.current = res.hasNext;
        setList(d => [...d, ...res.dps]);
      } catch {
        hasNext.current = false;
      } finally {
        setLoading(false);
      }
    }
  }, []);

  const loadMore = useCallback(() => {
    fetchData(offset + 50);
  }, [offset]);

  React.useEffect(() => {
    fetchData(0);
  }, []);

  let preDay = '';
  return (
    <View className={styles.container}>
      <TopBar title={Strings.getLang('logs')} />
      <ScrollView
        className={styles.scroll}
        scrollY
        refresherTriggered={false}
        lowerThreshold={300}
        onScrollToLower={loadMore}
      >
        {list.map(item => {
          const date = dayjs(item.timeStamp * 1000);
          const curDay = date.format(Strings.getLang('log_day'));
          let dayBegin = false;
          if (curDay !== preDay) {
            dayBegin = true;
            preDay = curDay;
          }
          return (
            <View key={item.timeStamp}>
              {dayBegin && <View className={styles.day}>{curDay}</View>}
              <View className={styles.item}>
                <Text className={styles.time}>{date.format('HH:mm')}</Text>
                <Text className={styles.action}>
                  {Strings.getDpLang(dpSchema.switch_1.code)}
                  {Strings.getDpLang(dpSchema.switch_1.code, item.value === 'true')}
                </Text>
              </View>
            </View>
          );
        })}
        {loading && <View className={styles.loading}>{Strings.getLang('loading')}</View>}
      </ScrollView>
    </View>
  );
}

export default Logs;
