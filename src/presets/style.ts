import type { DummyRuleMap, OxlintConfig } from "oxlint";
import { styleEslintRules } from "../rules/style/eslint/index.js";
import { styleImportRules } from "../rules/style/import/index.js";
import { styleNodeRules } from "../rules/style/node/index.js";
import { styleOxcRules } from "../rules/style/oxc/index.js";
import { stylePromiseRules } from "../rules/style/promise/index.js";
import { styleReactRules } from "../rules/style/react/index.js";
import { styleReactPerfRules } from "../rules/style/react-perf/index.js";
import { styleTypescriptRules } from "../rules/style/typescript/index.js";
import { styleUnicornRules } from "../rules/style/unicorn/index.js";

export const styleRules: DummyRuleMap = {
  ...styleEslintRules,
  ...styleImportRules,
  ...styleNodeRules,
  ...styleOxcRules,
  ...stylePromiseRules,
  ...styleReactRules,
  ...styleReactPerfRules,
  ...styleTypescriptRules,
  ...styleUnicornRules,
};

export const style: OxlintConfig = {
  rules: styleRules,
};

export const styleEslint: OxlintConfig = {
  rules: styleEslintRules,
};

export const styleImport: OxlintConfig = {
  rules: styleImportRules,
};

export const styleNode: OxlintConfig = {
  rules: styleNodeRules,
};

export const styleOxc: OxlintConfig = {
  rules: styleOxcRules,
};

export const stylePromise: OxlintConfig = {
  rules: stylePromiseRules,
};

export const styleReact: OxlintConfig = {
  rules: styleReactRules,
};

export const styleReactPerf: OxlintConfig = {
  rules: styleReactPerfRules,
};

export const styleTypescript: OxlintConfig = {
  rules: styleTypescriptRules,
};

export const styleUnicorn: OxlintConfig = {
  rules: styleUnicornRules,
};
