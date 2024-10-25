import { useEffect, useState } from "react";
import { IGetDataParams, useStaticsRange } from "./useStatRange";
import Strings from "@/i18n";

export const useHumidityRange = (params: IGetDataParams) => {
    const [result, isLoading, isEmpty, errorMsg] = useStaticsRange(params);
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
            scale: true,
            axisLabel: {
                formatter: '{value}'
            }
        },
        series: [{
            name: Strings.getLang("humidity"),
            type: 'line',
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
        // 绘制平均值的折线图
        setOptions({
            ...options,
            xAxis: {
                ...options.xAxis,
                data: result.x
            },
            series: [{
                ...options.series[0],
                data: result.y.map(item => {
                    if (isNaN(Number(item))) return 0;
                    return Math.round(item);
                })
            }]
        });
    }, [result]);

    return [options, isLoading, isEmpty, errorMsg];
}