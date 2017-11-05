/* eslint-env node */

const OFF = 0;
const WARN = 1;
const ERROR = 2;

module.exports = {
    parser: 'babel-eslint',
    plugins: [ 'react' ],
    extends: [
        'eslint:recommended',
        'plugin:react/recommended'
    ],
    rules: {
        // --- possible errors ----

        'no-console': [ OFF ],
        'no-constant-condition': [ ERROR ],
        'no-extra-semi': [ ERROR ],
        'no-unexpected-multiline': [ ERROR ],
        'no-unreachable': [ ERROR ],

        // --- best practices ----

        'curly': [ ERROR, 'all' ],
        'dot-notation': [ ERROR ],
        'eqeqeq': [ ERROR, 'allow-null' ],
        'no-case-declarations': [ ERROR ],
        'no-eval': [ ERROR ],
        'no-extend-native': [ ERROR ],
        'no-floating-decimal': [ ERROR ],
        'no-implicit-coercion': [ ERROR ],
        'no-implied-eval': [ ERROR ],
        'no-invalid-this': [ ERROR ],
        'no-labels': [ ERROR ],
        'no-multi-spaces': [ ERROR ],
        'no-multi-str': [ ERROR ],
        'no-native-reassign': [ ERROR ],
        'no-new-func': [ ERROR ],
        'no-new-wrappers': [ ERROR ],
        'no-return-assign': [ ERROR ],
        'no-self-compare': [ ERROR ],
        'no-sequences': [ ERROR ],
        'no-throw-literal': [ ERROR ],
        'no-void': [ ERROR ],
        'no-with': [ ERROR ],
        'wrap-iife': [ ERROR, 'inside' ],
        'yoda': [ ERROR, 'never' ],

        // --- strict mode ---

        'strict': [ ERROR, 'global' ],

        // --- variables ----

        'no-shadow': [ ERROR ],
        'no-shadow-restricted-names': [ ERROR ],
        'no-use-before-define': [ ERROR, 'nofunc' ],

        // --- node.js and common.js

        'no-mixed-requires': [ ERROR ],
        'no-new-require': [ ERROR ],

        // --- stylistic ----

        // 'array-bracket-spacing': [ ERROR, 'never', { 'singleValue': true } ],
        'array-bracket-spacing': [ ERROR, 'never' ],
        'block-spacing': [ ERROR, 'always' ],
        'brace-style': [ ERROR, '1tbs', { 'allowSingleLine': true } ],
        'comma-dangle': [ ERROR, 'only-multiline' ],
        'comma-spacing': [ ERROR ],
        'comma-style': [ ERROR, 'last' ],
        'func-style': [ ERROR, 'declaration', { 'allowArrowFunctions': true } ],
        'indent': [ WARN, 4 ],
        'key-spacing': [ ERROR ],
        'keyword-spacing': [ ERROR ],
        'linebreak-style': [ ERROR, 'unix' ],
        'new-parens': [ ERROR ],
        'max-len': [ WARN, 256 ],
        'no-array-constructor': [ ERROR ],
        'no-lonely-if': [ ERROR ],
        'no-multiple-empty-lines': [ ERROR, { 'max': 2, 'maxEOF': 1 } ],
        'no-new-object': [ ERROR ],
        'no-param-reassign': [ ERROR ],
        'no-proto': [ ERROR ],
        'no-trailing-spaces': [ ERROR ],
        'no-unneeded-ternary': [ ERROR ],
        'object-curly-spacing': [ ERROR, 'always' ],
        'one-var': [ ERROR, { 'uninitialized': 'always', 'initialized': 'never' } ],
        'operator-assignment': [ ERROR, 'always' ],
        'operator-linebreak': [ ERROR, 'after' ],
        'padded-blocks': [ ERROR, 'never' ],
        'quote-props': [ ERROR, 'as-needed' ],
        'quotes': [ ERROR, 'single', 'avoid-escape' ],
        'semi': [ ERROR, 'always' ],
        'semi-spacing': [ ERROR ],
        'space-before-blocks': [ ERROR, 'always' ],
        'space-before-function-paren': [ ERROR, 'always' ],
        'space-in-parens': [ ERROR, 'never' ],
        'space-infix-ops': [ ERROR ],
        'space-unary-ops': [ ERROR ],
        'spaced-comment': [ ERROR, 'always' ],

        // --- es6 ----

        'arrow-body-style': [ERROR, 'as-needed'],
        'arrow-parens': [ ERROR, 'always' ],
        'arrow-spacing': [ ERROR ],
        'constructor-super': [ ERROR ],
        'no-class-assign': [ ERROR ],
        'no-confusing-arrow': [ ERROR, { 'allowParens': true } ],
        'no-const-assign': [ ERROR ],
        'no-dupe-class-members': [ ERROR ],
        'no-this-before-super': [ ERROR ],
        'no-var': [ ERROR ],
        'prefer-const': [ ERROR ],
        'prefer-template': [ ERROR ]

    },
    env: {
        'es6': true,
        'node': true,
        'mocha': true,
        'browser': true
    }
};
