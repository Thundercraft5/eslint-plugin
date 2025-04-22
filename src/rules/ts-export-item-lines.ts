import type { ReportFixFunction } from "@typescript-eslint/utils/ts-eslint";
import { createRule } from "../util/index.ts";


import type { ASTUtils, ESLintUtils } from "@typescript-eslint/utils";


export const defaultOptions = [
	2,
] as const;	export default createRule({
	defaultOptions,
	name: "ts-export-item-lines",
	meta: {
		fixable: "code",
		type: "layout",
		docs: {
			description: "Enforces consistency with newlines on import items.",
			recommended: "recommended",
		},
		messages: {
			namedExportItemLines: "Named export `{{name}}` must be placed on a new line.",
		},
		schema: [{
			type: "number",
		}],
	},
	create: (context, options) => ({
		ExportNamedDeclaration(node) {
			if (node.specifiers.length <= options[0]) return null;

			const sourceCode = context.getSourceCode(),
				moduleVariables = node.specifiers;


			for (let i = 1; i < moduleVariables.length; i++) {
				const firstTokenOfCurrentProperty = sourceCode.getFirstToken(moduleVariables[i]!);

				if (moduleVariables[i]!.loc.start.line === moduleVariables[i - 1]!.loc.start.line) {
					const report = (fixer: ReportFixFunction) => {
							context.report({
								node,
								messageId: "namedExportItemLines",
								fix: fixer,
								data: {
									name: firstTokenOfCurrentProperty?.value,
								},
							});
						},

						comma = sourceCode.getTokenBefore(firstTokenOfCurrentProperty!),
						rangeAfterComma = [comma!.range[1], firstTokenOfCurrentProperty!.range[0]] as const;

					// don't fix if comments between the comma and the next property.
					if (sourceCode.text.slice(rangeAfterComma[0], rangeAfterComma[1]).trim()) return null;

					report(fixer => fixer.replaceTextRange(rangeAfterComma, "\n"));
				}
			}
		},
	}),
});
