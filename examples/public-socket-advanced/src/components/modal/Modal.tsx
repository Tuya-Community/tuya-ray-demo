import React, {
  CSSProperties,
  FC,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { View } from '@ray-js/ray';
import classnames from 'classnames';
import { Icon } from '../icon';
import styles from './index.module.less';

let modalIndex = 999;
const noop = () => {
  //
};

export interface Action {
  text: string;
  onPress?: () => void | string | Promise<any>;
  style?: CSSProperties;
  loading?: boolean;
}

export interface ModalProps {
  visible?: boolean;

  alignContainer?: 'top' | 'center' | 'bottom';

  mask?: boolean;

  maskStyle?: CSSProperties;

  maskClassName?: string;

  onMaskPress?: () => void;
  modalChildStyle?: CSSProperties;

  closable?: boolean;

  maskClosable?: boolean;

  onClose?: () => void;

  afterClose?: () => void;

  animationType?: 'slideDown' | 'slideUp' | 'fade' | 'zoom' | 'none';

  title?: React.ReactNode;

  footer?: Action[];

  maskAnimationType?: 'slideDown' | 'slideUp' | 'fade' | 'zoom' | 'none';

  className?: string;

  wrapClassName?: string;

  wrapStyle?: CSSProperties;

  bodyClassName?: string;

  bodyStyle?: CSSProperties;

  children?: ReactNode;
}

const Modal: FC<ModalProps> = ({
  children,
  alignContainer,
  visible,
  closable,
  onClose,
  afterClose,
  maskClosable,
  onMaskPress,
  maskStyle,
  maskClassName,
  mask,
  animationType,
  maskAnimationType,
  className,
  wrapClassName,
  wrapStyle,
  bodyClassName,
  bodyStyle,
  modalChildStyle,
  title,
  footer,
}) => {
  const themeColor = '#138AEE';
  const renderCount = useRef(0);
  const [show, setShow] = useState(false);
  const [zIndex, setZIndex] = useState(0);
  const [closeAnimation, setCloseAnimation] = useState(false);
  const isAnimating = useRef(false);
  const animaName = useMemo(() => {
    let transName = '';
    let maskTransName = '';
    if (animationType && animationType !== 'none') {
      transName = styles[`${animationType}${closeAnimation ? 'Out' : 'In'}`];
    }
    if (maskAnimationType && maskAnimationType !== 'none') {
      maskTransName = styles[`${maskAnimationType}${closeAnimation ? 'Out' : 'In'}`];
    }
    return [transName, maskTransName];
  }, [closeAnimation, animationType, maskAnimationType]);

  const maskStyleRes = useMemo(() => {
    return { ...maskStyle, backgroundColor: 'rgba(0, 0, 0, 0.7)' };
  }, [maskStyle]);

  // 执行关闭动画
  const closeAnimate = useCallback(() => {
    if (show && !isAnimating.current) {
      setCloseAnimation(true);
      isAnimating.current = true;
      setTimeout(() => {
        if (isAnimating.current) {
          setShow(false);
          isAnimating.current = false;
        }
      }, 200);
    }
  }, [show]);
  // 关闭处理
  const handleClose = useCallback(() => {
    onClose && onClose();
    if (typeof animationType !== 'undefined' && animationType !== 'none') {
      closeAnimate();
    } else {
      setCloseAnimation(false);
      isAnimating.current = false;
      setShow(false);
    }
  }, [onClose, show, animationType]);
  //   点击 mask 关闭
  const handleMaskClose = useCallback(() => {
    if (onMaskPress) {
      onMaskPress();
      return;
    }
    if (typeof maskClosable === 'undefined' || maskClosable) {
      handleClose();
    }
  }, [onClose, show, maskClosable, onMaskPress]);
  // 处理显示
  useEffect(() => {
    if (!visible) {
      closeAnimate();
    } else {
      setZIndex(++modalIndex);
      setCloseAnimation(false);
      isAnimating.current = false;
      setShow(visible);
    }
  }, [visible]);

  useEffect(() => {
    if (renderCount.current > 0 && !show) {
      afterClose && afterClose();
    }
    renderCount.current++;
  }, [show]);
  return (
    <View
      className={styles.modal}
      style={{
        display: show ? 'flex' : 'none',
        zIndex,
        // @ts-ignore
        '--primary-color': themeColor,
      }}
    >
      {/* 遮罩 */}
      {mask && (
        <View
          className={classnames(styles.modalMask, maskClassName, animaName[1])}
          onClick={handleMaskClose}
          style={maskStyleRes}
          // @ts-ignore
          catchTouchMove={noop}
        />
      )}
      <View
        className={classnames(
          styles.modalWrap,
          !!wrapClassName && wrapClassName,
          animaName[0],
          styles[`modalWrap-${alignContainer}`]
        )}
        style={wrapStyle}
        // @ts-ignore
        catchTouchMove={noop}
      >
        <View
          className={classnames(
            styles.modalMain,
            styles[`modalMain-${alignContainer}`],
            !!className && className
          )}
          style={modalChildStyle}
        >
          {title && (
            <View className={classnames(styles.modalHeader, !!closable && styles.modalCloseHeader)}>
              {title}
            </View>
          )}
          <View
            className={classnames(styles.modalBody, {
              [bodyClassName]: !!bodyClassName,
            })}
            style={bodyStyle}
          >
            {children}
          </View>
          {footer && footer.length > 0 && (
            <View className={styles.modalFooter}>
              {footer.map((btn, i) => (
                <View key={i} className={styles.modalBtn} style={btn.style} onClick={btn.onPress}>
                  {btn.text}
                </View>
              ))}
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

Modal.defaultProps = {
  visible: true,
  animationType: 'fade',
  maskAnimationType: 'fade',
  alignContainer: 'center',
  mask: true,
  maskStyle: undefined,
  maskClassName: undefined,
  onMaskPress: undefined,
  modalChildStyle: undefined,
  closable: undefined,
  maskClosable: false,
  onClose: undefined,
  afterClose: undefined,
  title: '',
  footer: undefined,
  className: undefined,
  wrapClassName: undefined,
  wrapStyle: undefined,
  bodyClassName: undefined,
  bodyStyle: undefined,
  children: undefined,
};

export default Modal;
