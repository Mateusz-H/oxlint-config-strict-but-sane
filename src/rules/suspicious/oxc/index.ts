import type { DummyRuleMap } from "oxlint";

export const suspiciousOxcRules: DummyRuleMap = {
  //#region 0.1.1
  "oxc/approx-constant": "error",
  "oxc/misrefactored-assign-op": "error",
  //#endregion

  //#region 0.9.2
  "oxc/no-async-endpoint-handlers": "off",
  //#endregion

  //#region 1.33.0
  "oxc/no-this-in-exported-function": "error",
  //#endregion
};
