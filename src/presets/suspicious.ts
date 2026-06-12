import type { DummyRuleMap, OxlintConfig } from "oxlint";
import { suspiciousEslintRules } from "../rules/suspicious/eslint/index.js";
import { suspiciousImportRules } from "../rules/suspicious/import/index.js";
import { suspiciousNodeRules } from "../rules/suspicious/node/index.js";
import { suspiciousOxcRules } from "../rules/suspicious/oxc/index.js";
import { suspiciousPromiseRules } from "../rules/suspicious/promise/index.js";
import { suspiciousReactRules } from "../rules/suspicious/react/index.js";
import { suspiciousReactPerfRules } from "../rules/suspicious/react-perf/index.js";
import { suspiciousTypescriptRules } from "../rules/suspicious/typescript/index.js";
import { suspiciousUnicornRules } from "../rules/suspicious/unicorn/index.js";

export const suspiciousRules: DummyRuleMap = {
  ...suspiciousEslintRules,
  ...suspiciousImportRules,
  ...suspiciousNodeRules,
  ...suspiciousOxcRules,
  ...suspiciousPromiseRules,
  ...suspiciousReactRules,
  ...suspiciousReactPerfRules,
  ...suspiciousTypescriptRules,
  ...suspiciousUnicornRules,
};

export const suspicious: OxlintConfig = {
  rules: suspiciousRules,
};

export const suspiciousEslint: OxlintConfig = {
  rules: suspiciousEslintRules,
};

export const suspiciousImport: OxlintConfig = {
  rules: suspiciousImportRules,
};

export const suspiciousNode: OxlintConfig = {
  rules: suspiciousNodeRules,
};

export const suspiciousOxc: OxlintConfig = {
  rules: suspiciousOxcRules,
};

export const suspiciousPromise: OxlintConfig = {
  rules: suspiciousPromiseRules,
};

export const suspiciousReact: OxlintConfig = {
  rules: suspiciousReactRules,
};

export const suspiciousReactPerf: OxlintConfig = {
  rules: suspiciousReactPerfRules,
};

export const suspiciousTypescript: OxlintConfig = {
  rules: suspiciousTypescriptRules,
};

export const suspiciousUnicorn: OxlintConfig = {
  rules: suspiciousUnicornRules,
};
