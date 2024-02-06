/** @type {import("prettier").Config} */
module.exports = {
  ...require('./index'),
  plugins: ['prettier-plugin-tailwindcss'],
  tailwindFunctions: ['clsx', 'cn', 'twMerge', 'cva'],
};
