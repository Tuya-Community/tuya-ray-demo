import React, { Fragment } from 'react';
import { View } from '@ray-js/ray';
import { Card } from '@/components/card';
import { Title } from './components/title';
import Strings from '@/i18n';
import { useConfig } from './useConfig';
import { Empty } from '@ray-js/smart-ui';
import Layout from '@/components/layout';
import { PopupView } from '@/components/popup';
import Styles from './index.module.less';
export function Setting() {
  const config = useConfig();

  return (
    <Layout title={Strings.getLang("setting")} showBack={true}>
      <View className={Styles['wrapper']}>
        {!config || !config.length && <Empty description={Strings.getLang("noData")}></Empty>}
        {config && config.map(((item, index) => (
          <Fragment key={index}>
            <Title title={item.title} style={{ marginTop: index > 0 ? '24rpx' : '' }}></Title>
            {
              item.content.map((content, index) => {
                return (
                  <Card style={{ marginTop: index > 0 ? '24rpx' : '' }} key={index}>
                    {
                      content.map(({ component, ...props }, index) => {
                        return (
                          <Fragment key={props.dpCode}>
                            {React.createElement(component, { ...props })}
                            {index !== content.length - 1 && <View className='h-[1px] bg-black opacity-[0.05]'></View>}
                          </Fragment>
                        );
                      })
                    }
                  </Card>
                )
              })
            }
          </Fragment>
        )))}
      </View>
      <PopupView></PopupView>
    </Layout>
  );
}

export default Setting;
