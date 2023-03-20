/**
 * 抽象首页页面配置, 适用于 NavPanel 导航面板
 */

export const COMPONENTS = [
	{
		title: "基础组件",
		list: [
			{ name: "View", path: "/basic/view" },
			{ name: "Image", path: "/basic/image" },
			{ name: "Text", path: "/basic/text" },
			{ name: "Icon", path: "/basic/icon" },
		],
	},
	{
		title: "视图容器",
		list: [
			{ name: "Swiper", path: "/basic/swiper" },
			{ name: "ScrollView", path: "/basic/scroll-view" },
			{ name: "PageContainer", path: "/basic/page-container" },
		],
	},
	{
		title: "表单组件",
		list: [
			{ name: "Input", path: "/basic/input" },
			{ name: "Button", path: "/basic/button" },
			{ name: "Textarea", path: "/basic/textarea" },
			{ name: "Checkbox", path: "/basic/checkbox" },
			{ name: "Radio", path: "/basic/radio" },
			{ name: "Switch", path: "/basic/switch" },
			{ name: "Picker", path: "/basic/picker" },
			{ name: "PickerView", path: "/basic/picker-view" },
			{ name: "Slider", path: "/basic/slider" },
		],
	},
	{
		title: "动画库",
		list: [{ name: "React-Motion", path: "/basic/react-motion" }],
	},
];

export const BASIC_ROUTES = COMPONENTS.reduce((acc, comps) => {
	return acc.concat(comps.list);
}, []).map((r) => {
	return { route: r.path, path: r.path + "/index" };
});
