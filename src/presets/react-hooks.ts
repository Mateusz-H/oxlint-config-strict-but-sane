import type { OxlintConfig } from "oxlint";

export const reactHooks: OxlintConfig = {
  plugins: ["react"],
  jsPlugins: [{ name: "react-hooks-js", specifier: "eslint-plugin-react-hooks" }],
  rules: {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error",

    "react-hooks-js/static-components": "error",
    "react-hooks-js/use-memo": "error",
    "react-hooks-js/void-use-memo": "error",
    "react-hooks-js/preserve-manual-memoization": "error",
    "react-hooks-js/incompatible-library": "error",
    "react-hooks-js/immutability": "error",
    "react-hooks-js/globals": "error",
    "react-hooks-js/refs": "error",
    "react-hooks-js/set-state-in-effect": "error",
    "react-hooks-js/error-boundaries": "error",
    "react-hooks-js/purity": "error",
    "react-hooks-js/set-state-in-render": "error",
    "react-hooks-js/unsupported-syntax": "error",
    "react-hooks-js/config": "error",
    "react-hooks-js/gating": "error",
  },
};
