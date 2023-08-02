/**
 * Regex to exclude possible matchs with style files extensions (like '.less', '.scss', '.css', '.sass', etc.)
 */
const notIncludeStyleExtensions = '(?<!\\.(less|s?css|sass|styl))';

/**
 * Regex to exclude possible matches that contain the word 'styles' or 'style'
 */
const notIncludeStyles = '(?:(?!style(?:s?)).)';

/**
 * Regex to get relative paths except the ones with the word 'styles' or 'style'
 */
const relativePathsNotIncludeStyles = '\\.+((?!style(s?)).)';

/**
 * Regex for strings including the word 'styles' or 'style'
 */
const includeStyles = '(.*)?style(s?)(.*)?$';

/**
 * Regex for all strings ending with a style file extension (like '.less', '.scss', '.css', '.sass', etc.)
 */
const allStylesExtension = '^(.+)?\\.(less|s?css|sass|styl)$';

module.exports = {
  allStylesExtension,
  includeStyles,
  notIncludeStyleExtensions,
  notIncludeStyles,
  relativePathsNotIncludeStyles,
};
