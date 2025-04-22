import mdx from "eslint-plugin-mdx";

export default {
	name: "mdx",
	files: [
		"*.mdx",
	],
	processor: "mdx/remark",
	plugins: {
		mdx,
	},
	languageOptions: {
		parser: "eslint-mdx",
	},
	rules: {
		"mdx/remark": "warn",
		"no-unused-expressions": "error",
	},
};
