import React from "react";
import { Button, View } from "@ray-js/ray";
import styles from "./index.module.less";

export default function () {
	return (
		<View className={styles.buttonWrapper}>
			<Button style={{ marginRight: 24 }}> Default </Button>
			<Button size="mini"> Mini </Button>
		</View>
	);
}
