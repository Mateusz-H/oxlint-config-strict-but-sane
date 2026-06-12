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
  },
};

export default recommended;
