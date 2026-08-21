import { defineConfig } from "eslint/config";
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintPluginPrettier from "eslint-plugin-prettier";
import eslintPluginVue from "eslint-plugin-vue";
import globals from "globals";
import eslintConfigPrettier from "eslint-config-prettier/flat";

const ignores = ["**/dist/*", "**/node_modules/**", ".*", "scripts/**", "**/*.d.ts"];

export default defineConfig(
  // 通用配置
  {
    ignores,
    extends: [eslint.configs.recommended, ...tseslint.configs.recommended, eslintConfigPrettier],
    plugins: {
      prettier: eslintPluginPrettier
    },
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parser: tseslint.parser
    },
    rules: {
      "no-var": "error"
    }
  },
  // 前端配置
  {
    ignores,
    files: ["apps/frontend/**/*.{ts,js,tsx,jsx,vue}", "packages/utils/**/*.{ts,js,tsx,jsx}"],
    extends: [...eslintPluginVue.configs["flat/recommended"], eslintConfigPrettier],
    languageOptions: {
      globals: { ...globals.browser }
    }
  },
  // 后端配置
  {
    ignores,
    files: ["apps/backend/**/*.{ts,js}"],
    languageOptions: {
      globals: { ...globals.node }
    }
  }
);
