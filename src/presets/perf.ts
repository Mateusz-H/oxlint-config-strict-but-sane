import type { DummyRuleMap, OxlintConfig } from "oxlint";
import { perfEslintRules } from "../rules/perf/eslint/index.js";
import { perfImportRules } from "../rules/perf/import/index.js";
import { perfNodeRules } from "../rules/perf/node/index.js";
import { perfOxcRules } from "../rules/perf/oxc/index.js";
import { perfPromiseRules } from "../rules/perf/promise/index.js";
import { perfReactRules } from "../rules/perf/react/index.js";
import { perfReactPerfRules } from "../rules/perf/react-perf/index.js";
import { perfTypescriptRules } from "../rules/perf/typescript/index.js";
import { perfUnicornRules } from "../rules/perf/unicorn/index.js";

export const perfRules: DummyRuleMap = {
  ...perfEslintRules,
  ...perfImportRules,
  ...perfNodeRules,
  ...perfOxcRules,
  ...perfPromiseRules,
  ...perfReactRules,
  ...perfReactPerfRules,
  ...perfTypescriptRules,
  ...perfUnicornRules,
};

export const perf: OxlintConfig = {
  rules: perfRules,
};

export const perfEslint: OxlintConfig = {
  rules: perfEslintRules,
};

export const perfImport: OxlintConfig = {
  rules: perfImportRules,
};

export const perfNode: OxlintConfig = {
  rules: perfNodeRules,
};

export const perfOxc: OxlintConfig = {
  rules: perfOxcRules,
};

export const perfPromise: OxlintConfig = {
  rules: perfPromiseRules,
};

export const perfReact: OxlintConfig = {
  rules: perfReactRules,
};

export const perfReactPerf: OxlintConfig = {
  rules: perfReactPerfRules,
};

export const perfTypescript: OxlintConfig = {
  rules: perfTypescriptRules,
};

export const perfUnicorn: OxlintConfig = {
  rules: perfUnicornRules,
};
