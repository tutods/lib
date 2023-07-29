module.exports = {
  env: {
    jest: true,
  },
  extends: ['./react', '../typescript', '../partials/sort-imports', '../partials/prettier'],
  plugins: [],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      // extraFileExtensions: ['.css'],
    },
  },
  rules: {},
  settings: {
    // TODO: check if it's necessary
    // 'import/parsers': {
    //   [require.resolve('@typescript-eslint/parser')]: ['.ts', '.tsx', '.d.ts'],
    // },
  },
};
