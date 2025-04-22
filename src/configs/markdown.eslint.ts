import markdown from "eslint-plugin-markdown";

export default [
	{
		name: "markdown",
		files: [
			"**/*.md",
		],
		plugins: {
			markdown,
		},
		processor: "markdown/markdown",
	},
	{
		name: "markdown/js",
		files: [
			"**/*.md/*.js",
		],
		rules: {},
	},
];
