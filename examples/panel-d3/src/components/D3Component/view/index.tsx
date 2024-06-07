import React from 'react';
import { View } from '@ray-js/ray';
import RjsView from '../components/rjs-component';
import { IProps, defaultProps } from './props';
import { getRayRealCallbacksName } from '../callbacks';
import styles from './index.module.less';

const Component: React.FC<IProps> = (props: IProps) => {
  const { componentId = `component_${new Date().getTime()}`, modelUrl, eventProps } = props;
  /**
   * 触发指定的事件
   */
  const onEvent = (evt: { type: string; detail: any }) => {
    const { detail, type } = evt;
    eventProps[getRayRealCallbacksName(type)]?.(detail);
  };
  return (
    <View className={styles.view}>
      <RjsView
        componentId={componentId}
        modelUrl={modelUrl}
        bindoncomponentloadend={onEvent}
        bindongesturechange={onEvent}
        bindonresetcontrol={onEvent}
      />
    </View>
  );
};

Component.defaultProps = defaultProps;
Component.displayName = 'Component';

export default Component;
