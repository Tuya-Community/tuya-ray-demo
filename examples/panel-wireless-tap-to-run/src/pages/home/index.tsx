import React from 'react';
import { Image, ScrollView, View } from '@ray-js/ray';
import { useCreation } from 'ahooks';
import { useSelector } from 'react-redux';
import { DpSchema, useDevice } from '@ray-js/panel-sdk';
import { TopBar } from '@/components';
import { selectBindTapToRunRules } from '@/redux/modules/sceneSlice';
import { getSceneDps } from '@/utils/getSceneDps';
import { Scene } from './components/scene';
import styles from './index.module.less';

export function Home() {
  const schema = useDevice(d => d.devInfo.schema);
  const dpSchema = useDevice(d => d.dpSchema);
  const devInfo = useDevice(d => d.devInfo);
  const bindTapToRunRules = useSelector(selectBindTapToRunRules);

  const sceneDpList = useCreation(() => {
    return getSceneDps(schema).map(btnId => {
      let bindDpId: number;
      let bindDpValue: string;
      const bindScene = bindTapToRunRules?.find(b => {
        const switchSceneSchema = dpSchema[`switch_type_${btnId}`] as DpSchema;
        bindDpId = +b?.associativeEntityId.split('#')?.[0]; // 已经绑定一键执行的功能点
        bindDpValue = b?.associativeEntityId.split('#')?.[1]; // 已经绑定一键执行的功能点值
        if (switchSceneSchema?.id === bindDpId) {
          return true;
        }
        return false;
      });
      const bindRule = bindScene?.associativeEntityValueList?.[0];
      return {
        btnId,
        bindDpId,
        bindDpValue,
        bindScene,
        bindRule,
      };
    });
  }, [schema, bindTapToRunRules]);

  return (
    <View className={styles.view}>
      <TopBar />
      <View className={styles.content}>
        <View className={styles.main}>
          <View className={styles.logo}>
            <Image src={devInfo.iconUrl} />
          </View>
        </View>
        <ScrollView
          style={{ maxHeight: '360px', height: 'auto' }}
          className={styles.card}
          refresherTriggered
          scrollY
        >
          <Scene sceneDpList={sceneDpList} />
        </ScrollView>
      </View>
    </View>
  );
}

export default Home;
