import * as ts from "typescript";
import * as tsutils from "tsutils";
import { AST_NODE_TYPES, ESLintUtils } from "@typescript-eslint/utils";

import { createRule } from "../util";

import type { ImportDeclaration } from "@typescript-eslint/types/dist/generated/ast-spec";


export const defaultOptions = [] as const;

export default createRule({
	name: "@thundercraft5/no-ambiguous-type-only-imports",
	defaultOptions,
	meta: {
		fixable: "code",
		docs: {
			description: "Requires that types imported in value imports be properly marked.",
			recommended: "error",
		},
		messages: {
			ambiguousTypeImport: "Type-only import of '{{name}}' in a value import must be marked with 'type' so that it will be erased at runtime.",
		},
		type: "problem",
		schema: [],
	},
	create(context) {
		return {
			"ImportSpecifier"(node) {
				const parserServices = ESLintUtils.getParserServices(context),
					checker = parserServices.program.getTypeChecker(),
					originalNode = parserServices.esTreeNodeToTSNodeMap.get(node),
					importSymbol = checker.getSymbolAtLocation(originalNode.name),
					name = originalNode.name.getText(),
					{ declarations } = checker.getAliasedSymbol(importSymbol!);

				checker.getTypeOfSymbolAtLocation
				if (
					node.importKind === "value" // Import specifier is a value import (in source)
					&& (node.parent as ImportDeclaration).importKind === "value" // Import declaration is a value import
					&& importSymbol?.declarations?.every(d => ((d.kind & ts.SyntaxKind.InterfaceKeyword) === ts.SyntaxKind.InterfaceKeyword)
						|| (d.kind & ts.SyntaxKind.TypeAliasDeclaration) === ts.SyntaxKind.TypeAliasDeclaration) // Symbol is a type alias/interface
				) context.report({
					messageId: "ambiguousTypeImport",
					loc: node.loc,
					data: {
						name,
					},
					fix(fixer) {
						return fixer.insertTextBefore(node, "type ");
					},
				});
			},
		};
	},
});