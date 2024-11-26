

import Strings from "@/i18n";
import { reverseScaleNumber, setGlobalStyleVariables } from "@/utils";
import { useActions, useDpSchema, useProps } from "@ray-js/panel-sdk";
import { scaleNumber } from "@ray-js/panel-sdk/lib/utils";
import { Slider, Text, View } from "@ray-js/ray";
import clsx from "clsx";
import React, { useCallback, useEffect } from "react";
import Styles from "./slider.module.less";


interface ViewSliderProps {
    title: string;
    value: number;
    min: number;
    max: number;
    step: number;
    color: string;
    unit: string;
    className?: string;
    uniqueKey: string;
    sliderClassName: string;
    decimal: boolean;
    onChange(value: number): void;
}

export function ViewSlider({ title, value, min, max, step, unit, color, uniqueKey, sliderClassName, decimal, onChange, className }: ViewSliderProps) {

    useEffect(() => {
        setGlobalStyleVariables(uniqueKey, value, decimal);
    }, [])



    const handleChanging = useCallback((e) => {
        setGlobalStyleVariables(uniqueKey, e.detail.value, decimal);
    }, []);

    const handleChange = useCallback((e) => {
        onChange(e.detail.value);
        setGlobalStyleVariables(uniqueKey, e.detail.value, decimal);
    }, []);

    return (
        <View className={clsx(Styles['slider-wrapper'], className)}>
            <View style={{ width: "100%" }}>
                <View className={Styles['slider-title']}>
                    <Text>{title}</Text>
                    <Text style={{ color: color, marginLeft: '0.5em' }} className={sliderClassName}>{unit}</Text>
                </View>
                <View>
                    <Slider
                        style={{ marginTop: "20rpx" }}
                        value={value}
                        min={min}
                        max={max}
                        step={step}
                        activeColor={color}
                        onChange={handleChange}
                        onChanging={handleChanging}
                    ></Slider>
                </View>
                <View className={Styles['limit-desc']}>
                    <Text>{min}{unit}</Text>
                    <Text>{max}{unit}</Text>
                </View>
            </View>
        </View>
    )
}

interface DpSliderProps {
    dpCode: string;
    color: string;
}
export function DpSlider({ dpCode, color }: DpSliderProps) {
    const dp = useProps(p => p[dpCode]);
    const schema = useDpSchema();

    if (dp === undefined) {
        return null;
    }
    const property = schema[dpCode]?.property;

    if (!property) return null;
    const action = useActions();
    const { min, max, step, unit, scale } = property;

    return (
        <ViewSlider
            title={Strings.getDpLang(dpCode)}
            value={+scaleNumber(scale, dp)}
            min={+scaleNumber(scale, min)}
            max={+scaleNumber(scale, max)}
            unit={unit}
            step={+scaleNumber(scale, step)}
            color={color}
            uniqueKey={`slider-${dpCode}`}
            sliderClassName={Styles[`slider-${dpCode}${scale > 0 ? '-with-decimal' : ''}`]}
            decimal={scale > 0}
            onChange={(value) => {
                action[dpCode].set(reverseScaleNumber(scale, value));
            }}
        />
    )

}
