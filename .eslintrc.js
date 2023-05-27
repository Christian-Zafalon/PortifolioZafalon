module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: 'standard-with-typescript',
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: "./tsconfig.json"
  },
  rules: {
    "@typescript-eslint/semi": "off",
    "@typescript-eslint/no-confusing-void-expression": "off",
    "@typescript-eslint/consistent-type-imports": "off" ,
    "no-multiple-empty-lines": "off",
    "eol-last": "off"
  }
}
