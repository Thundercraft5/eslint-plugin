export const
	{ default: base } = await import("./.eslintrc.base.json", { assert: { type: "json" } }),
	{ default: esnext } = await import("./.eslintrc.esnext.json", { assert: { type: "json" } }),
	{ default: node } = await import("./.eslintrc.node.json", { assert: { type: "json" } }),
	{ default: modules } = await import("./.eslintrc.modules.json", { assert: { type: "json" } }),
	{ default: react } = await import("./.eslintrc.react.json", { assert: { type: "json" } }),
	{ default: reactESNext } = await import("./.eslintrc.react-esnext.json", { assert: { type: "json" } }),
	{ default: typescript } = await import("./.eslintrc.typescript.json", { assert: { type: "json" } }),
	_ = undefined;