import DefaultTheme from "vitepress/theme";
// import Theme from "awesome-vitepress-theme";
import "./custom.css";
import Layout from "./Layout.vue";

export default {
	Layout,
	...DefaultTheme,
	NotFound: () => "custom 404", // <- this is a Vue 3 functional component
	enhanceApp({ app, router, siteData }) {
		// app is the Vue 3 app instance from `createApp()`. router is VitePress'
		// custom router. `siteData`` is a `ref`` of current site-level metadata.
	},
};
