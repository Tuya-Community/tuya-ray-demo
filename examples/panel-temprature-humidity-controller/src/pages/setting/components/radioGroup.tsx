import { useAppConfig } from "@/hooks/useAppConfig";
import Strings from "@/i18n";
import { useActions, useDpSchema, useProps } from "@ray-js/panel-sdk";
import { Text, View } from "@ray-js/ray";
import clsx from "clsx";
import React, { useCallback, useState } from "react";
import Styles from "./radioGroup.module.less";


export function RadioGroup(props: { list: { id: number, name: string }[], default: number, onSelect(id): void, className?: string }) {
    const [selectedId, setSelected] = useState(props.default);
    const { primaryColor } = useAppConfig();
    return (
        <View className={Styles['radio-group-wrapper']}>
            {props.list.map(item => (
                <View key={item.id} onClick={() => {
                    setSelected(item.id);
                    props.onSelect(item.id);
                }} className={clsx(Styles['radio-group-item'], props.className)} style={{ backgroundColor: selectedId === item.id ? primaryColor : 'rgba(241, 243, 245, 1)', color: selectedId === item.id ? 'white' : 'black' }}>
                    {item.name}
                </View>
            ))}
        </View>
    );
}


interface DpRadioGroupProps {
    dpCode: string;
    className?: string;
}

export const DpRadioGroup = ({ dpCode, className }: DpRadioGroupProps) => {
    const p = useProps(p => p[dpCode]);
    const schema = useDpSchema();
    const actions = useActions();
    const property = schema[dpCode]?.property;
    if (!property) return null;
    const range = property.type === 'bool' ? [true, false] : property?.range;
    if (!range || !range.length) return null;
    const list = range.map(value => ({ id: value, name: Strings.getDpLang(dpCode, value) }));
    const onSelect = useCallback((id) => {
        if (id === p) return;
        actions[dpCode].set(id, { immediate: true });
    }, [p])
    return (
        <View className={Styles['dp-radio-group-wrapper']}>
            <Text className={Styles['dp-text']}>{Strings.getDpLang(dpCode)}</Text>
            <RadioGroup className={className} list={list} default={p} onSelect={onSelect}></RadioGroup>
        </View>
    )
}