import type { DummyRuleMap } from "oxlint";

export const restrictionTypescriptRules: DummyRuleMap = {
  //#region 0.0.7
  "typescript/no-var-requires": "off",
  //#endregion

  //#region 0.0.8
  "typescript/no-namespace": "error",
  //#endregion

  //#region 0.0.13
  "typescript/no-explicit-any": "error",
  //#endregion

  //#region 0.3.2
  "typescript/prefer-literal-enum-member": "error",
  //#endregion

  //#region 0.4.4
  "typescript/explicit-function-return-type": "off",
  //#endregion

  //#region 0.5.0
  "typescript/no-import-type-side-effects": "error",
  "typescript/no-non-null-asserted-nullish-coalescing": "error",
  "typescript/no-non-null-assertion": "off",
  //#endregion

  //#region 0.5.2
  "typescript/no-dynamic-delete": "error",
  //#endregion

  //#region 0.12.0
  "typescript/no-empty-object-type": "off",
  //#endregion

  //#region 0.13.0
  "typescript/no-require-imports": "error",
  //#endregion

  //#region 1.9.0
  "typescript/explicit-module-boundary-types": "off",
  //#endregion

  //#region 1.12.0
  "typescript/non-nullable-type-assertion-style": "error", // type-aware
  "typescript/promise-function-async": "error", // type-aware
  "typescript/use-unknown-in-catch-callback-variable": "error", // type-aware
  //#endregion

  //#region 1.31.0
  "typescript/no-restricted-types": "off",
  //#endregion

  //#region 1.47.0
  "typescript/no-invalid-void-type": "error",
  //#endregion

  //#region 1.61.0
  "typescript/explicit-member-accessibility": "error",
  //#endregion
};
