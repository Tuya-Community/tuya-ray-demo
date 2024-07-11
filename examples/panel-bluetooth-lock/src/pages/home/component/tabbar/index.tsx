import React from 'react';
import { View, ScrollView, router, Image, Icon, Text } from '@ray-js/ray';
import {
  usePanelStore,
  useDpPermission,
  useDeviceOnline,
  useOpenPanel,
  useUserPermission,
} from '@/hooks';
import { Api } from '@/api';
import { dpCodes } from '@/config';
import Strings from '@/i18n';
import Res from '@/res';
import { getScenePermission } from '@/utils';
import styles from './index.module.less';
import { connectBLEDevice } from '@/utils/ble';

const {
  unlockFingerprint,
  unlockPassword,
  unlockCard,
  unlockKey,
  unlockRemote,
  alarmLock,
} = dpCodes;

interface IProps {
  cameraRotate: Rotate;
}
const HomeBottomView: React.FC<IProps> = ({ cameraRotate = '0' }) => {
  const { dpState, devInfo, themeColor, powerCode, userRegion, panelInfo } = usePanelStore() as any;
  const deviceOnline = useDeviceOnline();
  const { openRNPanel } = useOpenPanel();
  const { isOwnerOrAdmin } = useUserPermission();
  const { dpInitiativeMessage } = useDpPermission();

  const { schema } = devInfo;
  const { dormant_switch } = dpState;

  const bottomList = () => {
    if (!schema) return [];
    const dpIds = [unlockFingerprint, unlockPassword, unlockCard, unlockKey, unlockRemote]
      .filter(item => !!schema[item])
      .map(item => schema[item].id);

    const data = [
      {
        key: dpInitiativeMessage && 'video',
        text: Strings.getLang('video'),
        background: Res.video,
        disabled: dormant_switch || !deviceOnline,
        onPress: () => {
          openRNPanel('000001czwh', {
            isImmediate: true,
            openDpLists: dpIds.join(),
            dpCode: alarmLock,
            themeColor,
            angleRotation: cameraRotate,
          });
        },
      },
      {
        key: isOwnerOrAdmin && 'family',
        text: Strings.getLang('family'),
        background: Res.sceneImage,
        onPress: () => {
          router.push('/family');
          // openRNPanel('000001hp3a', {
          //   timeoutTime: 30,
          //   themeColor,
          //   protocol: 'ble',
          // });
        },
      },
      {
        key: isOwnerOrAdmin && 'temp',
        text: Strings.getLang('temp'),
        background: Res.unlockWayImage,
        onPress: () => {
          router.push('/temp');
        },
      },
      {
        key: isOwnerOrAdmin && 'setting',
        text: Strings.getLang('setting'),
        background: Res.settingImage,
        onPress: () =>{
          router.push('/setting');
        },
      },
      {
        key: isOwnerOrAdmin && getScenePermission(powerCode, userRegion) && 'scene',
        text: Strings.getLang('scene'),
        background: Res.sceneImage,
        onPress: () => {
          openRNPanel('000000aisc', {
            openDpLists: dpIds.join(),
            dpCode: alarmLock,
            themeColor,
            withConfig: JSON.stringify({
              powerCode: panelInfo?.originalPowerCode,
            }),
          });
        },
      },
    ].filter(item => !!item.key);

    return data;
  };

  const listClick = item => {
    if (item.disabled) return;
    item.onPress();
  };

  const renderBottomList = (item: any) => {
    return (
      <View
        className={styles.bottomItem}
        style={{ opacity: item.disabled ? 0.3 : 1 }}
        key={item.key}
        onClick={() => listClick(item)}
      >
        <Image mode="aspectFit" src={item.background} className={styles.listIcon} />
        <View className={styles.content}>
          <Text className={styles.listText}>{item.text}</Text>
          <Icon type="icon-right" size={18} color="rgba(0,0,0,0.3)" />
        </View>
      </View>
    );
  };

  return (
    <ScrollView refresherTriggered={false} className={styles.scrollView} scrollY>
      {bottomList().map(item => renderBottomList(item))}
    </ScrollView>
  );
};

export default HomeBottomView;
