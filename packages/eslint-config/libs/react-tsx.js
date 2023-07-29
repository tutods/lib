module.exports = {
  env: {
    jest: true,
  },
  extends: ['./react', '../typescript', '../partials/sort-imports'],
  plugins: [],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {},
};
