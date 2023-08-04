module.exports = {
  env: {
    browser: true,
    es2021: true,
    es6: true,
    node: true,
  },
  extends: ['eslint:recommended', './partials/imports'],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'arrow-body-style': ['error', 'as-needed'],
    'no-use-before-define': 'error',
    'prefer-rest-params': 'warn',
  },
};
