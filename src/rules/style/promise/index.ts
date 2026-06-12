import type { DummyRuleMap } from "oxlint";

export const stylePromiseRules: DummyRuleMap = {
  //#region 0.6.1
  "promise/avoid-new": "error",
  "promise/param-names": "error",
  //#endregion

  //#region 0.7.1
  "promise/prefer-await-to-then": "off",
  //#endregion

  //#region 0.9.10
  "promise/prefer-await-to-callbacks": "error",
  //#endregion

  //#region 0.15.13
  "promise/no-nesting": "off",
  //#endregion

  //#region 0.15.14
  "promise/no-return-wrap": "error",
  "promise/prefer-catch": "error",
  //#endregion
};
