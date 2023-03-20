import React from "react";
import { Picker } from "@ray-js/ray";
import { View } from "@ray-js/ray";

export default function () {
	const [current, setCurrent] = React.useState([0, 0, 0]);

	const handlePickerChange = (e) => {
		setCurrent(e.value);
	};

	const handleColumnChange = (e) => {
		console.log("picker column change", e);
	};

	const range = [
		["无脊柱动物", "脊柱动物"],
		["扁性动物", "线形动物", "环节动物", "软体动物", "节肢动物"],
		["猪肉绦虫", "吸血虫"],
	];
	return (
		<Picker
			onColumnChange={handleColumnChange}
			onChange={handlePickerChange}
			range={range}
			value={current}
		>
			<View style={{ flexDirection: "row" }}>
				当前选择的是:{range[0][+current[0]]}, {range[1][+current[1]]},{" "}
				{range[2][+current[2]]}
			</View>
		</Picker>
	);
}
