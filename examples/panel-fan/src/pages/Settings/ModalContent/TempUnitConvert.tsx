import React, { FC } from 'react';
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import { Text } from '@ray-js/components';
import { TouchableOpacity } from '@/components';
import { selectDpStateByCode, updateDp } from '@/redux/modules/dpStateSlice';
import { tempUnitConvertCode } from '@/config/dpCodes';
import Strings from '@/i18n';

import styles from './index.module.less';

const TempUnitConvert: FC = () => {
  const dispatch = useDispatch();
  const dpTempUnitConvert = useSelector(selectDpStateByCode(tempUnitConvertCode));

  const handleTempUnitConvert = (tempUnitConvert: 'c' | 'f') => {
    if (dpTempUnitConvert !== tempUnitConvert) {
      dispatch(updateDp({ [tempUnitConvertCode]: tempUnitConvert }));
      ty.vibrateShort({ type: 'light' });
    }
  };

  return (
    <>
      {(['c', 'f'] as const).map(code => {
        return (
          <TouchableOpacity
            key={code}
            className={clsx(styles.buttonLarge, dpTempUnitConvert === code && 'active')}
            activeOpacity={1}
            onClick={() => handleTempUnitConvert(code)}
          >
            <Text className={clsx(styles.buttonText, 'large')}>
              {Strings.getDpLang(tempUnitConvertCode, code)}
            </Text>
          </TouchableOpacity>
        );
      })}
    </>
  );
};

export default TempUnitConvert;
