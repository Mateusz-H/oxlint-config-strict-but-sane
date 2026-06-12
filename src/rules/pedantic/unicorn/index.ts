import type { DummyRuleMap } from "oxlint";

export const pedanticUnicornRules: DummyRuleMap = {
  //#region 0.0.8
  "unicorn/no-instanceof-array": "error",
  //#endregion

  //#region 0.0.15
  "unicorn/prefer-query-selector": "off",
  "unicorn/require-number-to-fixed-digits-argument": "error",
  //#endregion

  //#region 0.0.16
  "unicorn/new-for-builtins": "error",
  "unicorn/no-new-buffer": "error",
  "unicorn/no-object-as-default-parameter": "error",
  "unicorn/no-static-only-class": "error",
  "unicorn/prefer-blob-reading-methods": "error",
  "unicorn/prefer-code-point": "off",
  "unicorn/prefer-date-now": "off",
  "unicorn/prefer-regexp-test": "warn",
  "unicorn/prefer-type-error": "error",
  //#endregion

  //#region 0.0.18
  "unicorn/no-hex-escape": "error",
  "unicorn/no-lonely-if": "error",
  "unicorn/no-negated-condition": "error",
  "unicorn/no-this-assignment": "error",
  "unicorn/no-typeof-undefined": "error",
  "unicorn/no-useless-promise-resolve-reject": "error",
  "unicorn/no-useless-switch-case": "error",
  "unicorn/prefer-array-some": "error",
  "unicorn/prefer-dom-node-append": "warn",
  "unicorn/prefer-dom-node-dataset": "off",
  "unicorn/prefer-dom-node-remove": "off",
  "unicorn/prefer-event-target": "off",
  "unicorn/prefer-math-trunc": "error",
  "unicorn/prefer-string-replace-all": "error",
  "unicorn/prefer-string-slice": "error",
  //#endregion

  //#region 0.0.19
  "unicorn/escape-case": "error",
  "unicorn/explicit-length-check": "off",
  "unicorn/no-unreadable-iife": "error",
  "unicorn/prefer-native-coercion-functions": "error",
  //#endregion

  //#region 0.0.20
  "unicorn/prefer-array-flat": "error",
  //#endregion

  //#region 0.0.21
  "unicorn/prefer-prototype-methods": "error",
  //#endregion

  //#region 0.5.3
  "unicorn/no-negation-in-equality-check": "error",
  //#endregion

  //#region 0.6.1
  "unicorn/no-useless-undefined": "error",
  //#endregion

  //#region 0.10.1
  "unicorn/consistent-empty-array-spread": "error",
  "unicorn/prefer-math-min-max": "error",
  //#endregion

  //#region 0.16.9
  "unicorn/consistent-assert": "warn",
  //#endregion

  //#region 0.16.10
  "unicorn/no-unnecessary-slice-end": "error",
  //#endregion

  //#region 0.16.12
  "unicorn/no-unnecessary-array-flat-depth": "error",
  //#endregion

  //#region 1.19.0
  "unicorn/no-array-callback-reference": "error",
  //#endregion

  //#region 1.20.0
  "unicorn/no-unnecessary-array-splice-count": "error",
  "unicorn/prefer-at": "off",
  "unicorn/prefer-top-level-await": "error",
  //#endregion

  //#region 1.35.0
  "unicorn/no-immediate-mutation": "error",
  //#endregion

  //#region 1.59.0
  "unicorn/prefer-import-meta-properties": "error",
  //#endregion
};
