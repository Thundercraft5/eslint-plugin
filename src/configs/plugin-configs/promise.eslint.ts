import promise from "eslint-plugin-promise"; // @ts-ignore

export default {
	name: "promise",
	files: ["**/*.{js,ts,mjs,cjs,cts,mts,mdx,tsx,jsx}"],
	plugins: {
		promise,
	},
	rules: {
		"promise/always-return": "error",
		"promise/no-return-wrap": "error",
		"promise/param-names": "error",
		"promise/catch-or-return": "error",
		"promise/no-native": "off",
		"promise/no-nesting": "warn",
		"promise/no-promise-in-callback": "warn",
		"promise/no-callback-in-promise": "warn",
		"promise/avoid-new": "warn",
		"promise/no-new-statics": "error",
		"promise/no-return-in-finally": "warn",
		"promise/valid-params": "warn",
		"promise/prefer-catch": "warn",
		"promise/no-multiple-resolved": "error",
	},
};