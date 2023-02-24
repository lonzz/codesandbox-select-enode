/**
 * @type {import('eslint').Linter.BaseConfig}
 */
module.exports = {
  extends: [
    "@remix-run/eslint-config",
    "@remix-run/eslint-config/node",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  ignorePatterns: ["*.mjs", "*.js", "icons.ts"],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "prettier"],
  root: true,
  env: {
    browser: true,
  },
  rules: {
    "prettier/prettier": "error",

    // Disabled because it's a big change, but wanted state is "error".
    "@typescript-eslint/no-explicit-any": "error",
  },
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"],
    sourceType: "module",
  },
};
