import React, { FC } from 'react';
import { Text, View } from '@ray-js/components';
import { useSelector } from 'react-redux';
import { selectDpStateByCode } from '@/redux/modules/dpStateSlice';
import Strings from '@/i18n';
import { TouchableOpacity } from '@/components';
import { tempSetCode } from '@/config/dpCodes';

import styles from './index.module.less';
import { ModalType } from '../Features';
import Countdown from './Countdown';
import FanDirection from './FanDirection';
import TempSet from './TempSet';
import TempUnitConvert from './TempUnitConvert';

type Props = {
  type: Exclude<ModalType, 'none'>;
  onClose: () => void;
};

const ModalContent: FC<Props> = ({ type, onClose }) => {
  const dpValue = useSelector(selectDpStateByCode(type));

  // TempSet需要比较自定义的Header
  if (type === tempSetCode) {
    return <TempSet onClose={onClose} />;
  }

  return (
    <View className={styles.modalWrapper}>
      <View className={styles.modalHeader}>
        <View className={styles.modalTitleWrapper}>
          <Text className={styles.modalTitle}>{Strings.getDpLang(type)}</Text>
          <Text className={styles.modalSubTitle}>
            ·{Strings.getDpLang(type, dpValue as string)}
          </Text>
        </View>
        <TouchableOpacity className={styles.modalCloseWrapper} onClick={onClose}>
          <Text className="iconfontpanel icon-panel-close" />
        </TouchableOpacity>
      </View>
      <View className={styles.modalContent}>
        {type === 'fan_direction' && <FanDirection />}
        {type === 'countdown_set' && <Countdown />}
        {type === 'temp_unit_convert' && <TempUnitConvert />}
      </View>
    </View>
  );
};

export default ModalContent;
