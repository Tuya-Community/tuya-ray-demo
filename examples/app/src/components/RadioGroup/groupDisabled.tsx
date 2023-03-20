import React from "react";
import { RadioGroup } from "@ray-js/ray";

export default function () {
	const options = [
		{ label: "Apple", value: "Apple", color: "#ff00ff" },
		{ label: "Pear", value: "Pear", checked: true },
		{ label: "Orange", value: "Orange", disabled: true },
	];
	return <RadioGroup disabled options={options} />;
}
