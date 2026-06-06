const js = require('@eslint/js');
const globals = require('globals');

module.exports = [
  { ignores: ['dist', 'node_modules', '*.config.js'] },
  js.configs.recommended,
  {
    files: ['src/**/*.js'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: { ...globals.browser },
    },
    rules: {
      'no-unused-vars': 'warn',
    },
  },
];
