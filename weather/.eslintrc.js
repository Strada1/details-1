module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": "eslint:recommended",
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "rules": {
        "no-const-assign": "error",
        "arrow-body-style": ["error", "as-needed"],
        "no-constructor-return": "error"
    }
}
