import React, { Fragment } from "react";

import { Motion, View, Button } from "@ray-js/ray";

export default function Demo() {
	const [isShow, setIsShow] = React.useState(false);
	return (
		<Fragment>
			<Button
				style={{
					position: "relative",
					zIndex: 100,
				}}
				onClick={() => {
					setIsShow((preState) => !preState);
				}}
			>
				下拉上推 PushDown
			</Button>
			<Motion.PushDown
				// @ts-ignore
				show={isShow}
				style={{
					position: "absolute",
					bottom: 0,
					left: 0,
				}}
				onShow={() => {
					console.log("Motion PushDown onShow");
				}}
				onHide={() => {
					console.log("Motion PushDown onHide");
				}}
			>
				<View
					style={{
						width: "100vw",
						height: "200px",
						backgroundColor: "rgba(0,0,0,.3)",
					}}
				></View>
			</Motion.PushDown>
		</Fragment>
	);
}
