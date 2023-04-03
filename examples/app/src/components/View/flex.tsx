import React from "react";

import { View } from "@ray-js/ray";

import styles from "./index.module.less";
import clsx from "clsx";

export default function flex() {
	const click = (e) => {
		console.log("click");
	};
	return (
		<View style={{ display: "flex", flexDirection: "row", width: "100%" }}>
			<View
				onTouchEnd={click}
				style={{ flex: 1 }}
				hoverClassName={styles.hoverView}
				className={styles.innerView}
			>
				A
			</View>
			<View
				style={{ flex: 1 }}
				hoverClassName={styles.hoverView}
				className={styles.innerView}
			>
				B
			</View>
			<View
				style={{ flex: 1 }}
				hoverClassName={styles.hoverView}
				className={styles.innerView}
			>
				C
			</View>
		</View>
	);
}
