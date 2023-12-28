module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "18.2" } },
  plugins: ["react-refresh"],
  rules: {
    // React Rules
    "react/prop-types": "error",
    "react/jsx-props-no-spreading": "off",
    "react/no-unescaped-entities": "off",
    "react/no-unused-state": "error",
    "react/jsx-filename-extension": 0,

    // React Hooks Rules
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",

    // JSX Accessibility Rules
    "jsx-a11y/anchor-is-valid": "off",

    // Import Rules
    "import/react": 0,

    // Additional Stylistic Rules
    indent: ["error", 2],
    quotes: ["error", "single"],
    // Add other style rules as needed

    // Avoiding console.logs in production
    "no-console": ["error", { allow: ["warn", "error"] }],
  },
};
