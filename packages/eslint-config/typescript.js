// Validation that package exists
try {
  const typescript = require('typescript');
  const tsEslintPlugin = require('@typescript-eslint/eslint-plugin');
  const tsParser = require('@typescript-eslint/parser');
} catch (er) {
  throw new Error('Please add typescript and eslint packages');
}

module.exports = {
  extends: ['plugin:@typescript-eslint/recommended', './partials/prettier', './partials/import'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    '@typescript-eslint/consistent-type-imports': [
      'error',
      {
        prefer: 'type-imports',
        fixStyle: 'separate-type-imports',
      },
    ],
    '@typescript-eslint/consistent-type-exports': [
      'error',
      {
        fixMixedExportsWithInlineTypeSpecifier: false,
      },
    ],
    '@typescript-eslint/ban-types': 'warn',
    '@typescript-eslint/no-empty-function': 'warn',
    '@typescript-eslint/no-this-alias': 'warn',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        varsIgnorePattern: '^_',
        argsIgnorePattern: '^_',
      },
    ],
  },
};
