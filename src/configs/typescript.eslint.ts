import typescriptEslint from "@typescript-eslint/eslint-plugin";
import typescriptEslintParser from "@typescript-eslint/parser";

import modulesConfig from "./modules.eslint.ts";
import esnextEslint from "./esnext.eslint.ts";

export default [modulesConfig, ...esnextEslint, {
	name: "typescript",
	files: [
		"**/*.ts",
	],
	plugins: {
		"@typescript-eslint": typescriptEslint,
	},
	settings: {
		"import/extensions": [
			".ts",
			".cts",
			".mts",
			".tsx",
			".js",
			".mjs",
			".cjs",
			".jsx",
		],
		"import/external-module-folders": [
			"node_modules",
			"node_modules/@types",
		],
		"import/parsers": {
			"@typescript-eslint/parser": [
				".ts",
				".cts",
				".mts",
				".tsx",
			],
		},
		"import/resolver": {
			node: {
				extensions: [
					".ts",
					".tsx",
					".js",
					".jsx",
				],
			},
			typescript: {
				project: "**/tsconfig.json",
			},
		},
	},
	languageOptions: {
		parserOptions: {
			sourceType: "module",
			project: "**/tsconfig.json",
		},
		parser: typescriptEslintParser,
	},


	rules: {
		"brace-style": "off",
		"comma-dangle": "off",
		"comma-spacing": "off",
		"default-param-last": "off",
		"dot-notation": "off",
		"func-call-spacing": "off",
		"indent": "off",
		"keyword-spacing": "off",
		"lines-between-class-members": "off",
		"no-array-constructor": "off",
		"no-dupe-class-members": "off",
		"no-empty-function": "off",
		"no-extra-parens": "off",
		"no-extra-semi": "off",
		"no-implied-eval": "off",
		"no-loop-func": "off",
		"no-loss-of-precision": "off",
		"no-magic-numbers": "off",
		"no-redeclare": "off",
		"no-restricted-imports": "off",
		"no-shadow": "off",
		"no-throw-literal": "warn",
		"no-unused-expressions": "off",
		"no-unused-vars": "off",
		"no-use-before-define": "off",
		"no-useless-constructor": "off",
		"object-curly-spacing": "off",
		"padding-line-between-statements": "off",
		"quotes": "off",
		"require-await": "off",
		"no-return-await": "off",
		"semi": "off",
		"space-before-blocks": "off",
		"space-before-function-paren": "off",
		"space-infix-ops": "off",
		"constructor-super": "off",
		"import/named": "off",
		"@typescript-eslint/no-non-null-asserted-optional-chain": [
			"warn",
		],
		"@typescript-eslint/no-duplicate-enum-values": [
			"error",
		],
		"@typescript-eslint/no-extraneous-class": [
			"warn",
		],
		"@typescript-eslint/no-floating-promises": [
			"warn",
		],
		"@typescript-eslint/no-dynamic-delete": [
			"warn",
		],
		"@typescript-eslint/no-for-in-array": [
			"error",
		],
		"@typescript-eslint/no-invalid-this": [
			"warn",
		],
		"@typescript-eslint/no-invalid-void-type": [
			"warn",
		],
		"@typescript-eslint/no-empty-interface": [
			"warn",
		],
		"@typescript-eslint/no-confusing-void-expression": [
			"warn",
		],
		"@typescript-eslint/array-type": [
			"warn",
			{
				default: "array",
				readonly: "array",
			},
		],
		"@typescript-eslint/no-redundant-type-constituents": [
			"warn",
		],
		"@typescript-eslint/adjacent-overload-signatures": [
			"warn",
		],
		"@typescript-eslint/await-thenable": [
			"warn",
		],
		"@typescript-eslint/ban-tslint-comment": [
			"warn",
		],
		"@typescript-eslint/no-meaningless-void-operator": [
			"warn",
		],
		"@typescript-eslint/no-misused-new": [
			"warn",
		],
		"@typescript-eslint/no-misused-promises": [
			"error",
			{
				checksConditionals: true,
				checksVoidReturn: true,
				checksSpreads: true,
			},
		],
		"@typescript-eslint/no-namespace": [
			"warn",
		],
		"@typescript-eslint/no-non-null-asserted-nullish-coalescing": [
			"warn",
		],
		"@typescript-eslint/no-require-imports": [
			"warn",
		],
		"@typescript-eslint/no-this-alias": [
			"warn",
		],
		"@typescript-eslint/no-unnecessary-boolean-literal-compare": [
			"warn",
		],
		"@typescript-eslint/no-unnecessary-condition": [
			"warn",
		],
		"@typescript-eslint/no-unnecessary-qualifier": [
			"warn",
		],
		"@typescript-eslint/no-unnecessary-type-arguments": [
			"warn",
		],
		"@typescript-eslint/no-unnecessary-type-assertion": [
			"warn",
		],
		"@typescript-eslint/no-unsafe-assignment": [
			"warn",
		],
		"@typescript-eslint/no-unsafe-argument": [
			"warn",
		],
		"@typescript-eslint/no-unsafe-member-access": [
			"error",
		],
		"@typescript-eslint/no-unsafe-return": [
			"warn",
		],
		"@typescript-eslint/restrict-plus-operands": [
			"error",
		],
		"@typescript-eslint/prefer-return-this-type": [
			"warn",
		],
		"@typescript-eslint/prefer-regexp-exec": [
			"warn",
		],
		"@typescript-eslint/prefer-reduce-type-parameter": [
			"warn",
		],
		"@typescript-eslint/prefer-optional-chain": [
			"warn",
		],
		"@typescript-eslint/prefer-nullish-coalescing": [
			"warn",
		],
		"@typescript-eslint/no-useless-empty-export": [
			"warn",
		],
		"@typescript-eslint/prefer-includes": [
			"warn",
		],
		"@typescript-eslint/prefer-function-type": [
			"warn",
		],
		"@typescript-eslint/prefer-for-of": [
			"warn",
		],
		"@typescript-eslint/prefer-enum-initializers": [
			"warn",
		],
		"@typescript-eslint/triple-slash-reference": [
			"warn",
			{
				lib: "always",
				path: "never",
				types: "prefer-import",
			},
		],
		"@typescript-eslint/prefer-ts-expect-error": [
			"warn",
		],
		"@typescript-eslint/strict-boolean-expressions": [
			"warn",
		],
		"@typescript-eslint/unified-signatures": [
			"warn",
		],
		"@typescript-eslint/naming-convention": [
			"warn",
			{
				selector: [
					"classProperty",
					"objectLiteralProperty",
					"typeProperty",
					"classMethod",
					"objectLiteralMethod",
					"typeMethod",
					"accessor",
					"enumMember",
				],
				format: null,
				modifiers: [
					"requiresQuotes",
				],
			},
			{
				selector: [
					"classProperty",
					"objectLiteralProperty",
					"typeProperty",
					"classMethod",
					"objectLiteralMethod",
					"typeMethod",
					"accessor",
					"enumMember",
				],
				format: [
					"UPPER_CASE",
					"camelCase",
					"PascalCase",
				],
			},
			{
				selector: "variable",
				types: [
					"boolean",
					"number",
					"string",
				],
				format: [
					"UPPER_CASE",
				],
				modifiers: [
					"const",
					"global",
				],
			},
			{
				selector: [
					"classProperty",
					"variable",
				],
				format: [
					"camelCase",
					"PascalCase",
					"UPPER_CASE",
				],
				leadingUnderscore: "allowSingleOrDouble",
				trailingUnderscore: "forbid",
			},
			{
				selector: [
					"typeLike",
				],
				format: [
					"PascalCase",
				],
			},
			{
				selector: [
					"default",
				],
				format: [
					"camelCase",
					"PascalCase",
				],
				leadingUnderscore: "allowSingleOrDouble",
				trailingUnderscore: "forbid",
			},
		],
		"@typescript-eslint/switch-exhaustiveness-check": "warn",
		"@typescript-eslint/consistent-generic-constructors": [
			"warn",
			"constructor",
		],
		"@typescript-eslint/consistent-indexed-object-style": [
			"warn",
			"index-signature",
		],
		"@typescript-eslint/consistent-type-assertions": [
			"warn",
			{
				assertionStyle: "as",
				objectLiteralTypeAssertions: "allow",
			},
		],
		"@typescript-eslint/consistent-type-definitions": [
			"warn",
			"type",
		],
		"@typescript-eslint/consistent-type-exports": [
			"warn",
			{
				fixMixedExportsWithInlineTypeSpecifier: true,
			},
		],
		"@typescript-eslint/consistent-type-imports": [
			"warn",
			{
				prefer: "type-imports",
			},
		],
		"@typescript-eslint/no-restricted-types": [
			"warn",
			{
				types: {},
			},
		],
		"@typescript-eslint/ban-ts-comment": [
			"warn",
		],
		"@typescript-eslint/class-literal-property-style": [
			"warn",
			"fields",
		],
		"@typescript-eslint/default-param-last": [
			"warn",
		],
		"@typescript-eslint/dot-notation": [
			"warn",
			{
				allowKeywords: true,
				allowPattern: "",
			},
		],


		"@typescript-eslint/member-ordering": [
			"warn",
			{
				default: [
					// Index signature
					"signature",
					"call-signature",

					// Fields
					"public-static-field",
					"protected-static-field",
					"private-static-field",
					"#private-static-field",

					"public-decorated-field",
					"protected-decorated-field",
					"private-decorated-field",

					"public-instance-field",
					"protected-instance-field",
					"private-instance-field",
					"#private-instance-field",

					"public-abstract-field",
					"protected-abstract-field",

					"public-field",
					"protected-field",
					"private-field",
					"#private-field",

					"static-field",
					"instance-field",
					"abstract-field",

					"decorated-field",

					"field",

					// Static initialization
					"static-initialization",

					// Constructors
					"public-constructor",
					"protected-constructor",
					"private-constructor",

					"constructor",

					// Accessors
					"public-static-accessor",
					"protected-static-accessor",
					"private-static-accessor",
					"#private-static-accessor",

					"public-decorated-accessor",
					"protected-decorated-accessor",
					"private-decorated-accessor",

					"public-instance-accessor",
					"protected-instance-accessor",
					"private-instance-accessor",
					"#private-instance-accessor",

					"public-abstract-accessor",
					"protected-abstract-accessor",

					"public-accessor",
					"protected-accessor",
					"private-accessor",
					"#private-accessor",

					"static-accessor",
					"instance-accessor",
					"abstract-accessor",

					"decorated-accessor",

					"accessor",

					// Getters
					"public-static-get",
					"protected-static-get",
					"private-static-get",
					"#private-static-get",

					"public-decorated-get",
					"protected-decorated-get",
					"private-decorated-get",

					"public-instance-get",
					"protected-instance-get",
					"private-instance-get",
					"#private-instance-get",

					"public-abstract-get",
					"protected-abstract-get",

					"public-get",
					"protected-get",
					"private-get",
					"#private-get",

					"static-get",
					"instance-get",
					"abstract-get",

					"decorated-get",

					"get",

					// Setters
					"public-static-set",
					"protected-static-set",
					"private-static-set",
					"#private-static-set",

					"public-decorated-set",
					"protected-decorated-set",
					"private-decorated-set",

					"public-instance-set",
					"protected-instance-set",
					"private-instance-set",
					"#private-instance-set",

					"public-abstract-set",
					"protected-abstract-set",

					"public-set",
					"protected-set",
					"private-set",
					"#private-set",

					"static-set",
					"instance-set",
					"abstract-set",

					"decorated-set",

					"set",

					// Methods
					"public-static-method",
					"protected-static-method",
					"private-static-method",
					"#private-static-method",

					"public-decorated-method",
					"protected-decorated-method",
					"private-decorated-method",

					"public-instance-method",
					"protected-instance-method",
					"private-instance-method",
					"#private-instance-method",

					"public-abstract-method",
					"protected-abstract-method",

					"public-method",
					"protected-method",
					"private-method",
					"#private-method",

					"static-method",
					"instance-method",
					"abstract-method",

					"decorated-method",

					"method",
				],
			},
		],
		"@typescript-eslint/method-signature-style": [
			"warn",
			"method",
		],
		"@typescript-eslint/no-array-constructor": [
			"warn",
		],
		"@typescript-eslint/no-dupe-class-members": [
			"error",
		],
		"@typescript-eslint/no-empty-function": [
			"warn",
		],

		"@typescript-eslint/no-implied-eval": [
			"warn",
		],
		"@typescript-eslint/no-loop-func": [
			"warn",
		],
		"@typescript-eslint/no-loss-of-precision": [
			"error",
		],
		"@typescript-eslint/no-magic-numbers": [
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
		"@typescript-eslint/no-redeclare": [
			"error",
			{
				ignoreDeclarationMerge: true,
			},
		],
		"@typescript-eslint/no-restricted-imports": [
			"warn",
		],
		"@typescript-eslint/no-shadow": [
			"warn",
		],
		"@typescript-eslint/no-throw-literal": [
			"off",
		],
		"@typescript-eslint/no-unused-expressions": [
			"warn",
			{
				allowShortCircuit: true,
				allowTaggedTemplates: true,
			},
		],
		"@typescript-eslint/no-unused-vars": [
			"warn",
		],
		"@typescript-eslint/no-use-before-define": [
			"error",
			{
				classes: false,
			},
		],
		"@typescript-eslint/no-useless-constructor": [
			"warn",
		],

		"@typescript-eslint/require-await": [
			"warn",
		],
		"@typescript-eslint/return-await": [
			"warn",
			"always",
		],


	},


}] as const;
