module.exports = {
  env: {
    node: true,
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [],
  rules: {
    "no-multiple-empty-lines": "warn",
    "no-var": "error",
    "prefer-const": "error",
  },
};

// module.exports = {
//   env: {
//     browser: true,
//     es2021: true,
//     jest: true,
//   },
//   extends: [
//     "eslint:recommended",
//     "plugin:react/recommended",
//     "plugin:@typescript-eslint/recommended",
//     "airbnb",
//     "prettier",
//   ],
//   parser: "@typescript-eslint/parser",
//   parserOptions: {
//     ecmaFeatures: {
//       jsx: true,
//     },
//     ecmaVersion: "latest",
//     sourceType: "module",
//   },
//   plugins: ["react", "@typescript-eslint"],
//   rules: {
//     "no-multiple-empty-lines": "warn",
//     "no-var": "error",
//     "prefer-const": "error",
//   },
// };
