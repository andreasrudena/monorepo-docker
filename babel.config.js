const path = require('path');

// Todo: read this fs from lerna.json file and use package.json in each module..?
const packages = {
  'module1': path.resolve(__dirname, 'packages/module1'),
  'module2': path.resolve(__dirname, 'packages/module2')
};

const config = {
  presets: [
    [
      '@babel/preset-env',
      {
        'targets': {
          'node': 'current'
        }
      }
    ]
  ],
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
      return false;
    } 
    return true;
  }],
}

module.exports = config;