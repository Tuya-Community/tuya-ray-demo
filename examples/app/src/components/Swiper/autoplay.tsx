import React, { useState } from "react";

import { View, Swiper } from "@ray-js/ray";

import styles from "./index.module.less";

function randomColor() {
	const letters = "0123456789ABCDEF";
	let color = "#";
	for (let i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

export default function Demo() {
	const [current, setCurrent] = useState(1);
	return (
		<Swiper
			className={styles.swiper}
			autoplay
			interval={2500}
			dots={true}
			current={current}
			dataSource={[randomColor(), randomColor(), randomColor()]}
			renderItem={(color: string) => {
				return (
					<View
						className={styles.swiperItem}
						style={{ backgroundColor: color }}
					/>
				);
			}}
			onChange={(event) => {
				const { current } = event.detail;
				setCurrent(current);
			}}
			onAfterChange={(event) => {
				// console.log('onAfterChange', event);
			}}
		/>
	);
}
