import path from "node:path"
import { fileURLToPath } from "node:url"
// import antfu, { astro } from '@antfu/eslint-config'
import { FlatCompat } from "@eslint/eslintrc"
import js from "@eslint/js"
// import tsParser from '@typescript-eslint/parser'
// import parser from 'astro-eslint-parser'
// import globals, { browser } from 'globals'
// import { env } from 'node:process'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
	resolvePluginsRelativeTo: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
})

/**
 * @type {import("eslint").Linter.Config}
 */
export default [
  ...compat.config({
		globals: {
			NodeJS: true,
			NodeListOf: true,
		},
		env: {
			es2020: true,
			node: true,
			browser: true,
		},
		extends: ["eslint-config-prettier"], //"@antfu",
		parser: "@typescript-eslint/parser",
		parserOptions: {
			ecmaVersion: "latest",
			sourceType: "module",
		},
		// astro: true,
    rules: {
      "eol-last": "off",
      "jsx-quotes": ["warn", "prefer-double"],
      "quotes": ["warn", "double"],
      "semi": ["warn", "never"],
      "@stylistic/js/no-tabs": "off",
      "@stylistic/ts/indent": "off",
      "no-constant-binary-expression": "warn",
      "no-debugger": "warn",
      "no-extend-native": "off",
      "no-trailing-spaces": "warn",
      "space-before-function-paren": "off",
      "antfu/if-newline": "off",
      "antfu/top-level-function": "off",
      "@stylistic/js/operator-linebreak": "off",
      "@stylistic/ts/brace-style": "off",
      "@stylistic/js/multiline-ternary": "off",
      "node/prefer-global/process": "off",
      "@stylistic/js/no-mixed-spaces-and-tabs": "off",
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": "off",
      // 'unused-imports/no-unused-imports': 'warn',

      "object-curly-newline": [
        "warn",
        {
          consistent: true,
          multiline: true,
        },
      ],

      "object-curly-spacing": ["warn", "always"],
      "array-element-newline": ["warn", "consistent"],
      "array-bracket-newline": ["warn", "consistent"],
    },
		overrides: [
				{
					files: ["*.astro", "src/utils/serviceWorker.ts"],
					parser: "astro-eslint-parser",
					parserOptions: {
						parser: "@typescript-eslint/parser",
						extraFileExtensions: [".astro"],
					},
					extends: ["plugin:astro/recommended", "plugin:astro/jsx-a11y-recommended"],
					rules: {
						"astro/no-conflict-set-directives": "warn",
						"astro/no-unused-define-vars-in-style": "warn",
						"astro/no-unused-css-selector": "off",
						"astro/prefer-class-list-directive": "warn",
						"astro/semi": ["warn", "never"],
						"astro/jsx-a11y/anchor-is-valid": "warn",
						"@stylistic/ts/indent": "off",
					},
				},
				{
					files: ["**/*.astro/*.js", "*.astro/*.js"],
					parser: "@typescript-eslint/parser",
				}
		]
  })
]
