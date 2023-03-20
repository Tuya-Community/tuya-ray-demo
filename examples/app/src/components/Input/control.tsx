import * as React from "react";

import { Button, Input, View } from "@ray-js/ray";
import { showToast } from "@ray-js/ray";

export default function () {
	const [value, setValue] = React.useState("");
	function handleInput(event: any) {
		// Input 强制受控模式，依然保持高性能表现
		setValue(event.value);
	}

	function handleConfirm(event: any) {
		showToast({ title: "confirm" });
	}

	return (
		<React.Fragment>
			<Input
				placeholder="Your Phone Number"
				type="number"
				value={value}
				onInput={handleInput}
				onConfirm={handleConfirm}
			/>
			<View
				style={{
					display: "flex",
					justifyContent: "space-between",
					flexDirection: "row",
					marginTop: "10rpx",
				}}
			>
				<Button
					onClick={() => {
						setValue(Math.floor(Math.random() * 123131).toString());
					}}
				>
					Update value
				</Button>
				<Button
					onClick={() => {
						setValue("123456789");
					}}
				>
					Set value
				</Button>
				<Button
					onClick={() => {
						console.log("clear");
						setValue("");
					}}
				>
					Clear value
				</Button>
			</View>
		</React.Fragment>
	);
}
