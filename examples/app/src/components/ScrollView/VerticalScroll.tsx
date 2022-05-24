import React from 'react';

import { ScrollView, View } from '@ray-js/components';

function hls() {
  return Math.floor(Math.random() * 55) + 200;
}

function randomColor() {
  return `rgb(${hls()},${hls()},${hls()})`;
}

function onScroll(event: any, type: string) {
  console.log(event, type);
}

function onScrollToLower() {
  console.log('触【底】了');
}

function onScrollToUpper() {
  console.log('触【顶】了');
}

export default function VerticalScroll() {
  return (
    <ScrollView
      style={{ width: '702rpx', height: '667rpx', backgroundColor: '#fff' }}
      scrollY
      scrollTop={100}
      onScroll={(event) => onScroll(event, 'Y')}
      onScrollToUpper={onScrollToUpper}
      onScrollToLower={onScrollToLower}
    >
      <View style={{ height: '200rpx', backgroundColor: randomColor() }} />
      <View style={{ height: '200rpx', backgroundColor: randomColor() }} />
      <View style={{ height: '200rpx', backgroundColor: randomColor() }} />
      <View style={{ height: '200rpx', backgroundColor: randomColor() }} />
      <View style={{ height: '200rpx', backgroundColor: randomColor() }} />
      <View style={{ height: '200rpx', backgroundColor: randomColor() }} />
      <View style={{ height: '200rpx', backgroundColor: randomColor() }} />
      <View style={{ height: '200rpx', backgroundColor: randomColor() }} />
      <View style={{ height: '200rpx', backgroundColor: randomColor() }} />
      <View style={{ height: '200rpx', backgroundColor: randomColor() }} />
      <View style={{ height: '200rpx', backgroundColor: randomColor() }} />
      <View style={{ height: '200rpx', backgroundColor: randomColor() }} />
    </ScrollView>
  );
}
