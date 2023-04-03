import React from "react";

import { Slider } from "@ray-js/ray";

export default function HorizontalScroll() {
	return <Slider step={5} showValue activeColor="orange" blockColor="pink" />;
}
