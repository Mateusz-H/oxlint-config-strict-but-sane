import { defineConfig } from "oxlint";
import { sbsReactHooks, sbsRecommended } from "../../dist/index.mjs";

export default defineConfig({
  extends: [sbsRecommended, sbsReactHooks],
  plugins: ["promise", "react-perf"],
  rules: {
    "promise/avoid-new": "error",
    "react-perf/jsx-no-new-object-as-prop": "error",
  },
});
