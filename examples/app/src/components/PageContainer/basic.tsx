import React from "react";

import { PageContainer, Button, View } from "@ray-js/ray";

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
				<View
					style={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						height: "300px",
					}}
				>
					Ray 跨端研发
				</View>
			</PageContainer>
		</React.Fragment>
	);
}
