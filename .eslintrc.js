module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
    plugins: ['react'],
    extends: ['plugin:@typescript-eslint/recommended'],
    rules: {
        'react/jsx-uses-react': 'error',
        'react/jsx-uses-vars': 'error',
        'react/prop-types': 'off',
        '@typescript-eslint/no-unused-vars': 'error',
        'no-unused-vars': 'off',
    },
    globals: {
        JSX: true,
    },
    env: {
        browser: true,
        node: true,
    },
};
