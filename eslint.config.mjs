import js from '@eslint/js';
import { defineConfig, globalIgnores } from 'eslint/config';
import tseslint from 'typescript-eslint';

export default defineConfig([
  js.configs.recommended, // Recommended config applied to all files
  ...tseslint.configs.strict,
  ...tseslint.configs.stylistic,
  globalIgnores(['dist', 'src/types.ts']),
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
]);
