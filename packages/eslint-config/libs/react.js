try {
  // eslint-disable-next-line no-unused-vars
  const [reactPlugin, reactHooksPlugin, jsxA11yPlugin] = [
    require('eslint-plugin-react'),
    require('eslint-plugin-react-hooks'),
    require('eslint-plugin-jsx-a11y'),
  ];
} catch {
  throw new Error(
    'Please add eslint-plugin-jsx-a11y eslint-plugin-react and eslint-plugin-react-hooks packages',
  );
}

module.exports = {
  env: {
    jest: true,
  },
  extends: ['plugin:react/recommended', 'plugin:react-hooks/recommended', '../javascript'],
  plugins: ['react', 'jsx-a11y'],
  rules: {
    'jsx-quotes': ['error', 'prefer-double'],
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/display-name': 'off',
    'react/jsx-curly-brace-presence': [
      'error',
      {
        props: 'never',
      },
    ],
    'react/jsx-boolean-value': ['error', 'never'],
    'react/jsx-sort-props': [
      'error',
      {
        shorthandFirst: true,
        multiline: 'last',
        reservedFirst: ['key'],
      },
    ],
    'react/forbid-prop-types': [
      'error',
      {
        forbid: ['any', 'array', 'object'],
        checkContextTypes: true,
        checkChildContextTypes: true,
      },
    ],
    'react/jsx-no-duplicate-props': ['error', { ignoreCase: true }],
    'react/jsx-uses-vars': 'error',
    'react/self-closing-comp': 'error',
    'react/jsx-wrap-multilines': [
      'error',
      {
        declaration: 'parens-new-line',
        assignment: 'parens-new-line',
        return: 'parens-new-line',
        arrow: 'parens-new-line',
        condition: 'parens-new-line',
        logical: 'parens-new-line',
        prop: 'parens-new-line',
      },
    ],
    'jsx-a11y/alt-text': [
      'warn',
      {
        elements: ['img'],
        img: ['Image'],
      },
    ],
    'jsx-a11y/aria-props': 'warn',
    'jsx-a11y/aria-proptypes': 'warn',
    'jsx-a11y/aria-unsupported-elements': 'warn',
    'jsx-a11y/role-has-required-aria-props': 'warn',
    'jsx-a11y/role-supports-aria-props': 'warn',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
