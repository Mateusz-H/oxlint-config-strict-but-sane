import type { DummyRuleMap } from "oxlint";

export const perfReactRules: DummyRuleMap = {
  //#region 0.13.0
  "react/no-array-index-key": "warn",
  //#endregion

  //#region 1.48.0
  "react/jsx-no-constructed-context-values": "off",
  //#endregion

  //#region 1.66.0
  "react/no-object-type-as-default-prop": "off",
  //#endregion
};
