import React, { FC } from 'react';
import clsx from 'clsx';
import { vibrateShort } from '@ray-js/ray';
import { useDispatch, useSelector } from 'react-redux';
import { Text } from '@ray-js/components';
import { TouchableOpacity } from '@/components';
import { selectDpStateByCode, updateDp } from '@/redux/modules/dpStateSlice';
import { fanDirectionCode } from '@/config/dpCodes';
import Strings from '@/i18n';
import { FAN_DIRECTION_MAP } from '@/constant';

import styles from './index.module.less';

const FanDirection: FC = () => {
  const dispatch = useDispatch();
  const dpFanDirection = useSelector(selectDpStateByCode(fanDirectionCode));

  const handleFanDirection = (fanDirection: 'forward' | 'reverse') => {
    if (dpFanDirection !== fanDirection) {
      dispatch(updateDp({ [fanDirectionCode]: fanDirection }));
      vibrateShort({ type: 'light' });
    }
  };

  return (
    <>
      {(['forward', 'reverse'] as const).map(code => {
        return (
          <TouchableOpacity
            key={code}
            className={clsx(styles.buttonLarge, dpFanDirection === code && 'active')}
            activeOpacity={1}
            onClick={() => handleFanDirection(code)}
          >
            <Text className={clsx('iconfontpanel', FAN_DIRECTION_MAP[code])} />
            <Text className={styles.buttonText}>{Strings.getDpLang(fanDirectionCode, code)}</Text>
          </TouchableOpacity>
        );
      })}
    </>
  );
};

export default FanDirection;
