import React from "react";

import { getSystemInfoSync, usePageEvent, usePageInstance, View} from "@ray-js/ray";

import Render from './index.rjs';
// 原生小程序自定义组件
import Foo from "../../components/foo/index"


export default function Home() {
  const pageInstance = usePageInstance();

  /**
   * 在 onReady 生命周期触发后，初始化 echarts 实例
   * 否则 canvas 还未渲染完成 无法获取到 canvas 实例
   */
  usePageEvent('onReady', () => {
    const render = new Render(pageInstance);
    const systemInfo = getSystemInfoSync();

    render.init('f1', systemInfo.pixelRatio);
  })


  return (
    <View>
      <canvas canvas-id={"f1"} style={{width: '750rpx', height: '422rpx'}}/>

      <Foo />
    </View>
  );
}
