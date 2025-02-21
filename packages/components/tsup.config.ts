import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['./src/index.ts'],
  clean: true,
  splitting: true,
  minify: true,
  dts: true,
  treeshake: true,
  external: ['react', 'react-dom'],
  format: ['esm', 'cjs'],
});
