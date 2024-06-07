import React, { FC, useReducer, createContext, Dispatch } from 'react';
import { router } from 'ray';
import { Text, View } from '@ray-js/components';
import { hooks } from '@ray-js/panel-sdk';
import {
  anionCode,
  childLockCode,
  countdownSetCode,
  fanBeepCode,
  fanCoolCode,
  fanDirectionCode,
  humidifierCode,
  oxygenCode,
  tempSetCode,
  tempUnitConvertCode,
} from '@/config/dpCodes';
import { Modal, SettingItem } from '@/components';
import { checkDpExist } from '@/utils';
import Strings from '@/i18n';

import styles from './index.module.less';
import ModalContent from './ModalContent';

const { usePanelConfig } = hooks;
export const ModalDispatch = createContext<Dispatch<ModalAction>>(null);

export type ModalType =
  | typeof countdownSetCode
  | typeof tempSetCode
  | typeof fanDirectionCode
  | typeof tempUnitConvertCode
  | 'none';

type ModalState = {
  visible: boolean;
  type: ModalType;
};

type ModalAction =
  | { type: 'HIDE_MODAL'; payload?: any }
  | { type: 'SHOW_MODAL'; payload: ModalType };

function modalReducer(state: ModalState, action: ModalAction): ModalState {
  const { type, payload } = action;
  switch (type) {
    case 'HIDE_MODAL':
      return {
        ...state,
        visible: false,
      };
    case 'SHOW_MODAL':
      return {
        ...state,
        visible: true,
        type: payload,
      };
    default:
      return state;
  }
}

const Features: FC = () => {
  const [{ visible, type }, dispatch] = useReducer(modalReducer, { visible: false, type: 'none' });
  const panelConfig = usePanelConfig();
  const timerSelected = panelConfig.bic?.timer.selected;
  // todo 定时根据timer选择来

  const settingDpCodes = (
    [
      fanDirectionCode,
      countdownSetCode,
      tempSetCode,
      anionCode,
      humidifierCode,
      oxygenCode,
      fanCoolCode,
      fanBeepCode,
      childLockCode,
      tempUnitConvertCode,
    ] as const
  ).filter(checkDpExist);

  const handleGoToTiming = () => {
    router.push('/timing');
  };

  return (
    <View className={styles.features}>
      <ModalDispatch.Provider value={dispatch}>
        <SettingItem
          title={Strings.getLang('dsc_timing')}
          wholeCanTouch
          onClick={handleGoToTiming}
          customFeature={
            <View style={{ display: 'flex', justifyContent: 'flex-end', width: '128rpx' }}>
              <Text
                className="iconfontpanel icon-panel-angleRight"
                style={{ fontSize: '32rpx', color: 'rgba(52, 54, 60, 0.3)' }}
              />
            </View>
          }
        />
        {settingDpCodes.map(dpCode => (
          <SettingItem key={dpCode} dpCode={dpCode} />
        ))}
      </ModalDispatch.Provider>

      <Modal
        visible={visible}
        position="bottom"
        overlayStyle={{ background: 'rgba(0, 0, 0, 0.4)' }}
        onClickOverlay={() => dispatch({ type: 'HIDE_MODAL' })}
      >
        {type !== 'none' && (
          <ModalContent type={type} onClose={() => dispatch({ type: 'HIDE_MODAL' })} />
        )}
      </Modal>
    </View>
  );
};

export default Features;
