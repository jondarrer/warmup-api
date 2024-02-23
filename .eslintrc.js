module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true,
    jest: true,
  },
  overrides: [
    {
      files: ['**/*.js'],
      excludedFiles: '*.spec.js',
      rules: {
        'no-unused-vars': 'error',
      },
    },
    {
      files: ['**/*.spec.js'],
      rules: {
        'max-lines': 'off',
        'no-useless-escape': 'off',
      },
      env: {
        jest: true,
      },
    },
  ],
  extends: ['plugin:jest/recommended'],
  parserOptions: {
    ecmaFeatures: {
      impliedStrict: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: ['jest'],
  rules: {},
};
