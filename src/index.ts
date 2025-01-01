import rules from "./rules/index.ts";

import * as configs from "./configs.ts";

for (const [k, v] of Object.entries(configs)) {
	if (Array.isArray(v)) {
		for (const config of v) config.name = `@thundercraft5/${config.name}`;
		// @ts-expect-error
	} else v.name = `@thundercraft5/${v.name}`;
}


const pluginConfig = {
	rules,
	configs: {
		"base": configs.base,
		"esnext": configs.esnext,
		"modules": configs.modules,
		"node": configs.node,
		"react": configs.react,
		"react-esnext": configs.reactESNext,
		"typescript": configs.typescript,
	},
};

export default pluginConfig;
