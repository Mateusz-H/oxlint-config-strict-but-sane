import { mkdirSync, writeFileSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

const PLUGINS = [
  "eslint",
  "import",
  "node",
  "oxc",
  "promise",
  "react",
  "react-perf",
  "typescript",
  "unicorn",
];

const CATEGORIES = [
  "nursery",
  "pedantic",
  "perf",
  "restriction",
  "style",
  "suspicious",
];

const pascal = (s) =>
  s
    .split("-")
    .map((p) => p[0].toUpperCase() + p.slice(1))
    .join("");

const camel = (s) => {
  const p = pascal(s);
  return p[0].toLowerCase() + p.slice(1);
};

const write = (relPath, content, { overwrite = false } = {}) => {
  const abs = join(root, relPath);
  if (!overwrite && existsSync(abs)) return false;
  mkdirSync(dirname(abs), { recursive: true });
  writeFileSync(abs, content, "utf8");
  return true;
};

let created = 0;

for (const category of CATEGORIES) {
  for (const plugin of PLUGINS) {
    const name = `${camel(category)}${pascal(plugin)}Rules`;
    const content = `import type { DummyRuleMap } from "oxlint";

export const ${name}: DummyRuleMap = {};
`;
    if (write(`src/rules/${category}/${plugin}/index.ts`, content)) created++;
  }
}

for (const category of CATEGORIES) {
  const cat = camel(category);
  const imports = PLUGINS.map(
    (p) =>
      `import { ${cat}${pascal(p)}Rules } from "../rules/${category}/${p}/index.js";`,
  ).join("\n");
  const spreads = PLUGINS.map((p) => `  ...${cat}${pascal(p)}Rules,`).join("\n");
  const granular = PLUGINS.map(
    (p) => `export const ${cat}${pascal(p)}: OxlintConfig = {
  rules: ${cat}${pascal(p)}Rules,
};`,
  ).join("\n\n");
  const content = `import type { DummyRuleMap, OxlintConfig } from "oxlint";
${imports}

export const ${cat}Rules: DummyRuleMap = {
${spreads}
};

export const ${cat}: OxlintConfig = {
  rules: ${cat}Rules,
};

${granular}
`;
  if (write(`src/presets/${category}.ts`, content)) created++;
}

const lines = [];
lines.push(`export { recommended as sbsRecommended } from "./presets/recommended.js";`);
lines.push(`export { reactHooks as sbsReactHooks } from "./presets/react-hooks.js";`);
for (const category of CATEGORIES) {
  const cat = camel(category);
  lines.push(`export {`);
  lines.push(`  ${cat} as sbs${pascal(category)},`);
  lines.push(`  ${cat}Rules as sbs${pascal(category)}Rules,`);
  for (const plugin of PLUGINS) {
    lines.push(`  ${cat}${pascal(plugin)} as sbs${pascal(category)}${pascal(plugin)},`);
  }
  lines.push(`} from "./presets/${category}.js";`);
}
for (const category of CATEGORIES) {
  const cat = camel(category);
  for (const plugin of PLUGINS) {
    lines.push(
      `export { ${cat}${pascal(plugin)}Rules as sbs${pascal(category)}${pascal(plugin)}Rules } from "./rules/${category}/${plugin}/index.js";`,
    );
  }
}
lines.push(``);
write("src/index.ts", lines.join("\n"), { overwrite: true });

console.log(`Done. ${created} new file(s) created, src/index.ts regenerated.`);
