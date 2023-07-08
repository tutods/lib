const fs = require('fs');

let srcFolders = [];
let tsconfigPaths = [];

// Paths to ignore
const pathsToIgnore = ['.git', '.github', '.husky', '.next', '.storybook', 'dist', 'out', 'build',
  'node_modules',
  'sanity',
  'src',
  'storybook-static',
  'styles'];

// Paths on tsconfig.json
if (fs.existsSync('./tsconfig.json')) {
  const tsconfig = fs.readFileSync('./tsconfig.json');
  const parsedTsconfig = JSON.parse(tsconfig);

  if (parsedTsconfig.compilerOptions && !!parsedTsconfig.compilerOptions.paths) {
    tsconfigPaths = Object.keys(parsedTsconfig.compilerOptions?.paths).map(
      (path) => path.split('/')[0]);
  }
}

// Folders on src/
if (fs.existsSync('./src')) {
  srcFolders = fs
    .readdirSync('./src', {
      withFileTypes: true,
    })
    .filter((dirent) => dirent.isDirectory() && !['styles'].includes(dirent.name))
    .map((dirent) => dirent.name);
}

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