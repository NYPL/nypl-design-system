module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [
    "react",
    "@typescript-eslint",
    "jsx-a11y",
    "prettier",
    "react-hooks",
  ],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:jsx-a11y/strict",
    "prettier",
    "plugin:storybook/recommended",
  ],
  rules: {
    // Allow exporting simple anonymous objects
    "import/no-anonymous-default-export": 0,
    // this rule was deprecated in favor of another
    // not sure why it is still giving errors
    "jsx-a11y/label-has-for": 0,
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "@typescript-eslint/no-empty-function": 0,
    "@typescript-eslint/no-empty-interface": 0,
    "react/display-name": 0,
    "@typescript-eslint/ban-ts-comment": 0,
    "@typescript-eslint/ban-types": 0,
    "storybook/default-exports": 0,
    "@typescript-eslint/no-inferrable-types": 0,
    "prefer-const": 0,
    "no-sparse-arrays": 0,
    "no-prototype-builtins": 0,
    "@typescript-eslint/no-use-before-define": [
      "error",
      { functions: false, variables: false },
    ],
    "react/no-unescaped-entities": [
      "error",
      {
        forbid: [">", "}"],
      },
    ],
    // disabling this bc it is checked by typescript so it is
    // redundant and doesn't function properly
    "react/prop-types": 0,
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        vars: "all",
        args: "after-used",
        // ignore underscore _vars or jsx imports or React imports
        argsIgnorePattern: "^_.*",
        varsIgnorePattern: "^jsx$|^React$|^_.*",
        ignoreRestSiblings: true,
      },
    ],
    "no-underscore-dangle": 0,
    // these are meant to allow jsx to mark react as used. Not working right now though
    "react/jsx-uses-vars": "error",
    "react/jsx-uses-react": "error",
    // disable this rule because it is unnecessarily strict for TS
    "@typescript-eslint/explicit-function-return-type": 0,
    "@typescript-eslint/explicit-module-boundary-types": 0,
    // if we want this, we should turn disallow any in tsconfig not here
    "@typescript-eslint/no-explicit-any": 0,
    "@typescript-eslint/no-var-requires": 0,
    camelcase: "error",
    "@typescript-eslint/camelcase": 0,
    "@typescript-eslint/prefer-namespace-keyword": "error",
    eqeqeq: ["error", "smart"],
    "id-blacklist": [
      "error",
      "any",
      "Number",
      "number",
      "String",
      "string",
      "Boolean",
      "Undefined",
    ],
    "id-match": "error",
    "no-eval": "error",
    "no-redeclare": "error",
    "no-var": "error",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
