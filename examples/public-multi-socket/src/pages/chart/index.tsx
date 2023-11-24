import React, { FC, useCallback, useEffect, useState } from 'react';
import { View, setPageOrientation, getStatisticsRangDay } from '@ray-js/ray';
import { Svg } from '@ray-js/svg';
import dayjs from 'dayjs';

import Chart from './chart-base';
import styles from './index.module.less';
import { useDevice } from '@ray-js/panel-sdk';

const fullScreenIcon =
  'M285.866667 810.666667H384v42.666666H213.333333v-170.666666h42.666667v98.133333l128-128 29.866667 29.866667-128 128z m494.933333 0l-128-128 29.866667-29.866667 128 128V682.666667h42.666666v170.666666h-170.666666v-42.666666h98.133333zM285.866667 256l128 128-29.866667 29.866667-128-128V384H213.333333V213.333333h170.666667v42.666667H285.866667z m494.933333 0H682.666667V213.333333h170.666666v170.666667h-42.666666V285.866667l-128 128-29.866667-29.866667 128-128z';
const cancelFullScreenIcon =
  'M354.133333 682.666667H256v-42.666667h170.666667v170.666667H384v-98.133334L243.2 853.333333l-29.866667-29.866666L354.133333 682.666667z m358.4 0l140.8 140.8-29.866666 29.866666-140.8-140.8V810.666667h-42.666667v-170.666667h170.666667v42.666667h-98.133334zM354.133333 384L213.333333 243.2l29.866667-29.866667L384 354.133333V256h42.666667v170.666667H256V384h98.133333z m358.4 0H810.666667v42.666667h-170.666667V256h42.666667v98.133333L823.466667 213.333333l29.866666 29.866667L712.533333 384z';

const Page: FC = () => {
  const { devInfo, dpSchema } = useDevice();
  const [data, setData] = useState([]);

  // const [data] = useState(() => {
  //   const res = [];
  //   for (let i = 1; i <= 31; i++) {
  //     res.push({
  //       time: `${i.toString(10).padStart(2, '0')}`,
  //       value: 5 * Math.floor(100 * Math.random()),
  //     });
  //   }
  //   return res;
  // });
  const [orientation, setOrientation] = useState('portrait' as 'landscape' | 'portrait');
  const triggerScreen = useCallback(() => {
    const newValue = orientation === 'portrait' ? 'landscape' : 'portrait';
    setPageOrientation({
      pageOrientation: newValue,
      success: () => {
        setOrientation(newValue);
      },
      fail: () => {
        console.log('切换失败');
      },
    });
  }, [orientation]);

  useEffect(() => {
    const now = dayjs();
    getStatisticsRangDay({
      devId: devInfo.devId,
      dpId: dpSchema.add_ele.id,
      type: 'sum',
      startDay: now.subtract(30, 'day').format('YYYYMMDD'),
      endDay: now.format('YYYYMMDD'),
    }).then(result => {
      const keys = Object.keys(result).sort((a, b) => (a > b ? 1 : -1));
      const list = keys.map(key => ({ time: key.slice(-2), value: result[key] }));
      setData(list);
    });
  }, []);

  return (
    <View className={styles.page}>
      <View className={styles.btn} onClick={triggerScreen}>
        <Svg viewBox="0 0 1024 1024" width="36px" height="36px">
          <path
            d={orientation === 'portrait' ? fullScreenIcon : cancelFullScreenIcon}
            fill="#fff"
          />
        </Svg>
      </View>
      <View className={`${orientation === 'landscape' ? styles.chartLandscape : styles.chart}`}>
        <Chart data={data} />
      </View>
    </View>
  );
};

export default Page;
