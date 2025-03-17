import js from '@eslint/js';
import tseslint from 'typescript-eslint';

export default [
  js.configs.recommended, // Recommended config applied to all files
  ...tseslint.configs.strict,
  ...tseslint.configs.stylistic,
  {
    files: ['**/*.test.ts'],
    rules: {
      'max-lines': 'off',
      'no-useless-escape': 'off',
    },
  },
  {
    files: ['**/*.ts'],
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
