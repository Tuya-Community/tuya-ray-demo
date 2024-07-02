/* eslint-disable react/require-default-props */
/* eslint-disable no-shadow */
// 灯带涂抹
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useProps, useStructuredProps, utils } from '@ray-js/panel-sdk';
import DimmerStripCom from '@/components/DimmerStrip';
import { getSystemInfoSync } from '@ray-js/ray';
import { useDebugPerf } from '@/hooks';

import { getSharpPathData } from './utils';

const { hsv2rgbString } = utils;

enum SmearMode {
  all,
  single,
  clear,
}

type TProps = {
  colorList: HSV[];
  checkedMapColor: {
    [idx: number]: string;
  };
  checkedSet: Set<number>;
  type: SmearMode;
  gradient?: boolean; // 是否渐变模式
  onLightChange: (lightSet: Set<number>) => void;
  onLightEnd: (lightSet: Set<number>) => void;
};

const { windowWidth = 375, windowHeight } = getSystemInfoSync();
const stripPos = {
  x: Math.max((windowWidth - 338) / 2), // 338 绘制的灯带宽度
  y: Math.max((windowHeight * 0.29 - 185 + (185 + 30) / 2) / 2, 72), // 185 绘制的灯带高度
};

const DimmerStrip = (props: TProps) => {
  const {
    colorList,
    checkedMapColor: initCheckedMapColor,
    checkedSet,
    type: smearType,
    gradient,
    onLightChange,
    onLightEnd,
  } = props;
  const isAll = smearType === SmearMode.all;
  const [checkedMapColor, setCheckedMapColor] = useState(initCheckedMapColor);

  const paintColorData = useStructuredProps(dp => dp.paint_colour_data);
  useDebugPerf(DimmerStrip);

  useEffect(() => {
    setCheckedMapColor(initCheckedMapColor);
  }, [initCheckedMapColor]);

  const power = useProps(p => p.switch_led);
  const sharpPathData = useMemo(() => {
    const initData = {
      checkedSet,
      checkedMapColor,
      power,
      brightness: colorList[0]?.v || 1000,
      isGradient: paintColorData.effect === 1,
      ...stripPos,
    };
    const data = getSharpPathData(20, initData);
    return data;
  }, [smearType, checkedMapColor, power, checkedSet, paintColorData.effect, colorList]);

  // 处理切换选中逻辑，防止moving情况下会一直反复切换
  const isMoving = useRef(false);
  const preCheckedSet = useRef(checkedSet);
  useEffect(() => {
    if (!isMoving.current) {
      // 记录非moving时的checkedSet
      preCheckedSet.current = checkedSet;
    }
  }, [checkedSet]);

  const onTouchMove = useCallback(
    ({ detail }) => {
      // 关灯时不允许操作灯珠
      if (!power) {
        return;
      }
      // 全选时不允许操作灯珠
      if (isAll) {
        return;
      }
      const { index } = detail;
      if (colorList.length > 1) {
        console.warn('暂不支持多色');
        return;
      }
      isMoving.current = true;
      const color = colorList[0];
      const colorRgba = hsv2rgbString(color.h, color.s / 10, color.v / 10);
      setCheckedMapColor({
        ...checkedMapColor,
        [index]: colorRgba,
      });
      const nextCheckedSet = new Set(checkedSet);
      if (preCheckedSet.current.has(index)) {
        nextCheckedSet.delete(index);
      } else {
        nextCheckedSet.add(index);
      }
      onLightChange(nextCheckedSet);
    },
    [power, isAll, colorList, checkedSet, checkedMapColor]
  );

  const onTouchEnd = useCallback(
    ({ detail }) => {
      isMoving.current = false;
      // 关灯时不允许操作灯珠
      if (!power) {
        return;
      }
      // 全选时不允许操作灯珠
      if (isAll) {
        return;
      }
      const { index } = detail;
      if (colorList.length > 1) {
        console.warn('暂不支持多色');
        return;
      }
      const color = colorList[0];
      const colorRgba = hsv2rgbString(color.h, color.s / 10, color.v / 10);
      setCheckedMapColor({
        ...checkedMapColor,
        [index]: colorRgba,
      });
      const nextCheckedSet = new Set(checkedSet);
      if (preCheckedSet.current.has(index)) {
        nextCheckedSet.delete(index);
      } else {
        nextCheckedSet.add(index);
      }
      onLightEnd(nextCheckedSet);
    },
    [power, isAll, colorList, checkedMapColor, checkedSet]
  );
  return (
    <DimmerStripCom
      data={sharpPathData}
      gradient={gradient}
      bindend={onTouchEnd}
      bindmove={onTouchMove}
    />
  );
};

export default DimmerStrip;
