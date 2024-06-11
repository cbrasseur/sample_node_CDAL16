import globals from "globals";


export default [
  {files: ["**/*.js"], languageOptions: {sourceType: "commonjs"}, ignores: ['**/*.spec.js']},
  {languageOptions: { globals: globals.browser }},
];