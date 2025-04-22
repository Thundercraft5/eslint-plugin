import consistentTypeImports from "./consistent-type-imports.ts";
import noAmbiguousTypeImports from "./no-ambiguous-type-only-imports.ts";
import noMultipleExports from "./no-multiple-exports.ts";
import importItemLines from "./ts-export-item-lines.ts";

import type { Narrow, NarrowConstrainedObject } from "@thundercraft5/type-utils";

export const rules = {
	"no-multiple-exports": noMultipleExports,
	"ts-export-item-lines": importItemLines,
	"consistent-type-imports": consistentTypeImports,
	"no-ambiguous-type-only-imports": noAmbiguousTypeImports,
};export default rules;
export { importItemLines, noMultipleExports };
