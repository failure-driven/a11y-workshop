import pluginJs from "@eslint/js";
import globals from "globals";

export default [
  {
    ignores: ["tmp/", "node_modules/"],
  },
  {
    files: ["**/*.js"],
    languageOptions: {
        globals: { ...globals.node },
        sourceType: "commonjs"
    },
  },
  pluginJs.configs.recommended,
];
