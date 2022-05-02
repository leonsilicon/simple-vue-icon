import styles from 'rollup-plugin-styles';
import { defineConfig } from 'rollup';
import typescript from '@rollup/plugin-typescript';
import distGitkeep from 'rollup-plugin-dist-gitkeep';

export default defineConfig({
	plugins: [typescript(), styles(), distGitkeep()],
	input: './src/index.ts',
	external: 'vue',
	output: [
		{
			format: 'commonjs',
			file: 'dist/index.cjs',
		},
		{
			format: 'esm',
			dir: 'dist',
		},
	],
});
