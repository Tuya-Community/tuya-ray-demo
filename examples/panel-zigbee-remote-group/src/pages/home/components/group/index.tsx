import React from 'react';
import clsx from 'clsx';
import { Text, View, Image, router } from '@ray-js/ray';
import { useSelector } from 'react-redux';
import Strings from '@/i18n';
import { ColorImage, Empty } from '@/components';
import { selectIsInitialized, selectCoverList } from '@/redux/modules/uiStateSlice';
import { mapObject2QueryString } from '@/utils/mapObject2QueryString';
import { selectGroupIcons } from '@/redux/modules/groupSlice';
import { GroupDevices } from '@/api/getGroupDevices';
import { BindType } from '@/constant';
import styles from './index.module.less';

const groupTypes = [BindType.GroupLight, BindType.GroupCurtain];

interface Props {
  data: Array<{
    btnId: number;
    bindType: BindType;
    bindGroupInfo: {
      code: string;
      order: number;
      localId: string;
      categoryCode: string;
    };
    bindGroupDevices: GroupDevices;
  }>;
}

export const Group: React.FC<Props> = ({ data }) => {
  const iconList = useSelector(selectCoverList);
  const groupIcons = useSelector(selectGroupIcons);
  const isInitialized = useSelector(selectIsInitialized);

  const handleNavToGroup = React.useCallback(
    (d: (typeof data)[number]) => {
      return () => {
        const { bindType, bindGroupInfo } = d;
        if (!bindType) {
          router.push(`/group-setting?btnId=${d.btnId}`);
          return;
        }
        const path = mapObject2QueryString(
          bindType === BindType.GroupLight ? '/group-light-edit' : '/group-curtain-edit',
          {
            groupName: Strings.getLang('groupNameDefault'),
            groupIcon: iconList[groupIcons.find(v => v.code === bindGroupInfo.code)?.value] ?? '',
            code: bindGroupInfo.code,
            localId: bindGroupInfo.localId,
            categoryCode: bindGroupInfo.categoryCode,
          }
        );
        router.push(path);
      };
    },
    [iconList, groupIcons]
  );

  return (
    <View>
      <View className={styles.title}>{Strings.getLang('group')}</View>
      {data.length === 0 ? (
        <Empty title={Strings.getLang('groupEmptyTip')} />
      ) : (
        <View className={styles.list}>
          {data.map((d, idx) => {
            const { bindType, bindGroupInfo } = d;
            const isBind = !!bindType;
            let itemText = Strings.getLang('defaultName');
            let itemIcon: string;
            if (groupTypes.includes(bindType)) {
              itemText = Strings.getLang('groupNameDefault');
              itemIcon = isInitialized
                ? iconList[groupIcons.find(v => v.code === bindGroupInfo.code)?.value] ?? ''
                : '';
            }
            const style = {
              flex: data.length === 1 ? '0 0 100%' : '0 0 calc(50% - 6px)',
              height: data.length > 2 ? '68px' : '110px',
            };
            return (
              <View key={idx} style={style} className={styles.item} onClick={handleNavToGroup(d)}>
                <View className={clsx(!isBind && styles.invisible)}>
                  <ColorImage
                    width="28px"
                    height="28px"
                    color="rgba(25, 97, 206, 0.9)"
                    src={itemIcon}
                  />
                </View>
                <View className={styles.content}>
                  <View className={styles.textWrapper}>
                    <Text className={styles.textNo}>{idx + 1}</Text>
                    <Text className={styles.textScene}>{itemText}</Text>
                  </View>
                </View>
                <Image className={styles.imageIcon} src="/images/icon_triangle.png" />
              </View>
            );
          })}
        </View>
      )}
    </View>
  );
};
