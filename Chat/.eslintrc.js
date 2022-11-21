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
    semi: ['error', 'always'],
    'array-bracket-spacing': ['warn', 'never'],
    'array-element-newline': ['warn', 'consistent'],
  },
};
