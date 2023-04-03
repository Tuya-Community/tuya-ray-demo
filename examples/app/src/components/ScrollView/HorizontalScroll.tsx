import React from "react";

import { ScrollView, View } from "@ray-js/ray";
import { isWeb } from "@ray-js/env";

function hls() {
	return Math.floor(Math.random() * 55) + 200;
}

function randomColor() {
	return `rgb(${hls()},${hls()},${hls()})`;
}

function onScroll(event: any, type: string) {
	if (isWeb) {
		console.log(
			type === "Y"
				? event.currentTarget.scrollTop
				: event.currentTarget.scrollLeft
		);
	} else {
		console.log(event);
	}
}

function onScrollToLower() {
	console.log("触【底】了");
}

function onScrollToUpper() {
	console.log("触【顶】了");
}

const itemStyle = {
	width: "200rpx",
	height: "667rpx",
	display: "inline-block",
};

export default function HorizontalScroll() {
	return (
		<ScrollView
			style={{
				width: "702rpx",
				height: "667rpx",
				backgroundColor: "#fff",
				whiteSpace: "nowrap",
			}}
			scrollX
			onScroll={(event) => onScroll(event, "X")}
			onScrollToLower={onScrollToLower}
			onScrollToUpper={onScrollToUpper}
		>
			<View style={{ backgroundColor: randomColor(), ...itemStyle }} />
			<View style={{ backgroundColor: randomColor(), ...itemStyle }} />
			<View style={{ backgroundColor: randomColor(), ...itemStyle }} />
			<View style={{ backgroundColor: randomColor(), ...itemStyle }} />
			<View style={{ backgroundColor: randomColor(), ...itemStyle }} />
			<View style={{ backgroundColor: randomColor(), ...itemStyle }} />
			<View style={{ backgroundColor: randomColor(), ...itemStyle }} />
			<View style={{ backgroundColor: randomColor(), ...itemStyle }} />
			<View style={{ backgroundColor: randomColor(), ...itemStyle }} />
			<View style={{ backgroundColor: randomColor(), ...itemStyle }} />
			<View style={{ backgroundColor: randomColor(), ...itemStyle }} />
			<View style={{ backgroundColor: randomColor(), ...itemStyle }} />
		</ScrollView>
	);
}
