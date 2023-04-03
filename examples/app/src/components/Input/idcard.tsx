import React from "react";

import { Input } from "@ray-js/ray";
import { showToast } from "@ray-js/ray";

export default function () {
	function handleConfirm(event: any) {
		showToast({ title: "confirm click" });
	}

	// @ts-ignore
	return (
		<Input placeholder="ID Number" type="idcard" onConfirm={handleConfirm} />
	);
}
