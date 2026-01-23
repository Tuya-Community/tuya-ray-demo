import Strings from "@/i18n";
import { DpRadioGroup } from "./components/radioGroup";
import { DpBaseInfo } from "./components/baseInfo";
import { DpSlider } from "./components/slider";
import { DpTimeSetting } from "./components/time";
import { useDpSchema } from "@ray-js/panel-sdk";

export function useConfig() {
    const config = exportConfig();
    const schema = useDpSchema();
    const res = config.map(item => ({
        ...item,
        content: item.content.map(
            c => c.filter(
                ({ dpCode }) => dpCode in schema
            )
        ).filter(c => c.length > 0),
    })).filter(item => item.content.length > 0);
    return res;
}

// 温湿度传感器 配置
export function exportConfig() {
    return [
        {
            title: Strings.getLang('Temp_scale_setting'),
            content: [
                // 每一个数组代表一个card组
                [{
                    dpCode: 'temp_unit_convert',
                    component: DpRadioGroup
                }]
            ]
        },
        {
            title: Strings.getLang('basic_information'),
            content: [
                [{
                    dpCode: 'battery_percentage',
                    component: DpBaseInfo
                }],
                [{
                    dpCode: 'battery_state',
                    component: DpBaseInfo
                }],
                [
                    {
                        dpCode: 'tamper_alarm',
                        component: DpBaseInfo
                    }
                ],
                [
                    {
                        dpCode: 'charge_state',
                        component: DpBaseInfo
                    }
                ]
            ]
        },
        {
            title: Strings.getLang('Temp_and_humidity_settings'),
            content: [
                [{
                    dpCode: 'temp_sensitivity',
                    component: DpSlider,
                    color: "rgba(254, 149, 0, 1)"
                }, {
                    dpCode: 'hum_sensitivity',
                    component: DpSlider,
                    color: "rgba(0, 208, 205, 1)"
                }],
                [
                    {
                        dpCode: 'temp_sampling',
                        component: DpTimeSetting
                    },
                    {
                        dpCode: 'humidity_sampling',
                        component: DpTimeSetting
                    }
                ],
                [
                    {
                        dpCode: 'temp_periodic_report',
                        component: DpTimeSetting
                    },
                    {
                        dpCode: 'hum_periodic_report',
                        component: DpTimeSetting
                    }
                ]
            ]
        }
    ]

}