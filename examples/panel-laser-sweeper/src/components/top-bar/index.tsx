import React, { useRef, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Text, View, CoverView } from '@ray-js/ray';
import { selectSystemInfoByKey } from '@/redux/modules/systemInfoSlice';
import clsx from 'clsx';
import { actions } from '@/redux';
import styles from './index.module.less';
import './icons/iconfont.css';

interface Props {
  title?: string;
  moreButtonDisable?: boolean;
}

export const TopBar = (props: Props) => {
  const statusBarHeight = useSelector(selectSystemInfoByKey('statusBarHeight'));
  const dispatch = useDispatch();
  const topBarTextContainerWidth = useRef(260);
  const topBarTextWidth = useRef(260);
  const [isRolling, setIsRolling] = useState(false);

  /**
   * 跳转到设置页
   */
  const gotoSetting = () => {
    if (props.moreButtonDisable) {
      return;
    }
    ty.navigateTo({ url: '/pages/site/index' });
  };

  /**
   * 计算设置按钮的top和left
   */
  const computeSettingPosition = () => {
    ty.createSelectorQuery()
      .select('#settingById')
      .boundingClientRect()
      .exec(res => {
        if (!res[0]?.id) {
          computeSettingPosition();
          return null;
        }
        const { left = 0, right = 0, top = 0, bottom = 0 } = res[0];
        dispatch(
          actions.componentPosition.updatePosition({
            setting: {
              top,
              left,
              right,
              bottom,
            },
          })
        );
        return null;
      });
  };

  const computeTopBarTextWidth = () => {
    ty.createSelectorQuery()
      .select('#topBarText')
      .boundingClientRect()
      .exec(res => {
        if (!res[0]?.id) {
          computeTopBarTextWidth();
          return null;
        }
        topBarTextWidth.current = res[0]?.width || 0;

        if (topBarTextWidth.current > topBarTextContainerWidth.current) {
          setIsRolling(true);
        }
        return null;
      });
  };

  const computeTopBarTextContainerWidth = () => {
    ty.createSelectorQuery()
      .select('#topBarTextContainer')
      .boundingClientRect()
      .exec(res => {
        if (!res[0]?.id) {
          computeTopBarTextContainerWidth();
          return null;
        }
        const { width = 260 } = res[0];
        topBarTextContainerWidth.current = width;
        computeTopBarTextWidth();
        return null;
      });
  };
  /**
   * 退出小程序
   */
  const exitMini = () => {
    ty.exitMiniProgram();
  };

  useEffect(() => {
    // 计算设置按钮的top和left
    computeSettingPosition();
    // 计算扫地机状态文字是否需要滚动
    computeTopBarTextContainerWidth();
  }, []);

  return (
    <View>
      <View className={styles.statusBar} style={{ height: `${statusBarHeight}px` }} />
      <View className={styles.topbar}>
        <View id="topBarTextContainer" className={styles.textContainer}>
          <Text
            id="topBarText"
            className={clsx(styles.topbarText, isRolling && styles.topBarTextRolling)}
          >
            {props?.title}
          </Text>
        </View>
      </View>
    </View>
  );
};
