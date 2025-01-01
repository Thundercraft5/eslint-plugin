import importPlugin from "eslint-plugin-import"; // @ts-ignore

export default {
	"files": [
		"*/**.{js,ts,tsx,mts,cjs,mjs,cts}"
	],
	"plugins": {
		import: importPlugin,
	},
	"settings": {
		"import/extensions": [
			".ts",
			".cts",
			".mts",
			".tsx",
			".js",
			".mjs",
			".cjs",
			".jsx"
		]
	},
	"rules": {
		"import/no-useless-path-segments": [
			"warn"
		],
		"import/no-named-as-default-member": [
			"warn"
		],
		"import/no-deprecated": [
			"warn"
		],
		"import/export": [
			"warn"
		],
		"import/no-unresolved": [
			"error"
		],
		"import/default": [
			"error"
		],
		"import/named": [
			"error"
		],
		"import/namespace": [
			"error"
		],
		"import/no-self-import": [
			"error"
		],
		"import/first": [
			"warn"
		],
		"import/newline-after-import": [
			"warn"
		],
		"import/prefer-default-export": [
			"warn"
		],
		"import/no-anonymous-default-export": [
			"warn",
			{
				"allowArray": true,
				"allowArrowFunction": true,
				"allowAnonymousClass": false,
				"allowAnonymousFunction": true,
				"allowCallExpression": true,
				"allowLiteral": false,
				"allowObject": true
			}
		],
		"import/order": [
			"warn",
			{
				"groups": [
					"builtin",
					"external",
					"internal",
					"parent",
					"sibling",
					"index",
					"object",
					"type"
				],
				"newlines-between": "always-and-inside-groups"
			}
		],
		"import/no-duplicates": [
			"error"
		]
	}
}