import React from "react";

import DemoWrapper from "@/common/DemoWrapper";

import { usePageEvent } from "ray";
import { Button } from "@ray-js/ray";
import {
	stopPullDownRefresh,
	showToast,
	startPullDownRefresh,
} from "@ray-js/ray";

const PagePreviewer = () => {
	usePageEvent("onPullDownRefresh", () => {
		setTimeout(() => {
			showToast({
				titile: "刷新成功",
			});
			stopPullDownRefresh();
		});
	});

	return (
		<DemoWrapper align="center">
			<Button onClick={startPullDownRefresh}>下拉刷新</Button>
		</DemoWrapper>
	);
};

export default PagePreviewer;
