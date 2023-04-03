import React, { Fragment } from "react";

import { View } from "@ray-js/ray";
import clsx from "clsx";

import styles from "./index.module.less";

export default function DemoWrapper(props: {
	style?: React.CSSProperties;
	children?: React.ReactNode;
	title?: string;
	align?: "left" | "center";
}) {
	const { children, style, title, align } = props;
	return (
		<Fragment>
			{title && (
				<View className={styles.title} textStyle={styles.title}>
					{title}
				</View>
			)}
			<View
				style={style}
				className={clsx(styles.demo, {
					[styles.demoCenter]: align == "center",
				})}
			>
				{children}
			</View>
		</Fragment>
	);
}
