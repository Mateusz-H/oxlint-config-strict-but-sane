import { execFileSync } from "node:child_process";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import process from "node:process";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

const EXPECTED = [
  "eslint(no-const-assign)",
  "promise(avoid-new)",
  "react-perf(jsx-no-new-object-as-prop)",
  "react-hooks(rules-of-hooks)",
  "react-hooks-js(static-components)",
];

let output;
try {
  output = execFileSync(
    process.execPath,
    [
      join(root, "node_modules", "oxlint", "bin", "oxlint"),
      "-c",
      join(root, "test", "fixture", "oxlint.config.ts"),
      join(root, "test", "fixture", "code.tsx"),
    ],
    { encoding: "utf8" },
  );
} catch (err) {
  output = `${err.stdout ?? ""}${err.stderr ?? ""}`;
}

const missing = EXPECTED.filter((rule) => !output.includes(rule));
if (missing.length > 0) {
  console.error("Smoke test FAILED. Missing expected diagnostics:");
  for (const rule of missing) console.error(`  - ${rule}`);
  console.error("\nFull oxlint output:\n" + output);
  process.exit(1);
}

console.log(`Smoke test passed — all ${EXPECTED.length} expected diagnostics fired.`);
