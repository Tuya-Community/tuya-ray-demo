import React, { FC } from 'react';
import CommonCharts from '@ray-js/common-charts';
import { View } from '@ray-js/ray';
import Strings from '@/i18n';

interface Props {
  dataSource: { categories: string[]; data: string[] };
  unit: string;
}

const Chart: FC<Props> = ({ dataSource, unit }) => {
  return (
    <View style={{ width: '100%', height: '100%', position: 'relative' }}>
      <CommonCharts
        unit={unit} // 数据单位
        option={{
          backgroundColor: '#fff',
          xAxis: {
            type: 'category',
            data: dataSource.categories,
            axisLabel: {
              interval: 3,
            },
          },
          yAxis: {
            type: 'value',
          },
          tooltip: {},
          series: [
            {
              name: Strings.getDpLang('add_ele'),
              data: dataSource.data,
              type: 'bar', // support bar line pie
            },
          ],
        }}
      />
      {dataSource.data.length === 0 && (
        <View
          style={{
            position: 'absolute',
            top: '50%',
            width: '100%',
            left: 0,
            transform: 'translateY(-50%)',
            textAlign: 'center',
            color: 'rgba(0,0,0,.7)',
            fontSize: '24rpx',
          }}
        >
          {Strings.getLang('no_data')}
        </View>
      )}
    </View>
  );
};
export default Chart;
