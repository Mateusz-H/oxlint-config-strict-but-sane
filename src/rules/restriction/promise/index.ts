import type { DummyRuleMap } from "oxlint";

export const restrictionPromiseRules: DummyRuleMap = {
  //#region 0.9.2
  "promise/catch-or-return": "off",
  "promise/spec-only": "error",
  //#endregion
};
