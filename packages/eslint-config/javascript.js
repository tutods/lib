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
    'prefer-rest-params': 'warn',
  },
};
