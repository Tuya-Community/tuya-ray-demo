import React, { useEffect } from 'react';
import { setNavigationBarTitle, setNavigationBarColor, View, Image } from '@ray-js/ray';
import { useDevice, useProps } from '@ray-js/sdm-react';
import { ControlBar, TabBar } from '@/components';
import dpCodes from '@/config/dpCodes';
import clsx from 'clsx';
import Res from '@/res';
import { dpUtils } from '@/utils';
import SupportUtils from '@/utils/SupportUtils';
import { useSelector, store, actions } from '@/redux';
import { WORKMODE } from '@/config';
import { hooks } from '@ray-js/panel-sdk';
import styles from './index.module.less';
import Colour from '../colour';
import White from '../white';

const { powerCode, workModeCode } = dpCodes;
const { useDpState } = hooks;
const { dispatch } = store;

export function Home() {
  const prop = useProps();
  const deviceName = useDevice(d => d.devInfo.name);

  const { currentTab, power, workMode } = useSelector(({ uiState, dpState }) => ({
    currentTab: uiState.currentTab,
    power: dpState[powerCode],
    workMode: dpState[workModeCode],
  }));

  useEffect(() => {
    //把导航栏切换成黑色
    setNavigationBarColor({
      backgroundColor: '#000000',
      frontColor: '#ffffff',
      animation: null,
    });
  }, []);
  useEffect(() => {
    //根据workMode切换对应显示页面
    dispatch(actions.common.updateUi({ currentTab: workMode }))
  }, [workMode])
  React.useEffect(() => {
    setNavigationBarTitle({ title: deviceName });
  }, [deviceName]);
  const renderPage = () => {
    //切换tab，渲染对应的组件
    switch (currentTab) {
      case 'colour':
        return <Colour />;
      case 'white':
        return <White />;
      default:
        return <Colour />;
    }
  };
  const initTabs = () => {
    //根据当前支持的dp展示tab
    const tabs = [];
    if (SupportUtils.isSupportColour()) {
      tabs.push(WORKMODE.colour);
    }
    if (SupportUtils.isSupportWhite()) {
      tabs.push(WORKMODE.white);
    }
    return tabs;
  };
  const handleChangeTab = (val: string) => {
    //切换tab,对应下发工作模式
    dpUtils.putDpData({ [workModeCode]: val }, { checkRepeat: false })
  };
  const supportColorAndWhite = initTabs().length === 2;
  return (
    <View className={styles.view}>
      {/* 根据开关显示不同的页面状态 */}
      {power ? (
        <>
          <View
            className={styles.flexCenter}
            style={{ marginBottom: supportColorAndWhite ? 0 : 140 }}
          >
            {supportColorAndWhite && (
              <TabBar activeTab={currentTab} tabs={initTabs()} onClick={handleChangeTab} />
            )}
          </View>
          {renderPage()}
        </>
      ) : (
        <View className={clsx(styles.flexCenter, styles.flex1)}>
          <Image src={Res.powerOff} style={{ width: 550, height: 550 }} />
        </View>
      )}
      <ControlBar />
    </View>
  );
}

export default Home;
