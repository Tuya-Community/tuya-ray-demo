import { View } from '@ray-js/components';
import clsx from 'clsx';
import React, { FC } from 'react';
import { createPortal } from '@ray-core/runtime';
import { CoverView } from '@ray-js/adapter';
import { usePageInstance } from '@ray-js/ray';
import { useAnimatePosition } from './hooks/useAnimatePosition';
import './index.module.less';
import { Props } from './type';

const prefixCls = 'rayui-modal';

/**
 * 类似PageContainer的弹窗，PageContainer被限制只能有一个，这个没有限制
 */
const Modal: FC<Props> = ({
  visible,
  overlay = true,
  position = 'center',
  duration = 300,
  children,
  onClickOverlay,
  containerStyle,
  overlayStyle,
  contentStyle,
  className,
}) => {
  const alertCls = clsx(prefixCls);
  const inst = usePageInstance();
  const api = useAnimatePosition(position);

  React.useEffect(() => {
    visible ? api.open() : api.close();
  }, [visible, position]);

  return createPortal(
    <View
      className={clsx(alertCls, position, visible && 'visible', className)}
      style={{ ...containerStyle }}
    >
      {overlay && children && (
        <CoverView
          className={clsx(`${prefixCls}-overlay`)}
          style={overlayStyle}
          onClick={onClickOverlay}
        />
      )}
      <CoverView
        className={clsx(`${prefixCls}-content`)}
        style={{ ...contentStyle, ...api.style, transitionDuration: `${duration}ms` }}
      >
        {children}
      </CoverView>
    </View>,
    inst.modalContainer
  );
};

export default Modal;
