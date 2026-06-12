import type { DummyRuleMap } from "oxlint";

export const restrictionReactRules: DummyRuleMap = {
  //#region 0.0.14
  "react/no-danger": "error",
  //#endregion

  //#region 0.1.1
  "react/button-has-type": "error",
  //#endregion

  //#region 0.2.0
  "react/no-unknown-property": "off",
  //#endregion

  //#region 0.15.14
  "react/jsx-filename-extension": ["error", { extensions: ["tsx", ".tsx"] }],
  //#endregion

  //#region 0.16.11
  "react/forbid-elements": "off",
  //#endregion

  //#region 1.23.0
  "react/only-export-components": "error",
  //#endregion

  //#region 1.24.0
  "react/forbid-dom-props": "off",
  //#endregion

  //#region 1.43.0
  "react/no-multi-comp": "off",
  //#endregion

  //#region 1.53.0
  "react/no-clone-element": "error",
  "react/no-react-children": "error",
  //#endregion

  //#region 1.59.0
  "react/prefer-function-component": "off",
  //#endregion

  //#region 1.62.0
  "react/forbid-component-props": "off",
  //#endregion
};
