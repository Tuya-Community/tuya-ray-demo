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
				上拉下滑 pullUp
			</Button>
			<Motion.PullUp
				// @ts-ignore
				show={isShow}
				dropHeight={200}
				style={{
					position: "absolute",
					bottom: 0,
					left: 0,
				}}
				onShow={() => {
					console.log("Motion PullUp onShow");
				}}
				onHide={() => {
					console.log("Motion PullUp onHide");
				}}
			>
				<View
					style={{
						width: "100vw",
						height: "200px",
						backgroundColor: "rgba(0,0,0,.3)",
					}}
				></View>
			</Motion.PullUp>
		</Fragment>
	);
}
