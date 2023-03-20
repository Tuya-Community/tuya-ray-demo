import React, { Fragment } from "react";
import { LinearGradient } from "@ray-js/ray";

export default function () {
	return (
		<LinearGradient
			width={300}
			height={300}
			x1="100%"
			y1="0%"
			x2="0%"
			y2="100%"
			stops={{
				"0%": "#61FF00",
				"60%": "#FFC600",
				"100%": "#FF4800",
			}}
		></LinearGradient>
	);
}
