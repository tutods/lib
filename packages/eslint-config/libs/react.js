try {
  require('eslint-plugin-react');
  require('eslint-plugin-react-hooks');
  require('eslint-plugin-jsx-a11y');
} catch {
  throw new Error(
    'Please add eslint-plugin-jsx-a11y eslint-plugin-react and eslint-plugin-react-hooks packages',
  );
}

module.exports = {
  env: {
    jest: true,
  },
  extends: ['plugin:react/recommended', 'plugin:react-hooks/recommended', '../partials/imports'],
  overrides: [
    {
      extends: ['../typescript'],
      files: '*.{tsx,ts}',
    },
    {
      extends: ['../javascript'],
      files: '*.{jsx,js,mjs,cjs}',
    },
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react', 'jsx-a11y'],
  rules: {
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
    'jsx-quotes': ['error', 'prefer-double'],
    'react/display-name': 'off',
    'react/forbid-prop-types': [
      'error',
      {
        checkChildContextTypes: true,
        checkContextTypes: true,
        forbid: ['any', 'array', 'object'],
      },
    ],
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'react/jsx-boolean-value': ['error', 'never'],
    'react/jsx-curly-brace-presence': [
      'error',
      {
        props: 'never',
      },
    ],
    'react/jsx-no-duplicate-props': ['error', { ignoreCase: true }],
    'react/jsx-sort-props': [
      'error',
      {
        multiline: 'last',
        reservedFirst: ['key'],
        shorthandFirst: true,
      },
    ],
    'react/jsx-uses-vars': 'error',
    'react/jsx-wrap-multilines': [
      'error',
      {
        arrow: 'parens-new-line',
        assignment: 'parens-new-line',
        condition: 'parens-new-line',
        declaration: 'parens-new-line',
        logical: 'parens-new-line',
        prop: 'parens-new-line',
        return: 'parens-new-line',
      },
    ],
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/self-closing-comp': [
      'error',
      {
        component: true,
        html: true,
      },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
