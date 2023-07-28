module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: ['./react', '../typescript', '../partials/sort-imports', '../partials/prettier'],
  plugins: [],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {},
  settings: {
    // TODO: check if it's necessary
    'import/parsers': {
      [require.resolve('@typescript-eslint/parser')]: ['.ts', '.tsx', '.d.ts'],
    },
  },
};
