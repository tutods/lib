module.exports = {
  env: {
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
        'react/function-component-definition': 'off',
      },
    },
  ],
};
