import type { DummyRuleMap } from "oxlint";

export const restrictionUnicornRules: DummyRuleMap = {
  //#region 0.0.18
  "unicorn/no-abusive-eslint-disable": "error",
  "unicorn/no-document-cookie": "error",
  //#endregion

  //#region 0.0.19
  "unicorn/no-array-for-each": "off",
  "unicorn/no-array-reduce": "off",
  "unicorn/prefer-node-protocol": "error",
  "unicorn/prefer-number-properties": "error",
  //#endregion

  //#region 0.1.1
  "unicorn/prefer-modern-math-apis": "error",
  //#endregion

  //#region 0.2.9
  "unicorn/no-process-exit": "error",
  //#endregion

  //#region 0.3.3
  "unicorn/no-anonymous-default-export": "error",
  //#endregion

  //#region 0.4.2
  "unicorn/no-magic-array-flat-depth": "error",
  //#endregion

  //#region 0.7.0
  "unicorn/no-length-as-slice-end": "error",
  //#endregion

  //#region 1.20.0
  "unicorn/no-useless-error-capture-stack-trace": "error",
  //#endregion

  //#region 1.50.0
  "unicorn/prefer-module": "error",
  //#endregion

  //#region next
  "unicorn/import-style": "off",
  //#endregion
};
