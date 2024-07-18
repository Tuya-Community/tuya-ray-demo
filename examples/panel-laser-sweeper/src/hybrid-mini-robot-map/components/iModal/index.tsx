/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable react/require-default-props */
import React from 'react';
import _ from 'lodash';
import { Text, View } from '@ray-js/ray';
import Modal from '@/components/Modal';
import styles from './index.module.less';

interface IModalProps {
  /**
   * 是否显示弹框
   */
  show: boolean;
  /**
   * 是否显示遮罩
   */
  overlay?: boolean;
  /**
   * 弹出层弹出位置
   */
  position?: 'top' | 'center' | 'bottom';
  /**
   * 自定义遮罩层样式
   * 一般只设置背景色
   */
  overlayStyle?: React.CSSProperties;
  /**
   * 自定义弹出层样式
   */
  customStyle?: React.CSSProperties;
  /**
   * 弹出框的Header样式
   */
  headerStyle?: React.CSSProperties;
  /**
   * Title 的样式
   */
  titleStyle?: React.CSSProperties;
  /**
   * 是否显示确定按钮
   */
  showConfirmBtn?: boolean;
  /**
   * 是否显示删除按钮
   */
  showCancelBtn?: boolean;
  /**
   * 点击遮罩层触发事件
   */
  onClickOverlay?: (event: { type: 'clickoverlay' }) => void;
  /**
   * 弹窗标题
   */
  title?: string;
  /**
   * 确定文本
   */
  confirmText?: string;
  /**
   * 确定触发事件
   */
  onConfirm?: () => void;
  /**
   * 取消文本
   */
  cancelText?: string;
  /**
   * 取消触发事件
   */
  onCancel?: () => void;
}

const IModal: React.FC<IModalProps> = props => {
  const {
    show = false,
    overlay = true,
    position = 'bottom',
    title = '',
    confirmText = '',
    headerStyle,
    showConfirmBtn = true,
    showCancelBtn = true,
    cancelText = '',
  } = props;
  const defaultOverlayStyle = { backgroundColor: 'rgba(0,0,0,0.5)' };
  const overlayStyle = _.merge(defaultOverlayStyle, props.overlayStyle);

  return (
    <Modal
      visible={show}
      overlay={overlay}
      position={position}
      overlayStyle={overlayStyle}
      onClickOverlay={props.onClickOverlay ? props.onClickOverlay : () => {}}
    >
      {show && (
        <View
          className={styles.modalContainer}
          style={props.customStyle ? props.customStyle : null}
        >
          <View
            className={styles.titleContainer}
            style={props.headerStyle ? props.headerStyle : null}
          >
            {showCancelBtn && (
              <Text
                className={styles.hideButton}
                onClick={props.onCancel ? props.onCancel : () => {}}
              >
                {cancelText}
              </Text>
            )}
            <Text className={styles.title} style={props.titleStyle ? props.titleStyle : null}>
              {title}
            </Text>
            {showCancelBtn && (
              <Text
                className={styles.button}
                onClick={props.onConfirm ? props.onConfirm : () => {}}
              >
                {confirmText}
              </Text>
            )}
          </View>
          {props.children}
        </View>
      )}
    </Modal>
  );
};

export default IModal;
