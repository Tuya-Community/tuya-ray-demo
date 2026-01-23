import { useDpSchema, useProps } from "@ray-js/panel-sdk";
import { c2f, scaleNumber } from "@ray-js/panel-sdk/lib/utils";


/**
 * 获取设备的温标
 * @param device 子设备 如果不传，默认获取主设备的温度单位
 * @returns c 或者 f
 */
export const useTemperatureUnit = () => {
    const unit = useProps(d => d.temp_unit_convert);
    return unit || "c";
}


export const convertTemp = (scale, unit, value) => {
    return (unit === 'c' || !unit) ? scaleNumber(scale, value) : c2f(+scaleNumber(scale, value));
}

/**
 * 
 * @param device 子设备 如果不传，默认获取主设备的温度值
 * @returns 
 */
export const useTemperature = () => {
    const unit = useTemperatureUnit();
    const schema = useDpSchema();
    const temp_current = useProps(d => d.temp_current);
    // @ts-ignore
    const scale = schema['temp_current']?.property?.scale || 0;
    return convertTemp(scale, unit, temp_current);
}

export const useHumidity = (device?: DevInfo) => {
    const humidity_value = useProps(d => d.humidity_value);
    const schema = useDpSchema();
    if (!humidity_value) return 0;
    // @ts-ignore
    const scale = schema['humidity_value']?.property?.scale || 0;
    return scaleNumber(scale, +humidity_value);
}