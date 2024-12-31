import * as ts from "typescript";
import * as tsutils from "tsutils";
import { AST_NODE_TYPES, ESLintUtils } from "@typescript-eslint/utils";


import { createRule } from "../util";

import type { Narrow, NarrowRest, ObjectEntries, Reconstruct } from "@thundercraft5/type-utils";


import type { ToNumber } from "@thundercraft5/type-utils/numbers";


export const defaultOptions = [] as const;

export default createRule({
	name: "@thundercraft5/type-import-placement",
	defaultOptions,
	meta: {
		fixable: "code",
		docs: {
			recommended: "recommended",
			description: "", // TODO: add documentation
		},
		messages: {
			// TODO
		},
		type: "layout",
		schema: [],
	},
	create(context) {
		return {
			"ImportDeclaration"(node) {
				// TODO
			},
		};
	},
});
