module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: "eslint:recommended",
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "prefer-const": "warn",
    "no-var": "error",
    "for-direction": "error",
    "no-shadow": "error",
  },
};
