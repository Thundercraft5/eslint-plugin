export default {
	"name": "modules",
	"languageOptions": {
		"parserOptions": {
			"sourceType": "module",
		},
	},
	"rules": {	
		"strict": [
			"warn",
		],
		"no-restricted-globals": [
			"warn",
			{
				"name": "__dirname",
				"message": "`__dirname` is not defined in ES modules, use `const __dirname = new URL('', import.meta.url).pathname` instead.",
			},
			{
				"name": "this",
				"message": "`this` is not defined in ES modules, use `globalThis` instead.",
			},
			{
				"name": "__filename",
				"message": "`__filename` is not defined in ES modules, use `const __filename = new URL('.', import.meta.url).pathname` instead.",
			},
			{
				"name": "module",
				"message": "`module` is not defined in ES modules, use `export { ... }` instead.",
			},
			{
				"name": "module.exports",
				"message": "`module.exports` is not defined in ES modules, use `export { ... }` instead.",
			},
			{
				"name": "exports",
				"message": "`exports` is not defined in ES modules, use `export { ... }` instead.",
			},
			{
				"name": "require",
				"message": "`require` is not defined in ES modules, use `import ... from \"path/to/module\"` or `await import(\"path/to/module\")` instead.",
			},
		],
	},
};