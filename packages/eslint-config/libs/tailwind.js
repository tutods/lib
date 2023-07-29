// Validation that package exists
try {
  // eslint-disable-next-line no-unused-vars
  const plugin = require('eslint-plugin-tailwindcss');
} catch (er) {
  throw new Error('Please add eslint-plugin-tailwindcss package');
}

module.exports = {
  extends: ['plugin:tailwindcss/recommended'],
  plugins: ['tailwindcss'],
  rules: {
    'tailwindcss/no-custom-classname': 'off',
    'tailwindcss/classnames-order': [
      'error',
      {
        removeDuplicates: true,
      },
    ],
    'tailwindcss/enforces-negative-arbitrary-values': 'warn',
    'tailwindcss/enforces-shorthand': 'error',
    'tailwindcss/migration-from-tailwind-2': 'error',
  },
  settings: {
    tailwindcss: {
      calles: ['className', 'tw', 'cn', 'clsx', 'clsxm', 'twMerge'],
    },
  },
};
