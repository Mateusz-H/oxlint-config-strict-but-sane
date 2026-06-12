import type { DummyRuleMap } from "oxlint";

export const suspiciousPromiseRules: DummyRuleMap = {
  //#region 0.13.1
  "promise/no-promise-in-callback": "error",
  //#endregion

  //#region 1.13.0
  "promise/always-return": "off",
  //#endregion

  //#region 1.19.0
  "promise/no-multiple-resolved": "error",
  //#endregion
};
