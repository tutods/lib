import baseConfig from '../../eslint.config.js';

export default [
  {
    ignores: ['**/dist'],
  },
  ...baseConfig,
  {
    files: ['**/*.json'],
    rules: {
      '@nx/dependency-checks': [
        'error',
        {
          ignoredDependencies: ['react-dom'],
        },
      ],
    },
    // TODO: how to fix?
    // languageOptions: {
    //   parser: await import('jsonc-eslint-parser'),
    // },
  },
];
