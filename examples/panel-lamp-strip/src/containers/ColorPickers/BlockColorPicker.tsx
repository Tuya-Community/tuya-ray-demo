/* eslint-disable react/require-default-props */
/* eslint-disable no-shadow */
import React from 'react';
import { View, Image, Text } from '@ray-js/ray';
import LampColorCard from '@ray-js/lamp-color-card';
import LampTouchSlider from '@ray-js/lamp-touch-slider';
import Strings from '@/i18n';
import getCdnImgUrl from '@/utils/getCdnImgUrl';

import { useDebugPerf } from '@/hooks';

import './BlockColorPicker.less';

enum DimmerMode {
  white,
  colour,
  colourCard,
  combination,
}

const WHITE_RANGE = [1, 100];

type TProps = {
  hsv: {
    h: number;
    s: number;
    v: number;
  };
  disable?: boolean; // 禁用无法操作
  closed?: boolean; // 关闭，支持点击开启
  isShow: boolean; // 展示
  onChange: (hsvList: any[], type: DimmerMode) => void;
};

const ColorPicker = (props: TProps) => {
  const { hsv, disable, isShow, onChange } = props;
  useDebugPerf(ColorPicker, props);
  const handleColorTouchEnd = hs => {
    const hsvList = [
      {
        ...hsv,
        // 亮度最小值不能为0
        v: hsv.v || 1000,
        ...hs,
      },
    ];
    onChange(hsvList, DimmerMode.colourCard);
  };

  const handleWhiteTouchEnd = (value: number) => {
    const hsvList = [
      {
        ...hsv,
        // 亮度最小值不能为0
        v: +Number((value || 100) * 10).toFixed(0),
      },
    ];
    onChange(hsvList, DimmerMode.colourCard);
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
    <View className="blockPickerWrapper" style={{ display: isShow ? 'block' : 'none' }}>
      {renderMask()}
      <LampColorCard
        hs={{
          h: hsv.h,
          s: hsv.s,
        }}
        closed={props.closed}
        rectWidth={343}
        rectHeight={156}
        thumbBorderWidth={2}
        thumbBorderRadius={4}
        thumbBorderColor="#fff"
        onTouchEnd={handleColorTouchEnd}
      />

      <LampTouchSlider
        instanceId="blockColorPicker"
        min={WHITE_RANGE[0]}
        max={WHITE_RANGE[1]}
        barColor="#fff"
        barStyle={{
          width: '100%',
          height: '60px',
          borderRadius: 0,
        }}
        // 亮度最小值不能为0
        value={+((hsv.v || 1000) / 10).toFixed(0)}
        style={{ height: '40px' }}
        hidden={!isShow}
        onTouchEnd={handleWhiteTouchEnd}
      />
    </View>
  );
};

export default ColorPicker;
