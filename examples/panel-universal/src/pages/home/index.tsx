import { ScrollView, Text, getAssetHostname } from '@ray-js/ray';
// import { router, usePageEvent } from 'ray';
import { useDpSchema } from '@ray-js/panel-sdk';
import React, { useEffect, useState } from 'react';
import { DpItem } from '@/components/dpItem';
import styles from './index.module.less';

export function Home() {
  const schema = useDpSchema();
  const items = Object.values(schema);

  // usePageEvent('onShow', () => {
  //   console.log('=== home onShow');
  // });

  // usePageEvent('onHide', () => {
  //   console.log('=== home onHide');
  // });

  // usePageEvent('onPageScroll', event => {
  //   console.log('=== onPageScroll', event);
  // });

  // usePageEvent('onReachBottom', () => {
  //   console.log('=== onReachBottom');
  // });

  // usePageEvent('onResize', event => {
  //   console.log('=== onResize', event);
  // });

  const [hostname, setHostname] = useState<string>();

  useEffect(() => {
    getAssetHostname().then(setHostname);
  }, []);

  return (
    <ScrollView refresherTriggered={false} className={styles.container}>
      {items.map(item => (
        <DpItem hostname={hostname} item={item} key={item.code} />
      ))}
      {items?.length === 0 && <Text>暂无功能点</Text>}
    </ScrollView>
  );
}

export default Home;
