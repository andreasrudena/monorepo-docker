const path = require('path');

console.log(`Dev running from CWD: ${process.cwd()}`);

const baseConfig = require('../../babel.config.js');
const moduleConfig = require('./.babelrc.json');

require('@babel/register')(Object.assign(baseConfig, moduleConfig));