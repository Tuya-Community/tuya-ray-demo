import { brand, dpCodes } from '@/config';
import Strings from '@/i18n';
import { useSelector } from '@/redux';
import { putDeviceData } from '@/utils';
import { robotIsCleaning } from '@/utils/robotStatus';
import { useProps } from '@ray-js/panel-sdk';
import { View } from '@ray-js/ray';
import { Button, Col, Row } from '@ray-js/smart-ui';
import React from 'react';
import './icons/iconfont.css';
import { encodeQuickMapV1 } from '@ray-js/robot-protocol';
import styles from './index.module.less';

export const QuickMapButton = () => {
  const mapDataState = useSelector(state => state.mapState); // 地图数据

  const { isEmptyMap } = mapDataState;
  const workModeState = useProps(props => props[dpCodes.workMode]);
  const robotStatusState = useProps(props => props[dpCodes.robotStatus]);

  /**
   * 下发快速建图指令
   */
  const quickMapFn = () => {
    const protocolLengthVersion = '1';
    const commText = encodeQuickMapV1({ version: protocolLengthVersion });
    putDeviceData({ [dpCodes.commText]: commText });
  };

  const show = isEmptyMap && !robotIsCleaning(workModeState, robotStatusState);
  return show ? (
    <View style={{ width: '100vw' }}>
      <Row>
        <Col span="20" offset={2}>
          <Button round block onClick={quickMapFn} color={brand} customClass={styles.quickMapBtn}>
            {Strings.getLang('dsc_quick_map')}
          </Button>
        </Col>
      </Row>
    </View>
  ) : null;
};
