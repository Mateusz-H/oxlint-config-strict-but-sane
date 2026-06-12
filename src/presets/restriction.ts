import type { DummyRuleMap, OxlintConfig } from "oxlint";
import { restrictionEslintRules } from "../rules/restriction/eslint/index.js";
import { restrictionImportRules } from "../rules/restriction/import/index.js";
import { restrictionNodeRules } from "../rules/restriction/node/index.js";
import { restrictionOxcRules } from "../rules/restriction/oxc/index.js";
import { restrictionPromiseRules } from "../rules/restriction/promise/index.js";
import { restrictionReactRules } from "../rules/restriction/react/index.js";
import { restrictionReactPerfRules } from "../rules/restriction/react-perf/index.js";
import { restrictionTypescriptRules } from "../rules/restriction/typescript/index.js";
import { restrictionUnicornRules } from "../rules/restriction/unicorn/index.js";

export const restrictionRules: DummyRuleMap = {
  ...restrictionEslintRules,
  ...restrictionImportRules,
  ...restrictionNodeRules,
  ...restrictionOxcRules,
  ...restrictionPromiseRules,
  ...restrictionReactRules,
  ...restrictionReactPerfRules,
  ...restrictionTypescriptRules,
  ...restrictionUnicornRules,
};

export const restriction: OxlintConfig = {
  rules: restrictionRules,
};

export const restrictionEslint: OxlintConfig = {
  rules: restrictionEslintRules,
};

export const restrictionImport: OxlintConfig = {
  rules: restrictionImportRules,
};

export const restrictionNode: OxlintConfig = {
  rules: restrictionNodeRules,
};

export const restrictionOxc: OxlintConfig = {
  rules: restrictionOxcRules,
};

export const restrictionPromise: OxlintConfig = {
  rules: restrictionPromiseRules,
};

export const restrictionReact: OxlintConfig = {
  rules: restrictionReactRules,
};

export const restrictionReactPerf: OxlintConfig = {
  rules: restrictionReactPerfRules,
};

export const restrictionTypescript: OxlintConfig = {
  rules: restrictionTypescriptRules,
};

export const restrictionUnicorn: OxlintConfig = {
  rules: restrictionUnicornRules,
};
