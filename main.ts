// Make the AI Judge Laugh: Office Jokes
// Writes exactly one one-line office joke to /output/entry.txt.
// Deterministic: no randomness, no time, no network, no input.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "I told my boss I work best under pressure, so he stacked every deadline on Friday. I still work best under pressure — I just never said whose.";

// The gate requires 1–199 UTF-8 characters, not only whitespace, one line.
if (JOKE.length < 1 || JOKE.length > 199 || JOKE.trim().length === 0 || JOKE.includes("\n")) {
  throw new Error(`entry must be a single line of 1-199 characters, got ${JOKE.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
