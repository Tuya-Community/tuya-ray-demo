import React, { useMemo, useEffect } from 'react';
import {
  View,
  Image,
  Text,
  getLaunchOptionsSync,
  navigateTo,
  setNavigationBarTitle,
} from '@ray-js/ray';
import Strings from '@/i18n';
import getCdnImgUrl from '@/utils/getCdnImgUrl';
import { useDebugPerf } from '@/hooks';

import { lampSchemaMap } from '@/devices/schema';
import { devices } from '@/devices';
import styles from './index.module.less';

const { rtc_timer, countdown } = lampSchemaMap;

const More = () => {
  useEffect(() => {
    setNavigationBarTitle({ title: Strings.getLang('moreTitle') });
  }, []);

  useDebugPerf(More);

  const listData = useMemo(() => {
    const isGroup = devices.lamp.model.abilities.support.isGroupDevice();
    const supportRctTimer = devices.lamp.model.abilities.support.isSupportDp(rtc_timer.code);
    const supportCountdown = devices.lamp.model.abilities.support.isSupportDp(countdown.code);
    // FIXME: TODO: 临时写死
    const isSupportCloudTimer = true;
    const supportCloudTimer =
      isSupportCloudTimer || devices.lamp.model.abilities.support.isSupportCloudTimer();
    const isShowSchedule = supportCloudTimer || supportRctTimer || supportCountdown;
    const list = [
      {
        key: 'schedule',
        icon: getCdnImgUrl('icon_schedule_active.png'),
        title: Strings.getLang('scheduleTitle'),
        visible: isShowSchedule,
        callback() {
          const { deviceId, groupId } = getLaunchOptionsSync().query;
          const jumpUrl = `functional://rayScheduleFunctional/home?deviceId=${deviceId ||
            ''}&groupId=${groupId ||
            ''}&rtcTimer=${supportRctTimer}&countdown=${supportCountdown}&cloudTimer=${supportCloudTimer}`;
          navigateTo({
            url: jumpUrl,
          });
        },
      },
      {
        key: 'stripLength',
        icon: getCdnImgUrl('icon_clip_active.png'),
        title: Strings.getLang('stripLengthTitle'),
        visible: !isGroup,
        callback() {
          const { deviceId, groupId } = getLaunchOptionsSync().query;
          const jumpUrl = `functional://rayStripClipFunctional/home?deviceId=${deviceId ||
            ''}&groupId=${groupId || ''}`;
          navigateTo({
            url: jumpUrl,
          });
        },
      },
    ];
    return list.filter(item => item.visible);
  }, []);

  return (
    <View className={styles.moreWrapper}>
      {listData.map(item => {
        return (
          <View key={item.key} className={styles.moreItem} onClick={item.callback}>
            <View
              style={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Image src={item.icon} className={styles.iconItem} />
              <Text className={styles.moreTitle}>{item.title}</Text>
            </View>
            <Image src={getCdnImgUrl('icon_right.png')} className={styles.iconRight} />
          </View>
        );
      })}
    </View>
  );
};

export default More;
