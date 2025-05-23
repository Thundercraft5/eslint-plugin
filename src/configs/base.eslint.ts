import importEslint from "./plugin-configs/import.eslint.ts";
import unicorn from "./plugin-configs/unicorn.eslint.ts";
import markdownEslint from "./markdown.eslint.ts";
import regexpEslint from "./plugin-configs/regexp.eslint.ts";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import stylisticConfig from "./plugin-configs/stylistic.eslint.ts";
import personalPluginEslint from "./plugin-configs/personal-plugin.eslint.ts";
import promiseEslint from "./plugin-configs/promise.eslint.ts";


export default [
	importEslint,
	unicorn,
	...markdownEslint,
	regexpEslint,
	stylisticConfig,
	...personalPluginEslint,
	promiseEslint,
	{
		name: "base",
		files: [
			"**/*.{js,jsx}",
		],
		plugins: {
			"simple-import-sort": simpleImportSort,
		},
		linterOptions: {
			reportUnusedDisableDirectives: true,
		},
		rules: {
			"no-with": [
				"error",
			],
			"no-restricted-syntax": [
				"warn",
				{
					selector: ":matches(CallExpression, NewExpression)[callee.type=/^(?:(?:Array|Object)Expression|(?:Template)?Literal)$/]",
					message: "Attempting to call or use `new` on literals will result in a runtime error.",
				},
				{
					selector: "CallExpression[callee.name='setTimeout'][arguments.length<1]",
					message: "`setTimeout()` requires at least 1 argument(s).",
				},
				{
					selector: "CallExpression[callee.name='setTimeout'][arguments.0.type=/^(?:(?:Class|Array|Object)Expression|(?:Template)?Literal)$/]",
					message: "`setTimeout()` expects a function at argument #1.",
				},
				{
					selector: "CallExpression[callee.name='console']",
					message: "Expected a call to a method from `console`.",
				},
				{
					selector: "CallExpression[callee.object.name='console'][callee.property.name=/^(debug|info|log|warn|error)$/][arguments.length=0]",
					message: "Calling this method from `console` with no arguments has no effect.",
				},
				{
					selector: "ExpressionStatement > MemberExpression[object.name='console']",
					message: "Expected a function call to a method from `console`.",
				},
			],
			"space-infix-ops": [
				"warn",
				{
					int32Hint: false,
				},
			],
			"operator-assignment": [
				"warn",
			],
			"array-callback-return": [
				"warn",
			],
			"arrow-body-style": [
				"warn",
				"as-needed",
			],
			"default-case-last": [
				"warn",
			],
			"no-caller": [
				"warn",
			],
			"no-invalid-this": [
				"off",
			],
			"no-useless-backreference": [
				"warn",
			],
			"no-redeclare": [
				"error",
			],
			"no-unreachable": [
				"error",
			],
			"no-unused-labels": [
				"warn",
			],
			"no-useless-escape": [
				"warn",
			],
			"require-await": [
				"warn",
			],
			"no-label-var": [
				"warn",
			],
			"block-spacing": [
				"warn",
				"always",
			],
			"operator-linebreak": [
				"warn",
				"before",
				{
					overrides: {
						"=": "after",
					},
				},
			],
			"computed-property-spacing": [
				"warn",
				"never",
			],
			"quote-props": [
				"warn",
				"consistent-as-needed",
			],
			"prefer-rest-params": [
				"warn",
			],
			"valid-typeof": [
				"warn",
			],
			"curly": [
				"warn",
				"multi",
			],
			"accessor-pairs": [
				"warn",
				{
					getWithoutSet: false,
					setWithoutGet: true,
					enforceForClassMembers: true,
				},
			],
			"no-unsafe-finally": [
				"warn",
			],
			"no-unreachable-loop": [
				"warn",
			],
			"arrow-parens": [
				"warn",
				"as-needed",
			],
			"camelcase": [
				"warn",
			],
			"comma-style": [
				"warn",
				"last",
			],
			"comma-dangle": [
				"warn",
				"always-multiline",
			],
			"comma-spacing": [
				"warn",
				{
					after: true,
					before: false,
				},
			],
			"default-param-last": [
				"warn",
			],
			"dot-notation": [
				"warn",
				{
					allowKeywords: true,
					allowPattern: "",
				},
			],
			"dot-location": [
				"warn",
				"property",
			],
			"eol-last": [
				"warn",
				"never",
			],
			"func-call-spacing": [
				"warn",
			],
			"func-style": [
				"warn",
				"declaration",
				{
					allowArrowFunctions: true,
				},
			],
			"getter-return": [
				"warn",
			],
			"guard-for-in": [
				"warn",
			],
			"generator-star-spacing": [
				"warn",
				"after",
			],
			"implicit-arrow-linebreak": [
				"warn",
			],
			"indent": [
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
			"key-spacing": [
				"warn",
			],
			"keyword-spacing": [
				"warn",
				{
					before: true,
				},
			],
			"padding-line-between-statements": [
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
						"*",
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
						"cjs-import",
						"import",
					],
					next: "*",
				},
				{
					blankLine: "any",
					prev: [
						"cjs-import",
						"import",
					],
					next: [
						"cjs-import",
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
			"linebreak-style": [
				"off",
			],
			"max-len": [
				"warn",
				{
					code: 120,
					ignoreComments: true,
					ignoreTemplateLiterals: true,
					ignoreRegExpLiterals: true,
					ignoreTrailingComments: true,
				},
			],
			"multiline-ternary": [
				"warn",
				"always-multiline",
			],
			"new-cap": [
				"warn",
			],
			"no-bitwise": [
				"off",
			],
			"no-class-assign": [
				"error",
			],
			"no-const-assign": [
				"error",
			],
			"no-constant-condition": [
				"warn",
			],
			"no-whitespace-before-property": [
				"warn",
			],
			"nonblock-statement-body-position": [
				"warn",
				"beside",
				{
					overrides: {
						while: "below",
						for: "below",
						do: "below",
					},
				},
			],
			"no-irregular-whitespace": [
				"warn",
				{
					skipStrings: true,
					skipComments: true,
					skipRegExps: true,
					skipTemplates: true,
				},
			],
			"no-import-assign": [
				"error",
			],
			"no-setter-return": [
				"warn",
			],
			"no-dupe-args": [
				"error",
			],
			"no-dupe-class-members": [
				"error",
			],
			"no-dupe-else-if": [
				"warn",
			],
			"no-dupe-keys": [
				"error",
			],
			"no-duplicate-imports": [
				"warn",
				{
					includeExports: true,
				},
			],
			"no-extend-native": [
				"off",
			],
			"no-extra-bind": [
				"warn",
			],
			"no-extra-label": [
				"warn",
			],
			"no-lone-blocks": [
				"warn",
			],
			"no-lonely-if": [
				"warn",
			],
			"no-loss-of-precision": [
				"error",
			],
			"no-misleading-character-class": [
				"warn",
			],
			"no-mixed-spaces-and-tabs": [
				"warn",
			],
			"no-multi-spaces": [
				"warn",
			],
			"no-multi-str": [
				"off",
			],
			"no-multiple-empty-lines": [
				"warn",
				{
					max: 3,
					maxEOF: 0,
					maxBOF: 0,
				},
			],
			"no-new-symbol": [
				"error",
			],
			"no-self-compare": [
				"warn",
			],
			"no-sparse-arrays": [
				"warn",
			],
			"no-tabs": [
				"warn",
				{
					allowIndentationTabs: true,
				},
			],
			"no-this-before-super": [
				"error",
			],
			"no-trailing-spaces": [
				"warn",
				{
					ignoreComments: true,
				},
			],
			"no-undef": [
				"warn",
			],
			"no-unused-expressions": [
				"warn",
				{
					allowShortCircuit: true,
					allowTaggedTemplates: true,
				},
			],
			"no-unneeded-ternary": [
				"warn",
			],
			"no-unused-vars": [
				"warn",
			],
			"no-use-before-define": [
				"error",
			],
			"no-useless-call": [
				"warn",
			],
			"no-ex-assign": [
				"warn",
			],
			"no-useless-computed-key": [
				"warn",
			],
			"no-new-object": [
				"warn",
			],
			"no-array-constructor": [
				"warn",
			],
			"no-useless-rename": [
				"warn",
			],
			"object-shorthand": [
				"warn",
				"always",
				{
					ignoreConstructors: true,
					avoidExplicitReturnArrows: true,
				},
			],
			"no-useless-concat": [
				"warn",
			],
			"no-useless-constructor": [
				"warn",
			],
			"no-useless-return": [
				"warn",
			],
			"no-var": [
				"warn",
			],
			"no-div-regex": [
				"warn",
			],
			"no-magic-numbers": [
				"warn",
				{
					ignoreArrayIndexes: true,
					enforceConst: true,
					detectObjects: true,
					ignore: [
						-10,
						-9,
						-8,
						-7,
						-6,
						-5,
						-4,
						-3,
						-2,
						-1,
						0,
						1,
						2,
						3,
						4,
						5,
						6,
						7,
						8,
						9,
						10,
					],
				},
			],
			"object-curly-spacing": [
				"warn",
				"always",
			],
			"padded-blocks": [
				"warn",
				"never",
			],
			"prefer-const": [
				"warn",
				{
					destructuring: "all",
				},
			],
			"prefer-destructuring": [
				"warn",
			],
			"prefer-spread": [
				"warn",
			],
			"prefer-arrow-callback": [
				"warn",
				{
					allowUnboundThis: true,
				},
			],
			"prefer-numeric-literals": [
				"warn",
			],
			"prefer-template": [
				"warn",
			],
			"quotes": [
				"warn",
				"double",
				{
					avoidEscape: true,
					allowTemplateLiterals: true,
				},
			],
			"arrow-spacing": [
				"warn",
				{
					before: true,
					after: true,
				},
			],
			"semi-spacing": [
				"warn",
			],
			"semi-style": [
				"warn",
				"last",
			],
			"semi": [
				"warn",
			],
			"sort-vars": [
				"off",
			],
			"sort-imports": [
				"warn",
				{
					ignoreCase: false,
					ignoreDeclarationSort: false,
					ignoreMemberSort: false,
					allowSeparatedGroups: true,
					memberSyntaxSortOrder: [
						"none",
						"all",
						"single",
						"multiple",
					],
				},
			],
			"space-in-parens": [
				"warn",
				"never",
			],
			"no-spaced-func": [
				"warn",
			],
			"space-before-blocks": [
				"warn",
				"always",
			],
			"space-before-function-paren": [
				"warn",
				"never",
			],
			"spaced-comment": [
				"warn",
				"always",
				{
					line: {
						exceptions: [
							"/",
							"*",
						],
					},
					block: {
						balanced: false,
					},
				},
			],
			"template-curly-spacing": [
				"warn",
				"always",
			],
			"use-isnan": [
				"warn",
			],
			"valid-jsdoc": [
				"off",
			],
			"wrap-iife": [
				"warn",
			],
			"yield-star-spacing": [
				"warn",
				"after",
			],
			"yoda": [
				"warn",
			],
			"no-obj-calls": [
				"warn",
			],
			"no-extra-parens": [
				"warn",
			],
			"no-compare-neg-zero": [
				"warn",
			],
			"no-template-curly-in-string": [
				"warn",
			],
			"no-unexpected-multiline": [
				"warn",
			],
			"no-unsafe-negation": [
				"warn",
			],
			"block-scoped-var": [
				"warn",
			],
			"no-empty-function": [
				"warn",
			],
			"no-case-declarations": [
				"warn",
			],
			"jsx-quotes": [
				"warn",
				"prefer-double",
			],
			"lines-between-class-members": [
				"warn",
				"always",
				{
					exceptAfterSingleLine: true,
				},
			],
			"max-nested-callbacks": [
				"warn",
				{
					max: 3,
				},
			],
			"eqeqeq": [
				"warn",
				"always",
				{
					null: "ignore",
				},
			],
			"no-constructor-return": [
				"off",
			],
			"no-empty-pattern": [
				"warn",
			],
			"no-global-assign": [
				"warn",
			],
			"no-iterator": [
				"warn",
			],
			"no-loop-func": [
				"warn",
			],
			"no-new-wrappers": [
				"warn",
			],
			"no-self-assign": [
				"warn",
				{
					props: true,
				},
			],
			"no-throw-literal": [
				"warn",
			],
			"no-unmodified-loop-condition": [
				"warn",
			],
			"no-useless-catch": [
				"warn",
			],
			"no-void": [
				"warn",
				{
					allowAsStatement: true,
				},
			],
			"prefer-named-capture-group": [
				"off",
			],
			"prefer-regex-literals": [
				"warn",
				{
					disallowRedundantWrapping: false,
				},
			],
			"constructor-super": [
				"error",
			],
			"require-yield": [
				"warn",
			],
			"rest-spread-spacing": [
				"warn",
				"never",
			],
			"for-direction": [
				"warn",
			],
			"no-duplicate-case": [
				"error",
			],
			"no-empty": [
				"warn",
				{
					allowEmptyCatch: false,
				},
			],
			"no-empty-character-class": [
				"warn",
			],
			"no-extra-boolean-cast": [
				"warn",
				{
					enforceForLogicalOperands: false,
				},
			],
			"no-extra-semi": [
				"warn",
			],
			"no-invalid-regexp": [
				"error",
			],
			"no-promise-executor-return": [
				"warn",
			],
			"no-regex-spaces": [
				"warn",
			],
			"brace-style": [
				"warn",
				"1tbs",
				{
					allowSingleLine: true,
				},
			],
			"function-paren-newline": [
				"warn",
				"consistent",
			],
			"multiline-comment-style": [
				"warn",
				"starred-block",
			],
			"new-parens": [
				"warn",
				"always",
			],
			"id-length": [
				"warn",
				{
					min: 1,
					max: 35,
					properties: "always",
				},
			],
			"no-underscore-dangle": [
				"warn",
				{
					allowAfterThis: true,
					allowAfterSuper: true,
					allowAfterThisConstructor: true,
					enforceInMethodNames: true,
					allowFunctionParams: true,
				},
			],
			"one-var": [
				"warn",
				"consecutive",
			],
			"one-var-declaration-per-line": [
				"warn",
				"initializations",
			],
			"prefer-object-spread": [
				"warn",
			],
			"prefer-exponentiation-operator": [
				"warn",
			],
			"switch-colon-spacing": [
				"warn",
				{
					after: true,
				},
			],
			"template-tag-spacing": [
				"warn",
				"never",
			],
			"no-delete-var": [
				"warn",
			],
			"no-shadow-restricted-names": [
				"warn",
			],
			"no-undef-init": [
				"warn",
			],
			"no-new": [
				"off",
			],
			"vars-on-top": [
				"warn",
			],
			"object-curly-newline": [
				"warn",
				{
					consistent: true,
					multiline: true,
				},
			],
			"simple-import-sort/imports": [
				"warn",
			],
			"simple-import-sort/exports": [
				"warn",
			],
		},
	},
] as const;
