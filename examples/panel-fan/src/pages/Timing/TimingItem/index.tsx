import React, { FC, useEffect, useMemo, useRef } from 'react';
import { EntityId } from '@reduxjs/toolkit';
import { Switch, Text, View } from '@ray-js/components';
import { useDispatch, useSelector } from 'react-redux';
import SwipeOut from '@ray-js/components-ty-swipeout';
import moment from 'moment';
import { deleteTiming, selectTimingById, updateTimingStatus } from '@/redux/modules/timingsSlice';
import { ReduxState } from '@/redux';
import Strings from '@/i18n';
import { WEEKS } from '@/constant';
import { TouchableOpacity } from '@/components';
import { checkDpExist, getDpIdByCode } from '@/utils';
import { lightCode, switchCode } from '@/config/dpCodes';

import styles from './index.module.less';

type Props = {
  id: EntityId;
  onEdit: (id: EntityId) => void;
  onOpen: (id: EntityId) => void;
  currentOpenedId: EntityId;
};

const TimingItem: FC<Props> = ({ id, currentOpenedId, onEdit, onOpen }) => {
  const dispatch = useDispatch();
  const api = SwipeOut.useSwipeout();
  const timing = useSelector((state: ReduxState) => selectTimingById(state, id));

  const {
    descs,
    timeTexts: [timeText, amPm],
  } = useMemo(() => {
    const { loops, time, dps } = timing ?? {};

    console.log('timing ==>', timing ?? {});

    const dpsObject = dps || {};
    const switchCodeId = getDpIdByCode(switchCode);
    const lightCodeId = getDpIdByCode(lightCode);

    // 时间
    const timeTexts = moment(time, 'HH:mm').format('h:mm A').split(' ');

    // 循环文本
    const descsTmp = [];

    if (loops) {
      if (timing?.loops === '1111111') {
        descsTmp.push(Strings.getLang('dsc_everyday'));
      } else if (timing?.loops === '0000000') {
        descsTmp.push(Strings.getLang('dsc_one_time'));
      } else {
        descsTmp.push(
          WEEKS.filter((_weekday, index) => loops[index] === '1')
            .map(weekday => Strings.getLang(`dsc_week_full_${weekday}`))
            .join('、')
        );
      }
    }

    if (checkDpExist(switchCode)) {
      descsTmp.push(
        ` ${Strings.getLang('dsc_fan')} : ${Strings.getLang(
          dpsObject[switchCodeId] ? 'dsc_on' : 'dsc_off'
        )}`
      );
    }

    if (checkDpExist(lightCode)) {
      descsTmp.push(
        ` ${Strings.getLang('dsc_light')} : ${Strings.getLang(
          dpsObject[lightCodeId] ? 'dsc_on' : 'dsc_off'
        )}`
      );
    }

    return { descs: descsTmp, timeTexts };
  }, [timing]);

  const handleSwitch = () => {
    dispatch(updateTimingStatus({ id, status: !timing?.status }));
  };

  const handleDelete = () => {
    dispatch(deleteTiming(id));
  };

  const handleEdit = () => {
    onEdit(id);
  };

  useEffect(() => {
    if (currentOpenedId !== id) {
      api.close();
    }
  }, [currentOpenedId]);

  return (
    <SwipeOut
      autoClose
      rightButtonGroupWidth={60}
      right={[
        {
          text: (
            <Text
              className="iconfontpanel icon-panel-delete"
              style={{ fontSize: '48rpx', color: '#fff' }}
            />
          ),
          style: { backgroundColor: '#ff4444', height: '244rpx', width: '60px' },
          onPress: handleDelete,
        },
      ]}
      onOpen={() => onOpen(id)}
      api={api}
    >
      <TouchableOpacity activeOpacity={1} className={styles.container} onClick={handleEdit}>
        <View className={styles.left}>
          <View>
            <Text className={styles.time}>{timeText}</Text>
            <Text className={styles.timeUnit}> {amPm}</Text>
          </View>
          {timing?.aliasName && (
            <View className={styles.row}>
              <Text className={styles.label}>{timing.aliasName}</Text>
            </View>
          )}
          <View className={styles.row}>
            <Text className={styles.label}>{descs.join(' | ')}</Text>
          </View>
        </View>
        {/* 阻止冒泡 避免整项的点击事件被触发 */}
        <View onClick={e => e.origin.stopPropagation()}>
          <Switch color="#6395f6" checked={timing?.status} onChange={handleSwitch} />
        </View>
      </TouchableOpacity>
    </SwipeOut>
  );
};

export default TimingItem;
