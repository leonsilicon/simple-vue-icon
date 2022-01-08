export const props = {
	title: [String],
	spin: [Boolean],
	width: [Number, String],
	height: [Number, String],
	ariaLabel: [String],
	class: [String],
	path: {
		type: String,
	},
	size: {
		type: [Number, String],
		default: 24,
	},
	viewBox: {
		type: String,
		default: '0 0 24 24',
	},
	xmlns: {
		type: String,
		default: 'http://www.w3.org/2000/svg',
	},
	role: {
		type: String,
		default: 'img',
	},
};
