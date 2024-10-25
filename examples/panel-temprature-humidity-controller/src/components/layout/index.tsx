import React, { useCallback } from 'react';
import { router, ScrollView, Text, View } from '@ray-js/ray';
import Styles from './index.module.less';
import { IconFont, TopBar } from '@/components';
import clsx from 'clsx';
import { useAppConfig } from "@/hooks/useAppConfig";
import topImage from './res/top.png';
import { getStatusBarHeight, rpx2pxNum } from '@/utils';

interface LayoutProps {
    title: string;
    children?: React.ReactNode;
    showBack?: boolean;
}

export function Layout(props: LayoutProps) {
    const { primaryColor } = useAppConfig();
    const top = getStatusBarHeight() + rpx2pxNum(88); // 状态栏 + 标题栏高度

    const back = useCallback(() => {
        router.back();
    }, []);
    return (
        <View className={Styles.app}>
            <View
                className={clsx(Styles.appMain, Styles['mainBg'])}
                style={{
                    backgroundImage: `url(${topImage}), linear-gradient(180deg, ${primaryColor} 0%, ${primaryColor}99 790rpx, #EEF1F5 1062rpx)`
                }}
            >
                <View className={Styles.view}>
                    <TopBar className={Styles.topbar}>
                        <View className={Styles.topbarText} style={{ textAlign: props.showBack ? 'center' : 'left' }}>
                            {props.showBack && <IconFont className={Styles.back} icon="left" onClick={back}></IconFont>}
                            <Text>{props.title}</Text>
                        </View>
                    </TopBar>
                    <ScrollView
                        refresherTriggered={false} refresherEnabled={false} scrollY={true}
                        refresherBackground={primaryColor}
                        style={{ top: `${top}px` }}
                        className={Styles['scrollView']} id="scrollView">
                        {props.children}

                    </ScrollView >
                </View >

            </View>
        </View>
    );
}

export default Layout;
