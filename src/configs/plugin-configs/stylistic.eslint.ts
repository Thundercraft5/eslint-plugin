import stylistic from "@stylistic/eslint-plugin";

export default {
	name: "plugin/stylistic",
	plugins: {
		"@stylistic": stylistic,
	},
	rules: {
		"@stylistic/curly-newline": ["warn", {
			minElements: 2,
			multiline: true,
			consistent: true,
		}],
		"@stylistic/indent-binary-ops": ["warn"],
		"@stylistic/type-generic-spacing": ["warn"],
		"@stylistic/type-named-tuple-spacing": ["warn"],
		"@stylistic/no-multiple-empty-lines": ["warn", { max: 2, maxBOF: 0 }],
		"@stylistic/no-mixed-spaces-and-tabs": ["warn"],
		"@stylistic/no-mixed-operators": ["warn"],
		"@stylistic/no-floating-decimal": ["warn"],
		"@stylistic/no-extra-semi": ["warn"],
		"@stylistic/no-extra-parens": ["warn", "all", {
			nestedBinaryExpressions: false,
			ternaryOperandBinaryExpressions: false,
			enforceForNewInMemberExpressions: false,
			enforceForFunctionPrototypeMethods: false,
		}],
		"@stylistic/no-confusing-arrow": ["warn", { allowParens:true }],
		"@stylistic/function-call-spacing": ["warn", "never"],
		"@stylistic/eol-last": ["warn", "always"],
		"@stylistic/arrow-spacing": ["warn"],
		"@stylistic/arrow-parens": ["warn", "as-needed"],
		"@stylistic/array-element-newline": ["warn", "consistent"],
		"@stylistic/array-bracket-spacing": ["warn", "never", {
			singleValue: false,

		}],
		"@stylistic/array-bracket-newline": ["warn", "consistent"],
		"@stylistic/multiline-comment-style": ["warn", "starred-block"],
		"@stylistic/semi-style": ["warn", "last"],
		"@stylistic/rest-spread-spacing": ["warn", "never"],
		"@stylistic/quote-props": ["warn", "consistent-as-needed"],
		"@stylistic/no-multi-spaces": ["warn", {
			ignoreEOLComments: true,
		}],
		"@stylistic/no-whitespace-before-property": ["warn"],
		"@stylistic/operator-linebreak": ["warn", "before"],
		"@stylistic/one-var-declaration-per-line": ["warn", "initializations"],
		"@stylistic/no-trailing-spaces": [
			"warn",
		],
		"@stylistic/block-spacing": [
			"warn",
			"always",
		],
		"@stylistic/brace-style": [
			"warn",
			"1tbs",
			{
				allowSingleLine: true,
			},
		],
		"@stylistic/func-call-spacing": [
			"warn",
		],
		"@stylistic/indent": [
			"warn",
			"tab",
			{
				MemberExpression: "off",
				SwitchCase: 1,
				flatTernaryExpressions: true,
				offsetTernaryExpressions: false,
				ImportDeclaration: 1,
			},
		],
		"@stylistic/semi": [
			"warn",
		],
		"@stylistic/comma-spacing": [
			"warn",
			{
				after: true,
				before: false,
			},
		],
		"@stylistic/comma-dangle": [
			"warn",
			"always-multiline",
		],
		"@stylistic/keyword-spacing": [
			"warn",
			{
				before: true,
			},
		],
		"@stylistic/type-annotation-spacing": [
			"warn",
			{
				before: false,
				after: true,
				overrides: {
					arrow: {
						before: true,
						after: true,
					},
				},
			},
		],
		"@stylistic/member-delimiter-style": [
			"warn",
			{
				multiline: {
					delimiter: "semi",
					requireLast: true,
				},
				singleline: {
					delimiter: "semi",
					requireLast: false,
				},
				multilineDetection: "brackets",
			},
		],
		"@stylistic/lines-between-class-members": [
			"warn",
			"always",
			{
				exceptAfterSingleLine: true,
				exceptAfterOverload: true,
			},
		],
		"@stylistic/space-before-function-paren": [
			"warn",
			"never",
		],
		"@stylistic/space-before-blocks": [
			"warn",
		],


		"@stylistic/object-curly-spacing": [
			"warn",
			"always",
		],
		"@stylistic/quotes": [
			"warn",
			"double",
			{
				avoidEscape: true,
				allowTemplateLiterals: true,
			},
		],
		"@stylistic/padding-line-between-statements": [
			"warn",
			{
				blankLine: "always",
				prev: "*",
				next: "return",
			},
			{
				blankLine: "always",
				prev: "*",
				next: "multiline-block-like",
			},
			{
				blankLine: "always",
				prev: "multiline-block-like",
				next: "*",
			},
			{
				blankLine: "always",
				prev: [
					"function",
					"class",
				],
				next: "*",
			},
			{
				blankLine: "always",
				prev: [
					"const",
					"let",
					"var",
				],
				next: [
					"block",
					"block-like",
					"break",
					"case",
					"exports",
					"require",
					"class",
					"continue",
					"debugger",
					"default",
					"directive",
					"do",
					"empty",
					"export",
					"expression",
					"for",
					"function",
					"if",
					"iife",
					"import",
					"multiline-block-like",
					"multiline-expression",
					"return",
					"switch",
					"throw",
					"try",
					"while",
					"with",
				],
			},
			{
				blankLine: "never",
				prev: [
					"const",
					"let",
					"var",
				],
				next: [
					"const",
					"let",
					"var",
				],
			},
			{
				blankLine: "never",
				prev: "*",
				next: "directive",
			},
			{
				blankLine: "always",
				prev: "directive",
				next: "*",
			},
			{
				blankLine: "any",
				prev: "directive",
				next: "directive",
			},
			{
				blankLine: "always",
				prev: "*",
				next: "export",
			},
			{
				blankLine: "always",
				prev: "export",
				next: "*",
			},
			{
				blankLine: "never",
				prev: "export",
				next: "export",
			},
			{
				blankLine: "always",
				prev: [
					"require",
					"import",
				],
				next: "*",
			},
			{
				blankLine: "any",
				prev: [
					"require",
					"import",
				],
				next: [
					"require",
					"import",
				],
			},
			{
				blankLine: "always",
				prev: "*",
				next: [
					"class",
					"function",
				],
			},
		],
		"@stylistic/space-infix-ops": [
			"warn",
			{
				int32Hint: false,
			},
		],
	}, //satisfies typeof stylistic.rules,
};
