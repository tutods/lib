// Validation that package exists
try {
  // eslint-disable-next-line no-unused-vars
  const [typescript, tsEslintPlugin, tsParser] = [
    require('typescript'),
    require('@typescript-eslint/eslint-plugin'),
    require('@typescript-eslint/parser'),
  ];
} catch {
  throw new Error(
    'Please add typescript, @typescript-eslint/eslint-plugin and @typescript-eslint/parser packages',
  );
}

module.exports = {
  extends: ['plugin:@typescript-eslint/recommended', './javascript'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: true,
  },
  plugins: ['@typescript-eslint'],
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
    '@typescript-eslint/ban-ts-comment': 'warn',
  },
};
