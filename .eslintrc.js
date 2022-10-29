module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'never',
        exports: 'never',
        functions: 'never',
      },
    ],
    quotes: ['error', 'single', { avoidEscape: true }],
    'no-var': 'error',
    'space-in-parens': 'error',
    'no-multiple-empty-lines': 'error',
  },
};
