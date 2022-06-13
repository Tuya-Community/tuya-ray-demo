import { ScrollView, Text } from '@ray-js/components';
import * as services from '@ray-js/panel-service';
// import { router, usePageEvent } from 'ray';
import React, { useEffect, useState } from 'react';

import { selectDevInfoAtom } from '@/atoms';
import { DpItem } from '@/components/dpItem';
import { getArray } from '@/utils/array';

import { useAtomValue } from 'jotai';
import styles from './index.module.less';

export function Home() {
  const devInfo = useAtomValue(selectDevInfoAtom);

  const items = getArray(devInfo?.schema);

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
    services.common.core.getAssetHostname().then(setHostname);
  }, []);

  return (
    <ScrollView className={styles.container}>
      {items.map(item => (
        <DpItem hostname={hostname} item={item} key={item.code} />
      ))}
      {items?.length === 0 && <Text>暂无功能点</Text>}
    </ScrollView>
  );
}

export default Home;
