import markdown from "eslint-plugin-markdown"; // @ts-ignore
export default [
	{
		"files": [
			"**/*.md"
		],
		"plugins": {
			markdown
		},
		"processor": "markdown/markdown"
	},
	{
		"files": [
			"**/*.md/*.js"
		],
		"rules": {}
	}
]