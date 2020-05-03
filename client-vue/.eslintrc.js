module.exports = {
  root: true,
  extends: ['plugin:vue/recommended', 'eslint:recommended'],
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
  },
  rules: {
    'vue/max-attributes-per-line': [
      2,
      {
        singleline: 10,
        multiline: {
          max: 1,
          allowFirstLine: false,
        },
      },
    ],
    'vue/no-v-html': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/multiline-html-element-content-newline': 'off',
    'vue/name-property-casing': ['error', 'PascalCase'],
    eqeqeq: 1, // 必须使用全等
    // allow async-await
    'generator-star-spacing': 'off',
    'no-unused-expressions': 'off',
    // 'no-unused-vars': 'off',
    // allow debugger during development
    'no-empty-pattern': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/no-parsing-error': 0,
    'generator-star-spacing': 'off',
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
          normal: 'never',
          component: 'always',
        },
        svg: 'always',
        math: 'always',
      },
    ],
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
}
