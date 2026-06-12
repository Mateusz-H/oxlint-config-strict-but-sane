import type { DummyRuleMap } from "oxlint";

export const styleEslintRules: DummyRuleMap = {
  //#region 0.0.16
  "default-case-last": "error",
  //#endregion

  //#region 0.0.17
  "prefer-spread": "error",
  //#endregion

  //#region 0.2.14
  "guard-for-in": "error",
  "max-params": "error",
  "no-continue": "off",
  "no-template-curly-in-string": "error",
  "no-ternary": "off",
  //#endregion

  //#region 0.2.15
  "default-param-last": "error",
  "no-script-url": "error",
  //#endregion

  //#region 0.4.0
  "prefer-exponentiation-operator": "error",
  //#endregion

  //#region 0.4.4
  "sort-imports": "error",
  //#endregion

  //#region 0.5.3
  "no-multi-str": "error",
  //#endregion

  //#region 0.6.0
  "no-label-var": "error",
  //#endregion

  //#region 0.7.0
  "func-names": "error",
  "prefer-numeric-literals": "off",
  //#endregion

  //#region 0.9.2
  "no-new-func": "error",
  //#endregion

  //#region 0.9.3
  "no-magic-numbers": ["error", { ignore: [0, 1] }],
  //#endregion

  //#region 0.9.4
  "sort-keys": "off",
  //#endregion

  //#region 0.9.10
  "no-return-assign": "error",
  //#endregion

  //#region 0.11.0
  "prefer-object-has-own": "error",
  //#endregion

  //#region 0.13.2
  "no-duplicate-imports": "error",
  //#endregion

  //#region 0.14.1
  yoda: "error",
  //#endregion

  //#region 0.15.4
  "no-extra-label": "error",
  "no-labels": "error",
  "no-multi-assign": "error",
  "no-nested-ternary": "off",
  "prefer-rest-params": "error",
  "vars-on-top": "off",
  //#endregion

  //#region 0.15.5
  "new-cap": "error",
  //#endregion

  //#region 0.15.6
  "no-lone-blocks": "error",
  //#endregion

  //#region 0.15.7
  "prefer-promise-reject-errors": "error",
  //#endregion

  //#region 0.15.9
  "prefer-object-spread": "error",
  //#endregion

  //#region 0.15.11
  "func-style": ["error", "expression"],
  "init-declarations": "off",
  //#endregion

  //#region 0.15.12
  "grouped-accessor-pairs": "error",
  //#endregion

  //#region 0.15.13
  curly: ["error", "multi"],
  "operator-assignment": "off",
  //#endregion

  //#region 1.4.0
  "arrow-body-style": "error",
  "id-length": "error",
  //#endregion

  //#region 1.10.0
  "prefer-destructuring": "error",
  //#endregion

  //#region 1.12.0
  "prefer-template": "error",
  //#endregion

  //#region 1.16.0
  "no-useless-computed-key": "error",
  //#endregion

  //#region 1.33.0
  "no-implicit-coercion": "error",
  //#endregion

  //#region 1.34.0
  "capitalized-comments": "off",
  //#endregion

  //#region 1.35.0
  "max-statements": "off",
  //#endregion

  //#region 1.43.0
  "prefer-const": "error",
  //#endregion

  //#region 1.59.0
  "object-shorthand": "error",
  //#endregion

  //#region 1.62.0
  "func-name-matching": "error",
  //#endregion

  //#region 1.63.0
  "logical-assignment-operators": "off",
  //#endregion

  //#region 1.64.0
  "prefer-regex-literals": "off",
  //#endregion

  //#region 1.65.0
  "prefer-arrow-callback": "error",
  //#endregion

  //#region 1.66.0
  "id-match": "off",
  //#endregion
};
