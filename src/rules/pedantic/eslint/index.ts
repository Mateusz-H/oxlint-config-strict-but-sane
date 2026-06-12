import type { DummyRuleMap } from "oxlint";

export const pedanticEslintRules: DummyRuleMap = {
  //#region 0.0.3
  eqeqeq: "error",
  "array-callback-return": ["error", { allowImplicit: true }],
  "no-array-constructor": "error",
  "no-self-compare": "error",
  //#endregion

  //#region 0.0.4
  "no-case-declarations": "error",
  //#endregion

  //#region 0.0.5
  "no-inner-declarations": "off",
  "no-prototype-builtins": "off",
  //#endregion

  //#region 0.0.13
  "no-redeclare": "error",
  //#endregion

  //#region 0.0.14
  "no-fallthrough": "error",
  //#endregion

  //#region 0.0.18
  "no-negated-condition": "error",
  //#endregion

  //#region 0.2.10
  "no-new-wrappers": "error",
  //#endregion

  //#region 0.2.14
  "max-lines": "off",
  //#endregion

  //#region 0.3.3
  radix: "error",
  //#endregion

  //#region 0.3.4
  "max-classes-per-file": "off",
  //#endregion

  //#region 0.4.0
  "symbol-description": "error",
  //#endregion

  //#region 0.4.2
  "require-await": "off",
  //#endregion

  //#region 0.4.3
  "no-constructor-return": "error",
  //#endregion

  //#region 0.9.3
  "sort-vars": "off",
  //#endregion

  //#region 0.9.10
  "no-else-return": "error",
  "no-throw-literal": "off",
  //#endregion

  //#region 0.13.2
  "no-object-constructor": "error",
  //#endregion

  //#region 0.15.12
  "max-depth": "warn",
  "max-lines-per-function": "off",
  "max-nested-callbacks": "error",
  //#endregion

  //#region 0.16.0
  "no-lonely-if": "error",
  //#endregion

  //#region 1.24.0
  "no-warning-comments": "off",
  //#endregion

  //#region 1.32.0
  "no-useless-return": "error",
  //#endregion

  //#region 1.33.0
  "accessor-pairs": "error",
  "no-loop-func": "error",
  "no-promise-executor-return": "error",
  //#endregion

  //#region 1.34.0
  "no-inline-comments": "off",
  //#endregion

  //#region 1.63.0
  "require-unicode-regexp": "error",
  //#endregion
};
