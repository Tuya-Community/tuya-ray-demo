import React from "react";
import { Button, View } from "@ray-js/ray";
import styles from "./index.module.less";

export default function () {
	return (
		<View className={styles.buttonWrapper}>
			<Button> Button </Button>
			<Button loading style={{ marginLeft: "8px", marginRight: "8px" }}>
				Loading
			</Button>
			<Button disabled> Disabled </Button>
		</View>
	);
}
