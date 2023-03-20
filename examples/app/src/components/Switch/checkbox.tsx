import React from "react";
import { Switch } from "@ray-js/ray";
import { showToast } from "@ray-js/ray";

export default function () {
	return (
		<Switch
			checked
			type="checkbox"
			onChange={(event) => {
				showToast({ title: JSON.stringify(event), icon: "none" });
			}}
		/>
	);
}
