module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true,
    },
    extends: [
        'airbnb-base',
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "plugin:import/errors",
        "plugin:import/warnings",
        "plugin:import/typescript",
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: './assembly/tsconfig.json',
        ecmaFeatures: {
        jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    plugins: [
        'react',
        '@typescript-eslint',
    ],
    rules: {
        "@typescript-eslint/no-explicit-any": "off",
        "import/extensions": [
        "error",
        "ignorePackages",
        {
            "js": "never",
            "jsx": "never",
            "ts": "never",
            "tsx": "never"
        }
        ],
        "import/no-unresolved": "error",
    },
};
      