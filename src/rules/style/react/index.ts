import type { DummyRuleMap } from "oxlint";

export const styleReactRules: DummyRuleMap = {
  //#region 0.5.0
  "react/prefer-es6-class": "error",
  //#endregion

  //#region 0.5.2
  "react/no-set-state": "off",
  //#endregion

  //#region 0.7.0
  "react/jsx-boolean-value": "error",
  "react/jsx-curly-brace-presence": ["error", "never"],
  //#endregion

  //#region 0.9.3
  "react/self-closing-comp": "error",
  //#endregion

  //#region 1.12.0
  "react/jsx-fragments": "error",
  //#endregion

  //#region 1.13.0
  "react/jsx-handler-names": "error",
  //#endregion

  //#region 1.19.0
  "react/jsx-pascal-case": "error",
  //#endregion

  //#region 1.26.0
  "react/state-in-constructor": "off",
  //#endregion

  //#region 1.33.0
  "react/jsx-props-no-spreading": "off",
  "react/no-redundant-should-component-update": "off",
  //#endregion

  //#region 1.36.0
  "react/jsx-max-depth": "off",
  //#endregion

  //#region 1.59.0
  "react/hook-use-state": "error",
  //#endregion
};
