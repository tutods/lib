module.exports = {
  env: {
    jest: true,
  },
  extends: ['./react-tsx'],
  rules: {},
  overrides: [
    {
      files: [
        '**/app/**/*.ts?(x)',
        'app/**/*.ts?(x)',
        'app/**/*.js?(x)',
        'pages/**/*.ts?(x)',
        'pages/**/*.js?(x)',
      ],
      rules: {
        'react/function-component-definition': 'off',
      },
    },
  ],
};
