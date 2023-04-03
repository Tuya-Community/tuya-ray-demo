/* eslint-disable @typescript-eslint/no-var-requires */
/**
 * 抽象首页页面配置, 适用于 NavPanel 导航面板
 */
export const COMPONENTS = [
	{
		title: "TabBar",
		list: [
			{
				name: "showTabBar",
				onClick() {
					const { showTabBar } = require("@ray-js/ray");
					showTabBar({ animation: true });
				},
			},
			{
				name: "hideTabBar",
				onClick() {
					const { hideTabBar } = require("@ray-js/ray");
					hideTabBar({ animation: true });
				},
			},
		],
	},
	{
		title: "App",
		list: [
			{
				name: "getCurrentPages",
				onClick() {
					const { getCurrentPages } = require("@ray-js/ray");
					console.log(getCurrentPages());
				},
			},
			{
				name: "getSystemInfoSync",
				onClick() {
					const { getSystemInfoSync } = require("@ray-js/ray");
					console.log("getSystemInfoSync 返回结果", getSystemInfoSync());
				},
			},
			{
				name: "getSystemInfo",
				async onClick() {
					const { getSystemInfo } = require("@ray-js/ray");
					console.log("getSystemInfo 返回结果", await getSystemInfo());
				},
			},
		],
	},
	{
		title: "导航",
		list: [
			{ name: "setNavigationBarTitle", path: "/api/navigation-bar" },
			{ name: "setNavigationBarColor", path: "/api/navigation-bar" },
			{
				name: "switchTab",
				path: "/api/redirect-to",
				onClick() {
					const { switchTab } = require("@ray-js/ray");
					switchTab({ url: "/pages/home/index" });
				},
			},
			{
				name: "navigateTo",
				path: "/api/redirect-to",
				onClick() {
					const { navigateTo } = require("@ray-js/ray");
					// ty todo 需要和微信保持统一
					navigateTo({
						url: "/api/navigation-back/index",
					});
				},
			},
			{
				name: "redirectTo",
				path: "/api/navigation-back",
				onClick() {
					const { navigateTo } = require("@ray-js/ray");
					navigateTo({
						url: "/api/navigation-back/index",
					});
				},
			},
			{
				name: "reLaunch",
				path: "/api/reLaunch",
				onClick() {
					const { reLaunch } = require("@ray-js/ray");
					reLaunch({ url: "/api/reLaunch/index" });
				},
			},
		],
	},
	{
		title: "视图",
		list: [
			{ name: "getElementById", path: "/api/get-element-by-id" },
			{
				name: "showToast",
				onClick() {
					const { showToast } = require("@ray-js/ray");
					showToast({
						title: "成功",
						// icon: 'success',
						duration: 2000,
					});
				},
			},
			{
				name: "showLoading",
				onClick() {
					const { showLoading } = require("@ray-js/ray");
					showLoading({
						title: "loading",
						success() {
							console.log("showLoading success");
						},
						fail() {
							console.log("showLoading fail");
						},
					});
				},
			},
			{
				name: "hideLoading",
				onClick() {
					const { hideLoading } = require("@ray-js/ray");
					hideLoading({
						success() {
							console.log("hideLoading success");
						},
						fail(e) {
							console.log("hideLoading fail", e);
						},
					});
				},
			},
		],
	},
	// {
	//   title: '图片',
	//   list: []
	// },
	{
		title: "缓存",
		list: [
			{
				name: "setStorage",
				onClick() {
					const { setStorage } = require("@ray-js/ray");
					setStorage({
						key: "key",
						data: "value",
						success() {
							console.log("setStorage success");
						},
						fail(e) {
							console.log("setStorage fail", e);
						},
					});
				},
			},
			{
				name: "getStorage",
				onClick() {
					const { getStorage, showToast } = require("@ray-js/ray");

					getStorage({
						key: "key",
						success(res) {
							showToast({
								title: res.data,
							});
							console.log("getStorage success");
						},
						fail(e) {
							console.log("getStorage fail", e);
						},
					});
				},
			},
		],
	},
	{
		title: "剪贴板",
		list: [
			{
				name: "setClipboardData",
				onClick() {
					const { setClipboardData } = require("@ray-js/ray");

					setClipboardData({
						data: "data",
						success(res) {
							console.log("setClipboardData success");
						},
						fail(e) {
							console.log("setClipboardData fail", e);
						},
					});
				},
			},
			{
				name: "getClipboardData",
				onClick() {
					const { getClipboardData, showToast } = require("@ray-js/ray");

					getClipboardData({
						success(res) {
							showToast({
								title: res.data,
							});
							console.log("getClipboardData success");
						},
						fail(e) {
							console.log("getClipboardData fail", e);
						},
					});
				},
			},
		],
	},
	{
		title: "多语言",
		list: [
			{
				name: "getLangKey",
				onClick() {
					const { getLangKey, showToast } = require("@ray-js/ray");

					getLangKey({
						success(res) {
							showToast({
								title: res.langKey,
							});
							console.log("getLangKey success");
						},
						fail(e) {
							console.log("getLangKey fail", e);
						},
					});
				},
			},
			{
				name: "getLangContent",
				onClick() {
					const { getLangContent, showToast } = require("@ray-js/ray");

					getLangContent({
						success(res) {
							showToast({
								title: JSON.stringify(res.langContent),
							});
							console.log("getLangContent success");
						},
						fail(e) {
							console.log("getLangContent fail", e);
						},
					});
				},
			},
		],
	},
	{
		title: "网络",
		list: [
			{
				name: "getNetworkType",
				onClick() {
					const { getNetworkType, showToast } = require("@ray-js/ray");

					getNetworkType({
						success(res) {
							showToast({
								title: `网络类型: ${res.networkType} 信号强弱: ${res.signalStrength}`,
							});
							console.log("getNetworkType success");
						},
						fail(e) {
							console.log("getNetworkType fail", e);
						},
					});
				},
			},
		],
	},
	{
		title: "下拉刷新",
		list: [
			{
				name: "startPullDownRefresh",
				path: "/api/pulldown",
				onClick() {
					const { navigateTo } = require("@ray-js/ray");

					navigateTo({
						url: "/api/pulldown/index",
					});
				},
			},
		],
	},
	// {
	// 	title: "动画",
	// 	list: [],
	// },
];

const allPath = COMPONENTS.reduce((acc, comps) => acc.concat(comps.list), [])
	.map((r) => r.path)
	.filter((i) => !!i);

export const API_ROUTES = Array.from(new Set(allPath)).map((path) => {
	return { route: path, path: path + "/index" };
});
