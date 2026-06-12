import type { DummyRuleMap } from "oxlint";

export const restrictionImportRules: DummyRuleMap = {
  //#region 0.0.13
  "import/no-cycle": "error",
  //#endregion

  //#region 0.0.16
  "import/no-amd": "error",
  //#endregion

  //#region 0.2.14
  "import/no-default-export": "error",
  //#endregion

  //#region 0.7.0
  "import/no-webpack-loader-syntax": "error",
  //#endregion

  //#region 0.9.3
  "import/no-dynamic-require": "error",
  //#endregion

  //#region 0.11.0
  "import/no-commonjs": "error",
  //#endregion

  //#region 0.11.1
  "import/unambiguous": "error",
  //#endregion

  //#region 1.2.0
  "import/extensions": "off",
  //#endregion

  //#region 1.43.0
  "import/no-relative-parent-imports": "off",
  //#endregion
};
