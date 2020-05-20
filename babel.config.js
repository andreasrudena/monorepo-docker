const path = require('path');

// Todo: read this fs from lerna.json file and use package.json in each module..?
const packages = {
  'module1': path.resolve(__dirname, 'packages/module1')
};

const config = {
  plugins: [
    [
      'module-resolver',
      {
        resolvePath(sourcePath) {
          return packages[sourcePath];
        },
      },
    ],
  ],
  ignore: [filename => {
    if (!/\/node_modules\//.test(filename)) {
      console.log(`File found for compiling: ${filename}`);
      return false;
    } 
    return true;
  }],
}

module.exports = config;