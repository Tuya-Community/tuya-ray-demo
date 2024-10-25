import { IconFont } from "@/components";
import { useHumidity, useTemperature, useTemperatureUnit } from "@/hooks/useUnit";
import Strings from "@/i18n";
import { Text, View } from "@ray-js/ray";
import React from "react";
import Styles from './rootDevice.module.less';
export const RootDevice = () => {
    const temp = useTemperature();
    const temp_unit = useTemperatureUnit() === 'c' ? '°C' : '°F';
    const humidity_value = useHumidity();

    return (
        <View className={Styles.deviceWrapper}>
            <View className={Styles.item}>
                <View style={{ fontWeight: 'bold' }}>
                    <Text style={{ fontSize: '68rpx', lineHeight: '82rpx' }}>{temp}</Text>
                    <Text className={Styles.unit}>{temp_unit}</Text>
                </View>
                <IconFont icon="temperature">{Strings.getDpLang('temp_current')}</IconFont>
            </View>
            <View className={Styles.line}></View>
            <View className={Styles.item}>
                <View>
                    <Text style={{ fontSize: '68rpx', lineHeight: '82rpx' }}>{humidity_value}</Text>
                    <Text className={Styles.unit}>%</Text>
                </View>
                <IconFont icon="water">{Strings.getDpLang('humidity_value')}</IconFont>
            </View>
        </View>
    );
}