module.exports = {
    root: true,
    env: {
        node: true,
        es2024: true,
    },
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    extends: ['eslint:recommended', 'plugin:prettier/recommended'],
    rules: {
        'no-console': 'off',
        'no-prototype-builtins': 'off',
        'no-inner-declarations': 'off',
        'no-constant-condition': 'off',
        'no-async-promise-executor': 'off',
        'no-case-declarations': 'off',
        'no-undef': 'error',
        'no-useless-escape': 'off',
        'no-empty': 'off',
        'no-irregular-whitespace': 'off',
        'no-control-regex': 'off',
        'no-empty-character-class': 'off',
        'prefer-rest-params': 'off',
        'prettier/prettier': [
            'error',
            {
                endOfLine: 'auto',
            },
        ],
    },
};
