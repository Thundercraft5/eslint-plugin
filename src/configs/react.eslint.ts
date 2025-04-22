import react from "eslint-plugin-react";
import reactEsnextEslintrc from "./react-esnext.eslint.ts";

export default [reactEsnextEslintrc, {
	name: "react",
	files: [
		"**/*.{tsx,jsx}",
	],
	plugins: {
		react,
	},
	languageOptions: {
		parserOptions: {
			ecmaFeatures: {
				jsx: true,
			},
		},
	},
	rules: {
		"react/jsx-indent": [
			"warn",
			"tab",
		],
		"react/destructuring-assignment": [
			"warn",
		],
		"react/forbid-component-props": [
			"warn",
			{
				forbid: [],
			},
		],
		"react/forbid-dom-props": [
			"warn",
			{
				forbid: [],
			},
		],
		"react/forbid-elements": [
			"warn",
			{
				forbid: [],
			},
		],
		"react/function-component-definition": [
			"warn",
			{
				namedComponents: "arrow-function",
				unnamedComponents: "function-expression",
			},
		],
		"react/hook-use-state": [
			"warn",
		],
		"react/no-access-state-in-setstate": [
			"warn",
		],
		"react/no-array-index-key": [
			"warn",
		],
		"react/no-arrow-function-lifecycle": [
			"warn",
		],
		"react/no-children-prop": [
			"warn",
		],
		"react/no-danger": [
			"warn",
		],
		"react/no-deprecated": [
			"warn",
		],
		"react/no-did-update-set-state": [
			"warn",
		],
		"react/no-did-mount-set-state": [
			"warn",
		],
		"react/no-direct-mutation-state": [
			"warn",
		],
		"react/no-invalid-html-attribute": [
			"warn",
		],
		"react/no-namespace": [
			"warn",
		],
		"react/no-this-in-sfc": [
			"warn",
		],
		"react/no-typos": [
			"warn",
		],
		"react/no-unescaped-entities": [
			"warn",
		],
		"react/no-unused-prop-types": [
			"warn",
		],
		"react/no-unused-state": [
			"warn",
		],
		"react/jsx-no-duplicate-props": [
			"error",
		],
		"react/no-unknown-property": [
			"warn",
		],
		"react/require-optimization": [
			"off",
		],
		"react/require-render-return": [
			"error",
		],
		"react/void-dom-elements-no-children": [
			"warn",
		],
		"react/jsx-boolean-value": [
			"warn",
		],
		"react/self-closing-comp": [
			"warn",
		],
		"react/jsx-max-props-per-line": [
			"warn",
			{
				maximum: {
					single: 4,
					multi: 1,
				},
			},
		],
		"react/jsx-newline": [
			"warn",
			{
				prevent: true,
			},
		],
		"react/jsx-no-comment-textnodes": [
			"warn",
		],
		"react/jsx-no-bind": [
			"warn",
		],
		"react/jsx-no-useless-fragment": [
			"warn",
		],
		"react/jsx-no-undef": [
			"warn",
		],
		"react/jsx-pascal-case": [
			"warn",
		],
		"react/jsx-props-no-multi-spaces": [
			"warn",
		],
		"react/jsx-sort-props": [
			"warn",
		],
		"react/jsx-tag-spacing": [
			"warn",
			{
				closingSlash: "never",
				beforeSelfClosing: "always",
				beforeClosing: "never",
				afterOpening: "never",
			},
		],
		"react/jsx-curly-spacing": [
			"warn",
			{
				when: "always",
				children: {
					when: "always",
				},
				spacing: {
					objectLiterals: "never",
				},
			},
		],
	},
}];
