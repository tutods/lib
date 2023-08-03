/**
 * ESLint configuration (or partial configuration) for sort imports following the defined groups
 * @requires 'eslint-plugin-simple-import-sort' package
 */

// Validation if package is correctly installed
try {
  require('eslint-plugin-simple-import-sort');
} catch {
  throw new Error('Please add eslint-plugin-simple-import-sort package');
}

const { joinedFolders, joinedTsconfigPaths } = require('../helpers/folders-paths');
const {
  allStylesExtension,
  includeStyles,
  notIncludeStyleExtensions,
  notIncludeStyles,
  relativePathsNotIncludeStyles,
} = require('../helpers/regexs');

module.exports = {
  plugins: ['simple-import-sort'],
  rules: {
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          /**
           * Group for packages with 'react', 'react-dom' or 'node:' prefix
           * @example import React from 'react';
           */
          ['^react', '^react-dom', '^node:'],
          /**
           * Group for all packages
           * @example import { Button } from '@mui/material';
           */
          ['^@?\\w', `^(?!(${joinedTsconfigPaths})(?:\\/|$))@?\\w+(?:\\/.*)?$`, '^\\u0000'],
          /**
           * Group for tsconfig paths and folders (working only with 'basePath')
           * @example import { Button } from '@components/Button';
           * @example import { Button } from 'components/Button'; (basePath="src/" - for example)
           */
          [
            `^(${joinedTsconfigPaths})(?:\\/[^/]+)*(\\/${notIncludeStyles}*)?${notIncludeStyleExtensions}$`,
            `^(${joinedFolders})(?:\\/[^/]+)*(\\/${notIncludeStyles}*)?${notIncludeStyleExtensions}$`,
          ],
          /**
           * Group for relative paths andother imports without any match
           * @example import { Button } from '../Button';
           */
          [`${relativePathsNotIncludeStyles}*${notIncludeStyleExtensions}`, '^'],
          /**
           * Group for styles imports
           * @example import styles from '@components/MyComponent/styles.ts'
           * @example import styles from '@components/MyComponent/MyComponent.module.less'
           * @example import styles from '@/styles/global.css'
           */
          [includeStyles, allStylesExtension],
        ],
      },
    ],
  },
};
