module.exports = {
  env: {
    jest: true,
  },
  extends: ['./react'],
  overrides: [
    {
      files: [
        'app/**/*.ts?(x)',
        'app/**/*.js?(x)',
        'pages/**/*.ts?(x)',
        'pages/**/*.js?(x)',
        'src/app/**/*.ts?(x)',
        'src/app/**/*.js?(x)',
        'src/pages/**/*.ts?(x)',
        'src/pages/**/*.js?(x)',
      ],
      rules: {
        'react/function-component-definition': 'off',
      },
    },
  ],
  rules: {},
};
