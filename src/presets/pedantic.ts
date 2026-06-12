import type { DummyRuleMap, OxlintConfig } from "oxlint";
import { pedanticEslintRules } from "../rules/pedantic/eslint/index.js";
import { pedanticImportRules } from "../rules/pedantic/import/index.js";
import { pedanticNodeRules } from "../rules/pedantic/node/index.js";
import { pedanticOxcRules } from "../rules/pedantic/oxc/index.js";
import { pedanticPromiseRules } from "../rules/pedantic/promise/index.js";
import { pedanticReactRules } from "../rules/pedantic/react/index.js";
import { pedanticReactPerfRules } from "../rules/pedantic/react-perf/index.js";
import { pedanticTypescriptRules } from "../rules/pedantic/typescript/index.js";
import { pedanticUnicornRules } from "../rules/pedantic/unicorn/index.js";

export const pedanticRules: DummyRuleMap = {
  ...pedanticEslintRules,
  ...pedanticImportRules,
  ...pedanticNodeRules,
  ...pedanticOxcRules,
  ...pedanticPromiseRules,
  ...pedanticReactRules,
  ...pedanticReactPerfRules,
  ...pedanticTypescriptRules,
  ...pedanticUnicornRules,
};

export const pedantic: OxlintConfig = {
  rules: pedanticRules,
};

export const pedanticEslint: OxlintConfig = {
  rules: pedanticEslintRules,
};

export const pedanticImport: OxlintConfig = {
  rules: pedanticImportRules,
};

export const pedanticNode: OxlintConfig = {
  rules: pedanticNodeRules,
};

export const pedanticOxc: OxlintConfig = {
  rules: pedanticOxcRules,
};

export const pedanticPromise: OxlintConfig = {
  rules: pedanticPromiseRules,
};

export const pedanticReact: OxlintConfig = {
  rules: pedanticReactRules,
};

export const pedanticReactPerf: OxlintConfig = {
  rules: pedanticReactPerfRules,
};

export const pedanticTypescript: OxlintConfig = {
  rules: pedanticTypescriptRules,
};

export const pedanticUnicorn: OxlintConfig = {
  rules: pedanticUnicornRules,
};
