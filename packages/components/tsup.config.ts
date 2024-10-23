import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['./src/**'],
  clean: true,
  minify: true,
  dts: true,
  treeshake: true,
  external: ['react', 'react-dom'],
  format: ['esm', 'cjs'],
});
