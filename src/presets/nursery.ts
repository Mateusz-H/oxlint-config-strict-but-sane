import type { DummyRuleMap, OxlintConfig } from "oxlint";
import { nurseryEslintRules } from "../rules/nursery/eslint/index.js";
import { nurseryImportRules } from "../rules/nursery/import/index.js";
import { nurseryNodeRules } from "../rules/nursery/node/index.js";
import { nurseryOxcRules } from "../rules/nursery/oxc/index.js";
import { nurseryPromiseRules } from "../rules/nursery/promise/index.js";
import { nurseryReactRules } from "../rules/nursery/react/index.js";
import { nurseryReactPerfRules } from "../rules/nursery/react-perf/index.js";
import { nurseryTypescriptRules } from "../rules/nursery/typescript/index.js";
import { nurseryUnicornRules } from "../rules/nursery/unicorn/index.js";

export const nurseryRules: DummyRuleMap = {
  ...nurseryEslintRules,
  ...nurseryImportRules,
  ...nurseryNodeRules,
  ...nurseryOxcRules,
  ...nurseryPromiseRules,
  ...nurseryReactRules,
  ...nurseryReactPerfRules,
  ...nurseryTypescriptRules,
  ...nurseryUnicornRules,
};

export const nursery: OxlintConfig = {
  rules: nurseryRules,
};

export const nurseryEslint: OxlintConfig = {
  rules: nurseryEslintRules,
};

export const nurseryImport: OxlintConfig = {
  rules: nurseryImportRules,
};

export const nurseryNode: OxlintConfig = {
  rules: nurseryNodeRules,
};

export const nurseryOxc: OxlintConfig = {
  rules: nurseryOxcRules,
};

export const nurseryPromise: OxlintConfig = {
  rules: nurseryPromiseRules,
};

export const nurseryReact: OxlintConfig = {
  rules: nurseryReactRules,
};

export const nurseryReactPerf: OxlintConfig = {
  rules: nurseryReactPerfRules,
};

export const nurseryTypescript: OxlintConfig = {
  rules: nurseryTypescriptRules,
};

export const nurseryUnicorn: OxlintConfig = {
  rules: nurseryUnicornRules,
};
