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
