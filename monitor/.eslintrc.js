module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'airbnb',
    ],
    overrides: [
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'react',
    ],
    rules: {
        indent: [1, 4],
        semi: [1, 'never'],
        'no-unused-vars': 0,
        'import/prefer-default-export': 'off',
        'spaced-comment': 0,
        'react/jsx-indent': [1, 4],
        'react/prop-types': [0],
        'import/no-useless-path-segments': [0],
        'react/jsx-props-no-spreading': [0],
        'react/jsx-filename-extension': [0],
        'react/react-in-jsx-scope': [0],
        'no-unused-expressions': 0,
        'import/no-named-as-default': 0,
        'import/no-named-as-default-member': 0,
        'jsx-a11y/click-events-have-key-events': [0],
        'jsx-a11y/no-static-element-interactions': [0],
        'react/jsx-indent-props': [1, 4],
        'react/no-array-index-key': [0],
        'react/jsx-one-expression-per-line': [0],
        'global-require': 0,
        'no-undef': 0,
        'linebreak-style': 0,
    },
}
