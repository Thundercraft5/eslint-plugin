import { RuleTester } from "@typescript-eslint/utils/dist/eslint-utils";

import { noMultipleExports } from "../rules";


import { createArray } from "../util";

import noAmbiguousTypeImports from "../rules/no-ambiguous-type-only-imports";


const ruleTester = new RuleTester({
	parser: "@typescript-eslint/parser",
	parserOptions: {
		project: "./tsconfig.json",

	},
});

/*
 * ruleTester.run("@thundercraft5/ts-export-item-lines", importItemLines, {
 * 	valid: [
 * 		{ code: "export { $1,\n$2,\n$3 }" },
 * 	],
 * 	invalid: [
 * 		{
 * 			code: "export { $1, $2, $3 }",
 * 			output: "export { $1,\n$2,\n$3 }",
 * 			errors: [{
 * 				messageId: "namedExportItemLines",
 * 			}, {
 * 				messageId: "namedExportItemLines",
 * 			}],
 * 		},
 * 	],
 * });
 */

/*
 * ruleTester.run("@thundercraft5/no-multiple-exports", noMultipleExports, {
 * 	valid: [
 * 		{ code: "export { $1, $2, $3 }" },
 * 	],
 * 	invalid: [
 * 		{
 * 			code: "export { $1 }; export { type $2 }; export { $3 }",
 * 			output: "export { $1,    type $2,    $3 }",
 * 			errors: [{ messageId: "multipleExports" }, { messageId: "multipleExports" }, { messageId: "multipleExports" }],
 * 		},
 * 		{
 * 			code: dedent`
 * 				export { T };
 * 				export {$1}
 * 				export {$2}
 * 				export {$3}
 * 				export {$4}
 * 			`,
 * 			output: "export { $1,    type $2,    $3 }",
 * 			errors: createArray(5, { messageId: "multipleExports" }),
 * 		},
 * 	],
 * });
 */

ruleTester.run("@thundercraft5/no-ambiguous-type-only-imports", noAmbiguousTypeImports, {
	valid: [
		{ code: "import { type $1 } from './test'" },
	],
	invalid: [
		{ code: "import { type $1 } from './test'", errors: [{ messageId: "ambiguousTypeImport" }] },
	],
});