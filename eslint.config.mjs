import globals from "globals"

export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "commonjs"
    },
    ignores: ['**/*.spec.js'],
    rules: {
      // "no-unused-vars": "warn",
      "no-console": "off",
      "eqeqeq": ["error", "always"],
      "semi": ["error", "never"]
    }
  },
  {
    languageOptions: {
      globals: globals.browser
    },
    rules: {
      // "no-unused-vars": "warn",
      "no-console": "off",
      "eqeqeq": ["error", "always"],
      "semi": ["error", "never"]
    }
  }
]