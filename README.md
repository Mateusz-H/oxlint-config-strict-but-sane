# oxlint-config-strict-but-sane

Config presets for [oxlint](https://oxc.rs/docs/guide/usage/linter), designed to balance code correctness with a good developer experience.

## Install

```sh
npm i -D oxlint oxlint-config-strict-but-sane
```

If you want the `sbsReactHooks` preset (runs `eslint-plugin-react-hooks` through oxlint's JS-plugin support), also install the optional peer dependency:

```sh
npm i -D eslint-plugin-react-hooks
```

## Usage

Use an `oxlint.config.ts` file (requires Node 22.18+ / 24+). Every export of this package is a **single oxlint config object** — drop the ones you want into `extends`:

```ts
// oxlint.config.ts
import { defineConfig } from "oxlint";
import {
  sbsRecommended,
  sbsReactHooks,
  sbsRestrictionTypescript,
} from "oxlint-config-strict-but-sane";

export default defineConfig({
  extends: [sbsRecommended, sbsReactHooks, sbsRestrictionTypescript],
  plugins: ["typescript", "react", "promise", "unicorn", "oxc"],
});
```

### You activate plugins yourself

The presets ship rules, but they do **not** enable any plugins (the one exception is `sbsReactHooks` — see below). Declare the `plugins` you want in your own config; rules for plugins you leave out are simply inert.

This is what makes the presets non-invasive: you can extend `sbsRecommended` and opt out of e.g. `react-perf` entirely just by not listing it — no rule-by-rule disabling needed.

Available plugins covered by the rule sets: `import`, `node`, `oxc`, `promise`, `react`, `react-perf`, `typescript`, `unicorn` (plus the always-on `eslint` core rules).

### The `sbsReactHooks` trade-off

`sbsReactHooks` is the one preset that enables plugins for you, and there's a deliberate trade-off in how it does it. The two stable hooks rules (`react-hooks/rules-of-hooks`, `react-hooks/exhaustive-deps`) run on oxlint's fast **native** implementation — but natively they belong to the `react` plugin, so the preset sets `plugins: ["react"]`. The React Compiler rules run through `eslint-plugin-react-hooks` as a JS plugin (aliased `react-hooks-js`).

The consequence: extending `sbsReactHooks` activates the **whole native `react` plugin**, not just the hooks rules. If you also extend a preset containing `react/*` rules, those become active even if you didn't list `react` in your own `plugins`. We chose this because the native rules are dramatically faster than their JS counterparts; if you need surgical scoping instead, skip `sbsReactHooks` and configure `eslint-plugin-react-hooks` via `jsPlugins` yourself — slower, but it activates nothing else.

### Type-aware linting is opt-in too

`sbsRecommended` does not turn on type-aware linting. If you want the type-aware rules to take effect, enable it yourself and install [`oxlint-tsgolint`](https://www.npmjs.com/package/oxlint-tsgolint):

```ts
export default defineConfig({
  extends: [sbsRecommended],
  plugins: ["typescript"],
  options: {
    typeAware: true,
    typeCheck: true,
  },
});
```

## Exports

### Main presets

| Export | What it does |
| --- | --- |
| `sbsRecommended` | Sets oxlint's `correctness` category to `"error"` (the category curated by the oxlint team to be free of false positives) and bundles the rules of every category preset (`sbsNursery` … `sbsSuspicious`). Enables no plugins and no type-aware options — those are yours to switch on. |
| `sbsReactHooks` | Enforces all public hooks rules as errors: the two stable ones natively (via the `react` plugin), the React Compiler ones through `eslint-plugin-react-hooks` as a JS plugin (aliased `react-hooks-js`). This preset *does* register its plugins for you — see [the trade-off](#the-sbsreacthooks-trade-off) above. |

### Category presets

One per oxlint category, each bundling that category's curated rules across **all** plugins:

`sbsNursery`, `sbsPedantic`, `sbsPerf`, `sbsRestriction`, `sbsStyle`, `sbsSuspicious`

(There is no `sbsCorrectness` — the `correctness` category is curated by the oxlint team and is enabled wholesale by `sbsRecommended` via `categories: { correctness: "error" }`.)

### Granular presets

One per `category × plugin` combination, named `sbs{Category}{Plugin}` — e.g. `sbsRestrictionTypescript`, `sbsPerfReactPerf`, `sbsStyleUnicorn`. Like the category presets, they only carry rules — remember to activate the matching plugin in your config.

### Raw rule maps

Every preset is a flat config built by object-spreading plain rule maps — there are no nested `extends` chains to resolve at lint time. The rule maps themselves are exported too, so you can compose your own config:

- `sbs{Category}Rules` — all rules of a category across every plugin (e.g. `sbsNurseryRules`)
- `sbs{Category}{Plugin}Rules` — a single category × plugin rule map (e.g. `sbsRestrictionTypescriptRules`)

```ts
import { defineConfig } from "oxlint";
import { sbsPerfRules, sbsRestrictionTypescriptRules } from "oxlint-config-strict-but-sane";

export default defineConfig({
  plugins: ["typescript", "react-perf"],
  rules: {
    ...sbsPerfRules,
    ...sbsRestrictionTypescriptRules,
    "typescript/no-explicit-any": "off",
  },
});
```

Everything is typed with oxlint's own `OxlintConfig` and `DummyRuleMap` types.

## Repository layout

- `src/rules/<category>/<plugin>/index.ts` — the curated rule maps (one `DummyRuleMap` object per category × plugin)
- `src/presets/` — the aggregate configs (`recommended`, `react-hooks`, and one per category), each a single flat config that spreads the rule maps
- `scripts/generate-rule-stubs.mjs` — scaffolds missing rule files and regenerates `src/index.ts`; never overwrites existing rule files, so it is safe to re-run after adding a new plugin or category

## Development

```sh
npm run build   # bundle to dist/ with tsdown
npm test        # smoke test: lints test/fixture with the built package
```
