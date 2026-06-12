import type { DummyRuleMap } from "oxlint";

export const pedanticTypescriptRules: DummyRuleMap = {
  //#region 0.0.8
  "typescript/ban-ts-comment": "error",
  "typescript/strict-void-return": "error", // type-aware
  //#endregion

  //#region 0.0.14
  "typescript/ban-types": "off",
  //#endregion

  //#region 0.2.11
  "typescript/prefer-ts-expect-error": "error",
  //#endregion

  //#region 0.3.2
  "typescript/prefer-enum-initializers": "off",
  //#endregion

  //#region 0.11.1
  "typescript/no-unsafe-function-type": "error",
  //#endregion

  //#region 1.11.0
  "typescript/no-misused-promises": "error", // type-aware
  //#endregion

  //#region 1.12.0
  "typescript/no-confusing-void-expression": "error", // type-aware
  "typescript/no-mixed-enums": "off", // type-aware
  "typescript/no-unsafe-argument": "error", // type-aware
  "typescript/no-unsafe-assignment": "error", // type-aware
  "typescript/no-unsafe-call": "error", // type-aware
  "typescript/no-unsafe-member-access": "error", // type-aware
  "typescript/no-unsafe-return": "error", // type-aware
  "typescript/only-throw-error": "error", // type-aware
  "typescript/prefer-promise-reject-errors": "error", // type-aware
  "typescript/related-getter-setter-pairs": "error", // type-aware
  "typescript/require-await": "error", // type-aware
  "typescript/restrict-plus-operands": "error", // type-aware
  "typescript/return-await": "off", // type-aware
  "typescript/switch-exhaustiveness-check": "error", // type-aware
  //#endregion

  //#region 1.25.0
  "typescript/strict-boolean-expressions": [
    "error",
    {
      allowString: true,
      allowNumber: false,
      allowNullableObject: false,
      allowNullableBoolean: true,
      allowNullableString: false,
      allowNullableNumber: false,
      allowNullableEnum: false,
      allowAny: false,
    },
  ], // type-aware
  //#endregion

  //#region 1.26.0
  "typescript/no-deprecated": "warn", // type-aware
  //#endregion

  //#region 1.29.0
  "typescript/prefer-includes": "error", // type-aware
  //#endregion

  //#region 1.33.0
  "typescript/prefer-nullish-coalescing": "error", // type-aware
  //#endregion

  //#region 1.49.0
  "typescript/prefer-readonly-parameter-types": "off", // type-aware
  //#endregion
};
