module.exports = {
  root: true,
  env: { node: true, es2020: true },
  extends: ['airbnb-base', 'airbnb-typescript/base'],
  parserOptions: {
    project: './tsconfig.json',
  },
  ignorePatterns: [ '.eslintrc.js'],
  parser: '@typescript-eslint/parser',
  rules: {
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'import/no-absolute-path': 'off',
    'linebreak-style': 'off',
    'object-curly-newline': 'off',
  },
};
