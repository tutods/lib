module.exports = {
  env: {
    node: true,
    es2021: true,
    jest: true,
  },
  extends: [
    '../typescript',
    '../partials/prettier',
    '../partials/imports',
    '../partials/sort-imports',
  ],
  rules: {},
};
