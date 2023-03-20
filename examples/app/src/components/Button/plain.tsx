import React from "react";
import { Button, View } from "@ray-js/ray";
import styles from "./index.module.less";

export default function () {
	return (
		<View className={styles.buttonWrapper}>
			<Button plain={true} type="primary" style={{ marginRight: 20 }}>
				Plain + Primary
			</Button>
			<Button plain={true} type="warn">
				Plain + Warn
			</Button>
		</View>
	);
}
