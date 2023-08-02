try {
  require('eslint-plugin-sort-keys-fix');
  require('eslint-plugin-sort-destructure-keys');
} catch {
  throw new Error(
    'Please add eslint-plugin-sort-destructure-keys and eslint-plugin-sort-keys-fix packages',
  );
}

module.exports = {
  extends: [],
  plugins: ['sort-keys-fix', 'sort-destructure-keys'],
  rules: {
    'sort-destructure-keys/sort-destructure-keys': 'error',
    'sort-keys-fix/sort-keys-fix': 'error',
  },
};
