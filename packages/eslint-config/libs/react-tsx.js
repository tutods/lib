module.exports = {
  env: {
    jest: true,
  },
  extends: ['./react', '../typescript'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {},
};
