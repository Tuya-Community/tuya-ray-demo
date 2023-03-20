import React from "react";
import { TimePicker } from "@ray-js/ray";
import { View } from "@ray-js/ray";

export default function () {
	const [currentTime, setCurrentTime] = React.useState("12:00");
	const handlePickerChange = (e) => {
		console.log("TimePicker changed", e);
		setCurrentTime(e.value);
	};

	return (
		<TimePicker onChange={handlePickerChange} value={currentTime}>
			<View>时间选择器</View>
		</TimePicker>
	);
}
