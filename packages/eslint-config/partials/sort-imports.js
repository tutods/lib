// Validation that package exists
try {
  require('eslint-plugin-simple-import-sort');
} catch {
  throw new Error('Please add eslint-plugin-simple-import-sort package');
}

const { folders, tsconfigPaths } = require('../helpers/folders-paths');
const {
  allStylesExtension,
  includeStylesWord,
  notIncludeStyleExtensions,
  notIncludeStylesWord,
  relativePathsNotIncludeStylesWord,
} = require('../helpers/regexs');

const allTsconfigPaths = tsconfigPaths.join('|');
const allFolders = folders.join('|');

module.exports = {
  plugins: ['simple-import-sort'],
  rules: {
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          // Packages
          [
            '^react',
            '^react-dom',
            '^\\u0000',
            `^(?!(${allTsconfigPaths})(?:\\/|$))@?\\w+(?:\\/.*)?$`,
            '^@?\\w',
          ],
          // Folders
          [
            `^(${allTsconfigPaths})(?:\\/[^/]+)*(\\/${notIncludeStylesWord}*)?${notIncludeStyleExtensions}$`,
            `^(${allFolders})(?:\\/[^/]+)*(\\/${notIncludeStylesWord}*)?${notIncludeStyleExtensions}$`,
          ],
          // Relative imports and the ones don't match on the other groups
          [`${relativePathsNotIncludeStylesWord}*${notIncludeStyleExtensions}`, '^'],
          // Styles
          [includeStylesWord, allStylesExtension],
        ],
      },
    ],
  },
};
