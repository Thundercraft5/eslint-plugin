import personalPlugin from "../../rules/index.ts";

export default {
	"files": [
		"*/**.{js,ts,tsx,mts,cjs,mjs,cts}"
	],
	"plugins": {
		"@thundercraft5": personalPlugin,
	},
	"rules": {
		"@thundercraft5/ts-export-item-lines": "off",
		"@thundercraft5/no-ambiguous-type-only-imports": "warn",
		"@thundercraft5/consistent-type-imports": "warn",
		"@thundercraft5/no-multiple-exports": "off"
	}
}