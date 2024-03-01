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
    plugins: ['simple-import-sort'],
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

        'simple-import-sort/imports': [
            'error',
            {
                groups: [
                    // Side effect imports.
                    ['^\\u0000'],

                    // Node.js builtins prefixed with `node:`.
                    ['^node:'],

                    // Packages.
                    ['^\\w'],

                    // Packages prefixed with `@`.
                    ['^@\\w'],

                    // Custom paths prefixed with `@/`.
                    ['^@/'],

                    // Relative imports.
                    ['^\\.'],
                ],
            },
        ],
        'simple-import-sort/exports': 'error',

        'prettier/prettier': [
            'error',
            {
                endOfLine: 'auto',
            },
        ],
    },
};
