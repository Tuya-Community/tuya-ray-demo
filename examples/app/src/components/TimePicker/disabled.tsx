import React from "react";
import { TimePicker } from "@ray-js/ray";
import { View } from "@ray-js/ray";

export default function () {
	const handlePickerChange = (e) => {
		console.log("TimePicker changed", e);
	};

	return (
		<TimePicker
			onChange={handlePickerChange}
			start={"09:00"}
			end={"17:00"}
			disabled
		>
			<View>选择时间（不可选）</View>
		</TimePicker>
	);
}
