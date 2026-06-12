import type { DummyRuleMap } from "oxlint";

export const suspiciousImportRules: DummyRuleMap = {
  //#region 0.0.13
  "import/no-self-import": "error",
  //#endregion

  //#region 0.2.1
  "import/no-named-as-default-member": "error",
  //#endregion

  //#region 0.2.3
  "import/no-named-as-default": "error",
  //#endregion

  //#region 0.15.13
  "import/no-absolute-path": "error",
  //#endregion

  //#region 0.16.1
  "import/no-empty-named-blocks": "error",
  //#endregion

  //#region 0.16.11
  "import/no-unassigned-import": "off",
  //#endregion
};
