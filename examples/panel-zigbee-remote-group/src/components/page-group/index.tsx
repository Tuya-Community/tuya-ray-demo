import React from 'react';
import clsx from 'clsx';
import { useBoolean, useDebounceFn } from 'ahooks';
import {
  Image,
  Text,
  View,
  navigateBack,
  openZigbeeLocalGroup,
  showToast,
  useAppEvent,
  useQuery,
} from '@ray-js/ray';
import { useSelector } from 'react-redux';
import { useDevice } from '@ray-js/panel-sdk';
import { TopBar, DialogSelectIcon, ColorImage, FixedBottom } from '@/components';
import Strings from '@/i18n';
import { useHideMenuButton } from '@/hooks/useHideMenuButton';
import { ReduxState, useAppDispatch } from '@/redux';
import { selectCoverList, selectIsAdmin } from '@/redux/modules/uiStateSlice';
import {
  selectBindGroupDevices,
  updateGroupDevicesAsync,
  updateGroupIconsAsync,
} from '@/redux/modules/groupSlice';
import styles from './index.module.less';
import { GroupEditQuery, Props } from './index.type';
import { TopBarHeight } from '../top-bar';

export const PageGroup: React.FC<Props> = props => {
  useHideMenuButton();
  const { code, localId, categoryCode, groupIcon }: GroupEditQuery = useQuery();
  const dispatch = useAppDispatch();
  const devId = useDevice(d => d.devInfo.devId);
  const isAdmin = useSelector(selectIsAdmin);
  const iconList = useSelector(selectCoverList);
  const bindGroupDevices = useSelector((state: ReduxState) =>
    selectBindGroupDevices(state, categoryCode)
  );
  const [fixedBottomHeight, setFixedBottomHeight] = React.useState('180rpx'); // 默认为 iphone 6 基准
  const [curGroupIcon, setCurSelectIcon] = React.useState(groupIcon || iconList[0]);
  const [show, { setTrue, setFalse }] = useBoolean();
  const initialParam = React.useRef({ bindGroupDevices }); // 用于重置
  const isChanged =
    groupIcon !== curGroupIcon ||
    initialParam.current.bindGroupDevices?.length !== bindGroupDevices?.length;
  const isValid = !!curGroupIcon && bindGroupDevices.length > 0;
  const isSaveDisabled = !isValid || !isChanged; // 只有在数据有效且数据有变化时才可保存

  useAppEvent('onShow', () => {
    dispatch(updateGroupDevicesAsync(categoryCode));
  });

  const handleNavToZigbeePair = React.useCallback(() => {
    openZigbeeLocalGroup({ deviceId: devId, localId, categoryCode, codes: props.codes });
  }, []);

  const handleSelect = React.useCallback(data => {
    setFalse();
    setCurSelectIcon(data);
  }, []);

  const { run: handleSave } = useDebounceFn(
    () => {
      const curGroupIconIdx = iconList.findIndex(v => v === curGroupIcon);
      dispatch(updateGroupIconsAsync({ code, value: `${curGroupIconIdx}` })).then(() => {
        showToast({
          title: Strings.getLang('groupEditSuccessTip'),
          icon: 'success',
          success: () => {
            navigateBack({ delta: 2 }); // 直接跳转回首页
          },
        });
      });
    },
    { wait: 500 }
  );

  return (
    <View className={styles.view} style={{ background: props.background }}>
      <TopBar title={props.title} position="absolute" theme={props.theme} isSubPage />
      <View
        className={styles.gradient}
        style={{ top: `${TopBarHeight + 52}px`, background: props.background }}
      />
      <View
        style={{
          backgroundImage: props.backgroundImage,
          marginBottom: isAdmin ? fixedBottomHeight : 0,
          paddingBottom: !isAdmin ? fixedBottomHeight : 0,
        }}
        className={styles.content}
      >
        <View
          style={{ marginTop: `${TopBarHeight + 104}px` }}
          className={clsx(styles.icon, !isAdmin && styles.disabled)}
          onClick={setTrue}
        >
          <ColorImage width="84rpx" height="84rpx" src={curGroupIcon} color="#1961CE" />
        </View>

        <View className={styles.item} style={{ marginTop: '8px', paddingBottom: '10rpx' }}>
          <View
            className={clsx(styles.itemRow, !isAdmin && styles.disabled)}
            onClick={handleNavToZigbeePair}
          >
            <Text>{Strings.getLang('groupSelect')}</Text>
            <Image className={styles.imageIcon} src="/images/icon_arrow.png" />
          </View>
          <View className={styles.deviceList}>
            {bindGroupDevices
              .filter(item => item.devId !== devId)
              .map(item => {
                return (
                  <View key={item.devId} className={styles.deviceItem}>
                    <Image src={item.iconUrl} />
                    <Text>{item.devName}</Text>
                  </View>
                );
              })}
          </View>
        </View>
      </View>
      <FixedBottom contentHeight="100rpx" getFixedBottomHeight={setFixedBottomHeight}>
        {isAdmin && (
          <View
            className={clsx(styles.button, isSaveDisabled && styles.button__disabled)}
            onClick={handleSave}
          >
            {Strings.getLang('save')}
          </View>
        )}
      </FixedBottom>
      <DialogSelectIcon
        show={show}
        currentSelectIcon={curGroupIcon}
        title={Strings.getLang('groupIcon')}
        onSelect={handleSelect}
        onClose={setFalse}
      />
    </View>
  );
};
