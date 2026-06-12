import type { DummyRuleMap } from "oxlint";

export const suspiciousEslintRules: DummyRuleMap = {
  //#region 0.4.0
  "no-new": "error",
  //#endregion

  //#region 0.4.2
  "no-useless-concat": "error",
  //#endregion

  //#region 0.4.4
  "no-useless-constructor": "off",
  //#endregion

  //#region 0.9.7
  "no-extend-native": "error",
  "no-unexpected-multiline": "error",
  //#endregion

  //#region 0.15.12
  "no-unneeded-ternary": "error",
  //#endregion

  //#region 0.16.9
  "block-scoped-var": "error",
  //#endregion

  //#region 1.1.0
  "no-extra-bind": "error",
  //#endregion

  //#region 1.16.0
  "preserve-caught-error": "error",
  //#endregion

  //#region 1.48.0
  "no-shadow": "off",
  "no-unmodified-loop-condition": "error",
  //#endregion

  //#region 1.62.0
  "no-underscore-dangle": "error",
  //#endregion

  //#region 1.66.0
  "no-implied-eval": "error",
  //#endregion
};
