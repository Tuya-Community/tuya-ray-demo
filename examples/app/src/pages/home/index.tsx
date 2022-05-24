// import { location, usePageEvent } from 'ray';
import React, { Fragment } from 'react';

import { getApp } from '@ray-js/api';

import { COMPONENTS } from '@/basic/index.config';
import Header from '@/common/Header';
import NavPanel from '@/common/NavPanel';

export default function Home() {
  React.useEffect(() => {
    // 获取全局唯一 App 实例
    console.info('home did mount', getApp());
  }, []);

  // usePageEvent('onShow', () => {
  //   console.info('home onShow', location, getApp());
  // });

  // usePageEvent('onHide', () => {
  //   console.info('home onHide');
  // });

  // usePageEvent('onPageScroll', (event) => {
  //   console.info('onPageScroll', event);
  // });

  // usePageEvent('onReachBottom', () => {
  //   console.info('onReachBottom');
  // });

  // usePageEvent('onResize', (event) => {
  //   console.info('onResize', event);
  // });

  return (
    <Fragment>
      <Header title='Ray' description={'涂鸦跨端研发体系'} />
      {COMPONENTS.map(({ title, list }) => {
        return <NavPanel sort={false} key={title} title={title} list={list} />;
      })}
    </Fragment>
  );
}
