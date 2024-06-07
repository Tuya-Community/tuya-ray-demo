import React, { FC, useMemo } from 'react';
import clsx from 'clsx';
import { vibrateShort } from '@ray-js/ray';
import { Text, View } from '@ray-js/components';
import { useDispatch, useSelector } from 'react-redux';
import Strings from '@/i18n';
import {
  fanHorizontalCode,
  fanVerticalCode,
  switchHorizontalCode,
  switchVerticalCode,
} from '@/config/dpCodes';
import { TouchableOpacity } from '@/components';
import { selectDpStateByCode, updateDp } from '@/redux/modules/dpStateSlice';
import { checkDpExist, getDpSchema } from '@/utils';

import styles from './index.module.less';

const PanelSwing: FC = () => {
  const dispatch = useDispatch();
  const dpSwitchVertical = useSelector(selectDpStateByCode(switchVerticalCode));
  const dpSwitchHorizontal = useSelector(selectDpStateByCode(switchHorizontalCode));
  const dpFanVertical = useSelector(selectDpStateByCode(fanVerticalCode));
  const dpFanHorizontal = useSelector(selectDpStateByCode(fanHorizontalCode));

  const handleSwitch = (dpCode, dpValue) => {
    dispatch(updateDp({ [dpCode]: !dpValue }));
    vibrateShort({ type: 'light' });
  };

  const handleSwingAngle = (dpCode, subDpCode, dpValue) => {
    dispatch(updateDp({ [subDpCode]: dpValue, [dpCode]: true }, { checkRepeat: true }));
    vibrateShort({ type: 'light' });
  };

  const swings = useMemo(
    () =>
      (
        [
          {
            dpCode: switchVerticalCode,
            dpValue: dpSwitchVertical,
            subDpCode: fanVerticalCode,
            subDpExist: checkDpExist(fanVerticalCode),
            subDpValue: dpFanVertical,
            range: getDpSchema(fanVerticalCode)?.range ?? [],
            icon: 'icon-panel-vertical',
            text: Strings.getLang('dsc_swing_vertical'),
          },
          {
            dpCode: switchHorizontalCode,
            dpValue: dpSwitchHorizontal,
            subDpCode: fanHorizontalCode,
            subDpExist: checkDpExist(fanHorizontalCode),
            subDpValue: dpFanHorizontal,
            range: getDpSchema(fanHorizontalCode)?.range ?? [],
            icon: 'icon-panel-horizontal',
            text: Strings.getLang('dsc_swing_horizontal'),
          },
        ] as const
      ).filter(({ dpCode }) => checkDpExist(dpCode)),
    [dpSwitchVertical, dpSwitchHorizontal, dpFanVertical, dpFanHorizontal]
  );

  return (
    <View className={styles.panelContentWrapper}>
      <View className={styles.swingWrapper}>
        {swings.map(({ dpCode, dpValue, subDpCode, subDpValue, subDpExist, range, text, icon }) => {
          return (
            <View key={dpCode} className={styles.swingItem}>
              <View className={styles.swingRow}>
                <TouchableOpacity
                  className={clsx(
                    styles.iconButtonWrapper,
                    !subDpExist && 'full',
                    dpValue && 'active'
                  )}
                  activeOpacity={1}
                  onClick={() => handleSwitch(dpCode, dpValue)}
                >
                  <Text className={clsx('iconfontpanel', icon)} />
                  {!subDpExist && <Text className={styles.iconButtonText}>{text}</Text>}
                </TouchableOpacity>
                {subDpExist && (
                  <View className={styles.swingTool}>
                    {range.map(swingAngle => {
                      const isActive = swingAngle === subDpValue;

                      return (
                        <TouchableOpacity
                          key={swingAngle}
                          activeOpacity={0.8}
                          onClick={() => handleSwingAngle(dpCode, subDpCode, swingAngle)}
                        >
                          <Text
                            className={clsx(styles.swingToolText, dpValue && isActive && 'active')}
                          >
                            {swingAngle}
                          </Text>
                        </TouchableOpacity>
                      );
                    })}
                  </View>
                )}
              </View>
              {subDpExist && <Text className={styles.swingText}>{text}</Text>}
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default PanelSwing;
