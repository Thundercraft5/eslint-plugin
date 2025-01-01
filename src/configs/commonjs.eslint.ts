export default {
	"name": "commonjs",
	"files": [
		"*.cjs",
		"*.cts",
	],	
	"parserOptions": {
		"sourceType": "script",
	},
	"env": {
		"commonjs": true,
	},
	"globals": {
		"module": "readonly",
		"exports": "readonly",
		"require": "readonly",
		"__filename": "readonly",
		"__dirname": "readonly",
	},
};

