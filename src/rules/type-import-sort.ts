import * as ts from "typescript";
import * as tsutils from "tsutils";
import { AST_NODE_TYPES, ESLintUtils } from "@typescript-eslint/utils";

import { ImportDefaultSpecifier, ImportSpecifier } from "@typescript-eslint/types/dist/generated/ast-spec";

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
			description: "", // TODO: add documentation
			recommended: "warn",
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
