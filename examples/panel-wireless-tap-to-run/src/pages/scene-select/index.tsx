import React from 'react';
import { Image, View, openCreateTapToRunScene, openEditScene, router, useQuery } from '@ray-js/ray';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { TopBar, Empty, FixedBottom, RuleItem } from '@/components';
import Strings from '@/i18n';
import { TopBarHeight } from '@/components/top-bar';
import { getCachedSystemInfo } from '@/api/getCachedSystemInfo';
import { usePageReShow } from '@/hooks/usePageReShow';
import { useHideMenuButton } from '@/hooks/useHideMenuButton';
import {
  bindAsync,
  selectTapToRunRules,
  updateTapToRunRulesAsync,
} from '@/redux/modules/sceneSlice';
import { useAppDispatch } from '@/redux';
import styles from './index.module.less';
import { SceneSelectQuery } from './index.type';

const FooterHeight = 88;
const { screenHeight } = getCachedSystemInfo();
const contentHeight = `${screenHeight - (TopBarHeight + FooterHeight)}px`;

export function SceneSelect() {
  // 从 App 一键执行页面创建或编辑后需要刷新下数据源
  usePageReShow(() => {
    dispatch(updateTapToRunRulesAsync());
  });
  useHideMenuButton();
  const dispatch = useAppDispatch();
  const query: SceneSelectQuery = useQuery();
  const tapToRunRules = useSelector(selectTapToRunRules);
  const [fixedBottomHeight, setFixedBottomHeight] = React.useState('180rpx'); // 默认为 iphone 6 基准
  const [activeIdx, setActiveIdx] = React.useState(-1);
  const isEmpty = tapToRunRules.length === 0;

  const handleItemClick = React.useCallback((idx: number) => {
    return () => setActiveIdx(idx);
  }, []);

  const handleSave = React.useCallback(() => {
    const data = tapToRunRules?.[activeIdx];
    dispatch(bindAsync({ dpId: query.dpId, dpValue: query.dpValue, ruleId: data.id }));
    router.back();
  }, [tapToRunRules, activeIdx]);

  const handleAddClick = React.useCallback(() => {
    const rule = tapToRunRules[activeIdx];
    if (!rule) {
      // App 5.13.0 以上版本开始支持
      openCreateTapToRunScene().catch(err => console.warn('openCreateTapToRunScene failed', err));
      return;
    }
    openEditScene({ sceneId: rule.id });
  }, [tapToRunRules, activeIdx]);

  return (
    <View className={styles.view}>
      <TopBar title={Strings.getLang('sceneSelect')} isSubPage />
      <View className={styles.content} style={{ marginBottom: fixedBottomHeight }}>
        {isEmpty ? (
          <Empty
            style={{ height: contentHeight, marginTop: 0 }}
            title={Strings.getLang('sceneSelectEmptyTip')}
          />
        ) : (
          <View className={styles.list}>
            {tapToRunRules?.map((data, idx) => {
              const bindDeviceNums = data?.actions?.length ?? 0;
              const isActive = activeIdx === idx;
              return (
                <RuleItem
                  key={idx}
                  isActive={isActive}
                  title={data.name}
                  subTitle={Strings.formatValue(
                    bindDeviceNums > 1 ? 'sceneBindDeviceNums' : 'sceneBindDeviceNum',
                    bindDeviceNums
                  )}
                  onClick={handleItemClick(idx)}
                />
              );
            })}
          </View>
        )}
        <FixedBottom
          className={styles.footer}
          contentHeight="100rpx"
          getFixedBottomHeight={setFixedBottomHeight}
        >
          <View
            className={clsx(
              styles.button,
              (isEmpty || activeIdx === -1) && styles.button__disabled
            )}
            onClick={handleSave}
          >
            {Strings.getLang('save')}
          </View>
          <Image className={styles.imageAdd} src="/images/icon_add.png" onClick={handleAddClick} />
        </FixedBottom>
      </View>
    </View>
  );
}

export default SceneSelect;
