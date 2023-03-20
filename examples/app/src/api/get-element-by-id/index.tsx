import React from "react";

import { Button, View } from "@ray-js/ray";
import { getElementById } from "@ray-js/ray";
import DemoWrapper from "@/common/DemoWrapper";

const PagePreviewer = () => {
	const getView = async () => {
		const node = await getElementById("#view1");
		console.log("view1节点信息", node);
	};
	return (
		<DemoWrapper>
			<View
				style={{ width: "30px", height: "30px", backgroundColor: "#007AFF" }}
				id="view1"
			></View>
			<Button onClick={getView}>点击获取 节点相关信息</Button>
		</DemoWrapper>
	);
};

export default PagePreviewer;
