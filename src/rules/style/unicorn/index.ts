import type { DummyRuleMap } from "oxlint";

export const styleUnicornRules: DummyRuleMap = {
  //#region 0.0.14
  "unicorn/catch-error-name": "error",
  "unicorn/error-message": "error",
  "unicorn/filename-case": "off",
  "unicorn/no-console-spaces": "off",
  "unicorn/throw-new-error": "error",
  //#endregion

  //#region 0.0.15
  "unicorn/prefer-logical-operator-over-ternary": "error",
  "unicorn/switch-case-braces": "error",
  "unicorn/text-encoding-identifier-case": "error",
  //#endregion

  //#region 0.0.16
  "unicorn/prefer-string-trim-start-end": "error",
  //#endregion

  //#region 0.0.17
  "unicorn/prefer-optional-catch-binding": "error",
  "unicorn/prefer-spread": "error",
  //#endregion

  //#region 0.0.18
  "unicorn/empty-brace-spaces": "error",
  "unicorn/no-nested-ternary": "error",
  "unicorn/no-zero-fractions": "error",
  "unicorn/number-literal-case": "error",
  "unicorn/prefer-includes": "error",
  //#endregion

  //#region 0.0.19
  "unicorn/no-await-expression-member": "error",
  "unicorn/no-unreadable-array-destructuring": "error",
  "unicorn/numeric-separators-style": "error",
  "unicorn/prefer-reflect-apply": "off",
  "unicorn/require-array-join-separator": "error",
  //#endregion

  //#region 0.0.20
  "unicorn/prefer-modern-dom-apis": "error",
  //#endregion

  //#region 0.0.21
  "unicorn/no-null": "off",
  "unicorn/prefer-dom-node-text-content": "error",
  //#endregion

  //#region 0.9.0
  "unicorn/prefer-structured-clone": "error",
  //#endregion

  //#region 0.12.0
  "unicorn/consistent-existence-index-check": "error",
  "unicorn/prefer-string-raw": "off",
  //#endregion

  //#region 0.13.2
  "unicorn/prefer-negative-index": "error",
  //#endregion

  //#region 0.15.13
  "unicorn/consistent-date-clone": "error",
  //#endregion

  //#region 0.16.12
  "unicorn/no-array-method-this-argument": "error",
  "unicorn/prefer-array-index-of": "error",
  "unicorn/prefer-global-this": "off",
  "unicorn/prefer-object-from-entries": "error",
  //#endregion

  //#region 1.20.0
  "unicorn/prefer-class-fields": "error",
  "unicorn/prefer-classlist-toggle": "error",
  //#endregion

  //#region 1.28.0
  "unicorn/no-useless-collection-argument": "error",
  //#endregion

  //#region 1.29.0
  "unicorn/prefer-response-static-json": "error",
  //#endregion

  //#region 1.30.0
  "unicorn/prefer-bigint-literals": "off",
  //#endregion

  //#region 1.33.0
  "unicorn/prefer-default-parameters": "error",
  "unicorn/prefer-keyboard-event-key": "error",
  //#endregion

  //#region 1.35.0
  "unicorn/require-module-attributes": "error",
  //#endregion

  //#region 1.44.0
  "unicorn/relative-url-style": "error",
  //#endregion

  //#region 1.50.0
  "unicorn/prefer-ternary": ["error", "only-single-line"],
  //#endregion

  //#region 1.57.0
  "unicorn/custom-error-definition": "error",
  //#endregion

  //#region 1.59.0
  "unicorn/switch-case-break-position": "error",
  //#endregion

  //#region 1.60.0
  "unicorn/consistent-template-literal-escape": "error",
  //#endregion
};
