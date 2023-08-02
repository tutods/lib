// Validation of package correctly installed
try {
  require('eslint-plugin-simple-import-sort');
} catch {
  throw new Error('Please add eslint-plugin-simple-import-sort package');
}

const { folders, tsconfigPaths } = require('../helpers/folders-paths');
const {
  allStylesExtension,
  includeStyles,
  notIncludeStyleExtensions,
  notIncludeStyles,
  relativePathsNotIncludeStyles,
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
          // React packages
          ['^react', '^react-dom'],
          // Packages
          ['^@?\\w', `^(?!(${allTsconfigPaths})(?:\\/|$))@?\\w+(?:\\/.*)?$`, '^\\u0000'],
          // Folders
          [
            `^(${allTsconfigPaths})(?:\\/[^/]+)*(\\/${notIncludeStyles}*)?${notIncludeStyleExtensions}$`,
            `^(${allFolders})(?:\\/[^/]+)*(\\/${notIncludeStyles}*)?${notIncludeStyleExtensions}$`,
          ],
          // Relative imports and the ones don't match on the other groups
          [`${relativePathsNotIncludeStyles}*${notIncludeStyleExtensions}`, '^'],
          // Styles
          [includeStyles, allStylesExtension],
        ],
      },
    ],
  },
};
