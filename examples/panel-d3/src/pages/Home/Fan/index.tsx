import React, { FC, useCallback, useEffect, useMemo, useRef } from 'react';
import { useSelector } from 'react-redux';
import { View } from '@ray-js/components';
import { selectDpStateByCode } from '@/redux/modules/dpStateSlice';
import { fanSpeedCode, switchCode } from '@/config/dpCodes';
import { ComponentView, ComponentApi, ComponentConst } from '@/components/D3Component';
import styles from './index.module.less';
import Temperature from './Temperature';
import CountdownTips from './CountdownTips';

type Props = {
  disabledAnimation?: boolean;
};

const Fan: FC<Props> = ({ disabledAnimation = false }) => {
  const componentId = useRef(`component_${new Date().getTime()}`).current;
  const isAppOnBackground = useRef(false);
  // 模型的URL 支持glb, gltf格式, 需要为线上地址，可以透过CDN上传
  // domain + uri  如: https://images.tuyacn.com/smart/miniapp/static/bay1591069675815HNkH/17109234773d561a0f716.gltf
  const modelUrl = useRef('').current;
  const dpSwitch = useSelector(selectDpStateByCode(switchCode));
  const dpFanSpeed = useSelector(selectDpStateByCode(fanSpeedCode));

  const animationEnable = !disabledAnimation && dpSwitch;

  useEffect(() => {
    if (!animationEnable) {
      ComponentApi.setFanAnimation(componentId, { fanSpeed: ComponentConst.FAN_LEVEL.stop });
    }
  }, [animationEnable]);

  useEffect(() => {
    updateFanSpeed();
  }, [dpFanSpeed, dpSwitch]);

  const updateFanSpeed = useCallback(() => {
    if (dpSwitch) {
      if (dpFanSpeed < 33) {
        ComponentApi.setFanAnimation(componentId, { fanSpeed: ComponentConst.FAN_LEVEL.low });
      } else if (dpFanSpeed > 33 && dpFanSpeed < 66) {
        ComponentApi.setFanAnimation(componentId, { fanSpeed: ComponentConst.FAN_LEVEL.mid });
      } else if (dpFanSpeed > 66 && dpFanSpeed < 80) {
        ComponentApi.setFanAnimation(componentId, { fanSpeed: ComponentConst.FAN_LEVEL.hight });
      } else if (dpFanSpeed > 80) {
        ComponentApi.setFanAnimation(componentId, { fanSpeed: ComponentConst.FAN_LEVEL.max });
      }
    } else {
      ComponentApi.setFanAnimation(componentId, { fanSpeed: ComponentConst.FAN_LEVEL.stop });
    }
  }, [dpFanSpeed, dpSwitch]);

  const onComponentLoadEnd = useCallback((data: { infoKey: string; progress: number }) => {
    console.log('onComponentLoadEnd ==>', data);
    if (data.progress === 100) {
      ComponentApi.startAnimationFrame(componentId, { start: true });
      updateFanSpeed();
    }
  }, []);

  const onGestureChange = useCallback((start: boolean) => {
    if (start) {
      console.log('onGestureChange', start);
    }
  }, []);

  const onResetControl = useCallback((success: boolean) => {
    console.log('onResetControl', success);
  }, []);

  /**
   * 进入后台时断开P2P连接
   */
  const onEnterBackground = () => {
    ty.onAppHide(() => {
      isAppOnBackground.current = true;
      // 停止整个场景渲染
      ComponentApi.startAnimationFrame(componentId, { start: false });
    });
  };

  /**
   * 进入前台时开启P2P连接
   */
  const onEnterForeground = () => {
    ty.onAppShow(() => {
      ComponentApi.startAnimationFrame(componentId, { start: true });
      isAppOnBackground.current = false;
    });
  };

  /**
   * 卸载整个组件
   */
  const unmount = () => {
    ComponentApi.setFanAnimation(componentId, { fanSpeed: ComponentConst.FAN_LEVEL.stop });
    ComponentApi.disposeComponent(componentId);
  };

  useEffect(() => {
    onEnterBackground();
    onEnterForeground();
    return () => {
      unmount();
    };
  }, []);

  return (
    <View className={styles.container}>
      <View className={styles.view}>
        <ComponentView
          eventProps={{
            onComponentLoadEnd,
            onGestureChange,
            onResetControl,
          }}
          componentId={componentId}
          modelUrl={modelUrl}
        />
      </View>
      <Temperature />
      <CountdownTips />
    </View>
  );
};

export default Fan;
