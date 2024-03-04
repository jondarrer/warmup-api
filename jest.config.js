import { defaults } from 'jest-config';

export default {
  ...defaults,
  transform: {},
  verbose: true,
  testEnvironment: 'node',
  collectCoverage: true,
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
};
