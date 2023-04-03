import React from "react";

import { Text, View, ScrollView } from "@ray-js/ray";

import styles from "./index.module.less";

export interface CodeProps {
	title?: string;
}

export default function Code({
	children,
	title,
}: React.PropsWithChildren<CodeProps>) {
	const lines = (children as string).split("\n").filter((l) => l.trim() !== "");
	return (
		<React.Fragment>
			<View className={styles.title}>
				<Text>{title ? title : "Basic"}</Text>
				<Text className={styles.titleExample}>example</Text>
			</View>
			<ScrollView className={styles.scroll} scrollX scrollY>
				<View className={styles.code}>
					<Text style={{ wordBreak: "keep-all" }}>{lines.join("\n")}</Text>
				</View>
			</ScrollView>
		</React.Fragment>
	);
}
