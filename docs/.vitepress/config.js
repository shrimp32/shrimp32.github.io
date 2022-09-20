module.exports = {
	title: "My Blog VitePress",
	description: "My Blog.",
	base: "/doc/",
	dest: "./dist", //打包目录
	head: [
		// 添加图标
		["link", { rel: "icon", href: "/favicon.ico" }], //图片放在public文件夹下
	],

	markdown: {
		lineNumbers: true,
	},

	themeConfig: {
		// 获取每个文件最后一次 git 提交的 UNIX 时间戳(ms)，同时它将以合适的日期格式显示在每一页的底部
		lastUpdated: true, // string | boolean
		// 启动页面丝滑滚动
		smoothScroll: true,
		// Algolia 搜索
		algolia: {
			apiKey: "your_api_key",
			indexName: "index_name",
		},
		// 导航栏配置
		nav: [
			{ text: "Home", link: "/" },
			{ text: "开发手册", link: "/开发手册/" },
			{ text: "太极开发者社区", link: "https://tech.taiji.com.cn" },
			{
				text: "tdp",
				link: "https://tdp.taiji.com.cn",
			},
		],
		sidebar: getSidebar(),
		footer: {
			message: "Released under the MIT License.",
			copyright: "Copyright © 2019-present 太极开发者社区",
		},
	},
	// 使用插件
	plugins: [
		"@vuepress/active-header-links", // 页面滚动时自动激活侧边栏链接的插件
		"@vuepress/back-to-top", // 返回顶部插件
		"@vuepress/medium-zoom", // 图片预览插件
		"@vuepress/nprogress", //页面顶部进度条
	],
};

function getSidebar() {
	return [
		{
			text: "概述",
			items: [
				{ text: "概述", link: "/概述/" },
				{ text: "进阶", link: "/interview/HTML/advanced" },
			],
			sidebarDepth: 3,
		},
		{
			text: "快速入门",
			items: [
				{ text: "基础", link: "/CSS/" },
				{ text: "进阶", link: "/CSS/advanced" },
			],
		},
		{
			text: "开发指南",
			items: [
				{ text: "基础", link: "/Javascript/" },
				{ text: "进阶", link: "/Javascript/advanced" },
			],
		},
		{
			text: "用户手册",
			items: [
				{ text: "基础", link: "/Vue/" },
				{ text: "进阶", link: "/Vue/advanced" },
			],
		},
		{
			text: "发版说明",
			items: [
				{ text: "基础", link: "/Vue/" },
				{ text: "进阶", link: "/Vue/advanced" },
			],
		},
	];
}
