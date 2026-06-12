import type { DummyRuleMap } from "oxlint";

export const pedanticReactRules: DummyRuleMap = {
  //#region 0.0.14
  "react/jsx-no-useless-fragment": "error",
  //#endregion

  //#region 0.0.15
  "react/no-unescaped-entities": "error",
  //#endregion

  //#region 0.2.5
  "react/jsx-no-target-blank": "error",
  //#endregion

  //#region 0.2.15
  "react/checked-requires-onchange-or-readonly": "error",
  //#endregion

  //#region 0.3.3
  "react/rules-of-hooks": "error",
  //#endregion

  //#region 1.42.0
  "react/display-name": "off",
  //#endregion
};
