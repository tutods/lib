// Validation that package exists
try {
  const prettierConfig = require('eslint-config-prettier');
  const prettierPlugin = require('eslint-plugin-prettier');
} catch (er) {
  throw new Error('Please add prettier and eslint packages');
}

module.exports = {
  extends: ['plugin:prettier/recommended'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
  },
};