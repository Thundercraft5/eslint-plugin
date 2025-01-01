import eslintComments from "eslint-plugin-comments";

export default {
	name: "plugin/eslint-comments",
	"files": [
		"**/*.{js,ts,tsx,jsx}",
	],
	"plugins": {
		"eslint-comments": eslintComments,
	},
	"rules": {
		"eslint-comments/no-unused-disable": [
			"warn",
		],
		"eslint-comments/no-unused-enable": [
			"warn",
		],
		"eslint-comments/no-duplicate-disable": [
			"warn",
		],
		"eslint-comments/no-aggregating-enable": [
			"warn",
		],
		"eslint-comments/no-use": [
			"warn",
			{
				"allow": [
					"eslint-disable-next-line",
					"eslint-disable-line",
					"eslint-enable",
					"eslint-disable",
					"global",
				],
			},
		],
	},
};	