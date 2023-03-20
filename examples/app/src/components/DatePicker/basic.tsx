import React from "react";
import { DatePicker } from "@ray-js/ray";
import { View } from "@ray-js/ray";

export default function () {
	const handlePickerChange = (e) => {
		console.log("DatePicker changed", e);
	};

	return (
		<DatePicker onChange={handlePickerChange}>
			<View>日期选择器</View>
		</DatePicker>
	);
}
