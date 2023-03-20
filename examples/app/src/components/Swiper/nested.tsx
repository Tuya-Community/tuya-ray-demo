import React from "react";

import { Swiper, View } from "@ray-js/ray";

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
	return (
		<React.Fragment>
			<Swiper
				className={styles.nested}
				dots
				dataSource={[randomColor(), randomColor(), randomColor()]}
				renderItem={(color: string) => {
					return (
						<View
							className={styles.nestedItem}
							style={{ backgroundColor: color }}
						>
							<Swiper
								vertical
								dots
								className={styles.nestedSwiper}
								dataSource={[randomColor(), randomColor(), randomColor()]}
								renderItem={(color: string, index) => {
									return (
										<View
											className={styles.nestedSwiper}
											style={{ backgroundColor: color }}
										></View>
									);
								}}
							/>
						</View>
					);
				}}
			/>
		</React.Fragment>
	);
}
