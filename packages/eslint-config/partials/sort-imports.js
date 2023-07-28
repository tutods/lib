// Validation that package exists
try {
  const importSortPlugin = require('eslint-plugin-simple-import-sort');
} catch (er) {
  throw new Error('Please add eslint-plugin-simple-import-sort package');
}

const { folders, tsconfigPaths } = require('$helpers/folders');

module.exports = {
  plugins: ['simple-import-sort'],
  rules: {
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          // Packages
          ['^react', '^react-dom', '^\\u0000', '^@?\\w'],
          // Folders
          [
            !!tsconfigPaths && !!tsconfigPaths.length ? `^(${tsconfigPaths.join('|')})(/.*|$)` : '',
            `^(${folders.join('|')})(/.*|$)`,
            `^(.*)(${folders.join('|')})(/.*|$)`,
          ].filter(Boolean),
          // Styles
          ['^(.*)?styles(.*)?$', '^.+\\.s?css$', '^.+\\.sass$', '^.+\\.less$', '^(.+)?styles.ts$'],
          // Relative imports and the ones not match on the other groups
          ['^\\.(.*)?$', '^'],
        ],
      },
    ],
  },
};
