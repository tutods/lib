/**
 * Helper to folders and paths
 * @description 'tsconfigPaths': list of paths, without '/*' defined on 'tsconfig.json'
 * @description 'folders': list of all folders on './' (root dir) and './src' (source dir) excluding specific ones (like '.idea', '.vscode', ...)
 */

const fs = require('fs');

/**
 * Variable to store all directories names inside 'src/' directory
 * @type {string[]}
 * @example components
 * @example utils
 */
let srcFolders = [];

/**
 * Variable to store all paths from tsconfig.json (without '/*')
 * @type {string[]}
 * @example @components
 * @example @utils
 */
let tsconfigPaths = [];

/**
 * List of directories to ignore
 * @description When read directories on 'src/'  or './' directory, ignore if found any of these
 * @type {string[]}
 */
const foldersToIgnore = [
  '.idea',
  '.vscode',
  '.git',
  '.github',
  '.husky',
  '.next',
  'dist',
  'out',
  'build',
  'node_modules',
  'sanity',
  'src',
  'storybook-static',
  'styles',
  'tests',
];

/**
 * Read paths from tsconfig.json
 * - 1. check if the file exists
 * - 2. Read the content and parse to JSON
 * - 3. check if the 'compilerOptions' and 'paths' key exists
 * - 4. map all paths to 'tsconfigPahts' variable, removing the '/*'
 * @example '@components/*' will add only '@components'
 */
if (fs.existsSync('./tsconfig.json')) {
  const tsconfig = JSON.parse(fs.readFileSync('./tsconfig.json'));

  if (tsconfig.compilerOptions && tsconfig.compilerOptions.paths) {
    tsconfigPaths = Object.keys(tsconfig.compilerOptions?.paths).map(path => path.split('/')[0]);
  }
}

/**
 * Read directories on './src' directory
 */
if (fs.existsSync('./src')) {
  srcFolders = fs
    .readdirSync('./src', {
      withFileTypes: true,
    })
    .filter(dirent => dirent.isDirectory() && !foldersToIgnore.includes(dirent.name))
    .map(dirent => dirent.name);
}

/**
 * Read directories on './' (root) directory
 * @type {string[]}
 */
const rootFolders = fs
  .readdirSync('./', {
    withFileTypes: true,
  })
  .filter(dirent => dirent.isDirectory() && !foldersToIgnore.includes(dirent.name))
  .map(dirent => dirent.name);

module.exports = {
  folders: [...rootFolders, ...srcFolders],
  joinedFolders: [...rootFolders, ...srcFolders].join('|'),
  joinedTsconfigPaths: tsconfigPaths.join('|'),
  tsconfigPaths,
};
