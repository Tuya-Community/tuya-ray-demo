import React from 'react';
import { Image, ScrollView, View } from '@ray-js/ray';
import { TopBar } from '@/components';
import { useCreation } from 'ahooks';
import { useSelector } from 'react-redux';
import { useDevice } from '@ray-js/panel-sdk';
import { selectGroupDevices, selectLocalIds } from '@/redux/modules/groupSlice';
import { GroupDevices } from '@/api/getGroupDevices';
import { BindType } from '@/constant';
import { getSwitchDps } from '@/utils/getSwitchDps';
import { Group } from './components/group';
import styles from './index.module.less';

export function Home() {
  const schema = useDevice(d => d.devInfo.schema);
  const localIds = useSelector(selectLocalIds);
  const groupDevices = useSelector(selectGroupDevices);

  const dataSource = useCreation(() => {
    return getSwitchDps(schema).map(btnId => {
      let bindType: BindType;
      const bindGroupInfo = localIds.find(localInfo => localInfo.code === `switch_${btnId}`);
      let bindGroupDevices: GroupDevices;
      const categoryCode = bindGroupInfo?.categoryCode;
      if (categoryCode && groupDevices[categoryCode]) {
        bindGroupDevices = groupDevices[categoryCode]?.filter(d => d.checked);
        if (bindGroupDevices?.[0]?.category === 'lamp') {
          bindType = BindType.GroupLight;
        } else if (bindGroupDevices?.[0]?.category === 'curtain') {
          bindType = BindType.GroupCurtain;
        }
      }
      return {
        btnId,
        bindType,
        bindGroupInfo,
        bindGroupDevices,
      };
    });
  }, [schema, groupDevices]);

  return (
    <View className={styles.view}>
      <TopBar />
      <View className={styles.content}>
        <View className={styles.main}>
          <View className={styles.logo}>
            <Image src="/images/logo.png" />
          </View>
        </View>
        <ScrollView
          style={{ maxHeight: '360px', height: 'auto' }}
          className={styles.card}
          refresherTriggered
          scrollY
        >
          <Group data={dataSource} />
        </ScrollView>
      </View>
    </View>
  );
}

export default Home;
