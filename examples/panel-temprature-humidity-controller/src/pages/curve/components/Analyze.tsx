import { Tabs } from "./tabs";
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Text, View } from "@ray-js/ray";
import { useTemperateRange } from "../hooks/useTemperateRange";
import { SwitchAnalyze } from "./swtichAnalyze";
import { useTemperatureUnit } from "@/hooks/useUnit";
import Strings from "@/i18n";
import { useHumidityRange } from "../hooks/useHumidityRange";
import Styles from './analyze.module.less';
import CommonCharts from '@ray-js/common-charts';
import { useDevId } from "@ray-js/panel-sdk/lib/hooks";


const CHART_DEBUG = false; // chart的统计数据是否开启debug模式

export const Analyze = () => {
    return (
        <View style={{ padding: '32rpx' }}>
            <TempAnalyze />
            <HumidityAnalyze />
        </View>
    )
}


export const TempAnalyze = () => {
    const { deviceId } = useDevId();
    const rangeOptions = [{ text: Strings.getLang("day"), key: 'day' }, { text: Strings.getLang("month"), key: 'month' }, { text: Strings.getLang("year"), key: 'year' }];
    const [currentRange, setCurrentRange] = useState(0);
    const [hour, setHour] = useState(Date.now());
    const [month, setMonth] = useState(Date.now());
    const [year, setYear] = useState(Date.now());
    const chartRef = useRef(null);
    const unit = useTemperatureUnit() || "c";
    const temp_unit = unit === 'c' ? '°C' : '°F';
    const curRange = useMemo(() => rangeOptions[currentRange].key, [currentRange]) as "day" | "month" | "year";
    const curTempDate = useMemo(() => {
        if (curRange === 'day') {
            return hour;
        } else if (curRange === 'month') {
            return month;
        } else {
            return year;
        }
    }, [curRange, hour, month, year]);

    const [temperatureOptions, isLoading, isEmpty, errorMsg] = useTemperateRange({ range: curRange, dpId: 1, deviceId, type: "avg", date: curTempDate, code: 'temp_current', debug: CHART_DEBUG });
    const onDateChange = useCallback((date: number) => {
        if (curRange === 'day') {
            setHour(date);
        } else if (curRange === 'month') {
            setMonth(date);
        } else {
            setYear(date);
        }
    }, [curRange, hour, month, year]);

    useEffect(() => {
        if (isLoading) {
            chartRef.current?.showLoading('default', { text: Strings.getLang('loading') });
        } else {
            chartRef.current?.hideLoading();
        }
    }, [isLoading])

    return (
        <>
            <View className={Styles.title} style={{ marginTop: '40rpx' }}>
                <Text>{Strings.getLang("temper")}</Text>
            </View>
            <Tabs current={currentRange} onChange={setCurrentRange} options={rangeOptions}></Tabs>
            <View style={{ height: '400rpx', margin: '20rpx 0' }}>
                <CommonCharts errMsg={errorMsg} getEchartsProxy={(echart) => { chartRef.current = echart }} option={temperatureOptions} opts={{ notMerge: true }} unit={temp_unit} ></CommonCharts>
            </View>
            <SwitchAnalyze date={curTempDate} onDateChange={onDateChange} range={curRange}></SwitchAnalyze>
        </>
    )
}


export const HumidityAnalyze = () => {
    const { deviceId } = useDevId();
    const rangeOptions = [{ text: Strings.getLang("day"), key: 'day' }, { text: Strings.getLang("month"), key: 'month' }, { text: Strings.getLang("year"), key: 'year' }];
    const [currentRange, setCurrentRange] = useState(0);
    const [month, setMonth] = useState(Date.now());
    const [year, setYear] = useState(Date.now());
    const chartRef = useRef(null);
    const curRange = useMemo(() => rangeOptions[currentRange].key, [currentRange]) as "month" | "year";
    const curDate = useMemo(() => {
        if (curRange === 'month') {
            return month;
        } else {
            return year;
        }
    }, [curRange, month, year]);

    const [humidityOptions, isLoading, isEmpty, errorMsg] = useHumidityRange({ range: curRange, dpId: 2, deviceId, type: 'avg', date: curDate, code: 'humidity_value', debug: CHART_DEBUG });
    const onDateChange = useCallback((date: number) => {
        if (curRange === 'month') {
            setMonth(date);
        } else {
            setYear(date);
        }
    }, [curRange, month, year]);

    useEffect(() => {
        if (isLoading) {
            chartRef.current?.showLoading('default', { text: Strings.getLang('loading') });
        } else {
            chartRef.current?.hideLoading();
        }
    }, [isLoading])
    return (
        <>
            <View className={Styles.title}>
                <Text>{Strings.getLang("humidity")}</Text>
            </View>
            <Tabs current={currentRange} onChange={setCurrentRange} options={rangeOptions}></Tabs>
            <View style={{ height: '400rpx', margin: '20rpx 0' }}>
                <CommonCharts errMsg={errorMsg} getEchartsProxy={(chart) => { chartRef.current = chart }} option={humidityOptions} opts={{ notMerge: true }} unit={"%"}></CommonCharts>
            </View>
            <SwitchAnalyze date={curDate} onDateChange={onDateChange} range={curRange} ></SwitchAnalyze>
        </>
    )
}