// Validation that package exists
try {
  require('eslint-plugin-simple-import-sort');
} catch {
  throw new Error('Please add eslint-plugin-simple-import-sort package');
}

console.log([
  `^(${tsconfigPaths.join('|')})${notIncludeStylesWord}*${notIncludeStylesExtension}$`,
  `^(${folders.join('|')})${notIncludeStylesWord}*${notIncludeStylesExtension}$`,
  // `^(.*)(${folders.join('|')})(/.*|$)`,
]);

const { folders, tsconfigPaths } = require('../helpers/folders-paths');
const {
  allStylesExtension,
  includeStylesWord,
  notIncludeStylesExtension,
  notIncludeStylesWord,
  relativePathsNotIncludeStylesWord,
} = require('../helpers/regexs');

module.exports = {
  plugins: ['simple-import-sort'],
  rules: {
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          // Packages
          ['^react', '^react-dom', '^\\u0000', '^@?\\w'],
          // Folders
          [
            `^(${tsconfigPaths.join('|')})${notIncludeStylesWord}*${notIncludeStylesExtension}$`,
            `^(${folders.join('|')})${notIncludeStylesWord}*${notIncludeStylesExtension}$`,
            // `^(.*)(${folders.join('|')})(/.*|$)`,
          ],
          // Relative imports and the ones don't match on the other groups
          [`${relativePathsNotIncludeStylesWord}*${notIncludeStylesExtension}$`, '^'],
          // Styles
          [includeStylesWord.toString(), allStylesExtension.toString()],
        ],
      },
    ],
  },
};
