import React from "react";

import { Slider } from "@ray-js/ray";

export default function HorizontalScroll() {
	return (
		<Slider
			onChange={(e) => {
				console.log("SliderChange", e);
			}}
		/>
	);
}
