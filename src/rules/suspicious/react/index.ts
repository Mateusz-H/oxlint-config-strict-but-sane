import type { DummyRuleMap } from "oxlint";

export const suspiciousReactRules: DummyRuleMap = {
  //#region 0.0.14
  "react/jsx-no-comment-textnodes": "error",
  //#endregion

  //#region 0.0.20
  "react/react-in-jsx-scope": "off",
  //#endregion

  //#region 0.10.0
  "react/iframe-missing-sandbox": "off",
  //#endregion

  //#region 0.11.0
  "react/style-prop-object": "error",
  //#endregion

  //#region 0.13.2
  "react/jsx-no-script-url": "error",
  //#endregion

  //#region 0.15.13
  "react/no-namespace": "error",
  //#endregion

  //#region 1.66.0
  "react/no-unstable-nested-components": "error",
  //#endregion
};
