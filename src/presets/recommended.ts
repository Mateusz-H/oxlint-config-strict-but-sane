import type { OxlintConfig } from "oxlint";
import { nurseryRules } from "./nursery.js";
import { pedanticRules } from "./pedantic.js";
import { perfRules } from "./perf.js";
import { restrictionRules } from "./restriction.js";
import { styleRules } from "./style.js";
import { suspiciousRules } from "./suspicious.js";

export const recommended: OxlintConfig = {
  categories: {
    correctness: "error",
  },
  rules: {
    ...nurseryRules,
    ...pedanticRules,
    ...perfRules,
    ...restrictionRules,
    ...styleRules,
    ...suspiciousRules,
    // correctness is enabled wholesale via `categories` above;
    // this entry only refines getter-return with an option, keeping it at "error".
    "getter-return": ["error", { allowImplicit: true }],
    // this entry only refines no-unused-expressions
    "eslint/no-unused-expressions": ["error", { allowShortCircuit: true, allowTernary: true }],
  },
};

export default recommended;
