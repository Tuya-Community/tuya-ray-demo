import React, { Fragment } from "react";

import Header from "@/common/Header";

import Demo0 from "@/components/PageContainer/basic";

import DemoWrapper from "@/common/DemoWrapper";
import Code from "@/common/Code";
const PagePreviewer: React.FC = () => {
	return (
		<Fragment>
			<Header title="PageContainer" description="页面容器" />
			<Code>{` const [isShow, setIsShow] = React.useState(false);
  const toggleIsShow = () => {
    setIsShow(!isShow);
  };
  return (
    <React.Fragment>
      <Button onClick={toggleIsShow}>从底部弹出</Button>
      <PageContainer show={isShow} position='bottom' onClickOverlay={toggleIsShow}>
        Ray 跨端研发
      </PageContainer>
    </React.Fragment>
  );
      `}</Code>
			<DemoWrapper>
				<Demo0 />
			</DemoWrapper>
		</Fragment>
	);
};

export default PagePreviewer;
