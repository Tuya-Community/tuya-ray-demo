import React, { FC, useState } from 'react';
import clsx from 'clsx';
import { Text, View } from '@ray-js/components';
import { useDispatch, useSelector } from 'react-redux';
import { selectDpStateByCode, updateDp } from '@/redux/modules/dpStateSlice';
import {
  fanHorizontalCode,
  fanVerticalCode,
  lightCode,
  modeCode,
  switchCode,
  switchHorizontalCode,
  switchVerticalCode,
} from '@/config/dpCodes';
import { TouchableOpacity } from '@/components';
import Strings from '@/i18n';
import { useSelectorMemoized } from '@/hooks';
import { checkDpExist } from '@/utils';
import { MODE_ICON_MAP } from '@/constant';

import { useThrottleFn } from 'ahooks';
import styles from './index.module.less';
import PanelContainer from './PanelContainer';
import PanelMode from './PanelMode';
import PanelSwing from './PanelSwing';

type Props = {};

const Control: FC<Props> = () => {
  const dispatch = useDispatch();
  const dpMode = useSelector(selectDpStateByCode(modeCode));
  const dpSwitch = useSelector(selectDpStateByCode(switchCode));
  const dpSwitchVertical = useSelector(selectDpStateByCode(switchVerticalCode));
  const dpSwitchHorizontal = useSelector(selectDpStateByCode(switchHorizontalCode));
  const dpLight = useSelectorMemoized(selectDpStateByCode(lightCode));

  const handleLight = useThrottleFn(
    () => {
      dispatch(updateDp({ [lightCode]: !dpLight }));
      ty.vibrateShort({ type: 'light' });
    },
    { wait: 600, trailing: false }
  ).run;
  // 弹框类型 none - 不显示 mode - 模式 swing - 摆风
  const [panelType, setPanelType] = useState<'mode' | 'swing'>('mode');
  const [panelVisible, setPanelVisible] = useState(false);

  let panelHeight = '256rpx';

  if (panelType === 'mode') {
    panelHeight = '256rpx';
  } else if (panelType === 'swing') {
    if (checkDpExist(switchVerticalCode) && checkDpExist(switchHorizontalCode)) {
      if (checkDpExist(fanVerticalCode) && checkDpExist(fanHorizontalCode)) {
        panelHeight = '432rpx';
      } else {
        panelHeight = '360rpx';
      }
    } else {
      panelHeight = '232rpx';
    }
  }

  const isSwing = dpSwitchVertical || dpSwitchHorizontal;

  const handleSwitch = useThrottleFn(
    () => {
      setPanelVisible(false);
      dispatch(updateDp({ [switchCode]: !dpSwitch }));
      ty.vibrateShort({ type: 'light' });
    },
    { wait: 600, trailing: false }
  ).run;

  const handleSelectMode = () => {
    setPanelVisible(!(panelType === 'mode' && panelVisible));
    setPanelType('mode');
  };

  const handleSelectSwing = () => {
    // 按钮直接作为上下摆风开关使用
    if (
      checkDpExist(switchVerticalCode) &&
      !checkDpExist(fanVerticalCode) &&
      !checkDpExist(switchHorizontalCode)
    ) {
      dispatch(
        updateDp({
          [switchVerticalCode]: !dpSwitchVertical,
        })
      );
      ty.vibrateShort({ type: 'light' });

      return;
    }

    // 按钮直接作为左右摆风开关使用
    if (
      checkDpExist(switchHorizontalCode) &&
      !checkDpExist(fanHorizontalCode) &&
      !checkDpExist(switchVerticalCode)
    ) {
      dispatch(
        updateDp({
          [switchHorizontalCode]: !dpSwitchHorizontal,
        })
      );
      ty.vibrateShort({ type: 'light' });

      return;
    }

    setPanelVisible(!(panelType === 'swing' && panelVisible));
    setPanelType('swing');
  };

  return (
    <View className={styles.container}>
      <TouchableOpacity className={styles.item} activeOpacity={1} onClick={handleSwitch}>
        <View
          className={clsx(styles.controlButton, styles.controlButtonSwitch, dpSwitch && 'active')}
        >
          <Text className="iconfontpanel icon-panel-power" style={{ color: '#fff' }} />
        </View>
        <Text className={styles.itemText}>{Strings.getLang('dsc_switch')}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        className={clsx(styles.item, !dpSwitch && 'disabled')}
        activeOpacity={1}
        disabled={!dpSwitch}
        onClick={handleLight}
      >
        <View className={clsx(styles.controlButton, dpLight && 'active')}>
          <Text className="iconfontpanel icon-panel-light" />
        </View>
        <Text className={styles.itemText}>{Strings.getLang('dsc_light')}</Text>
      </TouchableOpacity>
      {checkDpExist(modeCode) && (
        <TouchableOpacity
          className={clsx(
            styles.item,
            !dpSwitch && 'disabled',
            panelVisible && panelType === 'mode' && 'anchor'
          )}
          activeOpacity={1}
          disabled={!dpSwitch}
          onClick={handleSelectMode}
        >
          <View className={styles.controlButton}>
            <Text className={clsx('iconfontpanel', MODE_ICON_MAP[dpMode])} />
          </View>
          <Text className={styles.itemText}>{Strings.getDpLang(modeCode, dpMode)}</Text>
        </TouchableOpacity>
      )}
      {(checkDpExist(switchVerticalCode) || checkDpExist(switchHorizontalCode)) && (
        <TouchableOpacity
          className={clsx(
            styles.item,
            !dpSwitch && 'disabled',
            panelVisible && panelType === 'swing' && 'anchor'
          )}
          activeOpacity={1}
          disabled={!dpSwitch}
          onClick={handleSelectSwing}
        >
          <View
            className={clsx(
              styles.controlButton,
              !(panelType === 'swing' && panelVisible) && isSwing && 'active'
            )}
          >
            <Text className={clsx('iconfontpanel', 'icon-panel-horizontal')} />
          </View>
          <Text className={styles.itemText}>{Strings.getLang('dsc_swing')}</Text>
        </TouchableOpacity>
      )}
      <PanelContainer style={{ height: panelHeight }} visible={panelVisible}>
        {panelType === 'mode' && <PanelMode />}
        {panelType === 'swing' && <PanelSwing />}
      </PanelContainer>
    </View>
  );
};

export default Control;
