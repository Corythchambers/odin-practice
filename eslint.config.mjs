import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import pluginPrettier from "eslint-plugin-prettier";
import configPrettier from "eslint-config-prettier";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,jsx}"] },
  { languageOptions: { globals: globals.browser } },

  // Base ESLint Recommended Config
  pluginJs.configs.recommended,

  // React Plugin Config
  pluginReact.configs.flat.recommended,

  // Prettier Plugin & Config to prevent conflicts
  configPrettier, // Disables conflicting ESLint rules
  {
    plugins: { prettier: pluginPrettier },
    rules: {
      "prettier/prettier": "error", // Marks Prettier issues as ESLint errors
    },
  },
];
