module.exports = {
	extends: [require.resolve('@leonzalion/configs/eslint')],
	parserOptions: {
		project: ["./tsconfig.eslint.json"],
	},
};
