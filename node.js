import * as fs from 'fs';
import * as path from 'path';

const tsconfigFile = fs.readFileSync(
  path.resolve(__dirname, './tsconfig.json')
)

// Paths to ignore
const pathsToIgnore = ['.git','.github','.husky','.next','.storybook','dist','out','build',
  'node_modules',
  'sanity',
  'src',
  'storybook-static',
  'styles']


// Paths on tsconfig.json
const tsconfigPaths = Object.keys(tsconfigFile.compilerOptions.paths ?? {}).map(
  (path) => path.split('/')[0],
);

console.log(tsconfigPaths,"<--")

// Folders on src/
const srcFolders = fs
  .readdirSync('./src', {
    withFileTypes: true,
  })
  .filter((dirent) => dirent.isDirectory() && !['styles'].includes(dirent.name))
  .map((dirent) => dirent.name);

// Folders on ./
const rootFolders = fs
  .readdirSync('./', {
    withFileTypes: true,
  })
  .filter(
    (dirent) =>
      dirent.isDirectory() &&
      ![
        '.husky',
        '.github',
        '.next',
        '.storybook',
        'node_modules',
        'sanity',
        'src',
        'storybook-static',
        'styles',
      ].includes(dirent.name),
  )
  .map((dirent) => dirent.name);

// Join both folders
const folders = [...rootFolders, ...srcFolders];

export default {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'all',
        jsxSingleQuote: false,
        endOfLine: 'lf',
      },
    ],
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.(m|c)?js'],
      plugins: ['sort-keys-fix', 'sort-destructure-keys'],
      rules: {
        'sort-keys-fix/sort-keys-fix': 'error',
        'sort-destructure-keys/sort-destructure-keys': 'error',
      },
    },
    {
      files: ['**/*.ts'],
      extends: ['plugin:@typescript-eslint/recommended'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
        extraFileExtensions: ['.css'],
        project: './tsconfig.json',
      },
      plugins: [
        '@typescript-eslint',
        'simple-import-sort',
        'import',
        'unused-imports',
      ],
      rules: {
        '@typescript-eslint/ban-types': 'warn',
        '@typescript-eslint/no-empty-function': 'warn',
        '@typescript-eslint/no-this-alias': 'warn',
        '@typescript-eslint/no-explicit-any': 'off',
        'no-restricted-imports': 'off',
        '@typescript-eslint/no-restricted-imports': [
          'error',
          {
            patterns: ['../*', './*'],
          },
        ],
        'prefer-rest-params': 'warn',
        'simple-import-sort/exports': 'error',
        'import/first': 'error',
        'import/newline-after-import': 'error',
        'import/no-duplicates': 'error',
        'unused-imports/no-unused-imports': 'error',
        'simple-import-sort/imports': [
          'error',
          {
            groups: [
              // Packages
              ['^@?\\w'],
              // Folders
              [
                !!tsconfigPaths.length ? `^(${tsconfigPaths.join('|')})(/.*|$)` : '',
                `^(${folders.join('|')})(/.*|$)`,
                '^\\.',
                '^@\\/([a-z0-9]+)',
              ],
              // If not match on other groups
              ['^'],
            ],
          },
        ],
      },
    },
    {
      files: ['**/*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
  ],
};