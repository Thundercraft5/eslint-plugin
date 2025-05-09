import regexp from "eslint-plugin-regexp";

export default {
	name: "plugin/regexp",
	files: [
		"*/**.{js,ts,tsx,mts,cjs,mjs,cts}",
	],
	plugins: {
		regexp,
	},
	rules: {
		"regexp/no-empty-alternative": [
			"warn",
		],
		"regexp/no-empty-capturing-group": [
			"warn",
		],
		"regexp/no-empty-character-class": [
			"warn",
		],
		"regexp/no-empty-group": [
			"warn",
		],
		"regexp/no-empty-lookarounds-assertion": [
			"warn",
		],
		"regexp/no-lazy-ends": [
			"warn",
			{
				ignorePartial: true,
			},
		],
		"regexp/no-useless-assertions": [
			"warn",
		],
		"regexp/no-useless-backreference": [
			"warn",
		],
		"regexp/no-useless-dollar-replacements": [
			"warn",
		],
		"regexp/no-dupe-disjunctions": [
			"warn",
		],
		"regexp/confusing-quantifier": [
			"warn",
		],
		"regexp/control-character-escape": [
			"warn",
		],
		"regexp/negation": [
			"warn",
		],
		"regexp/no-dupe-characters-character-class": [
			"warn",
		],
		"regexp/no-invisible-character": [
			"warn",
		],
		"regexp/no-legacy-features": [
			"warn",
		],
		"regexp/no-non-standard-flag": [
			"warn",
		],
		"regexp/no-obscure-range": [
			"warn",
		],
		"regexp/no-octal": [
			"warn",
		],
		"regexp/no-standalone-backslash": [
			"warn",
		],
		"regexp/no-trivially-nested-assertion": [
			"warn",
		],
		"regexp/no-trivially-nested-quantifier": [
			"warn",
		],
		"regexp/no-unused-capturing-group": [
			"warn",
		],
		"regexp/sort-flags": [
			"warn",
		],
		"regexp/unicode-escape": [
			"warn",
		],
		"regexp/sort-character-class-elements": [
			"warn",
		],
		"regexp/prefer-result-array-groups": [
			"warn",
		],
		"regexp/prefer-question-quantifier": [
			"warn",
		],
		"regexp/prefer-plus-quantifier": [
			"warn",
		],
		"regexp/require-unicode-regexp": [
			"warn",
		],
		"regexp/no-useless-two-nums-quantifier": [
			"warn",
		],
		"regexp/optimal-lookaround-quantifier": [
			"warn",
		],
		"regexp/optimal-quantifier-concatenation": [
			"warn",
		],
		"regexp/prefer-predefined-assertion": [
			"warn",
		],
		"regexp/use-ignore-case": [
			"warn",
		],
		"regexp/hexadecimal-escape": [
			"warn",
		],
		"regexp/letter-case": [
			"warn",
			{
				caseInsensitive: "lowercase",
				unicodeEscape: "uppercase",
				hexadecimalEscape: "uppercase",
				controlEscape: "uppercase",
			},
		],
	},
};
