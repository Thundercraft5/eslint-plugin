import baseEslint from "./base.eslint.ts";
import globals from "globals";

export default [...baseEslint, {
	"name": "es-next",
	"files": [
		"**/*.{js,ts,tsx,jsx}",
	],
	"languageOptions": {	
		"globals": {
			...globals.es2025,
			...globals.es2016,
			...globals.worker,
		},
		"parserOptions": {
			"ecmaFeatures": {
				"arrowFunctions": true,
				"binaryLiterals": true,
				"blockBindings": true,
				"let": true,
				"const": true,
				"classes": true,
				"defaultParams": true,
				"destructuring": true,
				"forOf": true,
				"generators": true,
				"modules": true,
				"objectLiteralComputedProperties": true,
				"objectLiteralDuplicateProperties": true,
				"objectLiteralShorthandMethods": true,
				"objectLiteralShorthandProperties": true,
				"octalLiterals": true,
				"regexUFlag": true,
				"regexYFlag": true,
				"restParams": true,
				"spread": true,
				"superInFunctions": true,
				"super": true,
				"templateStrings": true,
				"unicodeCodePointEscapes": true,
				"return": true,
				"experimentalObjectRestSpread": true,
			},
			"ecmaVersion": 13,
		},
	},
}] as const;