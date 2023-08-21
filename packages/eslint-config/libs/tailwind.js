// Validation of package correctly installed
try {
  require('eslint-plugin-tailwindcss');
} catch {
  throw new Error('Please add eslint-plugin-tailwindcss package');
}

module.exports = {
  extends: ['plugin:tailwindcss/recommended'],
  plugins: ['tailwindcss'],
  rules: {
    'tailwindcss/classnames-order': [
      'error',
      {
        removeDuplicates: true,
      },
    ],
    'tailwindcss/enforces-negative-arbitrary-values': 'warn',
    'tailwindcss/enforces-shorthand': 'error',
    'tailwindcss/migration-from-tailwind-2': 'error',
    'tailwindcss/no-custom-classname': 'off',
  },
  settings: {
    tailwindcss: {
      calles: ['className', 'tw', 'cn', 'clsx', 'twMerge'],
    },
  },
};
