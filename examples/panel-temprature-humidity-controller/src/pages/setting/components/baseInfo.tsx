import Strings from "@/i18n";
import { useDpSchema, useProps } from "@ray-js/panel-sdk";
import { View } from "@ray-js/ray";
import React from "react";
import Styles from './baseInfo.module.less';


interface IBaseInfo {
    name: string;
    desc: string;
}
export const BaseInfo = ({ name, desc }: IBaseInfo) => {
    return (
        <View className={Styles['base-wrapper']}>
            <View>{name}</View>
            <View className={Styles['text-gray']}>{desc}</View>
        </View>
    )
}

interface DpBaseInfoProps {
    dpCode: string;
}

export const DpBaseInfo = ({ dpCode }: DpBaseInfoProps) => {
    const value = useProps(p => p[dpCode]);
    const property = useDpSchema()[dpCode]?.property;
    let desc = "";
    // 描述在这里聚合
    if (!property) return null;
    const { type } = property;
    if (type === 'enum' || type === 'bool') {
        desc = Strings.getDpLang(dpCode, value);
    } else if (type === 'value') {
        desc = value + property.unit;
    }
    return <BaseInfo name={Strings.getDpLang(dpCode)} desc={desc} />
}