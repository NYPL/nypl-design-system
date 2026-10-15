import js from "@eslint/js";
import tseslint from "typescript-eslint";
import reactHooks from "eslint-plugin-react-hooks";
import prettier from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";
import globals from "globals";

export default tseslint.config(
  {
    ignores: ["dist/**", "coverage/**", "storybook-static/**"],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  prettierConfig,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2017,
        ...globals.jest,
      },
      parserOptions: {
        sourceType: "module",
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: {
      prettier,
      "react-hooks": reactHooks,
    },
    rules: {
      "@typescript-eslint/no-unused-expressions": 0,
      "no-useless-assignment": 0,
      "@typescript-eslint/no-empty-object-type": 0,
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "@typescript-eslint/no-empty-function": 0,
      "@typescript-eslint/no-empty-interface": 0,
      "@typescript-eslint/ban-ts-comment": 0,
      "@typescript-eslint/ban-types": 0,
      "@typescript-eslint/no-inferrable-types": 0,
      "prefer-const": 0,
      "no-sparse-arrays": 0,
      "no-prototype-builtins": 0,
      "@typescript-eslint/no-use-before-define": [
        "error",
        { functions: false, variables: false },
      ],
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
  },
);
