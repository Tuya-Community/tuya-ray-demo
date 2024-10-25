import { IconFont } from "@/components";
import { View, Text } from "@ray-js/ray";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import dayjs from "dayjs";
import Styles from './switchAnalyze.module.less';

interface SwitchAnalyzeProps {
    onDateChange: (date: number) => void;
    date: number;
    range: 'day' | "month" | "year";
}

export const SwitchAnalyze = ({ onDateChange, date, range }: SwitchAnalyzeProps) => {
    const onPrev = useCallback(() => {
        let prev;
        if (range === 'day') {
            prev = dayjs(date).subtract(1, 'day').valueOf();
        } else if (range === 'month') {
            prev = dayjs(date).subtract(1, 'month').valueOf();
        } else {
            prev = dayjs(date).subtract(1, 'year').valueOf();
        }
        onDateChange(prev);
    }, [date, range]);

    const onNext = useCallback(() => {
        let next;
        if (diableNext) return;
        if (range === 'day') {
            next = dayjs(date).add(1, 'day').valueOf();
        } else if (range === 'month') {
            next = dayjs(date).add(1, 'month').valueOf();
        } else {
            next = dayjs(date).add(1, 'year').valueOf();
        }
        onDateChange(next);
    }, [date, range]);

    const diableNext = useMemo(() => {
        if (range === 'day') {
            return dayjs(date).startOf('day').valueOf() === dayjs().startOf('day').valueOf();
        } else if (range === 'month') {
            return dayjs(date).startOf('month').valueOf() === dayjs().startOf('month').valueOf();
        } else {
            return dayjs(date).startOf('year').valueOf() === dayjs().startOf('year').valueOf();
        }
    }, [date, range]);

    const formatText = useMemo(() => {
        if (range === 'day') {
            return dayjs(date).format('MM/DD');
        } else if (range === 'month') {
            return dayjs(date).format('YYYY-MM');
        } else {
            return dayjs(date).format('YYYY');
        }
    }, [date, range])


    return (
        <View className={Styles.wrapper}>
            <View className={Styles.nav} onClick={onPrev}>
                <IconFont icon='left' style={{ fontSize: '28rpx' }} ></IconFont>
            </View>
            <Text style={{ color: 'white' }}>{formatText}</Text>
            <View className={Styles.nav}
                style={{ opacity: diableNext ? 0.2 : 1 }}
                onClick={onNext}>
                <IconFont icon='right'></IconFont>
            </View>
        </View>
    )
}