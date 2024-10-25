import { Text, View } from "@ray-js/ray";
import clsx from "clsx";
import React from "react";
import Styles from './title.module.less';

export function Title(props: { title: string, className?: string, style?: React.CSSProperties }) {
    return (
        <View className={clsx(Styles['wrapper'], props.className)} style={props.style}>
            <Text>{props.title}</Text>
        </View>
    );
}