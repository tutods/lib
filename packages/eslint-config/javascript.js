module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: ['eslint:recommended', './partials/prettier', './partials/imports'],
  plugins: [],
  rules: {
    'prefer-rest-params': 'warn',
  },
};
