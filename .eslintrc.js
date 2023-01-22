module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  ignorePatterns: ['config-overrides.js', 'eslintrc.js'],
  extends: [
    'airbnb',
    'airbnb-typescript',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['prettier', 'react', 'react-hooks'],
  rules: {
    'no-console': 'off',
    'react/prop-types': 1,
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
      {
        usePrettierrc: true,
      },
    ],
  },
  parserOptions: {
    project: 'tsconfig.json',
  },
};
