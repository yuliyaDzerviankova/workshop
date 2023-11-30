module.exports = {
  extends: [
    "react-app",
    "plugin:prettier/recommended",
    "plugin:compat/recommended",
    "plugin:eslint-comments/recommended",
    "plugin:fp/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:jest/recommended",
    "plugin:jest-dom/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:testing-library/react",
  ],
  plugins: ["filenames", "fp", "jest", "jest-dom", "jsx-a11y", "testing-library"],
  settings: {
    polyfills: ["navigator.clipboard"],
    "import/resolver": {
      typescript: {
        project: "./",
      },
    },
  },
  rules: {
    /* warnings: toggle temporarily to assist refactoring */
    // "import/no-cycle": "error",
    "sort-keys": ["off", "asc", { caseSensitive: false, natural: true }],
    "prettier/prettier": "warn",
    "no-redeclare": "off",
    "no-console": "warn",
    "dot-notation": "warn",
    "arrow-body-style": ["warn", "as-needed"],
    "object-shorthand": ["warn", "always"],
    "no-else-return": ["warn", { allowElseIf: false }],
    "padding-line-between-statements": [
      "warn",
      { blankLine: "always", prev: "*", next: "return" },
      { blankLine: "always", prev: "*", next: "export" },
    ],
    "sort-imports": [
      "warn",
      {
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ["all", "single", "multiple", "none"],
      },
    ],

    /* plugins/recommended overrides */
    "@typescript-eslint/consistent-type-definitions": ["warn", "type"],
    "@typescript-eslint/explicit-function-return-type": ["off", { allowExpressions: true }],
    "@typescript-eslint/no-unused-vars": "warn",

    /* TODO: re-enable when eslint/create-react-app issues are ironed out */
    "eslint-comments/no-unlimited-disable": "off",
    "eslint-comments/no-unused-disable": "warn",
    "filenames/match-exported": "warn",
    "fp/no-mutating-methods": ["warn", { allowedObjects: ["history", "form"] }],
    "fp/no-mutation": [
      "warn",
      {
        commonjs: true,
        allowThis: true,
        exceptions: [
          { object: "window" },
          { object: "Component" },
          { property: "current" },
          { object: "Log" },
          { object: "draft" },
          { property: "didCancel" },
          { object: "reader" },
          { property: "whitelist" },
          { object: "a" },
          { property: "args" },
          { property: "argTypes" },
          { property: "parameters" },
        ],
      },
    ],
    "fp/no-nil": "off",
    "fp/no-rest-parameters": "off",
    "fp/no-unused-expression": "off",
    "jsx-a11y/no-autofocus": "off",
    "react/jsx-boolean-value": "warn",
    "react/jsx-key": "warn",
    "react/jsx-pascal-case": "warn",
    "react/jsx-curly-brace-presence": [1, { props: "never", children: "never" }],
    "react/jsx-sort-props": [
      "warn",
      {
        callbacksLast: true,
        shorthandLast: true,
        ignoreCase: true,
        noSortAlphabetically: false,
        reservedFirst: ["key"],
      },
    ],
    "react/prop-types": "off",
    "import/no-default-export": "warn",
    "import/order": [
      "warn",
      {
        "newlines-between": "always",
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
        groups: [
          ["builtin", "external"],
          ["index", "sibling", "parent", "internal"],
        ],
      },
    ],
    "testing-library/await-async-events": "off",
  },
  overrides: [
    {
      files: ["**/*.test.tsx", "**/setupTests.ts"],
      rules: {
        "fp/no-mutation": "off",
        "fp/no-let": "off",
        "jest/expect-expect": ["warn", { assertFunctionNames: ["expect*"] }],
        "no-console": "off",
      },
    },
  ],
}
