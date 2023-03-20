import React from "react";

import { Button } from "@ray-js/ray";
import { navigateBack } from "@ray-js/ray";
import DemoWrapper from "@/common/DemoWrapper";

const PagePreviewer = () => {
	const back = () => {
		navigateBack();
	};
	return (
		<DemoWrapper>
			<Button onClick={back}>navigation back 返回上一页面</Button>
		</DemoWrapper>
	);
};

export default PagePreviewer;
