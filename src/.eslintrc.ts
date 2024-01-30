module.exports = {
  root: true,
  env: {
    browser: true,
    amd: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'import',
    // If I let this ON, regular JS do not get linted
    // [
    //   '@babel/plugin-transform-react-jsx',
    //   {
    //     runtime: 'automatic',
    //   },
    // ],
    'react',
    'react-hooks',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    // 'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  parserOptions: {
    sourceType: 'module',
    project: ['./tsconfig.json', './packages/*/tsconfig.json'],
  },
  rules: {
    // https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html
    // 'react/jsx-uses-react': 'off',
    // "react/react-in-jsx-scope": "off"

    semi: 'off',
    '@typescript-eslint/semi': 'error',

    // Typescript Plugin Rules
    '@typescript-eslint/ban-ts-comment': [
      'error',
      {
        'ts-expect-error': 'allow-with-description',
        'ts-ignore': true,
        'ts-nocheck': true,
        'ts-check': false,
        minimumDescriptionLength: 5,
      },
    ],
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
    '@typescript-eslint/explicit-function-return-type': 'error',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-empty-function': ['error', { allow: ['arrowFunctions'] }],
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/prefer-nullish-coalescing': 'error',
    '@typescript-eslint/prefer-optional-chain': 'error',
    '@typescript-eslint/unbound-method': 'off',
    '@typescript-eslint/prefer-as-const': 'error',
    '@typescript-eslint/no-unused-vars': ['warn', { varsIgnorePattern: '^_', argsIgnorePattern: '^_' }],
    // lint base rules
    curly: ['error', 'all'],
    'no-mixed-operators': 'error',
    'no-console': 'warn',
    'no-process-exit': 'error',
    'no-fallthrough': ['warn', { commentPattern: '.*intentional fallthrough.*' }],

    //
    // eslint-plugin-import
    //

    // disallow non-import statements appearing before import statements
    'import/first': 'error',
    // Require a newline after the last import/require in a group
    'import/newline-after-import': 'error',
    // Forbid import of modules using absolute paths
    'import/no-absolute-path': 'error',
    // disallow AMD require/define
    'import/no-amd': 'error',
    // forbid default exports
    // 'import/no-default-export': 'error',
    // Forbid the use of extraneous packages
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
        peerDependencies: true,
        optionalDependencies: false,
      },
    ],
    // Forbid mutable exports
    'import/no-mutable-exports': 'error',
    // Prevent importing the default as if it were named
    'import/no-named-default': 'error',
    // Prohibit named exports
    'import/no-named-export': 'off', // we want everything to be a named export
    // Forbid a module from importing itself
    'import/no-self-import': 'error',
    // Require modules with a single export to use a default export
    'import/prefer-default-export': 'off', // we want everything to be named
  },
};
