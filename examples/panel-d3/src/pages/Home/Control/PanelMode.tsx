import React, { FC, useMemo, useState } from 'react';
import { vibrateShort } from '@ray-js/ray';
import _ from 'lodash';
import clsx from 'clsx';
import { Swiper, Text, View } from '@ray-js/components';
import { getDpSchema } from '@/utils';
import { modeCode } from '@/config/dpCodes';
import Strings from '@/i18n';
import { MODE_ICON_MAP } from '@/constant';
import { useDispatch, useSelector } from 'react-redux';
import { selectDpStateByCode, updateDp } from '@/redux/modules/dpStateSlice';
import { TouchableOpacity } from '@/components';

import styles from './index.module.less';

type PropsModeGroup = {
  currentMode: string;
  modes: string[];
};

const ModeGroup: FC<PropsModeGroup> = ({ currentMode, modes }) => {
  const dispatch = useDispatch();

  const handleSelectMode = mode => {
    dispatch(updateDp({ [modeCode]: mode }));
    vibrateShort({ type: 'light' });
  };

  return (
    <View className={styles.modeGroup}>
      {modes.map(mode => {
        const isActive = mode === currentMode;

        return (
          <TouchableOpacity
            key={mode}
            className={styles.modeItem}
            activeOpacity={1}
            onClick={() => handleSelectMode(mode)}
          >
            <View className={clsx(styles.modeItemIconWrapper, isActive && 'active')}>
              <Text className={clsx('iconfontpanel', MODE_ICON_MAP[mode])} />
            </View>
            <Text className={styles.modeItemText}>{Strings.getDpLang(modeCode, mode)}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const PanelMode: FC = () => {
  const dpMode = useSelector(selectDpStateByCode(modeCode));

  const modeGroups = useMemo(() => {
    const { range = [] } = getDpSchema(modeCode);
    return _.chunk(range, 4);
  }, []);

  const [current, setCurrent] = useState(() =>
    modeGroups.findIndex(modes => modes.includes(dpMode))
  );

  return (
    <View className={styles.panelContentWrapper}>
      <Swiper
        className={styles.modeSwiper}
        dots={false}
        current={current}
        dataSource={modeGroups}
        renderItem={modes => {
          return <ModeGroup currentMode={dpMode} modes={modes} />;
        }}
        onChange={(event: any) => {
          setCurrent(event.detail.current);
        }}
      />
      <View className={styles.dotsWrapper}>
        {modeGroups.map((useless, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <View key={index} className={clsx(styles.dot, index === current && 'active')} />
        ))}
      </View>
    </View>
  );
};

export default PanelMode;
