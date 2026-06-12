import type { DummyRuleMap } from "oxlint";

export const styleImportRules: DummyRuleMap = {
  //#region 0.2.11
  "import/no-duplicates": "error",
  //#endregion

  //#region 0.11.1
  "import/first": "error",
  //#endregion

  //#region 0.12.0
  "import/no-namespace": "error",
  //#endregion

  //#region 0.15.3
  "import/no-named-default": "error",
  //#endregion

  //#region 0.15.13
  "import/no-mutable-exports": "error",
  //#endregion

  //#region 0.15.14
  "import/exports-last": "off",
  "import/no-anonymous-default-export": "error",
  //#endregion

  //#region 0.16.6
  "import/group-exports": "off",
  //#endregion

  //#region 0.16.11
  "import/consistent-type-specifier-style": "error",
  //#endregion

  //#region 1.4.0
  "import/prefer-default-export": "off",
  //#endregion

  //#region 1.19.0
  "import/no-named-export": "off",
  //#endregion

  //#region 1.43.0
  "import/no-nodejs-modules": "off",
  //#endregion

  //#region 1.66.0
  "import/newline-after-import": "error",
  //#endregion
};
