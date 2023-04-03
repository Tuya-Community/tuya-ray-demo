import React from "react";
import { Picker, View } from "@ray-js/ray";

export default function () {
	const [current, setCurrent] = React.useState(0);

	const handlePickerChange = (e) => {
		setCurrent(+e.value);
	};

	const range = ["美国", "中国", "巴西", "日本"];

	return (
		<Picker
			onChange={handlePickerChange}
			range={range}
			value={current}
			mode="selector"
		>
			<View style={{ flexDirection: "row" }}>
				当前选择的是:{range[current]}
			</View>
		</Picker>
	);
}
