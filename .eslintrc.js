const { resolve } = require('path');

module.exports = {
  root: true,
  env: {
    node: true,
    jest: true,
  },

  parserOptions: {
    parser: '@typescript-eslint/parser',

    project: resolve(__dirname, './tsconfig.json'),
    tsconfigRootDir: __dirname,

    sourceType: 'module',
    ecmaVersion: 2020,
  },

  plugins: [
    // required to apply rules which need type information
    '@typescript-eslint',

    // https://github.com/typescript-eslint/typescript-eslint/issues/389#issuecomment-509292674
    // Prettier has not been included as plugin to avoid performance impact
    // add it as an extension for your IDE
    'prettier',
  ],

  extends: [
    'react-app',
    'react-app/jest',

    // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#usage
    // ESLint typescript rules
    'plugin:@typescript-eslint/recommended',

    // consider disabling this class of rules if linting takes too long
    // 'plugin:@typescript-eslint/recommended-requiring-type-checking',

    'standard',

    // https://github.com/prettier/eslint-config-prettier#installation
    // usage with Prettier, provided by 'eslint-config-prettier'.
    'prettier',
  ],

  rules: {
    'prettier/prettier': ['warn', {}, { usePrettierrc: true }], // Use our .prettierrc file as source

    'max-len': [
      'warn',
      {
        code: 120,
        tabWidth: 2,
        ignoreUrls: true,
      },
    ],

    // allow async-await
    'generator-star-spacing': 'off',

    // allow paren-less arrow functions
    'arrow-parens': 'off',
    'one-var': 'off',
    'no-extra-semi': 'error',
    'import/first': 'off',
    'import/named': 'error',
    'import/namespace': 'error',
    'import/default': 'error',
    'import/export': 'error',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': 'off',
    "@typescript-eslint/no-empty-interface": "off",

    'prefer-promise-reject-errors': 'off',
    semi: ['error', 'always'],
    '@typescript-eslint/semi': ['error', 'always'],
    'space-before-function-paren': 'off',
    'no-void': 'off',
    '@typescript-eslint/no-inferrable-types': 0,
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['warn'],

    "no-undefined": ['error'],
    "no-eq-null": ['error'],


    'no-useless-constructor': 'off',
    'new-cap': 'off',

    'space-before-function-paren': [
      'error',
      {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always',
      },
    ],

    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'semi',
          requireLast: true,
        },
        singleline: {
          delimiter: 'semi',
          requireLast: false,
        },
      },
    ],

    'comma-dangle': [
      'warn',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'never',
      },
    ],

    // TypeScript
    quotes: 'off',
    '@typescript-eslint/quotes': ['error', 'single'],

    // Turn it off because already in @typescript-eslint
    'no-unsafe-assignment': 'off',

    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',

    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/require-await': 'off',

    // react parser bug: https://stackoverflow.com/questions/63818415/react-was-used-before-it-was-defined/64024916#64024916
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": "off",


    // allow debugger during development only
    'no-debugger': process.env.NODE_ENV === `production` ? `error` : `off`,


    'react/jsx-sort-props': `warn`,
    'react-hooks/exhaustive-deps': `off`,
  },

  "settings": {
    "import/ignore": [
        "node_modules/react-native/index\\.js$"
    ]
  }

};