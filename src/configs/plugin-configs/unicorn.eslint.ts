import unicorn from "eslint-plugin-unicorn";

export default {
	name: "plugin/unicorn",
	files: [
		"*/**.{js,ts,tsx,mts,cjs,mjs,cts}",
	],
	plugins: {
		unicorn,
	},
	rules: {
		"unicorn/catch-error-name": [
			"warn",
			{
				ignore: [
					"^[a-z][eE]rror\\d*$",
					"^e(rr|xc?(eption)?)?$",
					"^ignore$",
					"^_$",
				],
			},
		],
		"unicorn/consistent-function-scoping": [
			"warn",
		],
		"unicorn/custom-error-definition": [
			"warn",
		],
		"unicorn/empty-brace-spaces": [
			"warn",
		],
		"unicorn/error-message": [
			"warn",
		],
		"unicorn/escape-case": [
			"warn",
		],
		"unicorn/explicit-length-check": [
			"warn",
		],
		"unicorn/filename-case": [
			"warn",
			{
				cases: {
					camelCase: true,
					pascalCase: true,
				},
			},
		],
		"unicorn/new-for-builtins": [
			"warn",
		],
		"unicorn/no-array-push-push": [
			"warn",
		],
		"unicorn/no-for-loop": [
			"warn",
		],
		"unicorn/no-hex-escape": [
			"warn",
		],
		"unicorn/no-instanceof-array": [
			"warn",
		],
		"unicorn/no-useless-fallback-in-spread": [
			"warn",
		],
		"unicorn/no-object-as-default-parameter": [
			"warn",
		],
		"unicorn/no-useless-promise-resolve-reject": [
			"warn",
		],
		"unicorn/prefer-add-event-listener": [
			"warn",
		],
		"unicorn/prefer-array-index-of": [
			"warn",
		],
		"unicorn/prefer-array-some": [
			"warn",
		],
		"unicorn/prefer-negative-index": [
			"warn",
		],
		"unicorn/prefer-at": [
			"warn",
		],
		"unicorn/prefer-code-point": [
			"warn",
		],
		"unicorn/prefer-date-now": [
			"warn",
		],
		"unicorn/prefer-default-parameters": [
			"warn",
		],
		"unicorn/prefer-dom-node-append": [
			"warn",
		],
		"unicorn/prefer-dom-node-dataset": [
			"warn",
		],
		"unicorn/prefer-dom-node-remove": [
			"warn",
		],
		"unicorn/prefer-dom-node-text-content": [
			"warn",
		],
		"unicorn/prefer-includes": [
			"warn",
		],
		"unicorn/prefer-keyboard-event-key": [
			"warn",
		],
		"unicorn/prefer-modern-dom-apis": [
			"warn",
		],
		"unicorn/prefer-object-from-entries": [
			"warn",
		],
		"unicorn/prefer-optional-catch-binding": [
			"warn",
		],
		"unicorn/prefer-prototype-methods": [
			"warn",
		],
		"unicorn/prefer-query-selector": [
			"warn",
		],
		"unicorn/prefer-set-has": [
			"warn",
		],
		"unicorn/prefer-spread": [
			"warn",
		],
		"unicorn/prefer-string-replace-all": [
			"warn",
		],
		"unicorn/prefer-string-starts-ends-with": [
			"warn",
		],
		"unicorn/prefer-switch": [
			"warn",
		],
		"unicorn/prefer-ternary": [
			"warn",
		],
		"unicorn/prefer-top-level-await": [
			"warn",
		],
		"unicorn/prefer-type-error": [
			"warn",
		],
		"unicorn/prefer-string-slice": [
			"warn",
		],
		"unicorn/require-array-join-separator": [
			"warn",
		],
		"unicorn/require-number-to-fixed-digits-argument": [
			"warn",
		],
		"unicorn/throw-new-error": [
			"warn",
		],
		"unicorn/template-indent": [
			"warn",
		],
	},
};
