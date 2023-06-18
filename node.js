const { folders, tsconfigPaths } = require('./common');

module.exports = {
  env: {
    node: true,
    es2021: true,
    jest: true,
  },
  extends: ['plugin:prettier/recommended'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'all',
        jsxSingleQuote: false,
        endOfLine: 'lf',
      },
    ],
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.(m|c)?js'],
      plugins: ['sort-keys-fix', 'sort-destructure-keys'],
      rules: {
        'sort-keys-fix/sort-keys-fix': 'error',
        'sort-destructure-keys/sort-destructure-keys': 'error',
      },
    },
    {
      files: ['**/*.ts'],
      extends: ['plugin:@typescript-eslint/recommended'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
        extraFileExtensions: ['.css'],
        project: './tsconfig.json',
      },
      plugins: [
        '@typescript-eslint',
        'simple-import-sort',
        'import',
        'unused-imports',
      ],
      rules: {
        '@typescript-eslint/consistent-type-imports': ['error', {
          prefer: 'type-imports',
          fixStyle: "separate-type-imports",
        }],
        '@typescript-eslint/consistent-type-exports': ['error', {
          fixMixedExportsWithInlineTypeSpecifier: false,
        }],
        '@typescript-eslint/ban-types': 'warn',
        '@typescript-eslint/no-empty-function': 'warn',
        '@typescript-eslint/no-this-alias': 'warn',
        '@typescript-eslint/no-explicit-any': 'off',
        'no-restricted-imports': 'off',
        '@typescript-eslint/no-restricted-imports': [
          'error',
          {
            patterns: ['../*', './*'],
          },
        ],
        'prefer-rest-params': 'warn',
        'simple-import-sort/exports': 'error',
        'import/first': 'error',
        'import/newline-after-import': 'error',
        'import/no-duplicates': 'error',
        'unused-imports/no-unused-imports': 'error',
        'simple-import-sort/imports': [
          'error',
          {
            groups: [
              // Packages
              ['^@?\\w'],
              // Folders
              [
                !!(tsconfigPaths ?? []).length ? `^(${tsconfigPaths.join('|')})(/.*|$)` : '',
                `^(${folders.join('|')})(/.*|$)`,
                '^\\.',
                '^@\\/([a-z0-9]+)',
              ],
              // If not match on other groups
              ['^'],
            ],
          },
        ],
      },
    },
    {
      files: ['**/*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
  ],
};