// Validation of package correctly installed
try {
  require('prettier');
  require('eslint-config-prettier');
  require('eslint-plugin-prettier');
} catch {
  throw new Error(
    'Please add prettier, eslint-config-prettier and eslint-plugin-prettier packages',
  );
}

module.exports = {
  extends: ['prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
  },
};
