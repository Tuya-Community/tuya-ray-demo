import React from "react";

import { Slider } from "@ray-js/ray";

export default function HorizontalScroll() {
	const onChange = (e) => {
		console.log("SliderChange", e);
	};

	const onChanging = (e) => {
		console.log("SliderChanging", e);
	};

	return <Slider step={5} onChange={onChange} onChanging={onChanging} />;
}
