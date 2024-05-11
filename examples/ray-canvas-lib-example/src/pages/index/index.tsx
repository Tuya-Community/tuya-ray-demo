// eslint-disable-next-line import/no-unresolved
/* eslint-disable no-console */
import React, { useState } from 'react';
import { View, Text } from '@ray-js/components';
import Rect from '../../components/rectShape';
import Circle from '../../components/circleShape';
import CustomShape from '../../components/customShape';
import Mix from '../../components/mix';
import Ellipse from '../../components/ellipseShape';
import EPolygon from '../../components/equilateralPolygonShape';
import Polygon from '../../components/polygonShape';
import RoundedRect from '../../components/roundedRectShape';
import Sector from '../../components/sectorShape';
import TextCom from '../../components/textElement';
import CustomElement from '../../components/customElement';
import Ring from '../../components/ringShape';

import './index.less';

const tabList = [
  'Rect',
  'Circle',
  'CustomShape',
  'Mix',
  'Ellipse',
  'EPolygon',
  'Polygon',
  'RoundedRect',
  'Sector',
  'Text',
  'CustomElement',
  'Ring',
];

export default function Home() {
  const [tab, setTab] = useState(tabList[tabList.length - 1]);
  return (
    <View
      style={{
        height: '100vh',
        width: '100vw',
      }}
    >
      <View className='tabList'>
        {tabList.map(_tab => {
          return (
            <Text
              key={_tab}
              className='tab'
              style={{
                color: tab === _tab ? '#fff' : '#323232',
                backgroundColor: tab === _tab ? '#4187f2' : '#fff',
              }}
              onClick={() => {
                setTab(_tab);
              }}
            >
              {_tab}
            </Text>
          );
        })}
      </View>
      <View style={{ width: '100vw', height: '2px', border: '1px solid #999', margin: '16px 0' }} />
      {tab === 'Rect' && <Rect />}
      {tab === 'Circle' && <Circle />}
      {tab === 'CustomShape' && <CustomShape />}
      {tab === 'Mix' && <Mix />}
      {tab === 'Ellipse' && <Ellipse />}
      {tab === 'EPolygon' && <EPolygon />}
      {tab === 'Polygon' && <Polygon />}
      {tab === 'RoundedRect' && <RoundedRect />}
      {tab === 'Sector' && <Sector />}
      {tab === 'Text' && <TextCom />}
      {tab === 'CustomElement' && <CustomElement />}
      {tab === 'Ring' && <Ring />}
    </View>
  );
}
