import React from 'react';
import { View, Text, CoverView } from '@ray-js/ray';
import { Row, Col, Button } from '@ray-js/smart-ui';
import Strings from '../../i18n';
import styles from './index.module.less';

interface IProps {
  tipText: string;
  themeColor?: string;
  activeConfirm: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

const DecisionBar: React.FC<IProps> = props => {
  const { tipText, onConfirm, onCancel, themeColor = '#5D68FE', activeConfirm = false } = props;
  /**
   * 渲染确定和取消按钮
   */
  const renderDecisionBar = () => {
    return (
      <View className={styles.controlBar}>
        <View className={styles.controlBarHeader}>
          <Text className={styles.controlBarTip}>{tipText}</Text>
        </View>
        <Row gutter={40}>
          <Col span={12}>
            <Button block round onClick={onCancel} plain type="primary">
              {Strings.getLang('cancel')}
            </Button>
          </Col>
          <Col span={12}>
            <Button block round disabled={activeConfirm} onClick={onConfirm} type="primary">
              {Strings.getLang('confirm')}
            </Button>
          </Col>
        </Row>
      </View>
    );
  };

  return renderDecisionBar();
};

export default DecisionBar;
