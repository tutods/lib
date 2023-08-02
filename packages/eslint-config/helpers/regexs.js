const notIncludeStylesExtension = /(?<!\.(less|s?css|sass|styl))/;

const notIncludeStylesWord = /\/((?!style(s?)).)/;

const relativePathsNotIncludeStylesWord = /\.+((?!style(s?)).)/;

const includeStylesWord = /(.*)?style(s?)(.*)?$/;

const allStylesExtension = /^(.+)?\.(less|s?css|sass|styl)$/;

module.exports = {
  allStylesExtension,
  includeStylesWord,
  notIncludeStylesExtension,
  notIncludeStylesWord,
  relativePathsNotIncludeStylesWord,
};
