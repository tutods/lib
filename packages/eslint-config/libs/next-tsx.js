module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: ['./react-tsx'],
  rules: {},
  overrides: [
    {
      files: [
        'app/**/*.ts?(x)',
        'app/**/*.(m|c)?js?(x)',
        'pages/**/*.ts?(x)',
        'pages/**/*.(m|c)?js?(x)',
      ],
      rules: {
        'react/function-component-definition': [
          'warn',
          {
            namedComponents: 'arrow-function',
            unnamedComponents: 'arrow-function',
          },
        ],
      },
    },
  ],
};
