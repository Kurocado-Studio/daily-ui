/* eslint import/no-default-export: 0 */
import { defineConfig } from 'tsup';

export default defineConfig((options) => ({
  ...options,
  outDir: 'dist',
  entry: ['./src/index.ts'],
  target: ['esnext'],
  format: ['esm'],
  dts: true,
  clean: true,
  splitting: true,
  sourcemap: true,
  treeshake: true,
}));
