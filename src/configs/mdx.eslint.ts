import mdx from "eslint-plugin-mdx";

export default {
	"files": [
		"*.mdx"
	],
	"processor": "mdx/remark",
	"plugins": {
		mdx
	},
	"parser": "eslint-mdx",
	"rules": {
		"mdx/remark": "warn",
		"no-unused-expressions": "error"
	}
};