import React from 'react';
import { View, router, useQuery } from '@ray-js/ray';
import { TopBar } from '@/components';
import Strings from '@/i18n';
import { useHideMenuButton } from '@/hooks/useHideMenuButton';
import { useCreation } from 'ahooks';
import { useDevice } from '@ray-js/panel-sdk';
import { mapObject2QueryString } from '@/utils/mapObject2QueryString';
import { useSelector } from 'react-redux';
import { selectLocalIds } from '@/redux/modules/groupSlice';
import { selectCoverList } from '@/redux/modules/uiStateSlice';
import { SceneItem } from './components/scene-item';
import styles from './index.module.less';
import { GroupSettingQuery } from './index.type';

export function GroupSetting() {
  useHideMenuButton();
  const query: GroupSettingQuery = useQuery();
  const dpSchema = useDevice(d => d.dpSchema);
  const localIds = useSelector(selectLocalIds);
  const iconList = useSelector(selectCoverList);
  const dataSource = useCreation(() => {
    const groupInfo = localIds.find(d => d.code.slice(-1) === query.btnId);

    const handleNavToGroup = (location: string) => {
      const defaultParams = { groupIcon: iconList[0] };
      const path = mapObject2QueryString(location, {
        ...defaultParams,
        code: `switch_${query.btnId}`,
        localId: groupInfo?.localId,
        categoryCode: groupInfo?.categoryCode,
      });
      router.push(path);
    };

    return [
      {
        title: Strings.getLang('groupLight'),
        subTitle: Strings.getLang('groupLightDesc'),
        img: '/images/scene_setting_light.png',
        valid: !!groupInfo,
        onClick: () => handleNavToGroup('/group-light-edit'),
      },
      {
        title: Strings.getLang('groupCurtain'),
        subTitle: Strings.getLang('groupCurtainDesc'),
        img: '/images/scene_setting_curtain.png',
        valid: !!groupInfo,
        onClick: () => handleNavToGroup('/group-curtain-edit'),
      },
    ].filter(d => d.valid);
  }, [query, dpSchema, iconList]);

  return (
    <View className={styles.view}>
      <TopBar title={Strings.getLang('groupSetting')} isSubPage />
      <View className={styles.content}>
        {dataSource.map((item, index) => {
          return <SceneItem key={index} {...item} />;
        })}
      </View>
    </View>
  );
}

export default GroupSetting;
