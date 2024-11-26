import { IconFont } from "@/components";
import globalPopup from "@/components/popup";
import Strings from "@/i18n";
import { reverseScaleNumber } from "@/utils";
import { useActions, useDpSchema, useProps } from "@ray-js/panel-sdk";
import { scaleNumber } from "@ray-js/panel-sdk/lib/utils";
import { Text, View } from "@ray-js/ray";
import clsx from "clsx";
import React, { useCallback, useMemo } from "react";
import Styles from './time.module.less';


interface TimeSettingProps {
    title: string;
    time: string;
    unit: string;
    min: number;
    max: number;
    step: number;
    className?: string;
    onChange(value: number): void;
}

export const TimeSetting = ({ title, time, className, unit, min, max, step, onChange }: TimeSettingProps) => {
    const timeUnits = ['h', 'min', 's']; // 最大上限到小时

    const desc = useMemo(() => {
        let res = "";
        let tryUnit = 'h';
        let curRemainTime = Number(time);
        while (tryUnit) {
            let scale = getScale(unit, tryUnit);
            // 如果最大值减去当前单位的倍数小于最小值，跳过当前单位
            if (curRemainTime < scale) {
                tryUnit = timeUnits[timeUnits.indexOf(tryUnit) + 1];
                continue;
            }
            if (res) {
                res += " ";
            }
            res += Math.floor(curRemainTime / scale) + tryUnit;
            curRemainTime = curRemainTime % scale;
            if (tryUnit === unit) {
                break;
            }
            tryUnit = timeUnits[timeUnits.indexOf(tryUnit) + 1];
        }
        return res;
    }, [time]);

    // 从curUnit到最大单位的倍数计算
    function getScale(unit: string, toUnit = 'h') {
        const index = timeUnits.indexOf(unit);
        const toIndex = timeUnits.indexOf(toUnit) ?? 0;
        return Math.pow(60, index - toIndex);
    }

    const handleTimeChange = useCallback(() => {

        const columns = [];
        let tryUnit = 'h';
        let curRemainTime = Number(time);
        // 从最大单位开始计算
        while (tryUnit) {
            let scale = getScale(unit, tryUnit);

            // 如果最大值减去当前单位的倍数小于最小值，跳过当前单位
            if (max < scale) {
                tryUnit = timeUnits[timeUnits.indexOf(tryUnit) + 1];
                continue;
            }
            const values = [];
            for (let i = 0; i <= Math.min(Math.floor((max) / scale), 60); i++) {
                values.push(i);
            }

            columns.push({
                values,
                unit: tryUnit,
                defaultIndex: 0,
                activeIndex: Math.floor(Number(curRemainTime) / scale)
            });

            curRemainTime = curRemainTime % scale;

            if (tryUnit === unit) {
                break;
            }

            tryUnit = timeUnits[timeUnits.indexOf(tryUnit) + 1];
        }

        // 从列数据 获取当前的值信息，可以得到当前的值以及从哪一列被截断
        const getNumberFromColumnValue = (columnValues: number[]) => columnValues.reduce((prev, cur, index) => {
            if (prev.breaked) return { ...prev };

            const cunit = columns[index].unit;
            const next = prev.value + cur * getScale(unit, cunit);

            if (next > max) {
                return {
                    value: max,
                    breaked: true,
                    breakedIndex: index
                }
            }
            return {
                value: next,
                breaked: false,
                breakedIndex: -1
            }
        }, {
            value: 0,
            breaked: false,
            breakedIndex: -1
        });

        globalPopup.picker({
            columns: columns,
            showToolbar: true,
            title: title,
            cancelButtonText: Strings.getLang('cancelText'),
            confirmButtonText: Strings.getLang('confirmText'),
            onConfirm: (e, close) => {
                const columnValues = e.detail.value;
                const value = getNumberFromColumnValue(columnValues);

                onChange(value.value);
                close();
            },
            onChange(e) {
                const columnValues = e.detail.value;
                const value = getNumberFromColumnValue(columnValues);
                if (value.breaked) {
                    columnValues.slice(value.breakedIndex).forEach((_, index) => {
                        e.detail.picker.setColumnIndex(value.breakedIndex + index, 0);
                    });
                }
            }
        })
    }, [time, unit, min, max, step]);

    return (
        <View className={clsx(Styles['time-wrapper'], className)}>
            <View className={Styles['title']}>{title}</View>
            <View style={{ marginTop: '20rpx' }} onClick={handleTimeChange}>
                <Text style={{ color: 'gray' }}>{desc}</Text>
                <IconFont icon="right" style={{ marginLeft: '20rpx' }}></IconFont>
            </View>
        </View>
    )
}

interface DpTimeSettingProps {
    dpCode: string;
}

export const DpTimeSetting = ({ dpCode }: DpTimeSettingProps) => {
    const dp = useProps(p => p[dpCode]);
    const schema = useDpSchema();

    if (dp === undefined) {
        return null;
    }
    const property = schema[dpCode]?.property;

    if (!property) return null;
    const action = useActions();
    let { min, max, step, unit, scale } = property;
    return (
        <TimeSetting
            title={Strings.getDpLang(dpCode)}
            time={scaleNumber(scale, dp)}
            min={+scaleNumber(scale, min)}
            max={+scaleNumber(scale, max)}
            step={+scaleNumber(scale, step)}
            unit={unit}
            onChange={(value) => {
                action[dpCode].set(reverseScaleNumber(scale, value));
            }}>
        </TimeSetting>
    )
}