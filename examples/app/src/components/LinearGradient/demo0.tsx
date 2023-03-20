import React from "react";
import { LinearGradient } from "@ray-js/ray";

export default function () {
	return (
		<LinearGradient
			x1="0%"
			y1="0%"
			x2="0%"
			y2="100%"
			stops={{
				"0%": "blue",
				"100%": "pink",
			}}
			width={300}
			height={300}
		></LinearGradient>
	);
}
