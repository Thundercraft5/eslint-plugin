import personalPlugin from "../../rules/index.ts";

const base = {
	name: "plugin/thundercraft5/js-rules",
	files: [
		"*/**.{js,ts,tsx,mts,cjs,mjs,cts}",
	],
	plugins: {
		"@thundercraft5": { rules: personalPlugin },
	},
	rules: {
		"@thundercraft5/ts-export-item-lines": "off",
		"@thundercraft5/consistent-type-imports": "off",
		"@thundercraft5/no-multiple-exports": "off",
	},
};

export default [base, {
	...base,
	"files": [
		"*/**.{ts,tsx,mts,cts, mdx}",
	],
	"name": "plugin/thundercraft5/ts-rules",
	"@thundercraft5/no-ambiguous-type-only-imports": "warn",
}];
