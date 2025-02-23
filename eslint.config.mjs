import nxEslintPlugin from '@nx/eslint-plugin';

export default [
  {
    ignores: ['dist', 'node_modules', '.nx'],
  },
  { plugins: { '@nx': nxEslintPlugin } },
];
