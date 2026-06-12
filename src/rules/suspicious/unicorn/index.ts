import type { DummyRuleMap } from "oxlint";

export const suspiciousUnicornRules: DummyRuleMap = {
  //#region 0.0.16
  "unicorn/prefer-add-event-listener": "error",
  //#endregion

  //#region 0.8.0
  "unicorn/consistent-function-scoping": "error",
  //#endregion

  //#region 0.15.15
  "unicorn/require-post-message-target-origin": "off",
  //#endregion

  //#region 0.16.5
  "unicorn/no-accessor-recursion": "error",
  //#endregion

  //#region 0.16.12
  "unicorn/no-instanceof-builtins": "error",
  //#endregion

  //#region 1.15.0
  "unicorn/no-array-reverse": "error",
  "unicorn/no-array-sort": "error",
  //#endregion

  //#region 1.20.0
  "unicorn/require-module-specifiers": "error",
  //#endregion
};
