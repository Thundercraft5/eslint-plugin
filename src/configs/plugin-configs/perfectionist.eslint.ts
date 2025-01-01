import perfectionist from "eslint-plugin-perfectionist";

const k = { 
	name: "plugin/perfectionist",
	plugins: { 
		perfectionist,
	},
	"rules": {
		"perfectionist/sort-intersection-types": ["warn"],
		"perfectionist/sort-union-types": ["warn"],
	},
};   

export default perfectionist.configs["recommended-natural"];