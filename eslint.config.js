import js from '@eslint/js';

export default [
  js.configs.recommended, // Recommended config applied to all files
  {
    files: ['**/*.test.js'],
    rules: {
      'max-lines': 'off',
      'no-useless-escape': 'off',
    },
  },
  {
    files: ['**/*.js'],
    rules: {
      'no-unused-vars': 'error',
    },
  },
  {
    languageOptions: {
      ecmaVersion: 2023,
      sourceType: 'module',
      globals: {
        fetch: 'readonly',
      },
    },
  },
];
