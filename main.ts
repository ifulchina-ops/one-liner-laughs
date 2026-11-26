// One-Liner Laughs — make.fun entry (u-coral-404-one-liner-laughs-aa872d41)
//
// Writes a single funny line (<=200 chars) to /output/entry.txt.
// Deterministic: no network, no randomness, no environment secrets.
// The judge compares entries two at a time on: real one-line joke,
// laugh-out-loud funniness, surprise twist, freshness, economy of words.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "I asked my AI assistant to write my excuses — it apologized to my boss so well I got promoted for honesty I've never had.";

// The gate requires 1-200 chars of non-whitespace UTF-8 text. Fail loudly
// instead of shipping an invalid entry.
if (JOKE.length === 0 || JOKE.length > 200 || JOKE.trim().length === 0) {
  throw new Error(`JOKE must be 1-200 chars, got ${JOKE.length}`);
}

const outDir = process.env.OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE + "\n", "utf8");

console.log(`Wrote ${JOKE.length} chars to ${join(outDir, "entry.txt")}`);
