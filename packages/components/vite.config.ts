import { resolve } from 'node:path';

import dtsPlugin from 'vite-plugin-dts';
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vite';

import * as packageJson from './package.json';

const peerDependencies =
  packageJson && packageJson.peerDependencies ? Object.keys(packageJson.peerDependencies) : [];

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      fileName: format => `components.${format}.js`,
      formats: ['es', 'umd'],
      name: 'Components',
    },
    rollupOptions: {
      external: peerDependencies,
      output: {
        globals: {
          react: 'React',
        },
      },
    },
  },
  plugins: [tsconfigPaths(), dtsPlugin({ insertTypesEntry: true })],
});
