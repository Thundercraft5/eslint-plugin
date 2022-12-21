/* eslint-disable function-paren-newline */
import { ImportDefaultSpecifier, ImportSpecifier } from "@typescript-eslint/types/dist/generated/ast-spec";
import { AST_NODE_TYPES, ESLintUtils } from "@typescript-eslint/utils";
import * as tsutils from "tsutils";
import * as ts from "typescript";

import { createRule } from "../util";

export const defaultOptions = [] as const;

export default createRule({
	name: "@thundercraft5/consistent-type-imports",
	defaultOptions,
	meta: {
		fixable: "code",
		docs: {
			description: "Disallows value import declarations with only type-only specifiers.",
			recommended: "warn",
		},
		messages: {
			onlyTypeImports: "All specifiers of import declaration {{path}} are marked as type-only.",
		},
		type: "layout",
		schema: [],
	},
	create(context) {
		return {
			"ImportDeclaration"(node) {
				if (
					node.importKind === "value" // Is a value import
					&& node.specifiers
					&& node.specifiers.filter(n => n.type === "ImportSpecifier" && n.importKind === "value").length === 0 // Only type imports are in this declaration
					&& node.specifiers.findIndex(n => n.type === "ImportNamespaceSpecifier"
						|| n.type === "ImportDefaultSpecifier",
					) === -1 // Is not a namespace or default import
				) {
					const source = context.getSourceCode();

					context.report({
						messageId: "onlyTypeImports",
						loc: node.loc,
						data: {
							path: node.source.raw,
						},
						fix(fixer) {
							const tokens = source.getTokens(node);

							return source.getTokens(node)
								.filter(n => n.type === "Identifier" && n.value === "type")
								.map(n => fixer.remove(n))
								.concat(fixer.insertTextAfter(tokens[0]!, " type"));
						},
					});
				}
			},
		};
	},
});