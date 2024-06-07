import React, { FC } from 'react';
import clsx from 'clsx';

import './index.less';
import { View, usePageInstance } from '@ray-js/ray';
import { createPortal } from '@ray-core/runtime';

const prefixCls = 'rayui-modal';

type Props = {
  /**
   * 必填
   * 是否显示Modal
   */
  visible: boolean;
  /**
   * 是否显示遮罩
   */
  overlay?: boolean;
  /**
   * 位置(top / bottom 会带有滑出的动画)
   */
  position?: 'top' | 'center' | 'bottom';
  /**
   * 点击遮罩回调
   */
  onClickOverlay?: (e: any) => void;
  /**
   * 自定义容器样式
   */
  containerStyle?: React.CSSProperties;
  /**
   * 自定义内容样式
   */
  overlayStyle?: React.CSSProperties;
  /**
   * 自定义内容样式
   */
  contentStyle?: React.CSSProperties;
  /**
   * 自定义容器类名
   */
  className?: string;
  contentClassName?: string;
};

/**
 * 类似PageContainer的弹窗，PageContainer被限制只能有一个，这个没有限制
 */
const Modal: FC<Props> = ({
  visible = false,
  overlay = true,
  position = 'center',
  children,
  onClickOverlay,
  containerStyle,
  overlayStyle,
  contentStyle,
  className,
  contentClassName,
}) => {
  const alertCls = clsx(prefixCls);
  const inst = usePageInstance();

  return createPortal(
    <View
      className={clsx(alertCls, position, visible && 'visible', className)}
      style={containerStyle}
    >
      {overlay && (
        <View
          className={clsx(`${prefixCls}-overlay`)}
          style={overlayStyle}
          onClick={onClickOverlay}
        />
      )}
      <View className={clsx(`${prefixCls}-content`, contentClassName)} style={contentStyle}>
        {children}
      </View>
    </View>,
    inst.modalContainer
  );
};

export default Modal;
