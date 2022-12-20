/* eslint-disable prettier/prettier */
import React from 'react';
import { usePageInstance } from '@ray-js/ray';
import RectColorPicker from './rjs';

import { IProps } from './props';

export default function RectColor(props: IProps) {
  const instance = usePageInstance();
  instance.handleTouchStart = (e: any) => {
    props.onTouchStart?.(Math.round(e?.detail));
  };
  instance.handleTouchMove = (e: any) => {
    props.onTouchMove?.(Math.round(e?.detail));
  };
  instance.handleTouchEnd = (e: any) => {
    props?.onTouchEnd?.(Math.round(e?.detail));
  };
  return (
    <RectColorPicker
      canvasId={props.canvasId}
      radius={props.radius}
      innerRingRadius={props.innerRingRadius}
      value={props.value}
      isShowColorTip={props.isShowColorTip}
      catch:onTouchStart="handleTouchStart"
      catch:onTouchMove="handleTouchMove"
      catch:onTouchEnd="handleTouchEnd"
    />
  );
}
