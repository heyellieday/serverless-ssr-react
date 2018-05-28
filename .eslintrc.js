module.exports = {
  extends: ["airbnb", "prettier", "prettier/react"],
  plugins: ["prettier"],
  env: {
    browser: true,
    jasmine: true
  },
  rules: {
    "react/jsx-filename-extension": [1, { extensions: [".js"] }],
    "prettier/prettier": ["error", { singleQuote: true, trailingComma: "all" }],
    "func-names": ["error", "as-needed"]
  }
};
