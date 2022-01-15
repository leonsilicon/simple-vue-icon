import path from 'node:path';

const __dirname = new URL('.', import.meta.url).pathname;

/**
 * @type import('ts-jest/dist/types').InitialOptionsTsJest
 */
const config = {
	modulePathIgnorePatterns: ['dist'],
	setupFiles: ['./test/jest.setup.ts'],
	extensionsToTreatAsEsm: ['.ts'],
	globals: {
		'ts-jest': {
			useESM: true,
			tsconfig: path.join(__dirname, 'test/tsconfig.json'),
		},
	},
	transform: {},
	resolver: 'ts-jest-resolver',
	preset: 'ts-jest',
	testEnvironment: 'jsdom',
	moduleNameMapper: {
		'~/(.*)\\.js$': '<rootDir>/src/$1',
		'~test/(.*)\\.js$': '<rootDir>/test/$1',
		'^.+\\.css$': '<rootDir>/test/stubs/css-stub.ts'
	},
};

export default config;
