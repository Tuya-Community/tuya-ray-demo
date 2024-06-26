import React, { useState } from 'react';
import { useRequest } from 'ahooks';
import {
  Text,
  View,
  Image,
  router,
  showLoading,
  hideLoading,
  showToast,
  openEditScene,
} from '@ray-js/ray';
import { BindTapToRunRules } from '@ray-js/panel-sdk/lib/sdm/abilities/tapToRun/type';
import { ActionSheet, Dialog, DialogInstance, SwipeCell } from '@ray-js/smart-ui';
import Strings from '@/i18n';
import { Empty } from '@/components';
import { useAppDispatch } from '@/redux';
import { unbindAsync, updateTapToRunRulesAsync } from '@/redux/modules/sceneSlice';
import { mapObject2QueryString } from '@/utils/mapObject2QueryString';
import { devices } from '@/devices';
import { usePageReShow } from '@/hooks/usePageReShow';
import styles from './index.module.less';

interface Props {
  sceneDpList: Array<{
    btnId: string;
    bindDpId?: number;
    bindDpValue?: string;
    bindScene?: BindTapToRunRules[number];
    bindRule?: BindTapToRunRules[number]['associativeEntityValueList'][0];
  }>;
}

enum SwitchType {
  SingleClick = 'single_click',
  DoubleClick = 'double_click',
  LongPress = 'long_press',
}

const actions = Object.values(SwitchType).map(type => ({
  id: type,
  name: Strings.getLang(`sceneSwitchType_${type}`),
}));

export const Scene: React.FC<Props> = ({ sceneDpList }) => {
  const dispatch = useAppDispatch();
  const [showSwitchTypeDpId, setShowSwitchTypeDpId] = useState('');

  // 从 App 一键执行页面创建或编辑后需要刷新下数据源
  usePageReShow(() => {
    dispatch(updateTapToRunRulesAsync());
  });

  const hideActionSheet = React.useCallback(() => {
    setShowSwitchTypeDpId('');
  }, []);

  const { run: runTriggerRule } = useRequest(
    (ruleId: string) => devices.common.model.abilities.tapToRun.trigger({ ruleId }),
    {
      manual: true,
      loadingDelay: 1000,
      onBefore: () => showLoading({ title: '', mask: true }),
      onSuccess: (_, [ruleId]) => {
        const scene = sceneDpList.find(d => d?.bindRule?.triggerRuleId === ruleId);
        hideLoading();
        return showToast({
          title: Strings.formatValue('sceneTriggerSuccess', scene.bindRule.name),
        });
      },
      onError: (_, [ruleId]) => {
        const scene = sceneDpList.find(d => d?.bindRule?.triggerRuleId === ruleId);
        hideLoading();
        return showToast({
          title: Strings.formatValue('sceneTriggerFailed', scene.bindRule.name),
          icon: 'error',
        });
      },
    }
  );

  const handleSelectSwitchType = React.useCallback(
    data => {
      const switchType = data?.detail?.id as string;
      const path = mapObject2QueryString('/scene-select', {
        dpId: showSwitchTypeDpId,
        dpValue: switchType,
      });
      hideActionSheet();
      return router.push(path);
    },
    [showSwitchTypeDpId]
  );

  const handleClose = React.useCallback((data: (typeof sceneDpList)[number]) => {
    return event => {
      const { position, instance } = event.detail;
      switch (position) {
        case 'cell':
          instance.close();
          break;
        case 'right':
          DialogInstance.confirm({
            message: Strings.getLang('unbindTip'),
            cancelButtonText: Strings.getLang('cancel'),
            confirmButtonText: Strings.getLang('confirm'),
          })
            .then(() => {
              const bindId = `${data?.bindScene?.bindId}`;
              dispatch(unbindAsync({ bindId })).then(result => {
                instance.close();
                if (result.meta.requestStatus === 'rejected') {
                  showToast({
                    title: Strings.getLang('requestFailed'),
                    icon: 'error',
                  });
                }
              });
            })
            .catch(() => instance.close());
          break;
        default:
      }
    };
  }, []);

  const handleSceneItemClick = React.useCallback((data: (typeof sceneDpList)[number]) => {
    return () => {
      const { btnId, bindRule } = data;
      if (!bindRule) {
        setShowSwitchTypeDpId(`${btnId}`);
        return;
      }
      DialogInstance.confirm({
        message: Strings.getLang('triggerTip'),
        cancelButtonText: Strings.getLang('cancel'),
        confirmButtonText: Strings.getLang('confirm'),
      })
        .then(() => {
          const triggerRuleId = data?.bindRule?.triggerRuleId;
          runTriggerRule(`${triggerRuleId}`);
        })
        .catch(() => true);
    };
  }, []);

  const handleClickSetting = React.useCallback((data: (typeof sceneDpList)[number]) => {
    return (evt => {
      evt?.origin?.stopPropagation();
      const sceneId = data?.bindRule?.id;
      if (data?.bindRule?.id) {
        openEditScene({ sceneId });
      }
    }) as React.ComponentProps<typeof View>['onClick'];
  }, []);

  return (
    <View>
      {sceneDpList.length === 0 ? (
        <Empty title={Strings.getLang('sceneEmptyTip')} />
      ) : (
        <View>
          {sceneDpList.map((d, idx) => {
            const { bindRule, bindDpValue } = d;
            const itemText = bindRule?.name
              ? `${Strings.getLang(`sceneSwitchType_${bindDpValue}` as any)}: ${bindRule?.name}`
              : Strings.getLang('defaultName');
            return (
              <SwipeCell
                key={idx}
                asyncClose
                rightWidth={65}
                disabled={!bindRule} // 没有绑定规则的不可滑动解绑
                slot={{
                  right: <View className={styles.right}>{Strings.getLang('unbind')}</View>,
                }}
                onClose={handleClose(d)}
              >
                <View className={styles.item} onClick={handleSceneItemClick(d)}>
                  <View className={styles.content}>
                    <View className={styles.textWrapper}>
                      <Text className={styles.textNo}>{idx + 1}</Text>
                      <Text className={styles.textScene}>{itemText}</Text>
                    </View>
                  </View>
                  {bindRule && (
                    <View onClick={handleClickSetting(d)}>
                      <Image className={styles.imageIcon} src="/images/icon_triangle.png" />
                    </View>
                  )}
                </View>
              </SwipeCell>
            );
          })}
        </View>
      )}
      <Dialog id="smart-dialog" />
      <ActionSheet
        description={Strings.getLang('sceneSwitchTypeSelect')}
        cancelText={Strings.getLang('cancel')}
        show={!!showSwitchTypeDpId}
        actions={actions}
        onSelect={handleSelectSwitchType}
        onClose={hideActionSheet}
        onCancel={hideActionSheet}
      />
    </View>
  );
};
