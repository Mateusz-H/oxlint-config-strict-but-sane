import type { DummyRuleMap } from "oxlint";

export const styleTypescriptRules: DummyRuleMap = {
  //#region 0.0.6
  "typescript/no-empty-interface": "error",
  //#endregion

  //#region 0.0.7
  "typescript/adjacent-overload-signatures": "error",
  //#endregion

  //#region 0.0.8
  "typescript/consistent-type-exports": "error", // type-aware
  "typescript/prefer-readonly": "error", // type-aware
  "typescript/prefer-string-starts-ends-with": "error", // type-aware
  //#endregion

  //#region 0.2.8
  "typescript/array-type": "error",
  //#endregion

  //#region 0.2.9
  "typescript/ban-tslint-comment": "error",
  //#endregion

  //#region 0.2.11
  "typescript/prefer-function-type": "error",
  //#endregion

  //#region 0.2.16
  "typescript/prefer-for-of": "error",
  //#endregion

  //#region 0.2.17
  "typescript/consistent-type-definitions": "off",
  //#endregion

  //#region 0.4.2
  "typescript/consistent-indexed-object-style": "inne",
  //#endregion

  //#region 0.5.2
  "typescript/consistent-type-imports": "error",
  //#endregion

  //#region 0.14.0
  "typescript/consistent-generic-constructors": "off",
  "typescript/no-inferrable-types": "error",
  //#endregion

  //#region 1.12.0
  "typescript/prefer-reduce-type-parameter": "error", // type-aware
  "typescript/prefer-return-this-type": "error", // type-aware
  //#endregion

  //#region 1.44.0
  "typescript/consistent-type-assertions": "error",
  //#endregion

  //#region 1.47.0
  "typescript/class-literal-property-style": "error",
  //#endregion

  //#region 1.48.0
  "typescript/parameter-properties": "error",
  "typescript/unified-signatures": "error",
  //#endregion

  //#region 1.49.0
  "typescript/dot-notation": "error", // type-aware
  "typescript/no-unnecessary-qualifier": "error", // type-aware
  "typescript/prefer-find": "error", // type-aware
  "typescript/prefer-regexp-exec": "error", // type-aware
  //#endregion
};
