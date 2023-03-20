import React from "react";
import { PickerView } from "@ray-js/ray";

export default function () {
	const [current, setCurrent] = React.useState(0);

	const handlePickerChange = (e) => {
		setCurrent(e.value);
	};

	const range = ["巴西", "中国", "日本", "美国"];

	return (
		<PickerView
			onChange={handlePickerChange}
			range={range}
			value={current}
		></PickerView>
	);
}
