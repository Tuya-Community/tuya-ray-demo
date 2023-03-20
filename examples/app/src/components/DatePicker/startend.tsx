import React from "react";
import { DatePicker } from "@ray-js/ray";
import { View } from "@ray-js/ray";

export default function () {
	const handlePickerChange = (e) => {
		console.log("DatePicker changed", e);
	};

	return (
		<DatePicker
			onChange={handlePickerChange}
			start={"2021-8-5"}
			end={"2024-11-12"}
		>
			<View>选择日期（有开始结束时间）</View>
		</DatePicker>
	);
}
