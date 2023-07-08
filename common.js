const fs = require('fs');

// Paths to ignore
const pathsToIgnore = ['.git', '.github', '.husky', '.next', '.storybook', 'dist', 'out', 'build',
  'node_modules',
  'sanity',
  'src',
  'storybook-static',
  'styles'];

// Paths on tsconfig.json
let tsconfigPaths = undefined;

if (fs.existsSync('./tsconfig.json')) {
  const tsconfig = fs.readFileSync('./tsconfig.json');
  const parsedTsconfig = JSON.parse(tsconfig);

  tsconfigPaths = !!parsedTsconfig.compilerOptions.paths ? Object.keys(parsedTsconfig.compilerOptions.paths).map(
    (path) => path.split('/')[0],
  ) : undefined;
}

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