import type { DummyRuleMap } from "oxlint";

export const restrictionNodeRules: DummyRuleMap = {
  //#region 0.10.0
  "node/no-new-require": "error",
  //#endregion

  //#region 1.23.0
  "node/no-process-env": "error",
  //#endregion

  //#region 1.49.0
  "node/no-path-concat": "error",
  //#endregion

  //#region 1.56.0
  "node/handle-callback-err": "off",
  //#endregion
};
