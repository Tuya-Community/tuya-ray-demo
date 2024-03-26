import React, { FC, ReactNode, useContext, useMemo } from 'react';
import { Text } from '@ray-js/components';
import { DpStateKey } from '@/redux/modules/dpStateSlice';
import Strings from '@/i18n';
import { getDpSchema } from '@/utils';
import { ModalDispatch } from '@/pages/Settings/Features';

import styles from './index.module.less';
import Bool from './Bool';
import Value from './Value';
import Enum from './Enum';
import TouchableOpacity from '../TouchableOpacity';

type Props = {
  dpCode?: DpStateKey;
  title?: string;
  customFeature?: ReactNode;
  wholeCanTouch?: boolean;
  onClick?: () => void;
};

const SettingItem: FC<Props> = ({
  dpCode,
  wholeCanTouch = false,
  title,
  customFeature,
  onClick,
}) => {
  const dispatch = useContext(ModalDispatch);
  const { type } = useMemo(() => getDpSchema(dpCode), []);

  const wholeCanTouchLocal = wholeCanTouch || ['enum', 'value'].includes(type);

  const handleFeature = () => {
    if (wholeCanTouchLocal) {
      dispatch({ type: 'SHOW_MODAL', payload: dpCode as any });
    }
  };

  return (
    <TouchableOpacity
      activeOpacity={wholeCanTouchLocal ? 0.4 : 1}
      className={styles.container}
      onClick={onClick ?? handleFeature}
    >
      <Text className={styles.title}>{title ?? Strings.getDpLang(dpCode)}</Text>
      {customFeature}
      {type === 'bool' && <Bool dpCode={dpCode} />}
      {type === 'value' && <Value dpCode={dpCode} />}
      {type === 'enum' && <Enum dpCode={dpCode} />}
    </TouchableOpacity>
  );
};

export default SettingItem;
