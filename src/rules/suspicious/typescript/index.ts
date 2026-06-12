import type { DummyRuleMap } from "oxlint";

export const suspiciousTypescriptRules: DummyRuleMap = {
  //#region 0.0.6
  "typescript/no-unnecessary-type-constraint": "error",
  //#endregion

  //#region 0.0.8
  "typescript/consistent-return": "off", // type-aware
  //#endregion

  //#region 0.6.1
  "typescript/no-confusing-non-null-assertion": "error",
  //#endregion

  //#region 0.7.0
  "typescript/no-extraneous-class": "error",
  //#endregion

  //#region 1.12.0
  "typescript/no-unnecessary-boolean-literal-compare": "error", // type-aware
  "typescript/no-unnecessary-template-expression": "error", // type-aware
  "typescript/no-unnecessary-type-arguments": "error", // type-aware
  "typescript/no-unnecessary-type-assertion": "error", // type-aware
  "typescript/no-unsafe-enum-comparison": "error", // type-aware
  "typescript/no-unsafe-type-assertion": "error", // type-aware
  //#endregion

  //#region 1.49.0
  "typescript/no-unnecessary-type-conversion": "error", // type-aware
  "typescript/no-unnecessary-type-parameters": "error", // type-aware
  //#endregion
};
