const fs = require('fs');
const path = require('path');

const tsconfigFile = fs.readFileSync(
  path.resolve(__dirname, './tsconfig.json'),
);

// Paths to ignore
const pathsToIgnore = ['.git', '.github', '.husky', '.next', '.storybook', 'dist', 'out', 'build',
  'node_modules',
  'sanity',
  'src',
  'storybook-static',
  'styles'];


// Paths on tsconfig.json
const tsconfigPaths = Object.keys(tsconfigFile.compilerOptions.paths ?? {}).map(
  (path) => path.split('/')[0],
);

console.log(tsconfigPaths, '<--');

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
      !pathsToIgnore.includes(dirent.name),
  )
  .map((dirent) => dirent.name);

module.exports = {
  folders: [...rootFolders, ...srcFolders],
  tsconfigPaths,
};