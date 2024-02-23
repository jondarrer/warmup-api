const { defaults } = require('jest-config');
module.exports = {
  ...defaults,
  verbose: true,
  testEnvironment: 'node',
};
