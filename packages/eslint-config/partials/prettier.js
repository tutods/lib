// Validation that package exists
try {
  // eslint-disable-next-line no-unused-vars
  const [prettier, prettierConfig, prettierPlugin] = [
    require('prettier'),
    require('eslint-config-prettier'),
    require('eslint-plugin-prettier'),
  ];
} catch (er) {
  throw new Error('Please add prettier and eslint packages');
}

module.exports = {
  extends: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
  },
  plugins: ['prettier'],
};
