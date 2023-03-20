import React from "react";

import { Input } from "@ray-js/ray";
import { showToast } from "@ray-js/ray";

export default function () {
	function handleConfirm(event: any) {
		showToast({ title: "confirm click" });
	}

	return (
		<Input placeholder="Product Price" type="digit" onConfirm={handleConfirm} />
	);
}
