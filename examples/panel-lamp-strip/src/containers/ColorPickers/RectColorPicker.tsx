/* eslint-disable react/require-default-props */
/* eslint-disable no-shadow */
import React from 'react';
import { View, Image, Text } from '@ray-js/ray';
import LampTouchSlider from '@ray-js/lamp-touch-slider';
import LampRectPickerColor from '@ray-js/lamp-rect-picker-color';
import Strings from '@/i18n';
import getCdnImgUrl from '@/utils/getCdnImgUrl';
import { useDebugPerf } from '@/hooks';

import './RectColorPicker.less';

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
  disable?: boolean; // 是否禁用， 不支持操作
  closed?: boolean; // 是否关闭，支持打开
  isShow: boolean; // 是否显示
  onChange: (hsvList: HSV[], type: DimmerMode) => void;
};

const ColorPicker = (props: TProps) => {
  const { hsv, disable, isShow, closed, onChange } = props;
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
    onChange(hsvList, DimmerMode.colour);
  };

  const handleWhiteTouchEnd = (value: number) => {
    const hsvList = [
      {
        ...hsv,
        // 亮度最小值不能为0
        v: +Number((value || 100) * 10).toFixed(0),
      },
    ];
    onChange(hsvList, DimmerMode.colour);
  };
  const renderMask = () => {
    return (
      <View
        className="maskWrapper"
        style={{
          display: disable ? 'flex' : 'none',
        }}
      >
        <Image src={getCdnImgUrl('disable_move.png')} className="maskIcon" />
        <Text className="maskTip">{Strings.getLang('disableCheck')}</Text>
      </View>
    );
  };
  return (
    <View
      className={`colorPickerWrapper ${closed ? 'closed' : ''}`}
      style={{
        display: isShow ? 'flex' : 'none',
        overflow: disable ? 'hidden' : 'visible',
      }}
    >
      <LampRectPickerColor
        hs={{
          h: hsv.h,
          s: hsv.s,
        }}
        useEventChannel
        closed={props.closed}
        borderRadiusStyle="12px 12px 0 0"
        rectWidth={344}
        rectHeight={155}
        thumbRadius={14}
        isShowColorTip
        onTouchEnd={handleColorTouchEnd}
      />
      <LampTouchSlider
        instanceId="rectColorPicker"
        min={WHITE_RANGE[0]}
        max={WHITE_RANGE[1]}
        // 亮度最小值不能为0
        value={+((hsv.v || 1000) / 10).toFixed(0)}
        barColor="#fff"
        barStyle={{
          width: '100%',
          height: '60px',
          borderRadius: 0,
        }}
        hotAreaStyle={{
          height: '40px',
        }}
        style={{ height: '40px', overflow: 'hidden' }}
        onTouchEnd={handleWhiteTouchEnd}
        hidden={!isShow}
      />
      {renderMask()}
    </View>
  );
};

export default ColorPicker;
