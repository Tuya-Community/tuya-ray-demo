/* eslint-disable react/require-default-props */
import React from 'react';
import { View, Image, Text } from '@ray-js/ray';
import { isEqual } from 'lodash-es';
import Strings from '@/i18n';
import getCdnImgUrl from '@/utils/getCdnImgUrl';
import { useDebugPerf } from '@/hooks';

import './GroupColorPicker.less';

export const hsvColors = [
  [
    { h: 339, s: 328, v: 957 },
    { h: 338, s: 651, v: 1000 },
    { h: 338, s: 875, v: 1000 },
    { h: 339, s: 976, v: 984 },
  ],
  [
    { h: 284, s: 425, v: 996 },
    { h: 284, s: 425, v: 996 },
    { h: 219, s: 345, v: 1000 },
    { h: 194, s: 417, v: 988 },
  ],
  [
    { h: 217, s: 1000, v: 992 },
    { h: 258, s: 809, v: 698 },
    { h: 339, s: 976, v: 984 },
    { h: 59, s: 744, v: 996 },
  ],
  [
    { h: 6, s: 685, v: 996 },
    { h: 37, s: 752, v: 996 },
    { h: 65, s: 577, v: 937 },
    { h: 193, s: 996, v: 988 },
  ],
  [
    { h: 197, s: 204, v: 1000 },
    { h: 194, s: 417, v: 988 },
    { h: 193, s: 675, v: 988 },
    { h: 193, s: 996, v: 988 },
  ],
  [
    { h: 94, s: 658, v: 733 },
    { h: 92, s: 550, v: 827 },
    { h: 92, s: 371, v: 867 },
    { h: 66, s: 259, v: 969 },
  ],
  [
    { h: 94, s: 658, v: 733 },
    { h: 66, s: 767, v: 925 },
    { h: 40, s: 996, v: 1000 },
    { h: 25, s: 1000, v: 1000 },
  ],
  [
    { h: 11, s: 918, v: 1000 },
    { h: 25, s: 1000, v: 1000 },
    { h: 40, s: 996, v: 1000 },
    { h: 94, s: 658, v: 733 },
  ],
  [
    { h: 258, s: 809, v: 698 },
    { h: 217, s: 1000, v: 992 },
    { h: 283, s: 770, v: 953 },
    { h: 57, s: 580, v: 1000 },
  ],
  [
    { h: 259, s: 449, v: 996 },
    { h: 259, s: 688, v: 992 },
    { h: 255, s: 796, v: 922 },
    { h: 258, s: 809, v: 698 },
  ],
  [
    { h: 40, s: 996, v: 1000 },
    { h: 37, s: 752, v: 996 },
    { h: 36, s: 531, v: 996 },
    { h: 34, s: 339, v: 996 },
  ],
  [
    { h: 40, s: 996, v: 1000 },
    { h: 193, s: 996, v: 988 },
    { h: 255, s: 796, v: 922 },
    { h: 11, s: 918, v: 1000 },
  ],
  [
    { h: 92, s: 371, v: 867 },
    { h: 193, s: 675, v: 988 },
    { h: 193, s: 996, v: 988 },
    { h: 259, s: 688, v: 992 },
  ],
  [
    { h: 285, s: 777, v: 737 },
    { h: 338, s: 651, v: 1000 },
    { h: 339, s: 976, v: 984 },
    { h: 25, s: 1000, v: 1000 },
    { h: 59, s: 744, v: 996 },
  ],
  [
    { h: 258, s: 809, v: 698 },
    { h: 255, s: 796, v: 922 },
    { h: 259, s: 688, v: 992 },
    { h: 259, s: 449, v: 996 },
    { h: 257, s: 209, v: 996 },
  ],
  [
    { h: 0, s: 557, v: 1000 },
    { h: 0, s: 685, v: 996 },
    { h: 0, s: 772, v: 996 },
    { h: 0, s: 843, v: 1000 },
    { h: 0, s: 1000, v: 1000 },
  ],
  [
    { h: 217, s: 1000, v: 992 },
    { h: 218, s: 545, v: 1000 },
    { h: 36, s: 531, v: 996 },
    { h: 40, s: 996, v: 1000 },
    { h: 25, s: 1000, v: 1000 },
  ],
  [
    { h: 284, s: 425, v: 996 },
    { h: 57, s: 580, v: 1000 },
    { h: 92, s: 550, v: 827 },
    { h: 193, s: 675, v: 988 },
    { h: 259, s: 449, v: 996 },
  ],
  [
    { h: 216, s: 771, v: 992 },
    { h: 255, s: 796, v: 922 },
    { h: 354, s: 976, v: 984 },
    { h: 25, s: 1000, v: 1000 },
    { h: 40, s: 996, v: 1000 },
  ],
  [
    { h: 94, s: 658, v: 733 },
    { h: 92, s: 550, v: 827 },
    { h: 92, s: 371, v: 867 },
    { h: 66, s: 767, v: 925 },
    { h: 65, s: 409, v: 949 },
  ],
  [
    { h: 193, s: 675, v: 988 },
    { h: 37, s: 752, v: 996 },
    { h: 25, s: 1000, v: 1000 },
    { h: 285, s: 657, v: 996 },
    { h: 285, s: 777, v: 737 },
  ],
  [
    { h: 342, s: 303, v: 984 },
    { h: 335, s: 452, v: 980 },
    { h: 338, s: 667, v: 976 },
    { h: 350, s: 631, v: 976 },
    { h: 360, s: 707, v: 976 },
    { h: 1, s: 996, v: 973 },
  ],
];

export const hexColors = [
  ['#F4A4C0', '#FF5995', '#FF2072', '#FB065A'],
  ['#E292FE', '#E292FE', '#A7C6FF', '#93E3FC'],
  ['#0061FD', '#4D22B2', '#FB065A', '#FEFB41'],
  ['#FE6250', '#FEB43F', '#E4EF65', '#01C7FC'],
  ['#CBF0FF', '#93E3FC', '#52D6FC', '#01C7FC'],
  ['#76BB40', '#96D35F', '#B1DD8B', '#F1F7B7'],
  ['#76BB40', '#D9EC37', '#FFAB01', '#FF6A00'],
  ['#FF4015', '#FF6A00', '#FFAB01', '#76BB40'],
  ['#4D22B2', '#0061FD', '#BE38F3', '#FFF76B'],
  ['#B18CFE', '#864FFD', '#5E30EB', '#4D22B2'],
  ['#FFAB01', '#FEB43F', '#FEC777', '#FED9A8'],
  ['#FFAB01', '#01C7FC', '#5E30EB', '#FF4015'],
  ['#B1DD8B', '#52D6FC', '#01C7FC', '#864FFD'],
  ['#982ABC', '#FF5995', '#FB065A', '#FF6A00', '#FEFB41'],
  ['#4D22B2', '#5E30EB', '#864FFD', '#B18CFE', '#D8C9FE'],
  ['#FF7171', '#FE5050', '#FE3A3A', '#FF2828', '#FF0000'],
  ['#0061FD', '#74A7FF', '#FEC777', '#FFAB01', '#FF6A00'],
  ['#E292FE', '#FFF76B', '#96D35F', '#52D6FC', '#B18CFE'],
  ['#3A87FD', '#5E30EB', '#FB061F', '#FF6A00', '#FFAB01'],
  ['#76BB40', '#96D35F', '#B1DD8B', '#D9EC37', '#EAF28F'],
  ['#52D6FC', '#FEB43F', '#FF6A00', '#D357FE', '#982ABC'],
  ['#FBAFC6', '#FA89B9', '#F95391', '#F95C75', '#F9494A', '#F80701'],
];

type TProps = {
  colorList: HSV[];
  disable?: boolean;
  onClick: (hsv: HSV[], index: number) => void;
};

const GroupColorPicker = (props: TProps) => {
  const { colorList = [], disable, onClick } = props;
  useDebugPerf(GroupColorPicker, props);
  const renderCard = (hsvList: HSV[], _index) => {
    const active = isEqual(colorList, hsvList);
    const height = 92 / (hsvList.length || 4);
    const isRowLast = (_index + 1) % 4 === 0;
    const hexColor = hexColors[_index];
    return (
      <View
        className="colorCardWrapper"
        style={{
          border: active ? '4rpx solid #fff' : '4rpx solid rgba(255, 255, 255, 0.2)',
          marginRight: isRowLast ? 0 : '12rpx',
        }}
        onClick={() => onClick(hsvList, _index)}
        key={_index}
      >
        {hsvList.map((i, __idx) => {
          const background = hexColor[__idx];
          return (
            <View
              className="colorCardItem"
              // eslint-disable-next-line react/no-array-index-key
              key={`${__idx}`}
              style={{ height: `${height * 2}rpx`, background }}
            />
          );
        })}
      </View>
    );
  };

  const renderMask = () => {
    if (!disable) {
      return null;
    }
    return (
      <View className="maskWrapper">
        <Image src={getCdnImgUrl('disable_move.png')} className="maskIcon" />
        <Text className="maskTip">{Strings.getLang('disableCheck')}</Text>
      </View>
    );
  };

  return (
    <View
      className="groupPickerWrapper"
      style={{
        overflowY: disable ? 'hidden' : 'auto',
      }}
    >
      {renderMask()}
      {hsvColors.map((i, idx) => {
        return renderCard(i, idx);
      })}
    </View>
  );
};

export default GroupColorPicker;
