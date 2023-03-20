import React from "react";

import { PageContainer, Button } from "@ray-js/ray";

export default function Demo() {
	const [isShow, setIsShow] = React.useState(false);
	const toggleIsShow = () => {
		setIsShow(!isShow);
	};
	return (
		<React.Fragment>
			<Button onClick={toggleIsShow}>从底部弹出</Button>
			<PageContainer
				show={isShow}
				position="bottom"
				onClickOverlay={toggleIsShow}
			>
				Ray 跨端研发
			</PageContainer>
		</React.Fragment>
	);
}
