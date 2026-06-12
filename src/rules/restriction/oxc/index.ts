import type { DummyRuleMap } from "oxlint";

export const restrictionOxcRules: DummyRuleMap = {
  //#region 0.0.3
  "oxc/bad-bitwise-operator": "error",
  //#endregion

  //#region 0.3.0
  "oxc/no-barrel-file": "error",
  //#endregion

  //#region 0.4.2
  "oxc/no-async-await": "off",
  "oxc/no-const-enum": "error",
  "oxc/no-rest-spread-properties": "off",
  //#endregion

  //#region 0.5.0
  "oxc/no-optional-chaining": "off",
  //#endregion
};
