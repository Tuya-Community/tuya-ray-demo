import { useEffect, useState } from "react";
import { IGetDataParams, useStaticsRange } from "./useStatRange";
import { useTemperatureUnit } from "@/hooks/useUnit";
import { c2f, scaleNumber } from "@ray-js/panel-sdk/lib/utils";
import Strings from "@/i18n";

export const useTemperateRange = (params: IGetDataParams) => {
    const [result, isLoading, isEmpty, errorMsg] = useStaticsRange(params);
    const unit = useTemperatureUnit();
    const [options, setOptions] = useState({
        color: ['#30BFDE'],
        xAxis: {
            axisLine: {
                show: false,
            },

            data: []
        },
        yAxis: {
            position: 'right',
            splitLine: {
                lineStyle: {
                    color: 'rgba(0, 0, 0, 0.2)',
                    type: 'dashed'
                }
            },
            axisLabel: {
                formatter: '{value}'
            },
        },
        series: [{
            type: 'line',
            name: Strings.getLang("temper"),
            areaStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0, color: '#30BFDE' // 0% 处的颜色
                    }, {
                        offset: 1, color: 'rgba(255, 255, 255, 0)' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                }
            },
            lineStyle: {
                color: '#30BFDE'
            },
            data: []
        }]
    });

    useEffect(() => {
        if (!result) return;
        setOptions({
            ...options,
            xAxis: {
                ...options.xAxis,
                data: result.x
            },
            series: [{
                ...options.series[0],
                data: result.y
                    .map(value => {
                        if (isNaN(Number(value))) return 0; // 如果不是数字，返回0
                        return unit === 'c' ? Math.round(value * 10) / 10 : c2f(value)
                    })
            }]
        });

    }, [result]);

    return [options, isLoading, isEmpty, errorMsg];
}