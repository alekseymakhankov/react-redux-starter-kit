const path = require('path');
const output = require('./base/output-base');

output.path = path.resolve('dist');

module.exports = output;
