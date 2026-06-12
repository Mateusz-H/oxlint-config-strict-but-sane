import type { DummyRuleMap } from "oxlint";

export const styleNodeRules: DummyRuleMap = {
  //#region 0.9.3
  "node/no-exports-assign": "error",
  //#endregion

  //#region 1.36.0
  "node/global-require": "off",
  //#endregion

  //#region next
  "node/callback-return": "off",
  //#endregion
};
