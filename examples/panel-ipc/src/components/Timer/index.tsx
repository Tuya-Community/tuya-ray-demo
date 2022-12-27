import React, { useEffect, useMemo } from 'react';
import { View, Text } from '@ray-js/ray';
import { useSelector, actions } from '@/redux';
import { useDispatch } from 'react-redux';
import Styles from './index.module.less';

const Timer = () => {
  const dispatch = useDispatch();

  const { recordTime, isRecording } = useSelector(state => state.ipcCommon);

  const setTimeData = num => {
    dispatch(actions.common.recordTime(num));
  };

  useEffect(() => {
    if (isRecording) {
      setTimeout(() => {
        setTimeData(recordTime + 1);
      }, 1000);
    } else {
      setTimeData(0);
    }
  }, [recordTime, isRecording]);

  const timeText = useMemo(() => {
    const hour = Math.floor(recordTime / 60 / 60);
    const min = Math.floor(recordTime / 60) - hour * 60;
    const second = recordTime - min * 60 - hour * 60 * 60;

    const secondText = second <= 9 ? `0${second}` : second;
    const minText = min <= 9 ? `0${min}` : min;
    const hourText = hour <= 9 ? `0${hour}` : hour;

    return `${hourText === '00' ? '' : `${hourText}:`}${minText}:${secondText}`;
  }, [recordTime]);

  return (
    <View className={Styles.timerWrap}>
      <View className={Styles.circle} />
      <View className={Styles.timeText}>
        <Text>{timeText}</Text>
      </View>
    </View>
  );
};

export default Timer;
