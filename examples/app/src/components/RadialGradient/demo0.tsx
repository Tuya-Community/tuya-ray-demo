import React from "react";
import { RadialGradient } from "@ray-js/ray";

export default function () {
	return (
		<RadialGradient
			width={300}
			height={200}
			stops={[
				{
					offset: "0%",
					stopColor: "#ff0",
				},
				{
					offset: "100%",
					stopColor: "#00f",
				},
			]}
			rx="50%"
			ry="50%"
			fx="50%"
			fy="50%"
		></RadialGradient>
	);
}
