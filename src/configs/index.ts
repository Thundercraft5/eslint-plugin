export const
	{ default: base } = await import("./base.eslintrc.json", { assert: { type: "json" } }),
	{ default: esnext } = await import("./esnext.eslintrc.json", { assert: { type: "json" } }),
	{ default: node } = await import("./node.eslintrc.json", { assert: { type: "json" } }),
	{ default: modules } = await import("./modules.eslintrc.json", { assert: { type: "json" } }),
	{ default: react } = await import("./react.eslintrc.json", { assert: { type: "json" } }),
	{ default: reactESNext } = await import("./react-esnext.eslintrc.json", { assert: { type: "json" } }),
	{ default: typescript } = await import("./typescript.eslintrc.json", { assert: { type: "json" } }),
	_ = undefined;