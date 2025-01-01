import { AST_TOKEN_TYPES } from "@typescript-eslint/utils";

import { createRule } from "../util/index.ts";

import type * as eslint from "eslint";

export const defaultOptions = [] as const;

const finishedIdentifiers = new Set<string>();

export default createRule({
	defaultOptions,
	name: "no-multiple-exports",
	meta: {
		fixable: "code",
		type: "layout",
		docs: {
			description: "Disallows multiple exports with no code in-between.",
			recommended: "recommended",
		},
		messages: {
			multipleExports: "Multiple consecutive exports must be merged.",
		},
		schema: [],
	},
	create: context => ({
		ExportNamedDeclaration(node) {
			const sourceCode = context.getSourceCode(),
				{ body } = sourceCode.ast,
				bodyIndex = body.indexOf(node),
				entries = [...body.entries()];
			let exportsStart = bodyIndex,
				exportsEnd = bodyIndex;

			// Get consecutive exports related to this one
			for (const [i, specifier] of entries.slice(bodyIndex))
				if (specifier.type === "ExportNamedDeclaration") exportsEnd = i;
				else break;

			for (const [i, specifier] of entries.reverse().slice(bodyIndex))
				if (specifier.type === "ExportNamedDeclaration") exportsStart = i;
				else break;

			const exports = body.slice(exportsStart, exportsEnd),
				start = body.at(exportsStart)!,
				end = body.at(exportsEnd)!;

			// If more than one statement then report
			if (exportsStart !== exportsEnd) context.report({
				messageId: "multipleExports",
				loc: {
					start: start.loc.start,
					end: end.loc.end,
				},
				"fix"(fixer) {
					// Get 'export' tokens which are between the outer statements
					const tokens = sourceCode.getTokensBetween(
							sourceCode.getFirstToken(start)!,
							sourceCode.getLastToken(end)!,
						),

						transform = [
							...tokens
							.filter(t => t.type === "Identifier" && sourceCode.getTokenAfter(t)?.value !== "," && t.value !== "type")
							.slice(0, -1) // Don't add comma at end exports of list
							.map(token => fixer.insertTextAfter(token, ",")),
							...tokens.slice(
								tokens.findIndex(t => t.value === "}") - 1,
								tokens.length - tokens.reverse().findIndex(t => t.value === "{"),
							)
								.filter(t => t.type !== AST_TOKEN_TYPES.Identifier && t.value !== ",")
								.map(token => fixer.remove(token)),
						];

					console.log(tokens);


					return transform;
				},
			});
		},
	}),
});