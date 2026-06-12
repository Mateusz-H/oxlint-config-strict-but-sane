import type { DummyRuleMap } from "oxlint";

export const restrictionEslintRules: DummyRuleMap = {
  //#region 0.0.3
  "no-bitwise": "off",
  "no-empty": "error",
  //#endregion

  //#region 0.0.13
  "no-console": [
    "warn",
    {
      allow: [
        "assert",
        "clear",
        "count",
        "countReset",
        "debug",
        "dir",
        "dirxml",
        "error",
        "group",
        "groupCollapsed",
        "groupEnd",
        "info",
        "table",
        "time",
        "timeEnd",
        "timeLog",
        "trace",
        "warn",
      ],
    },
  ],
  //#endregion

  //#region 0.0.18
  "no-regex-spaces": "error",
  //#endregion

  //#region 0.1.1
  "no-var": "error",
  //#endregion

  //#region 0.2.5
  "no-void": "error",
  //#endregion

  //#region 0.2.14
  "no-eq-null": "error",
  "no-proto": "error",
  //#endregion

  //#region 0.3.3
  "no-empty-function": "error",
  "unicode-bom": "error",
  //#endregion

  //#region 0.4.0
  "default-case": "error",
  "no-restricted-globals": "off",
  //#endregion

  //#region 0.4.2
  "no-div-regex": "error",
  //#endregion

  //#region 0.5.3
  "no-undefined": "off",
  //#endregion

  //#region 0.9.3
  "no-alert": "error",
  //#endregion

  //#region 0.9.5
  "no-plusplus": "error",
  //#endregion

  //#region 0.15.0
  "no-restricted-imports": "off",
  //#endregion

  //#region 1.16.0
  "class-methods-use-this": "off",
  //#endregion

  //#region 1.20.0
  "no-param-reassign": "error",
  //#endregion

  //#region 1.33.0
  "no-sequences": "error",
  //#endregion

  //#region 1.37.0
  complexity: "off",
  //#endregion

  //#region 1.49.0
  "no-use-before-define": "off",
  //#endregion

  //#region 1.63.0
  "no-restricted-properties": "off",
  //#endregion

  //#region 1.65.0
  "no-implicit-globals": "error",
  //#endregion
};
