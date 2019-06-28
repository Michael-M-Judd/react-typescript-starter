module.exports = {
  presets: ['@babel/react', '@babel/typescript', '@babel/env'],
  extends: [
    'airbnb',
    'plugin:prettier/recommended',
    'plugin:eslint-comments/recommended',
    'prettier/react'
  ],
  plugins: ['json', 'react-hooks'],
  rules: {
    strict: 'off',
    'no-underscore-dangle': 'off',
    'no-param-reassign': ['error', { props: false }],
    'import/no-extraneous-dependencies': 'off',
    'jasmine/no-spec-dupes': 'off',
    'jasmine/no-suite-dupes': ['warn', 'branch'],
    camelcase: 'off',
    'no-confusing-arrow': 'off',
    'no-console': 'warn',
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'no-use-before-define': ['error', { classes: true, functions: false, variables: false }]
  }
};
