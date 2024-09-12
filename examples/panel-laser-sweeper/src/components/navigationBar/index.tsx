import React, { ReactNode, useEffect, useCallback, FC } from 'react';
import { router } from 'ray';
import { View, Text, CoverView } from '@ray-js/ray';
import { useSelector } from '@/redux';
import { mergeProps } from '@/utils/mergeProps';
import styles from './index.module.less';

export interface NavigationBarProps {
  /**
   * 字体颜色
   */
  textColor?: string;
  /**
   * 是否显示返回区域的箭头，也可以传入 ReactNode 进行自定义
   */
  backArrow?: ReactNode | boolean;
  /**
   * 左侧内容，渲染在返回区域的右侧
   */
  left?: ReactNode;
  /**
   * 右侧内容
   */
  right?: ReactNode;
  /**
   * 点击返回区域后的回调
   */
  onBack?: () => void;
}

const defaultProps = {
  backArrow: true,
};

function BackIcon() {
  return (
    <Text
      className="iconfont icon-back"
      style={{
        fontSize: '17px',
        opacity: '0.9',
      }}
    />
  );
}
/**
 * TODO 统一导航栏，后续跟首页那个合并为一个 ， 这里需要做安卓ios的适配
 */
export const NavigationBar: FC<NavigationBarProps> = p => {
  const statusBarHeight = useSelector(state => state.statusBarHeight); // 状态栏高度
  const navigationBarHeight = 44;
  const props = mergeProps(defaultProps, p);
  const { backArrow, left, right, onBack, textColor = '#000' } = props;
  const handleBack = useCallback(() => {
    if (onBack) {
      onBack();
      return;
    }
    router.back();
  }, []);

  return (
    <View
      className={styles.navbar}
      style={{
        paddingTop: `${statusBarHeight}px`,
        height: `${statusBarHeight + navigationBarHeight}px`,
        color: textColor,
      }}
    >
      <CoverView className={styles['navbar-left']} onClick={handleBack}>
        <View className={styles['navbar-back']}>
          {backArrow === true ? <BackIcon /> : backArrow}
        </View>

        {left}
      </CoverView>
      <View className={styles['navbar-title']}>{props.children}</View>
      <View className={styles['navbar-right']}>{right}</View>
    </View>
  );
};
