module.exports = {
  parserOptions: {
    ecmaVersion: 'latest',
  },
  env: {
    browser: true,
    node: true,
    es2021: true,
    es6: true,
  },
  extends: ['eslint:recommended', './partials/imports'],
  plugins: [],
  rules: {
    'prefer-rest-params': 'warn',
  },
};
