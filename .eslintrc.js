module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    "semi": "off",
    "@typescript-eslint/semi": ["error", "never"],
    "@typescript-eslint/type-annotation-spacing": "error",
    "@typescript-eslint/no-inferrable-types": "error",
    "@typescript-eslint/explicit-function-return-type": "error"
  },
  env: {
    node: true
  }
};
