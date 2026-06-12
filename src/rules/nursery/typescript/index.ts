import type { DummyRuleMap } from "oxlint";

export const nurseryTypescriptRules: DummyRuleMap = {
  //#region 1.39.0
  "typescript/prefer-optional-chain": "warn", // type-aware
  //#endregion

  //#region 1.48.0
  "typescript/no-unnecessary-condition": "error", // type-aware
  //#endregion
};
