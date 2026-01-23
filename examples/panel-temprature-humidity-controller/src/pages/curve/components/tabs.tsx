





import React, { useCallback } from 'react';
import { Text, View } from '@ray-js/ray';
import Styles from './tabs.module.less';
interface TabsProps {
    options: { text: string, key: string }[];
    current: number;
    className?: string;
    activeColor?: string;
    onChange: (key: number) => void;
}

export function Tabs(props: TabsProps) {
    const onChange = useCallback((e) => {
        const index = e.origin.currentTarget.dataset.index;
        props.onChange(index);
    }, [])

    return (
        <View className={Styles.wrapper}>
            <View className={Styles.content}>
                <View className={Styles.bar} style={{
                    width: `${1 / props.options.length * 100}%`, left: `${((props.current + 0.5) / props.options.length) * 100}%`
                }} />
                {props.options.map((item, index) => (
                    <View
                        key={index}
                        data-index={index}
                        className={Styles.item}
                        style={{
                            color: index === props.current ? (props?.activeColor ?? '#000') : '#00000099',
                            fontWeight: index === props.current ? '600' : '400',
                        }}
                        onClick={onChange}
                    >
                        <Text>{item.text}</Text>
                    </View>
                ))}
            </View>


        </View>
    );
}

export default Tabs;
