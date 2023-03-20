import * as React from "react";

import { Input } from "@ray-js/ray";
import { showToast } from "@ray-js/ray";

export default function () {
	function handleConfirm(event: any) {
		showToast({ title: "confirm click" });
	}

	return (
		<React.Fragment>
			<Input
				placeholder="Search"
				type="text"
				wechat-confirm-type="search"
				onConfirm={handleConfirm}
			/>
		</React.Fragment>
	);
}
