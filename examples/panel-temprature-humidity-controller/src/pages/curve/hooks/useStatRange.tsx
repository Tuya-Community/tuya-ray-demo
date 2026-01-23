import React from 'react';
import dayjs from 'dayjs';
import Strings from '@/i18n';
import { getStatisticsRangDay, getStatisticsRangHour, getStatisticsRangMonth } from '@ray-js/ray';

export enum AUTO_FILL_TYPE {
    FILL_ZERO, // 自动填充0
    FILL_LAST, // 自动填充上一个数据
    FILL_NULL // 填充 #
}

export interface IGetDataParams {
    range: 'day' | "month" | "year";
    dpId: number;
    deviceId: string;
    type: 'avg' | 'max' | 'min';
    date: number;
    code: string;
    debug?: boolean;
}

const map = {
    day: {
        get({ date, deviceId, dpId, type }: IGetDataParams) {
            return getStatisticsRangHour({
                dpId,
                devId: deviceId,
                type,
                date: dayjs(date).format('YYYYMMDD'),
                auto: AUTO_FILL_TYPE.FILL_NULL
            })
        },
        /**
         * 处理数据格式， 数据格式如下 { 
         *  2024051500: "0.00"
            2024051501 : "0.00"
            2024051502 : "0.00"
            2024051503 : "0.00"
            }
            处理为 {
                x: [00:00, 01:00, 02:00, 03:00],
                y: [0.00, 0.00, 0.00, 0.00]
            }
            *  */
        formate(res, date: number, debug?: boolean) {
            const result = { x: [], y: [], isEmpty: true };
            const curNum = Number(dayjs().format("YYYYMMDDHH"));
            Object.keys(res).map(key => {
                result.x.push(key.slice(-2) + ':00');
                if (debug) {
                    result.y.push([10, 15, 20, 12, 23][Math.floor(Math.random() * 5)])
                } else {
                    // 统计时间大于当前日期，那么数据为0
                    if (Number(key) > curNum) {
                        // result.y.push(0);
                    } else {
                        result.y.push(res[key])
                    }
                }

                result.isEmpty = false;
            });
            if (result.isEmpty) {
                result.x = ['00:00', '12:00', '23:00'];
                result.y = [0, 0, 0];
            }
            return result;
        }
    },
    month: {
        get({ date, deviceId, dpId, type }: IGetDataParams) {
            return getStatisticsRangDay({
                dpId,
                devId: deviceId,
                startDay: dayjs(date).startOf('month').format('YYYYMMDD'),
                endDay: dayjs(date).endOf('month').format('YYYYMMDD'),
                type,
                auto: AUTO_FILL_TYPE.FILL_NULL
            })
        },
        /**
         * 处理数据格式， 数据格式如下 { 
         *  20230501: '0',
            20230502: '0',
            20230503: '0',
            20230504: '0',
            20230505: '0',
            20230506: '0',
            20230507: '0',
            20230508: '0',
            20230509: '0',
            20230510: '26.00',
            20230511: '24.00',
        }
            处理为 {
                x: [05/01, 05/02, 05/03, 05/04],
                y: [0.00, 0.00, 0.00, 0.00]
            }
            *  */
        formate(res, date: number, debug?: boolean) {
            const result = { x: [], y: [], isEmpty: true };
            const curNum = Number(dayjs().format('YYYYMMDD'));
            Object.keys(res).map(key => {
                result.isEmpty = false;
                result.x.push(key.slice(-4, -2) + '/' + key.slice(-2));
                if (debug) {
                    result.y.push([10, 15, 20, 12, 23][Math.floor(Math.random() * 5)])
                } else {
                    // 统计时间大于当前日期，那么数据为0
                    if (Number(key) > curNum) {
                        // result.y.push(0);
                    } else {
                        result.y.push(res[key])
                    }
                }
            });

            if (result.isEmpty) {
                result.x = [
                    dayjs(date).startOf('m').format("MM/DD"),
                    dayjs(dayjs(date).startOf('m').valueOf() + dayjs(date).endOf('m').valueOf()).format("MM/DD"),
                    dayjs(date).endOf('m').format("MM/DD")
                ];
                result.y = [0, 0, 0];
            }
            return result;
        }
    },
    year: {
        get({ date, deviceId, dpId, type }: IGetDataParams) {
            return getStatisticsRangMonth({
                dpId,
                devId: deviceId,
                type,
                startMonth: dayjs(date).startOf('year').format('YYYYMM'),
                endMonth: dayjs(date).endOf('year').format('YYYYMM'),
                auto: AUTO_FILL_TYPE.FILL_NULL
            })
        },
        /**
         * 处理数据格式， 数据格式如下 { 
         *  202405: "0.00"
            202406 : "0.00"
            202407 : "0.00"
            202408 : "0.00"
            }
            处理为 {
                x: [05, 06, 07, 08],
                y: [0.00, 0.00, 0.00, 0.00]
            }
            *  */
        formate(res, date: number, debug?: boolean) {
            const result = { x: [], y: [], isEmpty: true };
            const curNum = Number(dayjs().format('YYYYMM'));
            Object.keys(res).map(key => {
                result.isEmpty = false;
                result.x.push(key.slice(-2));
                if (debug) {
                    result.y.push([10, 15, 20, 12, 23][Math.floor(Math.random() * 5)])
                } else {
                    // 统计时间大于当前日期，那么数据为0
                    if (Number(key) > curNum) {
                        // result.y.push("#");
                    } else {
                        result.y.push(res[key])
                    }
                }
            });

            if (result.isEmpty) {
                result.x = [
                    dayjs(date).startOf('y').format("MM"),
                    dayjs(dayjs(date).startOf('y').valueOf() + dayjs(date).endOf('y').valueOf()).format("MM"),
                    dayjs(date).endOf('y').format("MM")
                ];
                result.y = [0, 0, 0];
            }
            return result;
        }
    }
}


export const useStaticsRange = (params: IGetDataParams) => {
    const [isLoading, setIsLoading] = React.useState(false);
    const [isEmpty, setIsEmpty] = React.useState(false);
    const [result, setResult] = React.useState<any>(null);
    const [errorMsg, setErrorMsg] = React.useState("");
    React.useEffect(() => {
        let isUnmount = false;
        setIsLoading(true);
        setErrorMsg("");
        map[params.range].get(params).then(res => {
            if (isUnmount) return;
            const result = map[params.range].formate(res, params.date, params.debug);
            setResult(result);
            setErrorMsg("");
            if (result.isEmpty) {
                setIsEmpty(true);
            } else {
                setIsEmpty(false);
            }
        })
            .catch(err => {
                console.error(err);
                setErrorMsg(err?.errorMsg || Strings.getLang('getDataError'));
            })
            .finally(() => {
                setIsLoading(false);
            });


        return () => {
            isUnmount = true;
        }
    }, [params.date, params.range, params.deviceId, params.dpId, params.code, params.type]);

    return [result, isLoading, isEmpty, errorMsg];
}